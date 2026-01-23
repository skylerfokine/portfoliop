import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const experience = [
  {
    role: "Software / Web Developer",
    org: "Freelance",
    dates: "2024 – Present",
    bullets: [
      "Built responsive marketing + portfolio sites for small businesses.",
      "Shipped hosting + maintenance packages and ongoing updates.",
    ],
  },
  {
    role: "IT / Engineering Co-op",
    org: "Company Name",
    dates: "2023 – 2024",
    bullets: [
      "Automated reporting and improved internal tooling.",
      "Collaborated with cross-functional teams on deployments.",
    ],
  },
];

const tools = [
  "React",
  "Vite",
  "Bootstrap / React-Bootstrap",
  "Node.js",
  "Git / GitHub",
  "SQL",
  "Python",
];

const projects = [
  {
    name: "Portfolio Site",
    desc: "React + Bootstrap portfolio with sticky profile card.",
    tags: ["React", "Bootstrap"],
    href: "#",
  },
  {
    name: "Wallpaper Engine-style App",
    desc: "Dynamic content embedded into Windows wallpaper (WIP).",
    tags: ["Windows", "C++/C#", "Graphics"],
    href: "#",
  },
  {
    name: "Productivity App",
    desc: "Mobile app with Firebase backend (WIP).",
    tags: ["React Native", "Firebase"],
    href: "#",
  },
];

function Section({ title, children }) {
  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <Card.Title className="mb-3">{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  );
}

export function RightColumn() {
  return (
    <>
      <Section title="Experience">
        <div className="d-flex flex-column gap-3">
          {experience.map((e) => (
            <div key={`${e.role}-${e.org}`}>
              <div className="d-flex justify-content-between flex-wrap gap-2">
                <div>
                  <div className="fw-semibold">{e.role}</div>
                  <div className="text-muted">{e.org}</div>
                </div>
                <div className="text-muted small">{e.dates}</div>
              </div>
              <ul className="mt-2 mb-0">
                {e.bullets.map((b) => (
                  <li key={b} className="text-muted">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Tools">
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {tools.map((t) => (
            <Badge key={t} bg="secondary" className="py-2 px-3">
              {t}
            </Badge>
          ))}
        </Stack>
      </Section>

      <Section title="Recent Projects">
        <ListGroup variant="flush">
          {projects.map((p) => (
            <ListGroup.Item key={p.name} className="px-0">
              <div className="d-flex justify-content-between align-items-start gap-3">
                <div>
                  <div className="fw-semibold">{p.name}</div>
                  <div className="text-muted">{p.desc}</div>
                  <div className="mt-2 d-flex gap-2 flex-wrap">
                    {p.tags.map((tag) => (
                      <Badge
                        key={tag}
                        bg="light"
                        text="dark"
                        className="border"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                {p.href && (
                  <a className="small text-nowrap" href={p.href}>
                    View →
                  </a>
                )}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Section>
    </>
  );
}
