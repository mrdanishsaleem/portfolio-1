import React from "react";
import {
  SlideFade,
  Box,
  Heading,
  Avatar,
  Image,
  Link,
  Flex,
  LightMode,
  ButtonGroup,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { FaLinkedin, FaStackOverflow, FaMedium } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { socialButtons, resume } from "../constant";
import SocialButton from "../components/SocialButton";
import { BiPhoneCall } from "react-icons/bi";
import SpotifySection from "./SpotifySection";

const ProfileSection = ({ song }) => {
  return (
    <SlideFade in offsetX={80}>
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "40px", lg: "48px" }}
            mb={3}
          >
            Hey, I am Danish Saleem! <span className="waving-hand">👋</span>
          </Heading>
          <Flex alignItems={"flex-end"}>
            <Avatar
              name="Danish Saleem"
              src="/profile_picture.png"
              mb={5}
              size="lg"
            />
          </Flex>
        </Flex>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          Software Engineer from Pakistan 🇵🇰
        </Paragraph>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          Focused on{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href="https://reactjs.org/"
            fontWeight="500"
            isExternal
          >
            React,
          </Link>{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href="#"
            fontWeight="500"
            isExternal
          >
            Web Development &
          </Link>{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href="https://reactnative.dev/"
            fontWeight="500"
            isExternal
          >
            React Native
          </Link>
          .{"\n"}Passion in beautiful UI / UX & Tech Writter on{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href="https://dev.to/mrdanishsaleem/"
            fontWeight="500"
            isExternal
          >
            Dev.to
          </Link>
          🔥
        </Paragraph>

        <Box mt={5}>
          <LightMode>
            <ButtonGroup>
              <SocialButton social={resume} />
              <Link href={"/contact"} style={{ textDecoration: "none" }}>
                <Button
                  colorScheme="blue"
                  size="sm"
                  margin={"5px"}
                  leftIcon={<BiPhoneCall color="white" />}
                >
                  Contact Me
                </Button>
              </Link>
            </ButtonGroup>
          </LightMode>
        </Box>

        <SpotifySection song={song} />
      </Box>
    </SlideFade>
  );
};

export default ProfileSection;
