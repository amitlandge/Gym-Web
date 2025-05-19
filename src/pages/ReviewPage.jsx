import { Avatar, Box, Typography } from "@mui/material";
import Slider from "react-slick";
import pic1 from "../assets/images/client.png";
import pic2 from "../assets/images/User-1.jpeg";
import pic3 from "../assets/images/User-2.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomHeadingWrapper from "../wrapper/CustomHeadingWrapper";
const testimonials = [
  {
    name: "John",
    image: pic1,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    name: "Ved",
    image: pic2,
    message:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "Amit",
    image: pic3,
    message:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  },
];

const ReviewPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => <div className="custom-dot" />,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <Box textAlign="center" maxWidth={800} mx="auto" padding={"10rem"}>
      <CustomHeadingWrapper>What Says Our Customers</CustomHeadingWrapper>
      <Slider {...settings}>
        {testimonials.map((testimonial, i) => (
          <Box key={i} px={3}>
            <Avatar
              src={testimonial.image}
              alt={testimonial.name}
              sx={{ width: 150, height: 150, mx: "auto", mb: 2 }}
            />
            <Typography variant="h5" fontWeight="bold">
              {testimonial.name}
            </Typography>
            <Box
              width={40}
              height={4}
              bgcolor="warning.main"
              mx="auto"
              borderRadius={5}
              my={1}
            />
            <Typography
              variant="body"
              color="text.secondary"
              mt={2}
              mb={4}
              width={"70%"}
            >
              {testimonial.message}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ReviewPage;
