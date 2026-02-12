import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations";

const LangContext = createContext();
const STORAGE_KEY = "tta-lang";

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem(STORAGE_KEY) || "ru");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const t = (path) => {
    const keys = path.split(".");
    let val = translations[lang];
    for (const k of keys) val = val?.[k];
    return val ?? path;
  };

  const toggleLang = () => setLang((l) => (l === "ru" ? "en" : "ru"));

  return (
    <LangContext.Provider value={{ lang, setLang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
