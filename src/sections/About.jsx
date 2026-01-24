const galleryPreview = [
  { src: "/images/baby.jpg", title: "BABY" },
  { src: "/images/hero3.jpg", title: "WEDDING" },
  { src: "/images/event.jpg", title: "EVENT" },
  { src: "/images/cultural.jpg", title: "CULTURAL" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-32">

      {/* Image Hover Gallery */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        {galleryPreview.map((item, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/4 overflow-hidden group"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover rounded-tr-xl rounded-bl-xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-xl tracking-widest font-subhead uppercase mb-4">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] items-center md:px-20 gap-10">

        {/* Left */}
        <div>
          <p className="font-inter italic">
            <span className="font-heading text-4xl font-semibold text-primary">
              The Story
            </span>
            <br />
            Telling Stories <br />
            Through Every <br />
            Frame
          </p>
        </div>

        {/* Right */}
        <div>
          <p className="text-gray-800 font-inter mb-4">
            At our photo studio, we believe every moment has a story worth preserving.
            With a passion for creativity and a commitment to quality, we capture images
            that are natural, timeless, and full of emotion.
          </p>
          <p className="text-gray-800 font-inter mb-8">
            From the first click to the final edit, we focus on creating meaningful
            visuals that our clients can cherish for a lifetime.
          </p>
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button className="bg-primary text-white cursor-pointer px-8 py-4 rounded-full font-inter font-semibold">
            View Packages
          </button>
        </div>

      </div>
    </section>
  );
}
