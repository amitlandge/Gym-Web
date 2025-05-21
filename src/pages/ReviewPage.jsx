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
      "Joining G-Max was the best decision I made this year! The trainers are incredibly supportive, and I’ve seen amazing results in just a few months",
  },
  {
    name: "Ved",
    image: pic2,
    message:
      "I love the clean, motivating atmosphere here. The equipment is top-notch, and the staff genuinely care about your fitness journey. Highly recommend!.",
  },
  {
    name: "Amit",
    image: pic3,
    message:
      "G-Max isn’t just a gym—it’s a second home. The people, the vibes, the energy—it all pushes you to be your best every single day.",
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
    <Box textAlign="center" padding={"10rem"}>
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
