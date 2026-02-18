import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useForm, ValidationError } from "@formspree/react";

export function ContactSection() {
  const [state, handleSubmit] = useForm("xrealajl");

  if (state.succeeded) {
    return (
      <Card className="shadow-sm border-0">
        <Card.Body>
          <Card.Title className="mb-3">Contact</Card.Title>
          <Alert variant="success" className="mb-0">
            Thanks! Your message has been sent.
          </Alert>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm border-0">
      <Card.Body>
        <Card.Title className="mb-3">Contact</Card.Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              placeholder="What can I help with?"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Form.Group>

          {state.errors?.length > 0 && (
            <Alert variant="danger">
              Something went wrong—please try again.
            </Alert>
          )}

          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              className="atn-amthyst"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send"}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
