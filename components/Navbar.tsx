import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "ONKADE", href: "#onkade" },
  { label: "Preparadores", href: "#preparadores" },
  { label: "Eventos", href: "#evento" },
  { label: "Programa", href: "#programa" },
  { label: "Llantas", href: "#llantas" },
  { label: "Reglamento", href: "#reglamento" },
  { label: "Patrocinadores", href: "#patrocinadores" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/onkade.png"
            alt="ONKADE"
            width={58}
            height={58}
            className="rounded-full"
            priority
          />
          <div>
            <p className="text-2xl font-black leading-none tracking-tight text-white">
  ONKADE
</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/65">
  Kartismo Deportivo
</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://registroformspreeonkade-2.vercel.app/"
          className="rounded-full bg-red-600 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:bg-red-700"
        >
          Inscribirme
        </Link>
      </div>
    </header>
  );
}