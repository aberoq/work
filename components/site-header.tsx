const links = [
  { href: "/", label: "Alejandro Bernal" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="px-5 py-4">
      <nav className="flex items-baseline justify-between gap-4 text-[13px] font-medium tracking-tight">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="shrink-0">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
