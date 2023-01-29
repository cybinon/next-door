import { Box, Button, Container, Flex, Grid, GridItem, Icon, Input, Link, Image, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { FaFacebook, FaPaperPlane } from "react-icons/fa"

export default function Footer() {
  return (
    <>
      <div className="footer-dec">
        <Image src="images/footer-dec.png" alt="" />
      </div>
      <footer>
        <Container maxW={"container.xl"}>
          <Grid justifyContent={"center"} templateColumns={["repeat(1,1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
            <Box className="about footer-item">
              <Box className="logo">
                <img src="/logo.webp" alt="logo" />
              </Box>
              <a href="#">nextdoor@email.mn</a>
              <ul>
                <li>
                  <Link href="#">
                    <Flex w="100%" h="100%" justifyContent={"center"} alignItems="center">
                      <Icon as={FaFacebook} p="0" m="0" size={"30px"} />
                    </Flex>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Flex w="100%" h="100%" justifyContent={"center"} alignItems="center">
                      <Icon as={FaFacebook} p="0" m="0" size={"30px"} />
                    </Flex>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Flex w="100%" h="100%" justifyContent={"center"} alignItems="center">
                      <Icon as={FaFacebook} p="0" m="0" size={"30px"} />
                    </Flex>
                  </Link>
                </li>
              </ul>
            </Box>
            <Box className="services footer-item">
              <h4>Үйлчилгээ</h4>
              <ul>
                <li><a href="#">Шангри-Ла салбар</a></li>
                <li><a href="#">Зайсан хийл салбар</a></li>
                <li><a href="#">Салбарууд</a></li>
              </ul>
            </Box>
            <Box className="subscribe-newsletters footer-item">
              <h4>Мэдээлэл авах</h4>
              <p>Get our latest news and ideas to your inbox</p>
              <form action="#" method="get">
                <InputGroup
                  bg="blue.400"
                  borderRadius={"23px"}
                  overflow="hidden"
                >
                  <Input color="white" _placeholder={{ color: "white" }} border={"0"} type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" />
                  <InputRightAddon border={"0"} children={<Icon as={FaPaperPlane} />} />
                </InputGroup>
              </form>
            </Box>
          </Grid>
          <Box className="copyright" w="100%">
            <p>Copyright © {new Date().getFullYear()} <a href="#">Elf Next Door. </a>
              <br />
              Developed by <a rel="nofollow" href="https://github.com/cybinon" title="cybinon">Cybinon</a>
            </p>
          </Box>
        </Container>
      </footer>
    </>
  )
}