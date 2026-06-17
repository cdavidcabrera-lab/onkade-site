import Image from "next/image";
import Link from "next/link";

const pilares = [
  {
    titulo: "Preparadores",
    texto: "Los preparadores son el punto medular de ONKADE: forman, acompañan y proyectan a los pilotos dentro del kartismo competitivo.",
  },
  {
    titulo: "Competencia",
    texto: "Eventos organizados con categorías claras, procesos profesionales y una estructura deportiva de alto nivel.",
  },
  {
    titulo: "Transparencia",
    texto: "Reglamentos definidos, resultados verificables y criterios de participación claros para pilotos, equipos y familias.",
  },
  {
    titulo: "Proyección",
    texto: "Impulsamos el talento mexicano hacia competencias locales, estatales, nacionales e internacionales.",
  },
];

const categorias = [
  ["Baby", "Duro", "Obligatoria"],
  ["Micro", "Duro", "Obligatoria"],
  ["Mini", "Duro", "Obligatoria"],
  ["X30 Jr", "Intermedio", "Obligatoria"],
  ["X30 Sr", "Blando", "No obligatoria"],
  ["OK-N Jr", "Intermedio", "Obligatoria"],
  ["OK-N Sr", "Blando", "No obligatoria"],
];

const valores = [
  "Competencia",
  "Transparencia",
  "Desarrollo",
  "Imparcialidad",
  "Seguridad",
  "Profesionalismo",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">


      {/* HERO */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_70%_20%,rgba(206,17,38,0.35),transparent_35%),radial-gradient(circle_at_20%_10%,rgba(0,146,70,0.28),transparent_30%),linear-gradient(135deg,#050505_0%,#111827_50%,#050505_100%)]">
        <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-green-600 via-white to-red-600" />

        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(45deg,transparent_25%,white_25%,white_27%,transparent_27%,transparent_75%,white_75%,white_77%,transparent_77%)] bg-[length:42px_42px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/80">
                México · Kartismo · Competencia
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/80">
                Temporada 2026
              </div>
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-white/60">
              Organización Nacional de Kartismo Deportivo
            </p>

            <h1 className="max-w-4xl text-6xl font-black leading-none tracking-tight md:text-8xl">
              Kartismo mexicano de alto nivel
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/75">
              ONKADE impulsa el kartismo deportivo en México con competencia,
              transparencia, desarrollo, seguridad y alto nivel técnico.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#evento"
                className="rounded-full bg-red-600 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-red-950/40 transition hover:bg-red-700"
              >
                Ver Copa Tlaxcala 2026
              </a>

              <a
                href="#onkade"
                className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
              >
                Conocer ONKADE
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-black">2026</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/50">
                  Temporada
                </p>
              </div>
              <div>
                <p className="text-3xl font-black">7</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/50">
                  Categorías
                </p>
              </div>
              <div>
                <p className="text-3xl font-black">MX</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/50">
                  Enfoque nacional
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-red-600/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-white p-4">
                  <Image
                    src="/logos/onkade.png"
                    alt="Logotipo ONKADE"
                    width={260}
                    height={260}
                    className="mx-auto"
                  />
                </div>

                <div className="rounded-3xl bg-white p-4">
                  <Image
                    src="/logos/copa-tlaxcala-2026.png"
                    alt="Copa Tlaxcala 2026"
                    width={260}
                    height={260}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="mt-5 rounded-3xl bg-black/70 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/50">
                  Próximo evento
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  Copa Mickel’s - Track Day Tlaxcala 2026
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  27 de junio de 2026 · Kartódromo Tlaxco, Tlaxcala.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KART IMAGE STRIP */}
      <section className="relative overflow-hidden border-y border-white/10 bg-white text-black">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-black/45">
              Copa Mickel’s · Track Day Tlaxcala
            </p>
            <h2 className="mt-3 text-5xl font-black leading-none">
              Un evento nacional con imagen profesional
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/70">
              La identidad de ONKADE debe comunicar organización, velocidad,
              confianza y alto rendimiento. Por eso integramos elementos de
              México, kartismo competitivo, patrocinadores y una estructura
              visual limpia de primer nivel.
            </p>
          </div>

          <div className="relative min-h-[280px]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-green-600 via-white to-red-600 opacity-20 blur-2xl" />
            <Image
              src="/images/kart-poster.png"
              alt="Kart de competencia"
              width={760}
              height={420}
              className="relative mx-auto max-h-[380px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section id="onkade" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              Estructura nacional
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              Competencia, transparencia y desarrollo
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              ONKADE integra preparadores, pilotos, familias, kartódromos,
              promotores y patrocinadores bajo una visión profesional del
              kartismo deportivo.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pilares.map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <h3 className="text-2xl font-black">{item.titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PREPARADORES */}
      <section id="preparadores" className="bg-[#0b0b0b] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              Punto medular de ONKADE
            </p>
            <h2 className="mt-3 text-5xl font-black leading-none md:text-6xl">
              Los preparadores son el eje técnico y formativo
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-lg leading-9 text-white/72">
              ONKADE reconoce a los preparadores como el vínculo fundamental
              entre pilotos, familias, equipos, kartódromos y organización.
              Su experiencia técnica, acompañamiento y liderazgo son esenciales
              para elevar el nivel competitivo del kartismo en México.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white/8 p-5">
                <h3 className="font-black">Formación de pilotos</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Acompañan el desarrollo deportivo, técnico y competitivo de
                  cada piloto.
                </p>
              </div>
              <div className="rounded-2xl bg-white/8 p-5">
                <h3 className="font-black">Confianza para familias</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Son el puente entre la organización, el equipo y el entorno
                  familiar del piloto.
                </p>
              </div>
              <div className="rounded-2xl bg-white/8 p-5">
                <h3 className="font-black">Nivel técnico</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Elevan la calidad mecánica, estratégica y deportiva de la
                  competencia.
                </p>
              </div>
              <div className="rounded-2xl bg-white/8 p-5">
                <h3 className="font-black">Proyección</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Ayudan a impulsar talento mexicano hacia mejores escenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTO */}
      <section id="evento" className="bg-white px-6 py-20 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Image
                src="/logos/copa-tlaxcala-2026.png"
                alt="Copa Mickel's Track Day Tlaxcala 2026"
                width={460}
                height={460}
                className="mx-auto"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-black/45">
                Evento oficial ONKADE
              </p>
              <h2 className="mt-3 text-5xl font-black leading-none md:text-6xl">
                Copa Mickel’s - Track Day Tlaxcala 2026
              </h2>
              <p className="mt-5 text-lg leading-8 text-black/70">
                Evento nacional de kartismo deportivo con categorías por peso,
                escrutinio técnico, organización profesional y participación de
                pilotos, equipos, familias y preparadores.
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
                    Inscripción
                  </p>
                  <p className="mt-1 text-2xl font-black">$2,000</p>
                </div>
                <div className="rounded-3xl bg-black p-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Sede
                  </p>
                  <p className="mt-1 text-2xl font-black">Tlaxco</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://formspree.io/f/meewrkyr"
                  className="rounded-full bg-red-600 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white hover:bg-red-700"
                >
                  Inscribirme
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

          <div id="categorias" className="mt-16">
            <h3 className="text-4xl font-black">Categorías</h3>

            <div className="mt-6 overflow-hidden rounded-3xl border border-black/10">
              <table className="w-full border-collapse text-left text-sm md:text-base">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="p-4">Categoría</th>
                    <th className="p-4">Llantas</th>
                    <th className="p-4">Cuellera</th>
                  </tr>
                </thead>
                <tbody>
                  {categorias.map(([categoria, llantas, cuellera]) => (
                    <tr key={categoria} className="border-t border-black/10">
                      <td className="p-4 font-black">{categoria}</td>
                      <td className="p-4">{llantas}</td>
                      <td className="p-4">{cuellera}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* REGLAMENTO */}
      <section id="reglamento" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              Certeza deportiva
            </p>
            <h2 className="mt-3 text-5xl font-black leading-none md:text-6xl">
              Reglamento y escrutinio técnico
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/70">
              ONKADE promueve eventos con reglamentos claros, procesos
              transparentes y escrutinio técnico profesional, imparcial y
              estricto en materia de motores, carburadores y condiciones
              mecánicas establecidas por fabricantes y lineamientos CIK/FIA
              aplicables.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-black">Equipo obligatorio</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/65">
                  <li>Casco homologado</li>
                  <li>Costilleras</li>
                  <li>NOMEX sin desgaste mayor</li>
                  <li>Botas</li>
                  <li>Guantes sin desgaste mayor</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-black">Revisión técnica</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/65">
                  <li>Motores</li>
                  <li>Carburadores</li>
                  <li>Condiciones mecánicas</li>
                  <li>Criterios de fabricante</li>
                  <li>Lineamientos CIK/FIA aplicables</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATROCINADORES */}
      <section className="bg-white px-6 py-20 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-black/45">
              Patrocinadores y aliados
            </p>
            <h2 className="mt-3 text-5xl font-black">
              Marcas que impulsan el kartismo
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="flex min-h-48 items-center justify-center rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <Image
                src="/logos/mickels.jpg"
                alt="Mickel's"
                width={260}
                height={120}
                className="max-h-28 w-auto object-contain"
              />
            </div>

            <div className="flex min-h-48 items-center justify-center rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <Image
                src="/logos/onkade.png"
                alt="ONKADE"
                width={180}
                height={180}
                className="max-h-36 w-auto object-contain"
              />
            </div>

            <div className="flex min-h-48 items-center justify-center rounded-3xl border border-dashed border-black/20 bg-black/[0.03] p-8 text-center">
              <p className="font-black uppercase tracking-widest text-black/40">
                Espacio para aliados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {valores.map((valor) => (
              <span
                key={valor}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black uppercase tracking-wider text-white/70"
              >
                {valor}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              Contacto
            </p>
            <h2 className="mt-3 text-5xl font-black leading-none">
              Hablemos de kartismo
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Para información sobre eventos, preparadores, pilotos,
              patrocinadores o alianzas, comunícate con ONKADE.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="space-y-4 text-white/75">
              <p>
                <span className="font-black text-white">Información general:</span>{" "}
                contacto@onkade.mx
              </p>
              <p>
                <span className="font-black text-white">Registros:</span>{" "}
                registro@onkade.mx
              </p>
              <p>
                <span className="font-black text-white">Preparadores:</span>{" "}
                preparadores@onkade.mx
              </p>
              <p>
                <span className="font-black text-white">Dirección:</span>{" "}
                direccion@onkade.mx
              </p>
            </div>

            <a
              href="https://formspree.io/f/meewrkyr"
              className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white hover:bg-red-700"
            >
              Registro Copa Tlaxcala 2026
            </a>
          </div>
        </div>
      </section>


    </main>
  );
}