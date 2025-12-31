import Card from "react-bootstrap/card";
import Button from "react-bootstrap/button";

const aboutMe = {
  name: "Skyler Fokine",
  img: "willbe in assests",
  blurb: "Computer Science and Artifical Intelligence Major",
};

export default function HeadshotCard() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Image src="holder.js/171x180" roundedCircle />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
