import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const packages = [
    {
        name: "Basic",
        price: "₹39,999",
        features: ["Traditional Photos", "Traditional Videos"],
    },
    {
        name: "Standard",
        price: "₹79,999",
        features: [
            "Traditional Photos",
            "Traditional Videos",
            "Candid Photos",
            "Candid Videos",
        ],
    },
    {
        name: "Premium",
        price: "₹99,999",
        features: [
            "Traditional + Candid Photos",
            "Traditional + Candid Videos",
            "Drone",
        ],
    },
    {
        name: "Luxury",
        price: "₹1,59,999",
        features: [
            "Traditional + Candid Photos",
            "Traditional + Candid Videos",
            "Drone",
            "LED / Youtube",
        ],
    },
    {
        name: "Elite",
        price: "₹1,99,999",
        features: [
            "Traditional + Candid Photos",
            "Traditional + Candid Videos",
            "Drone",
            "LED / Youtube",
            "Insta 360",
        ],
    },
    {
        name: "Custom",
        price: "Contact Us",
        features: [
            "Tailored packages",
            "Flexible shoot days",
            "Premium support",
        ],
    },
];

export default function Packages() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const CARD_WIDTH = 320;

    const scroll = (direction) => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
            behavior: "smooth",
        });

        setActiveIndex((prev) =>
            direction === "left"
                ? Math.max(prev - 1, 0)
                : Math.min(prev + 1, packages.length - 1)
        );
    };

    return (
        <section
            id="packages"
            className="relative py-20 px-4 md:px-20 bg-gradient-to-t from-primary/10 to-white/10"
        >
            {/* Heading */}
            <div className="text-center mb-8">
                <h2 className="font-subhead tracking-[0.3em] text-4xl uppercase text-gray-900 mb-3">
                    Packages
                </h2>
                <p className="text-gray-600 font-poppins">
                    Negotiable & customizable packages to fit your unique needs
                </p>
            </div>

            {/* Wrapper */}
            <div className="relative">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10
          bg-white/80 backdrop-blur-md shadow-lg cursor-pointer
          p-3 rounded-full hover:bg-white transition"
                >
                    <ChevronLeft />
                </button>

                {/* Cards Container */}
                <div
                    ref={scrollRef}
                    className="
            flex gap-8
            overflow-x-scroll scroll-smooth
            cursor-grab active:cursor-grabbing
            no-scrollbar
          "
                >
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="group relative min-w-[300px] h-[420px] my-6 mx-2
              rounded-2xl bg-white shadow-lg overflow-hidden
              border-b-8 border-primary
              transition-all duration-500"
                        >
                            {/* Hover Fill Overlay */}
                            <div
                                className="absolute inset-0 bg-primary
                transform translate-y-full
                transition-transform duration-500 ease-out
                group-hover:translate-y-0"
                            />

                            {/* Content */}
                            <div className="relative z-10 p-8 h-full flex flex-col">
                                <h3 className="text-xl font-semibold uppercase text-center mb-3
                text-gray-900 group-hover:text-white transition">
                                    {pkg.name}
                                </h3>

                                <p className="text-3xl font-bold mb-6 border-b border-gray-200 pb-4
                text-gray-900 group-hover:text-white group-hover:border-white/40 transition">
                                    {pkg.name !== "Custom" && (
                                        <span className="block text-sm font-normal opacity-80">
                                            Starting @
                                        </span>
                                    )}
                                    {pkg.price}
                                </p>

                                <ul className="space-y-3 font-semibold flex-1">
                                    {pkg.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2
                      text-gray-700 group-hover:text-white transition"
                                        >
                                            <Check
                                                size={18}
                                                className="text-primary group-hover:text-white"
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {pkg.name === "Custom" && (
                                    <button
                                        className="
                      mt-4 w-full py-3 rounded-full font-bold
                      border-2 border-white
                      bg-transparent text-white
                      hover:bg-white hover:text-primary
                      transition
                    "
                                    >
                                        Connect with us
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10
          bg-white/80 backdrop-blur-md shadow-lg cursor-pointer
          p-3 rounded-full hover:bg-white transition"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6">
                {packages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            if (!scrollRef.current) return;
                            scrollRef.current.scrollTo({
                                left: i * CARD_WIDTH,
                                behavior: "smooth",
                            });
                            setActiveIndex(i);
                        }}
                        className={`h-2 w-2 rounded-full transition ${activeIndex === i
                            ? "bg-primary w-6"
                            : "bg-gray-300 hover:bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
