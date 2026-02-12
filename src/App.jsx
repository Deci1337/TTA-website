import { CosmicBackground } from "./components/CosmicBackground";
import { LangSwitcher } from "./components/LangSwitcher";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Screenshots } from "./sections/Screenshots";
import { Advantages } from "./sections/Advantages";
import { Prospects } from "./sections/Prospects";
import { Download } from "./sections/Download";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen text-foreground selection:bg-purple-500/30">
      <LangSwitcher />
      <CosmicBackground />
      
      <div className="relative">
        <Hero />
        <Features />
        <Advantages />
        <Prospects />
        <Screenshots />
        <Download />
        <Footer />
      </div>
    </div>
  );
}

export default App;
