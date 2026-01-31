// src/components/HeadshotCard.jsx
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

import headshot from "../assets/headshot.jpg";

const aboutMe = {
  name: "Skyler Fokine",
  blurb: "Computer Science & Artificial Intelligence Major",
  location: "Ohio, USA",
  links: [
    { label: "GitHub", href: "https://github.com/", icon: "bi bi-github" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
      icon: "bi bi-linkedin",
    },
    { label: "Email", href: "mailto:you@example.com", icon: "bi bi-envelope" },
  ],
};

export function HeadshotCard() {
  return (
    <Card className="shadow-sm  border-0">
      <Card.Body>
        {/* Cropped + rounded hero image */}
        <div
          className="w-100 overflow-hidden rounded-4 mb-3"
          style={{ height: 220 }}
        >
          <Image
            src={headshot}
            alt={`${aboutMe.name} headshot`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <Card.Title className="mb-1">{aboutMe.name}</Card.Title>
        <Card.Text className="text-muted mb-2">{aboutMe.blurb}</Card.Text>
        <Card.Text className="text-muted small mb-3">
          {aboutMe.location}
        </Card.Text>

        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {aboutMe.links.map((l) => (
            <Button
              key={l.label}
              variant="outline-light"
              size="sm"
              className="btn-outline-paper d-inline-flex align-items-center gap-2"
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {/* Bootstrap Icons (make sure you installed/loaded bootstrap-icons) */}
              <i className={l.icon} />
              {l.label}
            </Button>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
}
