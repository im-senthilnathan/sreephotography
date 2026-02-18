import {
    Instagram,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {

    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(""); // success / error / loading

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            setStatus("Please enter your email");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setStatus("Invalid email format");
            return;
        }

        // Simulate API call
        setStatus("loading");

        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

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
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/9787239395"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-green-500 text-white
          flex items-center justify-center shadow-lg transition hover:scale-110"
                        >
                            <FaWhatsapp size={22} />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/sreephotographystudio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white
          flex items-center justify-center shadow-lg transition hover:scale-110"
                        >
                            <Instagram size={20} />
                        </a>
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
                            <Phone size={16} /> +91 97872 39395
                        </li>
                        <li className="flex gap-2 items-start">
                            <Mail size={16} /> sreephotographystudio@email.com
                        </li>
                        <li className="flex gap-2 items-start">
                            <MapPin size={16} />
                            H-06, TNHB Colony, Sector - 6,<br /> Koodal Pudur, (Opp. JEYA MAHAL), <br /> Madurai - 625017
                        </li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h4 className="font-semibold font-poppins mb-4">
                        Get the latest updates
                    </h4>

                    <form
                        onSubmit={handleSubscribe}
                        className="flex bg-white/20 rounded-full overflow-hidden"
                    >
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent px-4 py-3 text-sm outline-none w-full placeholder:text-white font-semibold"
                        />

                        <button
                            type="submit"
                            className="bg-accent text-black px-4 flex items-center justify-center hover:brightness-110 transition"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </form>

                    {/* Status messages */}
                    {status === "success" && (
                        <p className="text-accent text-sm mt-3">
                            Subscribed successfully
                        </p>
                    )}

                    {status === "loading" && (
                        <p className="text-white text-sm mt-3">
                            Subscribing...
                        </p>
                    )}

                    {status !== "success" && status !== "loading" && status && (
                        <p className="text-red-400 text-sm mt-3">
                            {status}
                        </p>
                    )}
                </div>

            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/20" />

            {/* BOTTOM BAR */}
            <div className="px-6 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm gap-4">
                <p>© 2026 Sree Photography. All Rights Reserved.</p>

            </div>
        </footer>
    );
}
