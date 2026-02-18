import { useEffect, useRef, useState } from "react";

const services = [
    {
        title: "WEDDING",
        image: "/images/wedding.jpg",
        subtitles: [
            "Candid & Traditional coverage",
            "Full-day or multi-day shoots",
            "Story-driven wedding albums",
        ],
    },
    {
        title: "PRE WEDDING",
        image: "/images/prewedding.jpg",
        subtitles: [
            "Outdoor & destination shoots",
            "Creative concepts & themes",
            "Cinematic storytelling style",
        ],
    },
    {
        title: "PUBERTY",
        image: "/images/puberty.jpg",
        subtitles: [
            "Traditional & candid coverage",
            "Cultural rituals captured with care",
            "Emotional family moments",
        ],
    },
    {
        title: "EVENT",
        image: "/images/event2.jpg",
        subtitles: [
            "Corporate events",
            "Birthday & anniversary functions",
            "Cultural & family gatherings",
        ],
    },
    {
        title: "PORTRAIT",
        image: "/images/potrait.jpg",
        subtitles: [
            "Individual & family portraits",
            "Studio & outdoor sessions",
            "Professional lighting setup",
        ],
    },
    {
        title: "BABY & MATERNITY",
        image: "/images/baby2.jpg",
        subtitles: [
            "Newborn photoshoots",
            "Baby milestones",
            "Maternity portraits",
        ],
    },
    {
        title: "CULTURAL & TRADITIONAL",
        image: "/images/cultural2.jpg",
        subtitles: [
            "Temple & ritual photography",
            "Cultural ceremonies",
            "Traditional attire portraits",
        ],
    },
    {
        title: "COMMERCIAL & PRODUCT",
        image: "/images/product.jpg",
        subtitles: [
            "Product catalog shoots",
            "Brand & business photography",
            "Social media & marketing visuals",
        ],
    },
    {
        title: "YOUTUBE LIVE",
        image: "/images/youtubelive.jpg",
        subtitles: [
            "HD live streaming setup",
            "Stable internet & sound management",
            "Live event streaming",
        ],
    },
];

export default function Services() {
    const scrollRef = useRef(null);
    const isPaused = useRef(false);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animationId;

        const autoScroll = () => {
            if (!isPaused.current) {
                container.scrollLeft += 0.6;

                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        animationId = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section id="services" className="bg-slate-50 py-20 px-4 md:px-20">
            {/* Heading */}
            <div className="mb-10">
                <h2 className="font-subhead uppercase text-4xl tracking-[0.3em] text-gray-700">
                    Memories we create
                </h2>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-scroll pb-4 cursor-grab active:cursor-grabbing no-scrollbar"
                onMouseEnter={() => (isPaused.current = true)}
                onMouseLeave={() => (isPaused.current = false)}
                onTouchStart={() => (isPaused.current = true)}
                onTouchEnd={() => (isPaused.current = false)}
            >
                {[...services, ...services].map((service, index) => (
                    <div
                        key={index}
                        className="relative min-w-[280px] md:min-w-[340px] h-[450px] overflow-hidden group rounded-xl"
                    >
                        {/* Image */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition" />

                        {/* Title */}
                        <div className="absolute bottom-4 left-4 text-white tracking-widest text-sm uppercase transition-opacity group-hover:opacity-0">
                            {service.title}
                        </div>

                        {/* Hover Card */}
                        <div
                            className="
                absolute left-1 right-1 bottom-[-180px]
                bg-white/20 backdrop-blur-md border border-white/30
                rounded-xl p-6 text-white
                transition-all duration-500
                group-hover:bottom-1
                flex flex-col items-center text-center
              "
                        >
                            <h4 className="tracking-widest text-accent uppercase mb-3">
                                {service.title}
                            </h4>

                            <div className="space-y-1 text-sm text-gray-200">
                                {service.subtitles.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
