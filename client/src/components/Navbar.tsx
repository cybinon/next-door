import { Container, Box, Image} from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className='header-area header-sticky'>
      <Container maxW={"container.xl"}>
        <nav className='main-nav'>
          <Box as={Link} mt="5" href="/" className='logo'>
            <Image src="/logo.webp" h="45px" alt="nextdoor" />
          </Box>
          <ul className='nav'>
            <li className="scroll-to-section"><a href="#top" className="active">Нүүр</a></li>
            <li className="scroll-to-section"><a href="#services">Үйлчилгээ</a></li>
            <li className="scroll-to-section"><a href="#about">Бидний тухай</a></li>
            <li className="scroll-to-section"><a href="#portfolio">Салбараууд</a></li>
            <li className="scroll-to-section">
              <div className="main-red-button-hover"><a target={"_blank"} href="https://forms.gle/RosnyeP7Dg2G8yLe6">Бүртгүүлэх</a></div>
            </li>
          </ul>
          <a className='menu-trigger'>
            <span>Menu</span>
          </a>
        </nav>
      </Container>
    </header>
  )
}