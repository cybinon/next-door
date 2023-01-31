import { useApp } from "@/context/AppContext";
import { Box, Container, Grid, Image, Text } from "@chakra-ui/react";

export default function Hero() {
  const {banner2} = useApp();

  return (
    <Box className="about-us section">
      <Container maxW="container.xl" >
        <Grid templateColumns={["repeat(2, 1fr)"]}>
          <Box>
            <Box>
              <Image src={banner2.img} />
            </Box>
          </Box>
          <Box>
            <Box className="section-heading">
              <h2>{banner2?.title}</h2>
              <Text lineHeight={"50px"} fontSize={"2xl"}>{banner2.body}</Text>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}