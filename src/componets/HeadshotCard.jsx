import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import headshot from "../assets/headshot.jpg";

const aboutMe = {
  name: "Skyler Fokine",
  img: "willbe in assests",
  blurb: "Computer Science and Artifical Intelligence Major",
};

export function HeadshotCard() {
  return (
    <>
      <Card style={{ width: "344px", height: "640px", position: sticky }}>
        <Card.Body>
          <div
            className="w-100 overflow-hidden rounded-4"
            style={{ height: "180px" }}
          >
            <Image src={headshot} className="w-100 h-100 object-fit-cover " />
          </div>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="d-flex align-items-start">
            <Nav.Item>
              <Nav.Link eventKey="1" href="#/home">
                NavLink 1 content
              </Nav.Link>
            </Nav.Item>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
