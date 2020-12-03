import {Navbar, Nav, Container} from 'react-bootstrap';


import NextImage from 'next/image';
import { Image, StyledHeader, StyledNavbar } from '../../styles/components/header';

export default function Header() {
  return (
    <StyledHeader>
      <Image>
        <NextImage 
          src="/images/wallpaper.jpg"
          alt="Picture of the Avengers"
          height="fill"
          width="fill"
        />
      </Image>
      <StyledNavbar>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React Marvel</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto ml-auto">
                <Nav.Link href="#features">Filmes</Nav.Link>
                <Nav.Link href="#pricing">Series</Nav.Link>
                <Nav.Link href="#deets">Personagens</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </StyledNavbar>
    </StyledHeader>
  );
}