import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import HomePage from './HomePage'

function All() {
  return (
    <div>
        <HomePage/>  
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Important-UX-Designer-Skills-That-You-Should-Know.webp" />
        <Card.Body>
          <Card.Title>Twele Important UI/UX Skills </Card.Title>
          <Card.Text>
          The world of UI/UX is becoming too crowded these days as many people take up this field and try to do something in it. Because of this,
           companies now started to look for people who are specific and strong in any one of the two. In that manner, 
          if you want to excel as a UX designer, all you need is the right UX designer skills.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">14 December 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-2048x1072.png" />
        <Card.Body>
          <Card.Title>UI vs UX Design</Card.Title>
          <Card.Text>
          If not, you have come to the right place. In this blog, we’ll help you to distinguish between UI vs. UX designers.
           We’ll uncover some of the important points that you should know before getting into a UI/UX career.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">14 December 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/12/top_12_key_ui_ux_design_principles.webp" />
        <Card.Body>
          <Card.Title>UI/UX Design Principles</Card.Title>
          <Card.Text>
          The UI/UX designers should work on it by understanding the mindset of users, their expectations, 
          and how they like to interact with the product. Based on user research and analysis,
           they incorporate these UI/UX design principles to develop a simple yet effective interface.
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

export default All;