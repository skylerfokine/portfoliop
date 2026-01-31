import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FloatingNav } from "./components/NavBar.jsx";
import { HeadshotCard } from "./components/HeadshotCard";
import { RightColumn } from "./components/RightColumn";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <>
      <div className="nav-slot">
        <FloatingNav />
      </div>

      <Container className="py-4">
        <Row className="g-4">
          {/* LEFT: sticky card */}
          <Col lg={4} className="d-none d-lg-block">
            <div className="position-sticky" style={{ top: "1.25rem" }}>
              <HeadshotCard />
            </div>
          </Col>

          {/* RIGHT: content */}
          <Col lg={8}>
            {/* Mobile: show card on top (not sticky) */}
            <div className="d-lg-none mb-4">
              <HeadshotCard />
            </div>

            <RightColumn />

            {/* Contact form at bottom */}
            <section id="contact">
              <div className="mt-5">
                <ContactSection />
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}
