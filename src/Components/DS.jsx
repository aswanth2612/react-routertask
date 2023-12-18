import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import HomePage from './HomePage'

function DS() {
  return (
    <div>
        <HomePage />  
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-2048x1072.png" />
        <Card.Body>
          <Card.Title>Top-10 Data Science Tools</Card.Title>
          <Card.Text>
          Data Science is an in-demand profession and will continue growing in the coming years. From this, you can assume its importance, and now if you want to get into data science,
           you must know about the tools, skills, and frameworks required. You must begin with the skills required and for that data science tools come to the top.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">14 December 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp" />
        <Card.Body>
          <Card.Title>Differencr Between Data Science and DAta Engineering</Card.Title>
          <Card.Text>
          India has been making some serious waves in the world of data. Just like the rest of the world,
           we’re seeing a massive jump in the demand for data science and data engineering roles. And this isn’t just a passing trend. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">14 December 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp" />
        <Card.Body>
          <Card.Title>Top-10 High paying jobs in Data Science</Card.Title>
          <Card.Text>
          In this blog, we’ll explore the top 10 non-coding jobs in data science that are in high demand this year. 
          These no-code roles in data science offer huge salaries, remote working opportunities, and promising career growth.
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

export default DS;