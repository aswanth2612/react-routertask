import Nav from 'react-bootstrap/Nav';

function HomePage() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/All">All</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/FSD">FULLSTACK DEVELOPER</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/DS">DATA SCIENCE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/CS">CYBER SECURITY</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/CAREER">CAREER</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default HomePage;