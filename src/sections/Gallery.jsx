const galleryItems = [
    { id: 1, category: "WEDDING STORIES", image: "/images/wedding.jpg" },
    { id: 2, category: "CHRISTIAN", image: "/images/hero1.jpg" },
    { id: 3, category: "PUBERTY", image: "/images/puberty.jpg" },
    { id: 4, category: "WEDDING STORIES", image: "/images/hero2.jpg" },
    { id: 5, category: "PRE WEDDING", image: "/images/prewedding.jpg" },
    { id: 6, category: "BABY", image: "/images/baby.jpg" },
    { id: 7, category: "COUPLE PORTRAITS", image: "/images/hero3.jpg" },
    { id: 8, category: "CULTURAL", image: "/images/cultural2.jpg" },
    { id: 9, category: "PRODUCT", image: "/images/product.jpg" },
];

export default function Gallery() {
    return (
        <section id="gallery" className="bg-white py-20 px-4 md:px-20">

            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="font-subhead text-4xl tracking-[0.3em] text-gray-700">
                    OUR STORIES
                </h2>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                {galleryItems.map((item) => (
                    <div key={item.id} className="overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.category}
                            className="w-full object-cover rounded-sm transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                ))}
            </div>

        </section>
    );
}
