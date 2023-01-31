import { useApp } from "@/context/AppContext";
import { Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Slider from "react-slick"


export default function Services() {
  const calculateWidth = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 500) {
        return 1
      } else if (window.innerWidth < 1024) {
        return 2
      } else {
        return 4
      }
    } else {
      return 1
    }
  }
  const [settings, setSetting] = useState({})
  const { services } = useApp()

  useEffect(() => {
    console.log(calculateWidth())
    setSetting({
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: calculateWidth(),
      slidesToScroll: 1,
    });
  }, [])

  return (
    <Box className="our-services section">
      <Box className="services-right-dec">
        <img src="/images/services-right-dec.png" alt="" />
      </Box>

      <Container maxW={"container.xl"} position="relative">
        <Box className="services-left-dec">
          <img src="/images/services-left-dec.png" alt="" />
        </Box>
        <Box className="section-heading">
          <h2>ДУНДЫН ОФФИС <em>+</em> <span>УЯН ХАТАН ЦЭЦЭРЛЭГ</span></h2>
          <span>Манай Үйлчилгээ</span>
        </Box>
        <Box w="100%">
          <Slider {...settings}>
            {services.map(({ title, description, icon }: any, i: number) =>
              <Box key={i + title} padding={"0 5px"}>
                <Box bg="white" className="item">
                  <h4>{title}</h4>
                  <div className="icon"><img src={icon} alt="" /></div>
                  <p>{description}</p>
                </Box>
              </Box>
            )}
          </Slider>
        </Box>
      </Container>
    </Box>
  )
}