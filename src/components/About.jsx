import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Tilt } from "react-tilt";

function About(props) {
    return (
        <Flex
            id="about"
            className="about section"
            flexDirection={"column"}
            alignItems={"center"}
            p={5}
            mt={20}
            pt={100}
        >
            <Text fontWeight={"bold"} color={"#EEEEEE"} fontSize={30}>
                <Text as={"span"} color={"#00ADB5"}>
                    About
                </Text>{" "}
                Me
            </Text>
            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDirection={["column", null, "row"]}
            >
                <Box>
                        <Tilt>
                            <Img
                                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDgxN2M0ODI3OTY4NzA0ZmMzN2U0MjUyZmRkYjBjN2Y5YmJlOWIxYiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/WFZvB7VIXBgiz3oDXE/giphy.gif"
                                w={"100%"}
                                cursor={"pointer"}
                            />
                        </Tilt>
                </Box>
                <Box id="user-detail-intro">
                    <Text id="user-detail-name" color={"#EEEEEE"} fontSize={20}>
                        {" "}
                        - Hello, I'm{" "}
                        <Text as={"span"} fontWeight={"bold"}>
                            Pritam
                        </Text>{" "}
                        and I love working on creative and interesting projects.
                    </Text>
                    <Text color={"#EEEEEE"} fontSize={20}>
                        -{" "}
                        <Text as={"span"} fontWeight={"bold"}>
                            Resourceful
                        </Text>{" "}
                        and{" "}
                        <Text as={"span"} fontWeight={"bold"}>
                            passionate
                        </Text>{" "}
                        with experience in various web technologies and
                        frameworks such as React, Redux, MangoDB and Express.
                    </Text>
                    <Text color={"#EEEEEE"} fontSize={20}>
                        -{" "}
                        <Text as={"span"} fontWeight={"bold"}>
                            Adaptable, quick-learning,{" "}
                        </Text>
                        and{" "}
                        <Text as={"span"} fontWeight={"bold"}>
                            eager
                        </Text>{" "}
                        to take on new challenges.
                    </Text>
                    <Text color={"#EEEEEE"} fontSize={20}>
                        - I have collaborated on{" "}
                        <Text as={"span"} fontWeight={"bold"}>
                            5+ big projects
                        </Text>{" "}
                        consisting of both frontend / backend and worked as a{" "}
                        <Text as={"span"} fontWeight={"bold"}>
                            tech lead
                        </Text>
                        .
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
}

export default About;
