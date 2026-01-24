import {
    Facebook,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white">

            {/* TOP MARQUEE STRIP */}
            <div className="bg-accent text-black py-3 overflow-hidden">
                <div className="whitespace-nowrap animate-marquee font-semibold tracking-wide">
                    Wedding ✶ Pre Wedding ✶ Baby & Maternity Shoot ✶ Puberty ✶ Event Coverage ✶ Cultural & Traditional ✶ Potrait ✶ Commercial & Product Shoot ✶
                    Candid Photography ✶ YouTube Live ✶ Drone Shoots ✶
                </div>
            </div>

            {/* MAIN FOOTER */}
            <div className="px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* BRAND */}
                <div>
                    <img src="/images/logoImg.png" alt="logo" className="w-44 mb-4" />

                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                        We capture timeless moments with creativity and emotion.
                        From weddings to portraits, every frame tells a story.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        {[Facebook, Instagram, Youtube].map((Icon, i) => (
                            <div
                                key={i}
                                className="p-3 bg-accent text-black border-2 border-accent rounded-full cursor-pointer hover:brightness-110 transition"
                            >
                                <Icon size={22} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* COMPANY */}
                <div>
                    <h4 className="font-semibold font-poppins mb-4">Company</h4>
                    <ul className="space-y-2 text-white/70 text-sm">
                        <li className="hover:text-white cursor-pointer"><a href="#home">Home</a></li>
                        <li className="hover:text-white cursor-pointer"><a href="#about">About</a></li>
                        <li className="hover:text-white cursor-pointer"><a href="#services">Services</a></li>
                        <li className="hover:text-white cursor-pointer"><a href="#gallery">Gallery</a></li>
                        <li className="hover:text-white cursor-pointer"><a href="#packages">Packages</a></li>
                        <li className="hover:text-white cursor-pointer"><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="font-semibold font-poppins mb-4">Contact</h4>
                    <ul className="space-y-3 text-white/70 text-sm">
                        <li className="flex gap-2 items-start">
                            <Phone size={16} /> +91 84389 83003
                        </li>
                        <li className="flex gap-2 items-start">
                            <Mail size={16} /> studio@email.com
                        </li>
                        <li className="flex gap-2 items-start">
                            <MapPin size={16} />
                            Madurai, Tamil Nadu, India
                        </li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h4 className="font-semibold font-poppins mb-4">Get the latest updates</h4>

                    <div className="flex bg-white/20 rounded-full overflow-hidden">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent px-4 py-3 text-sm outline-none w-full placeholder:text-white font-semibold"
                        />
                        <button className="bg-accent text-blwhiteack px-4 flex items-center justify-center hover:brightness-110 transition">
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/20" />

            {/* BOTTOM BAR */}
            <div className="px-6 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm gap-4">
                <p>© 2026 Sree Photography. All Rights Reserved.</p>

                <div className="flex gap-4">
                    <span className="hover:text-white cursor-pointer">
                        Terms & Conditions
                    </span>
                    <span className="hover:text-white cursor-pointer">
                        Privacy Policy
                    </span>
                </div>
            </div>
        </footer>
    );
}
