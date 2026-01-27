import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
    MapPin,
    Phone,
    Clock,
    Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(
                "service_y0fkaf4",
                "template_i4oiliq",
                formRef.current,
                "zS-McoT8bjPNf54ev"
            )
            .then(
                () => {
                    setStatus("success");
                    formRef.current.reset();
                },
                () => {
                    setStatus("error");
                }
            );
    };

    return (
        <section id="contact" className="relative py-24 px-4 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">

                {/* LEFT – FORM */}
                <div>
                    <p className="uppercase tracking-widest text-sm text-primary mb-2">
                        Contact Us
                    </p>

                    <h2 className="font-subhead text-4xl mb-6 text-gray-900">
                        Get Your <span className="text-accent">Free Quote</span> Today!
                    </h2>

                    <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your Name *"
                                required
                                className="w-full rounded-lg border px-4 py-3"
                            />
                            <input
                                type="email"
                                name="from_email"
                                placeholder="Email *"
                                required
                                className="w-full rounded-lg border px-4 py-3"
                            />
                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject *"
                            required
                            className="w-full rounded-lg border px-4 py-3"
                        />

                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Your Message *"
                            required
                            className="w-full rounded-lg border px-4 py-3"
                        />

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:brightness-110 transition disabled:opacity-60"
                        >
                            {status === "sending" ? "Sending..." : "Send Message →"}
                        </button>

                        {/* STATUS MESSAGE */}
                        {status === "success" && (
                            <p className="text-green-600 font-semibold">
                                Message sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 font-semibold">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </div>

                {/* RIGHT – INFO CARD (unchanged UI) */}
                <div className="bg-dark text-white rounded-xl rounded-tr-4xl p-8 shadow-xl">
                    {/* Address */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                            <MapPin size={18} className="text-accent" /> Address </h4>
                        <p className="text-white/80"> H-06, TNHB Colony, Sector - 6,<br /> Koodal Pudur, (Opp. JEYA MAHAL), <br /> Madurai - 625017 </p>
                    </div>
                    {/* Contact */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-lg uppercase mb-2 flex items-center gap-2">
                            <Phone size={18} className="text-accent" /> Contact </h4>
                        <p className="text-white/80">
                            Phone: +91 97872 39395 • +91 84389 83003
                            <br />
                            Email: sreephotographystudio@email.com
                        </p>
                    </div>
                    {/* Open Time */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                            <Clock size={18} className="text-accent" /> Open Time </h4> <p className="text-white/80">
                            Mon – Sun: 10:00 AM – 8:00 PM
                        </p>
                    </div>
                    {/* Social */}
                    <div>
                        <h4 className="font-semibold text-lg mb-3"> Stay Connected </h4>
                        <div className="flex gap-3">
                            <a href="https://wa.me/9787239395" target="_blank" className="p-3 bg-white/20 backdrop-blur-md shadow-lg shadow-primary/10 cursor-pointer rounded-full border-2 border-primary/20 hover:bg-white/30 transition hover:scale-110 hover:text-green-500 hover:border-green-500/20 hover:shadow-green-500/10">
                                <FaWhatsapp size={20} />
                            </a>
                            <a href="https://www.instagram.com/sreephotographystudio" target="_blank" className="p-3 bg-white/20 backdrop-blur-md shadow-lg shadow-primary/10 cursor-pointer rounded-full border-2 border-primary/20 hover:bg-white/30 transition hover:scale-110 hover:text-pink-500 hover:border-pink-500/20 hover:shadow-pink-500/10">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAP */}
            <div className="mt-10 h-[300px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    title="Studio Location"
                    src="https://www.google.com/maps?q=9.9529425,78.1092767&z,=17&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                />
            </div>
        </section>
    );
}
