
const NEGOCIO = {
  nombre: "Barbería Íntima",
  eslogan: "Sin vergüenza. Privado. Sin tabúes.",
  whatsapp: "5491126502999",
  whatsappMensaje: "Hola, quiero reservar un turno en Barbería Íntima.",
  instagram: "#",
};

const SERVICIOS = [
  {
    id: "grooming-intimo",
    categoria: "Rasuración Íntima",
    items: [
      { nombre: "Rasurado de genitales", precio: null },
      { nombre: "Tira interglútea", precio: null },
      { nombre: "Glúteos completos", precio: null },
      { nombre: "Rebajes personalizados", precio: null },
    ]
  },
  {
    id: "Depilación Láser",
    categoria: "Depilación Definitiva (Láser)",
    items: [
      { nombre: "Zona íntima", precio: null },
      { nombre: "Axilas", precio: null },
      { nombre: "Espalda", precio: null },
      { nombre: "Pecho", precio: null },
      { nombre: "Piernas", precio: null },
    ]
  },
  {
    id: "Diseño de Vello Corporal",
    categoria: "Diseño de Vello Corporal",
    items: [
      { nombre: "Pecho", precio: null },
      { nombre: "Abdomen", precio: null },
      { nombre: "Espalda", precio: null },
      { nombre: "Brazos", precio: null },
      { nombre: "Axilas", precio: null },
    ]
  },
];

const PACKS = [
  {
    id: "primera-vez",
    nombre: "Primera Experiencia",
    destacado: false,
    descripcion: "Para quienes se animan por primera vez. Sin presión, con toda la atención del mundo.",
    incluye: [
      "Consulta personalizada",
      "Servicio íntimo a elección",
      "Tratamiento calmante incluido",
    ],
    precio: "Consultá precios",
    badge: "Ideal para empezar",
  },
  {
    id: "pack-boxer",
    nombre: "Pack Boxer",
    destacado: true,
    descripcion: "Las zonas clave en una sola sesión. Limpieza, prolijidad y comodidad real.",
    incluye: [
      "Genitales",
      "Tira de cola",
      "Glúteos",
      "Tratamiento post-rasurado hidratante",
    ],
    precio: "Consultá precios",
    badge: "Más elegido",
  },
  {
    id: "mantenimiento",
    nombre: "Plan Mantenimiento Mensual",
    destacado: false,
    descripcion: "Resultados sostenidos mes a mes. Porque el cuidado no es un evento, es un hábito.",
    incluye: [
      "2 sesiones mensuales",
      "Descuento exclusivo por pack",
      "Seguimiento personalizado",
      "Prioridad en turnos",
    ],
    precio: "Consultá precios",
    badge: "Ahorrás cada mes",
  },
];

const TESTIMONIOS = [
  {
    nombre: "Matías R.",
    texto: "Nunca pensé que me iba a animar. El trato fue de diez, sin juzgar nada. Volví tres veces en el mismo mes.",
    servicio: "Rasuración íntima",
  },
  {
    nombre: "Sebastián L.",
    texto: "Ambiente muy tranquilo y profesional. Me explicaron cada paso, nada de sorpresas. Recomendable al 100%.",
    servicio: "Pack Boxer",
  },
  {
    nombre: "Diego M.",
    texto: "Llevaba años queriendo hacer esto y no encontraba el lugar. Acá se maneja con total discreción. No voy a otro lado.",
    servicio: "Depilación láser",
  },
  {
    nombre: "Ignacio V.",
    texto: "Fui con el pack de primera vez y salí sintiéndome otra persona. Vale cada peso.",
    servicio: "Primera Experiencia",
  },
];
