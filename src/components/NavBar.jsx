import Stack from "react-bootstrap/Stack";

const items = [
  { key: "home", icon: "bi bi-house", label: "Home", href: "#home" },
  {
    key: "projects",
    icon: "bi bi-folder2",
    label: "Projects",
    href: "#projects",
  },
  { key: "experience", icon: "bi bi-book", label: "Book", href: "#experience" },
  {
    key: "tools",
    icon: "bi bi-wrench-adjustable",
    label: "Tools",
    href: "#tools",
  },
  {
    key: "contact",
    icon: "bi bi-chat-right-quote",
    label: "Contact Me",
    href: "#contact",
  },
];

export function FloatingNav({ activeKey = "home" }) {
  return (
    <nav className="floating-nav" aria-label="Primary">
      <Stack direction="horizontal" gap={3} className="floating-nav__inner">
        {items.map((it) => (
          <a
            key={it.key}
            href={it.href}
            className={`floating-nav__btn ${activeKey === it.key ? "is-active" : ""}`}
            aria-label={it.label}
            title={it.label}
          >
            <i className={it.icon} />
          </a>
        ))}
      </Stack>
    </nav>
  );
}
