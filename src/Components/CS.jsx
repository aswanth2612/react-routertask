import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import HomePage from './HomePage'


function CS() {
  return (
    <div>
        <HomePage/>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif" />
        <Card.Body>
          <Card.Title>Is Coding Required for Cybersecurity?</Card.Title>
          <Card.Text>
          Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, 
          it depends on many facets. Because just starting off, many roles don’t really require you to code and based on how advanced you want to get, programming may or may not be all that important for you.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">14 December 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png" />
        <Card.Body>
          <Card.Title>Cyber Security vs Ethical Hacking</Card.Title>
          <Card.Text>
          Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, 
          users are authenticated & your data and privacy concerns are all kept safe.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">14 December 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png" />
        <Card.Body>
          <Card.Title>Types of Cyber Security</Card.Title>
          <Card.Text>
          Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc. With the advent of technology and the increasing interconnectedness of organizational systems and networks, 
          effective cybersecurity management and strategy are necessary for organizations of all sizes and types accordingly.
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

export default CS;