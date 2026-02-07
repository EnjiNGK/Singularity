import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '393488664662';
  const message = 'Ciao! Vorrei informazioni sui vostri servizi digitali.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contattaci su WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
        
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
        
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <div className="glass-card px-3 py-2 text-sm font-medium">
            Chatta con noi
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
