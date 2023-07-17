import React from "react";
import { Element, Link } from "react-scroll";
import headshot from "../images/h1.jpg";
import { Box, Button, Center, Flex, Img, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { ViewIcon } from "@chakra-ui/icons";
import pdf from "../other/Pritam-Borole-Resume.pdf";
import { Tilt } from "react-tilt";
import {motion} from "framer-motion"
import {HideOn} from "react-hide-on-scroll"

function Home(props) {
    const handleButtonClick = () => {
        window.open(
            "https://drive.google.com/file/d/1p8DNfvLNRX7NwFUqs4baIflBwK7H49tp/view?usp=sharing",
            "_blank"
        ); // Open a new tab with the desired URL

        const link = document.createElement("a");
        link.href = pdf;
        link.download = pdf;
        link.target = "_blank";
        link.click();
    };
    return (
        <Element id="home" name="home">
            <Flex
                flexDirection={["column", null, "row"]}
                p={10}
                mt={[2, 120]}
                color={"#EEEEEE"}
                alignItems={"center"}
                gap={20}
            >
                    <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        w={"50%"}
                    >
                        <Tilt>
                            <Img
                                transition={"0.2s ease-in-out"}
                                _hover={{ transform: "scale(1.1)" }}
                                borderRadius={"50%"}
                                className="home-img"
                                src={headshot}
                                w={"250px"}
                                cursor={"pointer"}
                            />
                        </Tilt>
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
            <HideOn atHeight height={180}>
            <Flex cursor={"pointer"} transition={"0.2s ease-in-ease-out"} position={"fixed"} bottom={"10"} left={"40"} justifyContent={"center"} w={"100%"} alignItems={"center"}>
                <Link smooth={true} duration={500} to={"about"} >
                <Flex w={35} h={69} borderRadius={20} p={2} justifyItems={"center"} border={"4px solid darkgray"} >
                        <motion.div
                            animate={{y:[0,26,0]}}
                            transition={{
                                duration:1.5,
                                repeat:Infinity,
                                repeatType:'loop'
                            }}
                            style={{"width":"18px","height":"18px","border-radius":"50%","background-color":"darkgray"}}
                        />
                        
                </Flex>
                </Link>
            </Flex>
            </HideOn>
        </Element>
    );
}

export default Home;
