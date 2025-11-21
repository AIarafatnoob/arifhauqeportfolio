import { FaWhatsapp } from "react-icons/fa";

// TODO: Replace with the actual phone number provided by the user.
const WHATSAPP_NUMBER = "+8801712773855"; // Replace with a real number including country code

export default function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
      data-testid="whatsapp-button"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}
