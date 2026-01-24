import { useState } from "react";
import { MessageCircle, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingChat() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed left-6 bottom-6 z-50 flex flex-col items-center gap-3">

            {/* WhatsApp */}
            <a
                href="https://wa.me/919994559047"
                target="_blank"
                rel="noopener noreferrer"
                className={`
          w-12 h-12 rounded-full bg-green-500 text-white
          flex items-center justify-center shadow-lg
          transition-all duration-300 ease-out
          ${open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-0 translate-y-6"}
        `}
            >
                <FaWhatsapp size={22} />
            </a>

            {/* Instagram */}
            <a
                href="https://www.instagram.com/sreephotographystudio"
                target="_blank"
                rel="noopener noreferrer"
                className={`
          w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white
          flex items-center justify-center shadow-lg
          transition-all duration-300 ease-out delay-75
          ${open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-0 translate-y-6"}
        `}
            >
                <Instagram size={20} />
            </a>

            {/* Main Chat Button */}
            <button
                onClick={() => setOpen(!open)}
                className="
          w-14 h-14 rounded-full bg-primary text-white
          flex items-center justify-center shadow-xl
          transition-transform duration-300
          hover:scale-110 cursor-pointer
        "
            >
                <MessageCircle
                    size={26}
                    className={`transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
                />
            </button>
        </div>
    );
}
