import { useEffect, useState } from "react";

const images = [
  "/sreephotography/images/20.jpg.jpeg",
  "/sreephotography/images/14.jpg.jpeg",
  "/sreephotography/images/17.jpg.jpeg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl capitalize font-heading mt-32 md:mt-0 md:text-6xl font-semibold italic leading-tight">
            We don't just take Pictures We click Hearts
          </h1>

          <p className="mt-4 text-lg font-inter md:text-xl text-accent">
            Wedding <span className="text-white">•</span> Portrait <span className="text-white">•</span> Event <span className="text-white">•</span> Commercial Photography
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#gallery" className="rounded-full font-inter cursor-pointer bg-white/10 backdrop-blur-xs border-2 border-white/15 px-8 py-3 text-white font-semibold hover:bg-white/30 transition">
              View Portfolio
            </a>

            <a href="#contact" className="rounded-full font-inter cursor-pointer border-2 border-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition">
              Book a Shoot
            </a>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-200">
            <div>
              <h3 className="font-semibold text-white">20+ Years Experience</h3>
              <p>Professional & trusted photography</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Premium Equipment</h3>
              <p>High-end cameras & lighting</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">On-Time Delivery</h3>
              <p>Fast & reliable photo delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
