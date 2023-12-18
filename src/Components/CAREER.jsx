import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import HomePage from './HomePage';
import Nav from 'react-bootstrap/Nav';


function CAREER() {
  return (
    <div>
        <HomePage/>
       
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Mechanical-Engineering-Resume-Important-Things-To-Look-Out-For.webp" />
        <Card.Body>
          <Card.Title>Meechanical Engineering Resume</Card.Title>
          <Card.Text>
          With the development of technology, most of us started forgetting about mechanical engineering which pioneered the whole industrial revolution. 
          It definitely is a tough shell to crack but with the right mechanical engineering resume, it is not that hard.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">14 December 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/11/1-2048x1072.webp" />
        <Card.Body>
          <Card.Title>10 Tips and Triks to Follow</Card.Title>
          <Card.Text>
          With the growing concerns of digital security increasing day by day, organizations turn to ethical hackers to test their security levels. Whether small or large, they play an important role in tightening their security.
           An ethical hacker resume is a must-need for one who wants to excel in that field.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">14 December 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp" />
        <Card.Body>
          <Card.Title>Top product-based companies without coding required</Card.Title>
          <Card.Text>
          Every one of us wants to work in top product-based companies, Right? But, Not everyone has great coding skills. What if I tell you, you can get into it without coding knowledge? Sounds Great, 
          Right? Anyone can apply for these job roles irrespective of their educational background.
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

export default CAREER;