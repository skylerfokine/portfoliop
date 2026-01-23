import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function ContactSection() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title className="mb-3">Contact</Card.Title>

        {/* This is a front-end form stub. Wire it to EmailJS, Formspree, a server endpoint, etc. */}
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="you@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="What can I help with?"
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button type="submit" variant="dark">
              Send
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
