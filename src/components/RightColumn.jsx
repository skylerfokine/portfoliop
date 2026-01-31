// src/components/RightColumn.jsx
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { ToolsCarousel } from "./ToolsCarousel";

const experience = [
  {
    role: "Software Development Co-op",
    org: "Midmark Corp. — Versailles, OH",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Migrated legacy Salesforce Process Builder automations to Salesforce Flow in a production org, standardizing logic and improving maintainability while reducing change-risk during future releases.",
      "Cleaned and standardized 1,530+ production Contact records by developing repeatable cleanup procedures and documentation for the team, improving data quality and reducing downstream reporting/integration issues.",
    ],
  },
  {
    role: "Systems Engineering Intern",
    org: "Midmark Corp. — Versailles, OH",
    dates: "May 2024 – Aug 2024",
    bullets: [
      "Built a Python automation tool to generate software update packages for engineering workflows, cutting manual processing time by ~99% and reducing human error.",
      "Executed system-level validation testing across release builds and escalated defects to engineering teams with clear reproduction steps, improving overall release quality and reducing late-stage surprises.",
    ],
  },
];

const projects = [
  {
    name: "FitTrack — Nutrition & Exercise Web App",
    dates: "Oct 2025 – Dec 2025",
    desc: "Designed a 20-table MySQL database using a staging → transform → production pipeline to ingest 3 public datasets, enabling clean analytics-ready data and scalable logging.",
    tags: ["MySQL", "Node.js", "REST APIs"],
  },
  {
    name: "Fokine Construction Company Website",
    dates: "Jul 2024 – Dec 2025",
    desc: "Scoped site information architecture with business owner and built a mobile-first site using HTML/CSS/JS; deployed to a low-maintenance static host with Git handoff documentation.",
    tags: ["HTML/CSS", "JavaScript", "Git"],
  },
];

function SectionBlock({ id, title, children }) {
  return (
    <section id={id} className="section-block">
      <div className="section-title">{title}</div>
      {children}
    </section>
  );
}

export function RightColumn() {
  return (
    <div className="right-panel">
      <SectionBlock id="experience" title="Experience">
        <div className="d-flex flex-column gap-4">
          {experience.map((e) => (
            <div key={`${e.role}-${e.dates}`}>
              <div className="d-flex justify-content-between flex-wrap gap-2">
                <div>
                  <div className="fw-semibold">{e.role}</div>
                  <div className="text-muted">{e.org}</div>
                </div>
                <div className="text-muted small">{e.dates}</div>
              </div>

              <ul className="mt-2">
                {e.bullets.map((b) => (
                  <li key={b} className="text-muted">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="tools" title="Tools">
        <ToolsCarousel />
      </SectionBlock>

      <SectionBlock id="projects" title="Recent Projects">
        <div className="d-flex flex-column">
          {projects.map((p) => (
            <div key={p.name} className="project-row">
              <div className="d-flex justify-content-between align-items-start gap-3">
                <div>
                  <div className="fw-semibold">{p.name}</div>
                  <div className="text-muted small">{p.dates}</div>
                  <div className="text-muted mt-1">{p.desc}</div>
                  <div className="mt-2 d-flex gap-2 flex-wrap">
                    {p.tags.map((tag) => (
                      <Badge key={tag} className="badge-spruce">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}
