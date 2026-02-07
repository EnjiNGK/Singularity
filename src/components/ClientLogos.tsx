import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: 'Motta Apartments', logo: '/images/cliente-motta-apartments.jpg' },
    { name: 'Arte dei Motori', logo: '/images/cliente-arte-motori-logo.png' },
    { name: 'Graficapoint', logo: '/images/cliente-grafica-point-logo.png' },
  ];

  return (
    <div className="flex items-center justify-center gap-8 flex-wrap py-6">
      {clients.map((client) => (
        <div
          key={client.name}
          className="w-20 h-20 rounded-full overflow-hidden glass-card p-2 hover-lift"
          title={client.name}
        >
          <img
            src={client.logo}
            alt={`Logo ${client.name}`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ClientLogos;