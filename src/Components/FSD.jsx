import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import HomePage from './HomePage'

function FSD() {
  return (
    <div>
        <HomePage /> 
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp" />
        <Card.Body>
          <Card.Title>Fullstack vs Software Engieer</Card.Title>
          <Card.Text>
          A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software. 
          They work on specific bits of the software and make sure everything fits together well. They know a lot about programming, how to make things work, and design software.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">14 December 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp" />
        <Card.Body>
          <Card.Title>FullStack Development</Card.Title>
          <Card.Text>
          So, let’s explore these books and see how they can help you become a skilled full-stack developer. No matter if you’re new to coding or have some experience,
           these books have something valuable for you in your journey to becoming a full-stack developer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">14 December 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png" />
        <Card.Body>
          <Card.Title>Top-10 Tools for Fullstack Developer</Card.Title>
          <Card.Text>
          As a full-stack developer, having the right set of tools is crucial for your success. In the ever-evolving world of web development,
           staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">14 December 2023</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default FSD;