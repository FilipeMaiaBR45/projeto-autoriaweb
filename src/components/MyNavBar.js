import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function MyNavBar() {
  return (
    <>
      <Navbar
        sticky="top"
        variant="dark"
        expand="md"
        style={{ backgroundColor: '#2f3a60' }}
      >
        <Navbar.Brand className="p-0" href="/">
          TADS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Apresentação</Nav.Link>
            <Nav.Link href="/projeto-pedagogico">
              Projeto pedagógico do curso
            </Nav.Link>
            <Nav.Link href="/noticias">Notícias</Nav.Link>
            <NavDropdown title="Outros" id="basic-nav-dropdown">
              <NavDropdown.Item href="/calendario">Calendário</NavDropdown.Item>
              <NavDropdown.Item href="/contato">Contato</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">SIGAA</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavBar;
