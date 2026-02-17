import { useState } from "react";

const galleryItems = Array.from({ length: 35 }, (_, i) => ({
    id: i + 1,
    image: `/sreephotography/images/${i + 1}.jpg.jpeg`,
}));

export default function Gallery() {
    const [loaded, setLoaded] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="bg-white py-20 px-4 md:px-20">

            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="font-subhead text-4xl tracking-[0.3em] text-gray-700">
                    OUR STORIES
                </h2>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className="overflow-hidden relative group cursor-pointer"
                        onClick={() => setSelectedImage(item.image)}
                    >

                        {/* Skeleton loader */}
                        {!loaded[item.id] && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-sm" />
                        )}

                        {/* Image */}
                        <img
                            src={item.image}
                            alt={`Gallery image ${item.id}`}
                            loading="lazy"
                            onLoad={() =>
                                setLoaded((prev) => ({ ...prev, [item.id]: true }))
                            }
                            className={`
                w-full object-cover rounded-sm
                transition-all duration-700
                group-hover:scale-105
                ${loaded[item.id] ? "opacity-100" : "opacity-0 blur-sm"}
              `}
                        />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
                    </div>
                ))}
            </div>

            {/* Lightbox modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Preview"
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
                    />

                    {/* Close button */}
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
                    >
                        ✕
                    </button>
                </div>
            )}
        </section>
    );
}