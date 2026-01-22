import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { Home } from "@/app/pages/Home";
import { OpticalPage } from "@/app/pages/OpticalPage";
import { SunPage } from "@/app/pages/SunPage";
import { LimitedPage } from "@/app/pages/LimitedPage";
import "@/styles/fonts.css";

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-[#2d3436] bg-white selection:bg-[#c9a959] selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/optical" element={<OpticalPage />} />
            <Route path="/sun" element={<SunPage />} />
            <Route path="/limited" element={<LimitedPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
