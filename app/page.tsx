import Image from "next/image";

const valores = [
  {
    titulo: "Transparencia",
    texto: "Reglamentos claros, procesos verificables y comunicación abierta con pilotos, familias, preparadores y equipos.",
  },
  {
    titulo: "Imparcialidad",
    texto: "Decisiones técnicas y deportivas basadas en criterios objetivos, sin favoritismos y con respeto al reglamento.",
  },
  {
    titulo: "Profesionalismo",
    texto: "Organización seria, estructura definida, personal capacitado y atención a cada detalle del evento.",
  },
  {
    titulo: "Seguridad",
    texto: "Prioridad absoluta en pista, revisión de equipo obligatorio, control técnico y cumplimiento de protocolos.",
  },
  {
    titulo: "Desarrollo deportivo",
    texto: "Impulso al crecimiento de pilotos, preparadores y equipos dentro de un entorno competitivo y formativo.",
  },
  {
    titulo: "Respeto",
    texto: "Promoción de una cultura deportiva sana entre pilotos, familias, preparadores, oficiales y organizadores.",
  },
];

const categorias = [
  ["Baby", "70 kg", "Duro"],
  ["Micro", "105 kg", "Duro"],
  ["Mini", "115 kg", "Duro"],
  ["X30 Junior", "143 kg", "Intermedio"],
  ["X30 Senior", "158 kg", "Blando"],
  ["OK-N Junior", "143 kg", "Intermedio"],
  ["OK-N Senior", "158 kg", "Blando"],
];

const colaboradores = [
  { nombre: "CKT", logo: "/logos/colaboradores/ckt.png" },
  { nombre: "Davó Coaching", logo: "/logos/colaboradores/davo.png" },
  { nombre: "ERG Kart Team", logo: "/logos/colaboradores/erg.png" },
  { nombre: "GAFI", logo: "/logos/colaboradores/gafi.png" },
  { nombre: "R Karting", logo: "/logos/colaboradores/karting.png" },
  { nombre: "Manolop Karting", logo: "/logos/colaboradores/manolop.png" },
  { nombre: "Ponce Modified", logo: "/logos/colaboradores/poncem.png" },
  { nombre: "Reynard Karts", logo: "/logos/colaboradores/reynard.png" },
];


