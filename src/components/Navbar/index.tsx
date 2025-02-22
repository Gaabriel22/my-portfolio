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
          <Nav className="ms-auto">
            <Nav.Item>
              <Link href="#about" passHref legacyBehavior>
                <Nav.Link>Sobre Mim</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="#education" passHref legacyBehavior>
                <Nav.Link>Formação</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="#skills" passHref legacyBehavior>
                <Nav.Link>Conhecimentos</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="#projects" passHref legacyBehavior>
                <Nav.Link>Projetos</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="#contact" passHref legacyBehavior>
                <Nav.Link>Contato</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
