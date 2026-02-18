import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [showShadow, setShowShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeHeight =
        document.getElementById("home")?.offsetHeight || 300;

      setShowShadow(window.scrollY > homeHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 py-2 flex items-center justify-between transition-all duration-300
        ${showShadow ? "shadow-lg bg-primary" : "bg-transparent"}`}
      >
        {/* Logo */}
        <img src="/images/logoImg.png" alt="logo" className="w-44" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xl font-medium text-white font-poppins">
          <a href="#home" className="hover:text-accent transition">Home</a>
          <a href="#about" className="hover:text-accent transition">About</a>
          <a href="#services" className="hover:text-accent transition">Services</a>
          <a href="#gallery" className="hover:text-accent transition">Gallery</a>
          <a href="#packages" className="hover:text-accent transition">Packages</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white z-50"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </header>

      {/* MOBILE MENU (GLASS) */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen z-40
          flex items-center justify-center
          transition-all duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Glass Background */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`
            relative bg-white/20 backdrop-blur-2xl
            border border-white/20
            rounded-2xl px-20 py-10
            flex flex-col gap-6
            text-white text-xl text-center font-poppins
            transition-all duration-300
            ${menuOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-6"}
          `}
        >
          <a onClick={() => setMenuOpen(false)} href="#home" className="hover:text-accent">Home</a>
          <a onClick={() => setMenuOpen(false)} href="#about" className="hover:text-accent">About</a>
          <a onClick={() => setMenuOpen(false)} href="#services" className="hover:text-accent">Services</a>
          <a onClick={() => setMenuOpen(false)} href="#gallery" className="hover:text-accent">Gallery</a>
          <a onClick={() => setMenuOpen(false)} href="#packages" className="hover:text-accent">Packages</a>
          <a onClick={() => setMenuOpen(false)} href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;