const programasPista = [
  {
    dia: "Viernes",
    titulo: "Día de prácticas libres",
    resumen: "Jornada de prácticas para reconocimiento de pista, ajustes de kart, revisión de equipo y preparación previa al Track Day.",
    eventosGenerales: [
      { hora: "9:00", actividad: "Inicio del programa en pista" },
      { hora: "13:28 - 13:58", actividad: "Receso de comida · 30 min" },
      { hora: "16:55", actividad: "Fin del programa" },
      { hora: "18:00", actividad: "Cierre de pits e instalaciones" },
    ],
    requisitos: [
      "Inscripción registrada",
      "Licencia vigente",
      "Casco y equipo de seguridad homologado",
      "Transponder instalado y funcionando",
      "Revisión técnica aprobada",
    ],
    sesiones: [
      {
        nombre: "Práctica 1",
        detalle: "8 minutos en pista",
        nota: "",
        carreras: [
          ["9:00 - 9:08", "Baby"],
          ["9:13 - 9:21", "Micro"],
          ["9:26 - 9:34", "Mini"],
          ["9:39 - 9:47", "X30 Jr"],
          ["9:52 - 10:00", "X30 Sr"],
          ["10:05 - 10:13", "OK-N Jr"],
          ["10:18 - 10:26", "OK-N Sr"],
        ],
      },
      {
        nombre: "Práctica 2",
        detalle: "8 minutos en pista",
        nota: "Segunda rotación de la mañana. Aprovecha para ajustar presión de llantas y telemetría entre sesiones.",
        carreras: [
          ["10:31 - 10:39", "Baby"],
          ["10:44 - 10:52", "Micro"],
          ["10:57 - 11:05", "Mini"],
          ["11:10 - 11:18", "X30 Jr"],
          ["11:23 - 11:31", "X30 Sr"],
          ["11:36 - 11:44", "OK-N Jr"],
          ["11:49 - 11:57", "OK-N Sr"],
        ],
      },
      {
        nombre: "Práctica 3",
        detalle: "8 minutos en pista",
        nota: "Última rotación antes del receso de comida. Aseguren combustible suficiente para la sesión.",
        carreras: [
          ["12:02 - 12:10", "Baby"],
          ["12:15 - 12:23", "Micro"],
          ["12:28 - 12:36", "Mini"],
          ["12:41 - 12:49", "X30 Jr"],
          ["12:54 - 13:02", "X30 Sr"],
          ["13:07 - 13:15", "OK-N Jr"],
          ["13:20 - 13:28", "OK-N Sr"],
        ],
      },
      {
        nombre: "Práctica 4",
        detalle: "8 minutos en pista",
        nota: "Primera rotación de la tarde. Verifiquen niveles de combustible y ajustes tras el receso.",
        carreras: [
          ["13:58 - 14:06", "Baby"],
          ["14:11 - 14:19", "Micro"],
          ["14:24 - 14:32", "Mini"],
          ["14:37 - 14:45", "X30 Jr"],
          ["14:50 - 14:58", "X30 Sr"],
          ["15:03 - 15:11", "OK-N Jr"],
          ["15:16 - 15:24", "OK-N Sr"],
        ],
      },
      {
        nombre: "Práctica 5",
        detalle: "8 minutos en pista",
        nota: "Última rotación del día. Cierre de actividades en pista.",
        carreras: [
          ["15:29 - 15:37", "Baby"],
          ["15:42 - 15:50", "Micro"],
          ["15:55 - 16:03", "Mini"],
          ["16:08 - 16:16", "X30 Jr"],
          ["16:21 - 16:29", "X30 Sr"],
          ["16:34 - 16:42", "OK-N Jr"],
          ["16:47 - 16:55", "OK-N Sr"],
        ],
      },
    ],
  },
  {
    dia: "Sábado",
    titulo: "Track Day · Programa oficial de pista",
    resumen: "Programa oficial con prácticas, clasificación, publicación de parrillas, Carrera 1 y Carrera Final.",
    eventosGenerales: [
      { hora: "8:00", actividad: "Apertura de instalaciones" },
      { hora: "8:30", actividad: "Apertura de inscripciones" },
      { hora: "9:00", actividad: "Inicio del programa en pista" },
      { hora: "13:28 - 13:58", actividad: "Receso · Publicación de parrillas" },
      { hora: "17:29", actividad: "Fin del programa" },
      { hora: "19:00", actividad: "Cierre de pits e instalaciones" },
    ],
    requisitos: [
      "Inscripción registrada",
      "Licencia vigente",
      "Casco y equipo de seguridad homologado",
      "Transponder instalado y funcionando",
      "Revisión técnica aprobada",
    ],
    sesiones: [
      {
        nombre: "Práctica 1",
        detalle: "9 minutos en pista",
        nota: "",
        carreras: [
          ["9:00 - 9:09", "Baby"],
          ["9:14 - 9:23", "Micro"],
          ["9:28 - 9:37", "Mini"],
          ["9:42 - 9:51", "X30 Jr"],
          ["9:56 - 10:05", "X30 Sr"],
          ["10:10 - 10:19", "OK-N Jr"],
          ["10:24 - 10:33", "OK-N Sr"],
        ],
      },
      {
        nombre: "Práctica 2",
        detalle: "9 minutos en pista",
        nota: "Sesión libre de práctica. 5 minutos de transición entre categorías para cambio de pilotos y banderas.",
        carreras: [
          ["10:38 - 10:47", "Baby"],
          ["10:52 - 11:01", "Micro"],
          ["11:06 - 11:15", "Mini"],
          ["11:20 - 11:29", "X30 Jr"],
          ["11:34 - 11:43", "X30 Sr"],
          ["11:48 - 11:57", "OK-N Jr"],
          ["12:02 - 12:11", "OK-N Sr"],
        ],
      },
      {
        nombre: "Práctica 3",
        detalle: "Clasificación · 6 min",
        nota: "El tiempo de esta sesión define la parrilla de salida de Carrera 1 y Carrera Final.",
        carreras: [
          ["12:16 - 12:22", "Baby"],
          ["12:27 - 12:33", "Micro"],
          ["12:38 - 12:44", "Mini"],
          ["12:49 - 12:55", "X30 Jr"],
          ["13:00 - 13:06", "X30 Sr"],
          ["13:11 - 13:17", "OK-N Jr"],
          ["13:22 - 13:28", "OK-N Sr"],
        ],
      },
      {
        nombre: "Carrera 1",
        detalle: "Competencia",
        nota: "",
        carreras: [
          ["13:58 - 14:06", "Baby", "8 vueltas"],
          ["14:11 - 14:19", "Micro", "8 vueltas"],
          ["14:24 - 14:32", "Mini", "8 vueltas"],
          ["14:37 - 14:46", "X30 Jr", "10 vueltas"],
          ["14:51 - 15:00", "X30 Sr", "10 vueltas"],
          ["15:05 - 15:14", "OK-N Jr", "10 vueltas"],
          ["15:19 - 15:28", "OK-N Sr", "10 vueltas"],
        ],
      },
      {
        nombre: "Carrera Final",
        detalle: "Competencia final",
        nota: "",
        carreras: [
          ["15:33 - 15:43", "Baby", "10 vueltas"],
          ["15:48 - 16:00", "Micro", "12 vueltas"],
          ["16:05 - 16:17", "Mini", "12 vueltas"],
          ["16:22 - 16:35", "X30 Jr", "15 vueltas"],
          ["16:40 - 16:53", "X30 Sr", "15 vueltas"],
          ["16:58 - 17:11", "OK-N Jr", "15 vueltas"],
          ["17:16 - 17:29", "OK-N Sr", "15 vueltas"],
        ],
      },
    ],
  },
];


