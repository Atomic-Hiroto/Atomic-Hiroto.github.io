import React from "react";
import { Element } from "react-scroll";
import headshot from "../images/h1.jpg";
import { Box, Button, Flex, Img, Link, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { ViewIcon } from "@chakra-ui/icons";
import pdf from "../other/Pritam-Borole-Resume.pdf";

function Home(props) {
    const handleButtonClick = () => {
        window.open('https://drive.google.com/file/d/14u7LzggoNAAlz6a2mgSkSabl3xpURU_O/view?usp=share_link', '_blank'); // Open a new tab with the desired URL
      
        const link = document.createElement('a');
        link.href = pdf;
        link.download = pdf;
        link.target = '_blank';
        link.click();
      };
    return (
        <Element id="home" name="home" >
            <Flex
                flexDirection={["column", null, "row"]}
                p={10}
                mt={50}
                color={"#EEEEEE"}
                alignItems={"center"}
                gap={20}
            >
                <Flex justifyContent={"center"} alignItems={"center"} w={"50%"}>
                    <Img
                        transition={"0.2s ease-in-out"}
                        _hover={{ transform: "scale(1.1)" }}
                        borderRadius={"50%"}
                        className="home-img"
                        src={headshot}
                        w={"250px"}
                        cursor={"pointer"}
                    />
                </Flex>
                <Box id="user-detail-intro">
                    <Text fontWeight={"bold"} fontSize={30}>
                        Hello There! ✌🏻
                    </Text>
                    <Text fontSize={60} fontWeight={"bold"} id="myname">
                        I'm{" "}
                        <Text as={"span"} color={"#00ADB5"}>
                            PRITAM
                        </Text>
                    </Text>
                    <Text fontWeight={"bold"} fontSize={30}>
                        <Typewriter
                            options={{
                                strings: [
                                    "A Full Stack Web Developer",
                                    "A MERN Stack Developer",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Text>
                    <Button
                        _hover={{ "text-decoration": "none" }}
                        cursor={"pointer"}
                        href={pdf}
                        target="_blank"
                        id="resume-button-2"
                        download={true}
                        rightIcon={<ViewIcon />}
                        color={"#EEEEEE"}
                        mt={5}
                        colorScheme="teal"
                        onClick={handleButtonClick}
                    >
                        Resume
                    </Button>
                </Box>
            </Flex>
        </Element>
    );
}

export default Home;
