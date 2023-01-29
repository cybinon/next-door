import { useApp } from "@/context/AppContext";
import { Container, Grid, GridItem, Flex, Box } from "@chakra-ui/react";
import { } from "framer-motion";

export default function Banner() {
  const { banner1 } = useApp();

  return (
    <Box
      _after={{
        backgroundImage: "url(/images/baner-dec-left.png)"
      }}
      _before={{
        backgroundImage: `url(${banner1.img})`
      }}
      className='main-banner' minH="800px">
      <Container maxW={"container.xl"}>
        <Grid templateColumns={"repeat(12, 1fr)"}>
          <GridItem colSpan={[12, 12, 12, 6]} >
            <Flex justifyContent={"center"} w="100%" h="100px">
              <Box dangerouslySetInnerHTML={{
                __html: banner1.body}} className='item'>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}