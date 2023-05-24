import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

function Skills(props) {
    return (
        <Flex pt={100} alignItems={"center"} id="skills" flexDirection={"column"} justifyContent={"center"}>
            <Text fontWeight={"bold"} color={"#EEEEEE"} fontSize={30}>
                My{" "}
                <Text as={"span"} color={"#00ADB5"}>
                    Technical Skills
                </Text>
            </Text>
            <Flex
                color={"#EEEEEE"}
                m={10}
                mt={90}
                gap={20}
                flexWrap={"wrap"}
                justifyContent={"center"}
                w={["95%","70%"]}
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
                            src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                            w={"95%"}
                            display={"block"}
                        />
                        <Text className="skills-card-name">HTML</Text>
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
                            src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png"
                            w={"95%"}
                            display={"block"}
                        />
                        <Text className="skills-card-name">CSS</Text>
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
                            src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                            w={"80%"}
                            display={"block"}
                        />
                        <Text className="skills-card-name">Javascript</Text>
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
                            src="https://mohitkss.github.io/static/media/redux.7fec6369cecd1cbd44d6.png"
                            w={"95%"}
                            display={"block"}
                        />
                        <Text className="skills-card-name">Redux</Text>
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
                            src="https://i.imgur.com/nNdmdXI.png"
                            w={"100%"}
                            display={"block"}
                        />
                        <Text className="skills-card-name">ChakraUI</Text>
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
                            src="https://mohitkss.github.io/static/media/nodejs.b508473ad71a31ce2fae.png"
                            w={"95%"}
                            display={"block"}
                        />
                        <Text className="skills-card-name">NodeJS</Text>
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
                            src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                            w={"95%"}
                            display={"block"}
                        />
                        <Text className="skills-card-name">Express</Text>
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
                            src="https://mohitkss.github.io/static/media/mongodb.4f7af09e6354d51beec8.png"
                            w={"70%"}
                            display={"block"}
                        />
                        <Text className="skills-card-name">MongoDB</Text>
                    </Center>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Skills;
