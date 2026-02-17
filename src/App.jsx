import { Suspense, lazy } from "react";
import "./App.css";
import Loader from "./components/Loader";

// Lazy imports
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./sections/Home"));
const About = lazy(() => import("./sections/About"));
const Services = lazy(() => import("./sections/Services"));
const Gallery = lazy(() => import("./sections/Gallery"));
const Packages = lazy(() => import("./sections/Packages"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const FloatingChat = lazy(() => import("./components/FloatingChat"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Home />
      <About />
      <Services />
      <Gallery />
      <Packages />
      <Contact />
      <Footer />
      <FloatingChat />
    </Suspense>
  );
}

export default App;