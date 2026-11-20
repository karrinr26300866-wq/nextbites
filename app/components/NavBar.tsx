import Link from "next/link";

const navigation = [
  { label: "Recipes", href: "#recipes" },
  { label: "Our story", href: "#our-story" },
];

export function NavBar() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="NextBites home">
          <span className="brand-mark" aria-hidden="true">
            n
          </span>
          <span>nextbites</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#recipes">
          Find your next bite <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
