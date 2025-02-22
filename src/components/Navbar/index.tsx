import { useTheme } from "context/ThemeContext"
import { useState } from "react"
import Link from "next/link"
import { Navbar, Button, Container, Nav } from "react-bootstrap"
import styles from "./styles.module.scss"

const CustomNavbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Navbar
      expand="lg"
      className={`${styles.navbar} ${isMenuOpen ? styles.active : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home" className={styles.logo}>
          Meu Portfólio
        </Navbar.Brand>
        <Button
          variant="link"
          className={styles.themeToggle}
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙" : "🌞"}
        </Button>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleMenuToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Link href="#about" passHref>
              <Nav.Link>Sobre Mim</Nav.Link>
            </Link>
            <Link href="#education" passHref>
              <Nav.Link>Formação</Nav.Link>
            </Link>
            <Link href="#skills" passHref>
              <Nav.Link>Conhecimentos</Nav.Link>
            </Link>
            <Link href="#projects" passHref>
              <Nav.Link>Projetos</Nav.Link>
            </Link>
            <Link href="#contact" passHref>
              <Nav.Link>Contato</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
