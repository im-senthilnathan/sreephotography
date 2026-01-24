import { useEffect, useRef } from "react";

const services = [
    {
        title: "WEDDING",
        image: "/sreephotography/images/wedding.jpg",
        subtitles: [
            "Candid & Traditional coverage",
            "Full-day or multi-day shoots",
            "Story-driven wedding albums",
        ],
    },
    {
        title: "PRE WEDDING",
        image: "/sreephotography/images/prewedding.jpg",
        subtitles: [
            "Outdoor & destination shoots",
            "Creative concepts & themes",
            "Cinematic storytelling style",
        ],
    },
    {
        title: "PUBERTY",
        image: "/sreephotography/images/puberty.jpg",
        subtitles: [
            "Traditional & candid coverage",
            "Cultural rituals captured with care",
            "Emotional family moments",
        ],
    },
    {
        title: "Event",
        image: "/sreephotography/images/event2.jpg",
        subtitles: [
            "Corporate events",
            "Birthday & anniversary functions",
            "Cultural & family gatherings",
        ],
    },
    {
        title: "potrait",
        image: "/sreephotography/images/potrait.jpg",
        subtitles: [
            "Individual & family portraits",
            "tudio & outdoor sessions",
            "Professional lighting setup",
        ],
    },
    {
        title: "baby & maternity",
        image: "/sreephotography/images/baby2.jpg",
        subtitles: [
            "Newborn photoshoots",
            "Baby milestones",
            "Maternity portraits",
        ],
    },
    {
        title: "cultural & traditional",
        image: "/sreephotography/images/cultural2.jpg",
        subtitles: [
            "Temple & ritual photographys",
            "Cultural ceremonies",
            "Traditional attire portraits",
        ],
    },
    {
        title: "Commercial & Product",
        image: "/sreephotography/images/product.jpg",
        subtitles: [
            "Product catalog shoots",
            "Brand & business photography",
            "Social media & marketing visuals",
        ],
    },
    {
        title: "YouTube Live Streaming",
        image: "/sreephotography/images/youtubelive.jpg",
        subtitles: [
            "HD live streaming setup",
            "Stable internet & sound management",
            "Live event streaming",
        ],
    },
];

export default function Services() {
    const scrollRef = useRef(null);

    // 🔄 Auto Scroll
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animationId;

        const scroll = () => {
            container.scrollLeft += 0.6;

            // When first list is fully scrolled, reset smoothly
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            }

            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section id="services" className="bg-slate-50 py-20 px-4 md:px-20">

            {/* Section Heading */}
            <div className="mb-10">
                <h2 className="font-subhead uppercase text-4xl tracking-[0.3em] text-gray-700 mb-2">
                    Memories we create
                </h2>
            </div>

            {/* Horizontal Auto Scroll */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-hidden pb-4"
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

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300" />

                        {/* Bottom Title (hide on hover) */}
                        <div className="absolute bottom-4 left-4 text-white tracking-widest text-sm z-10 transition-opacity uppercase duration-300 group-hover:opacity-0">
                            {service.title}
                        </div>

                        {/* Glassmorphism Slide-up Card */}
                        <div
                            className="
                absolute left-1 right-1 bottom-[-180px]
                bg-white/20 backdrop-blur-md border border-white/30
                rounded-xl p-6 text-white
                transition-all duration-500
                group-hover:bottom-1
                flex flex-col items-center justify-center text-center
              "
                        >
                            <h4 className="tracking-widest text-accent uppercase text-md md:text-lg mb-3">
                                {service.title}
                            </h4>

                            <div className="space-y-1 font-inter text-sm md:text-md text-gray-200">
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