const compuestosLlantas = [
  { categoria: "Baby", compuesto: "Duro", nota: "Compuesto obligatorio" },
  { categoria: "Micro", compuesto: "Duro", nota: "Compuesto obligatorio" },
  { categoria: "Mini", compuesto: "Duro", nota: "Compuesto obligatorio" },
  { categoria: "X30 Junior", compuesto: "Intermedio", nota: "Compuesto obligatorio" },
  { categoria: "X30 Senior", compuesto: "Blando", nota: "Compuesto obligatorio" },
  { categoria: "OK-N Junior", compuesto: "Intermedio", nota: "Compuesto obligatorio" },
  { categoria: "OK-N Senior", compuesto: "Blando", nota: "Compuesto obligatorio" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(220,0,30,0.32),transparent_35%),radial-gradient(circle_at_15%_15%,rgba(0,130,70,0.25),transparent_32%),linear-gradient(135deg,#050505,#111827,#050505)]" />
        <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-green-600 via-white to-red-600" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:py-28">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <Image
                src="/logos/onkade.png"
                alt="ONKADE"
                width={90}
                height={90}
                className="h-20 w-20 rounded-full object-contain"
                priority
              />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-white/60">
                  ONKADE
                </p>
                <p className="text-sm text-white/50">
                  Organización Nacional de Kartismo Deportivo
                </p>
              </div>
            </div>

            <h1 className="text-5xl font-black leading-none tracking-tight md:text-7xl">
              Próximamente más información. Espéralo.
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/75">
              ONKADE impulsa el desarrollo del kartismo en México a través de
              eventos organizados con transparencia, seguridad, alto nivel técnico
              y una estructura deportiva profesional.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#evento"
                className="rounded-full bg-red-600 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white hover:bg-red-700"
              >
                Ver Copa Tlaxcala 2026
              </a>

              <a
                href="#onkade"
                className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white hover:bg-white hover:text-black"
              >
                Conocer ONKADE
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-red-600/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <Image
                src="/images/kart-poster.png"
                alt="Kartismo deportivo ONKADE"
                width={900}
                height={700}
                className="h-auto w-full rounded-[1.5rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="border-y border-white/10 bg-white px-6 py-8 text-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-black/50">
            Evento organizado por ONKADE
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <Image
              src="/logos/onkade.png"
              alt="ONKADE"
              width={95}
              height={95}
              className="h-20 w-auto object-contain"
            />
            <Image
              src="/logos/copa-tlaxcala-2026.png"
              alt="Copa Mickel’s Track Day Tlaxcala 2026"
              width={120}
              height={120}
              className="h-24 w-auto object-contain"
            />
            <Image
              src="/logos/mickels.jpg"
              alt="Mickel’s Racing"
              width={140}
              height={80}
              className="h-16 w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* QUÉ ES ONKADE */}
      <section id="onkade" className="scroll-mt-24 bg-[#080808] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 p-8 shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">
                  ONKADE
                </p>

                <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">
                  Próximamente más información.
                  <span className="block text-red-500">Espéralo.</span>
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
                  Estamos preparando la presentación oficial de la Organización Nacional de Kartismo Deportivo.
                  Muy pronto compartiremos la visión, estructura, lineamientos y próximos pasos.
                </p>
              </div>

              <div className="rounded-[2rem] border border-red-500/30 bg-red-500/10 p-6">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">
                  En desarrollo
                </p>
                <p className="mt-4 text-2xl font-black uppercase leading-tight text-white">
                  Información institucional, estructura deportiva, lineamientos y próximos pasos.
                </p>
                <p className="mt-5 text-sm leading-7 text-zinc-300">
                  La información oficial será publicada una vez concluidas las presentaciones y reuniones de trabajo correspondientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-black">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-black/10 bg-black p-8 text-white">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/45">
              Próximamente más información
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Impulsar el kartismo mexicano
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Espéralo.</p>
          </article>

          <article className="rounded-[2rem] border border-black/10 bg-neutral-100 p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-black/45">
              Próximamente más información
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Una estructura nacional sólida
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/70">
              Espéralo.</p>
          </article>
        </div>
      </section>

      {/* PREPARADORES */}
      <section id="preparadores" className="scroll-mt-24 bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-400">
              Preparadores y equipos
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">
              Próximamente más información.
              <span className="block text-yellow-400">Espéralo.</span>
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-zinc-300 md:text-lg">
              Estamos trabajando en una propuesta de integración para preparadores, equipos y familias.
              La información oficial será presentada próximamente.
            </p>

            <p className="mt-4 max-w-4xl text-base leading-8 text-zinc-400">
              El objetivo es construir un esquema claro, serio y ordenado para fortalecer la participación
              de quienes forman parte del desarrollo del kartismo deportivo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0b] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/50">
              Valores ONKADE
            </p>
            <h2 className="mt-3 text-5xl font-black">
              Principios que guían nuestra organización
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Cada evento ONKADE se construye sobre valores que dan certeza,
              confianza y profesionalismo a todos los participantes.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor) => (
              <article
                key={valor.titulo}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-black">{valor.titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {valor.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTO */}
      <section id="evento" className="scroll-mt-24 bg-white px-6 py-20 text-black">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-neutral-100 p-4">
            <Image
              src="/logos/copa-tlaxcala-2026.png"
              alt="Copa Mickel’s Track Day Tlaxcala 2026"
              width={800}
              height={900}
              className="h-auto w-full rounded-[1.5rem] object-contain"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-black/45">
              Próximo evento
            </p>
            <h2 className="mt-3 text-5xl font-black leading-none">
              Copa Mickel’s Track Day Tlaxcala 2026
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/70">
              La Copa Mickel’s Track Day Tlaxcala 2026 será un evento de kartismo
              deportivo organizado bajo la visión de ONKADE, con enfoque en
              seguridad, participación familiar, competencia ordenada y desarrollo
              del talento mexicano.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-black p-5 text-white">
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Fecha
                </p>
                <p className="mt-1 text-2xl font-black">27 junio</p>
              </div>
              <div className="rounded-3xl bg-black p-5 text-white">
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Sede
                </p>
                <p className="mt-1 text-2xl font-black">Tlaxco</p>
              </div>
              <div className="rounded-3xl bg-black p-5 text-white">
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Inscripción
                </p>
                <p className="mt-1 text-2xl font-black">$2,000</p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-red-600/20 bg-black p-6 text-white">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
                  Avisos importantes
                </p>
                <h3 className="mt-3 text-2xl font-black">
                  Prepara tu equipo antes de llegar
                </h3>

                <div className="mt-5 space-y-3 text-sm leading-6 text-white/75">
                  <p>
                    <span className="font-black text-white">No habrá venta de aceites ni combustibles.</span>{" "}
                    Lleva tu mezcla lista para el evento.
                  </p>
                  <p>
                    <span className="font-black text-white">No habrá venta de llantas.</span>{" "}
                    Deberás respetar el tipo de compuesto correspondiente a tu categoría.
                  </p>
                  <p>
                    Lleva tus <span className="font-black text-white">llantas de lluvia</span> para estar preparado ante cualquier condición de pista.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/10 bg-neutral-100 p-6 text-black">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-black/45">
                  Viernes
                </p>
                <h3 className="mt-3 text-2xl font-black">
                  Prácticas y derecho de pista
                </h3>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-black p-5 text-white">
                    <p className="text-xs uppercase tracking-widest text-white/50">
                      Derecho de pista
                    </p>
                    <p className="mt-1 text-2xl font-black">$500.00</p>
                  </div>

                  <div className="rounded-3xl bg-black p-5 text-white">
                    <p className="text-xs uppercase tracking-widest text-white/50">
                      Horario
                    </p>
                    <p className="mt-1 text-2xl font-black">10:00 a.m.</p>
                    <p className="text-sm text-white/60">Cierre de pista 5:00 p.m.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a

  href="https://registroformspreeonkade-2.vercel.app/"

  target="_blank"

  rel="noopener noreferrer"

  className="rounded-full bg-red-600 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white hover:bg-red-700"

>

  Inscribirme ahora

</a>

              <a
                href="#categorias"
                className="rounded-full border border-black px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-black hover:bg-black hover:text-white"
              >
                Ver categorías
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* PROGRAMA OFICIAL DE PISTA */}

      <section className="bg-black px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl rounded-3xl border border-red-500/30 bg-red-500/10 p-6 md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">
            Documento obligatorio
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight">
            Carta responsiva de participación
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-300 md:text-base">
            Para poder participar, todo piloto deberá presentar carta responsiva firmada.
            En caso de menores de edad, deberá firmarla la madre, padre, tutor o representante legal.
            Este documento deberá entregarse en la mesa de registro antes de salir a pista.
          </p>
          <a
            href="/documentos/carta-responsiva-onkade.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-red-600 px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:bg-red-700"
          >
            Descargar carta responsiva
          </a>
        </div>
      </section>

      <section id="programa" className="scroll-mt-24 bg-[#0b0b0b] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Track Day Tlaxcala 2026
            </p>
            <h2 className="mt-3 text-5xl font-black leading-none">
              Programa oficial de pista
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Consulta los horarios de prácticas, clasificación, carreras, requisitos
              de salida a pista y actividades generales del viernes y sábado.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            <div className="mb-10 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-sm leading-6 text-yellow-100">
              <p className="font-black uppercase tracking-wide text-yellow-300">
                Aviso importante sobre horarios
              </p>
              <p className="mt-2">
                Los horarios, orden de salida, tiempos de pista y actividades del programa podrán cambiar
                o modificarse el día del evento por motivos de seguridad, clima, logística, condiciones
                de pista, número de participantes o indicaciones de dirección de carrera.
              </p>
            </div>

            {programasPista.map((programa) => (
              <article
                key={programa.dia}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white text-black"
              >
                <div className="bg-black px-6 py-5 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-white/45">
                    {programa.dia}
                  </p>
                  <h3 className="mt-2 text-3xl font-black">
                    {programa.titulo}
                  </h3>
                  <p className="mt-3 max-w-4xl text-sm leading-6 text-white/60">
                    {programa.resumen}
                  </p>
                </div>

                <div className="grid gap-0 lg:grid-cols-[0.7fr_1.3fr]">
                  <aside className="border-b border-black/10 bg-neutral-100 p-6 lg:border-b-0 lg:border-r">
                    <h4 className="text-sm font-black uppercase tracking-[0.25em] text-black/55">
                      Actividades generales
                    </h4>
                    <div className="mt-5 space-y-3">
                      {programa.eventosGenerales.map((evento) => (
                        <div
                          key={`${programa.dia}-${evento.hora}-${evento.actividad}`}
                          className="flex gap-4 rounded-2xl bg-white p-4"
                        >
                          <p className="min-w-28 font-black text-red-600">
                            {evento.hora}
                          </p>
                          <p className="text-sm font-bold text-black/70">
                            {evento.actividad}
                          </p>
                        </div>
                      ))}
                    </div>

                    <h4 className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-black/55">
                      Requisitos para salir a pista
                    </h4>
                    <ul className="mt-5 space-y-2 text-sm text-black/70">
                      {programa.requisitos.map((requisito) => (
                        <li key={requisito} className="flex gap-2">
                          <span className="mt-2 h-2 w-2 rounded-full bg-red-600" />
                          <span>{requisito}</span>
                        </li>
                      ))}
                    </ul>
                  </aside>

                  <div className="divide-y divide-red-600/20">
                    {programa.sesiones.map((sesion) => (
                      <div
                        key={`${programa.dia}-${sesion.nombre}`}
                        className="grid gap-0 lg:grid-cols-[0.35fr_0.65fr]"
                      >
                        <div className="bg-neutral-200 p-6">
                          <p className="text-xs font-black uppercase tracking-[0.25em] text-black/45">
                            Sesión
                          </p>
                          <h4 className="mt-2 text-2xl font-black">
                            {sesion.nombre}
                          </h4>
                          <p className="mt-1 text-sm font-bold uppercase tracking-wider text-black/55">
                            {sesion.detalle}
                          </p>
                          {sesion.nota ? (
                            <p className="mt-5 text-sm italic leading-6 text-black/55">
                              {sesion.nota}
                            </p>
                          ) : null}
                        </div>

                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse text-left text-sm">
                            <thead>
                              <tr className="bg-white">
                                <th className="border-b border-black/10 p-4 text-xs uppercase tracking-widest text-black/45">
                                  Horario
                                </th>
                                <th className="border-b border-black/10 p-4 text-xs uppercase tracking-widest text-black/45">
                                  Categoría
                                </th>
                                <th className="border-b border-black/10 p-4 text-xs uppercase tracking-widest text-black/45">
                                  Vueltas
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {sesion.carreras.map((carrera) => (
                                <tr
                                  key={`${programa.dia}-${sesion.nombre}-${carrera[0]}-${carrera[1]}`}
                                  className="odd:bg-neutral-50 even:bg-white"
                                >
                                  <td className="border-b border-black/5 p-4 font-black">
                                    {carrera[0]}
                                  </td>
                                  <td className="border-b border-black/5 p-4 font-bold">
                                    {carrera[1]}
                                  </td>
                                  <td className="border-b border-black/5 p-4 text-black/60">
                                    {carrera[2] || "—"}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black px-6 py-4 text-center text-xs font-black uppercase tracking-[0.25em] text-white/50">
                  Pit silencioso · Respeta los tiempos de transición entre categorías
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section id="categorias" className="scroll-mt-24 bg-white px-6 pb-20 text-black">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-black">Categorías por peso mínimo</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/70">
            Con el objetivo de promover una competencia más equilibrada, ONKADE
            considera categorías definidas por peso mínimo y tipo de compuesto de
            llanta.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-black/10">
            <table className="w-full border-collapse text-left">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4">Categoría</th>
                  <th className="p-4">Peso mínimo</th>
                  <th className="p-4">Compuesto</th>
                </tr>
              </thead>
              <tbody>
                {categorias.map(([categoria, peso, compuesto]) => (
                  <tr key={categoria} className="border-t border-black/10">
                    <td className="p-4 font-black">{categoria}</td>
                    <td className="p-4">{peso}</td>
                    <td className="p-4">{compuesto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>



      {/* LLANTAS Y COMPUESTOS */}
      <section id="llantas" className="scroll-mt-24 bg-white px-6 py-20 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-600">
              Llantas y compuestos
            </p>
            <h2 className="mt-3 text-5xl font-black leading-none">
              Cada categoría deberá respetar su compuesto
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/70">
              Para mantener una competencia ordenada y equilibrada, cada piloto
              deberá presentarse con el tipo de llanta correspondiente a su
              categoría. No habrá venta de llantas durante el evento.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {compuestosLlantas.map((item) => (
              <article
                key={item.categoria}
                className="rounded-[2rem] border border-black/10 bg-neutral-100 p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-black/40">
                  Categoría
                </p>
                <h3 className="mt-2 text-3xl font-black">
                  {item.categoria}
                </h3>

                <div className="mt-6 rounded-3xl bg-black p-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-white/45">
                    Compuesto
                  </p>
                  <p className="mt-1 text-2xl font-black text-red-500">
                    {item.compuesto}
                  </p>
                  <p className="mt-2 text-xs text-white/50">
                    {item.nota}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-red-600/20 bg-black p-7 text-white">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
                Aviso importante
              </p>
              <h3 className="mt-3 text-2xl font-black">
                No habrá venta de llantas
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Cada piloto o equipo deberá llevar sus propias llantas y respetar
                el compuesto asignado a su categoría. El incumplimiento podrá ser
                motivo de revisión por parte de la organización.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-neutral-100 p-7">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-black/45">
                Recomendación
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Lleva llantas de lluvia
              </h3>
              <p className="mt-4 text-sm leading-7 text-black/70">
                Se recomienda que cada equipo contemple llantas de lluvia para
                estar preparado ante cualquier cambio en las condiciones de pista
                durante el evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGLAMENTO */}
      <section id="reglamento" className="scroll-mt-24 bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Reglamento y seguridad
            </p>
            <h2 className="mt-3 text-5xl font-black leading-none">
              Criterios claros para una competencia justa
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              ONKADE promueve eventos con reglas claras, seguridad obligatoria,
              revisión técnica profesional y criterios deportivos verificables para
              proteger la integridad del evento y de todos los participantes.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
                01
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Reglamento deportivo
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Todos los pilotos deberán respetar las indicaciones de dirección de
                carrera, oficiales de pista, comisarios y personal operativo. Las
                decisiones se tomarán con base en criterios deportivos, seguridad y
                orden en pista.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
                02
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Seguridad obligatoria
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                El piloto deberá portar casco homologado, costilleras, NOMEX sin
                desgaste mayor, botas y guantes en buen estado. La cuellera será
                obligatoria en Baby, Micro, Mini, X30 Junior y OK-N Junior.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
                03
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Revisión técnica
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                La revisión técnica deberá ser aprobada antes de salir a pista. Se
                verificará que el kart se encuentre en condiciones seguras,
                funcionales y acordes a los criterios establecidos por la
                organización.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
                04
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Llantas y compuestos
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Cada categoría deberá respetar el tipo de compuesto definido por el
                comité organizador. No habrá venta de llantas en el evento, por lo
                que cada piloto o equipo deberá presentarse con el material
                correspondiente.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
                05
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Conducta en pista
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Se deberá respetar el pit silencioso, los tiempos de transición
                entre categorías, las banderas, las indicaciones de oficiales y las
                normas de convivencia deportiva dentro y fuera de pista.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
                06
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Comité de controversias
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Cualquier situación deportiva, técnica u operativa será revisada
                por el comité correspondiente, buscando decisiones transparentes,
                imparciales y orientadas a preservar la integridad del evento.
              </p>
            </article>
          </div>

          <div className="mt-12 rounded-[2rem] border border-red-600/30 bg-red-600/10 p-8">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-400">
              Importante
            </p>
            <h3 className="mt-3 text-3xl font-black">
              La seguridad y el cumplimiento técnico son requisitos para participar
            </h3>
            <p className="mt-4 max-w-5xl text-base leading-8 text-white/70">
              La organización podrá impedir la salida a pista de cualquier piloto o
              unidad que no cumpla con los requisitos de seguridad, documentación,
              revisión técnica, conducta deportiva o condiciones mínimas de
              operación establecidas para el evento.
            </p>
          </div>
        </div>
      </section>

      {/* PATROCINADORES */}
      <section id="patrocinadores" className="scroll-mt-24 bg-white px-6 py-20 text-black">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-black/45">
              Patrocinadores y aliados
            </p>
            <h2 className="mt-3 text-5xl font-black leading-none">
              Marcas que impulsan el kartismo mexicano
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/70">
              Los patrocinadores y aliados estratégicos son parte fundamental del
              crecimiento del kartismo deportivo. ONKADE busca construir relaciones
              de valor con marcas que compartan una visión de desarrollo,
              profesionalismo, seguridad y promoción del deporte en México.
            </p>
            <p className="mt-5 text-lg leading-8 text-black/70">
              Cada evento representa una oportunidad para conectar con familias,
              pilotos, equipos, preparadores, kartódromos y comunidades vinculadas
              al automovilismo deportivo.
            </p>

            <a
              href="#contacto"
              className="mt-8 inline-flex rounded-full bg-black px-7 py-4 text-sm font-black uppercase tracking-wider text-white hover:bg-red-600"
            >
              Quiero ser patrocinador
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-neutral-100 p-4">
            <img
              src="/images/kart-poster.png?v=poster-corregido-2026"
              alt="Patrocinadores ONKADE"
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-white/50">
            Contacto
          </p>
          <h2 className="mt-3 text-5xl font-black">Hablemos de kartismo</h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            ¿Quieres participar en un evento, registrar a un piloto, sumar a tu
            equipo, colaborar como preparador, patrocinar una fecha o recibir más
            información sobre ONKADE?
          </p>

          <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
              Correo institucional
            </p>

            <a
              href="mailto:administracion@onkade.mx"
              className="mt-4 block text-2xl font-black text-white hover:text-red-500 md:text-3xl"
            >
              administracion@onkade.mx
            </a>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Escríbenos para información general, registro de pilotos,
              preparadores, patrocinios, colaboración, prensa o dudas sobre
              próximos eventos.
            </p>

            <a
              href="mailto:administracion@onkade.mx?subject=Contacto%20desde%20la%20p%C3%A1gina%20web%20ONKADE"
              className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-wider text-white hover:bg-red-700"
            >
              Enviar correo
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}