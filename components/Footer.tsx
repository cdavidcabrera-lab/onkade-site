import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logos/onkade.png"
              alt="ONKADE"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="text-xl font-black">ONKADE</p>
              <p className="text-xs text-white/45">
                Organización Nacional de Kartismo Deportivo, A.C.
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
            Impulsamos el kartismo deportivo en México con competencia,
            transparencia, desarrollo, seguridad y alto nivel técnico.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-widest">
            Accesos rápidos
          </h3>

          <div className="mt-4 grid gap-2 text-sm text-white/60">
            <Link href="/onkade" className="hover:text-white">
              ONKADE
            </Link>
            <Link href="/preparadores" className="hover:text-white">
              Preparadores
            </Link>
            <Link href="/eventos" className="hover:text-white">
              Eventos
            </Link>
            <Link href="/reglamento" className="hover:text-white">
              Reglamento
            </Link>
            <Link href="/patrocinadores" className="hover:text-white">
              Patrocinadores
            </Link>
            <Link href="/contacto" className="hover:text-white">
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-widest">
            Contacto
          </h3>

          <div className="mt-4 space-y-2 text-sm text-white/60">
            <p>contacto@onkade.mx</p>
            <p>registro@onkade.mx</p>
            <p>preparadores@onkade.mx</p>
            <p>direccion@onkade.mx</p>
          </div>

          <Link
            href="https://registroformspreeonkade-2.vercel.app/"
            className="mt-6 inline-flex rounded-full bg-red-600 px-5 py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-red-700"
          >
            Copa Tlaxcala 2026
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/35">
        © 2026 ONKADE · Kartismo Deportivo en México
      </div>
    </footer>
  );
}