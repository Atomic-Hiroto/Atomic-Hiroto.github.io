import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

function Skills(props) {
    return (
        <Flex alignItems={"center"} id="skills" flexDirection={"column"}>
            <Text fontWeight={"bold"} color={"#EEEEEE"} fontSize={30}>
                My{" "}
                <Text as={"span"} color={"#00ADB5"}>
                    Technical
                </Text>{" "}
                Skills
            </Text>
            <Flex
                color={"#EEEEEE"}
                m={10}
                mt={90}
                gap={20}
                flexWrap={"wrap"}
            >
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    transform={"rotate(45deg)"}
                    p={5}
                    h={100}
                    w={100}
                    backgroundColor={"#393E46"}
                    cursor={"pointer"}
                    _hover={{"box-shadow":"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}}
                >
                    <Center
                        flexDirection={"column"}
                        transform={"rotate(-45deg)"}
                        className="skills-card"
                    >
                        <Img
                        
                            className="skills-card-img"
                            src="https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png"
                            w={"95%"}
                            display={"block"}
                        />
                        <Text className="skills-card-name">React</Text>
                    </Center>
                </Flex>
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    transform={"rotate(45deg)"}
                    p={5}
                    h={100}
                    w={100}
                    backgroundColor={"#393E46"}
                    cursor={"pointer"}
                    _hover={{"box-shadow":"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}}
                >
                    <Center
                        flexDirection={"column"}
                        transform={"rotate(-45deg)"}
                        className="skills-card"
                    >
                        <Img
                        className="skills-card-img"
                            src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                            w={"95%"}
                            display={"block"}
                        />
                        <Text className="skills-card-name">HTML</Text>
                    </Center>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Skills;
