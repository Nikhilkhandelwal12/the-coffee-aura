import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#ead8b9] bg-[#fff8e8]/95 text-[#27150e] backdrop-blur dark:bg-[#20130f]/95 dark:text-[#fff4df]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="/" className="flex items-center gap-3">
          <img src="/brand-logo.png" alt="The कॉffee Aura logo" className="h-12 w-12 rounded-full object-cover" />
          <span className="leading-tight">
            <b className="serif text-lg">The कॉffee Aura</b>
            <small className="block text-xs tracking-wide">A Sip of Good Vibes</small>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a className="transition-opacity hover:opacity-70" href="/menu">Menu</a>
          <a className="transition-opacity hover:opacity-70" href="/#story">Our Story</a>
          <a className="transition-opacity hover:opacity-70" href="/#visit">Visit Us</a>
          <a className="transition-opacity hover:opacity-70" href="/admin">Admin</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="/menu" className="rounded-full bg-[#3b1e12] px-4 py-2 text-sm text-[#fff8e8] transition-opacity hover:opacity-90">Order Now</a>
        </div>
      </div>
    </header>
  );
}
