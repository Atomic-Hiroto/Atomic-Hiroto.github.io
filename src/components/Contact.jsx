import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Center, Flex, Img, Text, Button, Link, Box, IconButton } from "@chakra-ui/react";
import React from "react";
import GithubCalendar from "react-github-calendar";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Contact(props) {
    return (
        <>
            <Center flexDirection={"column"}>
                <Text
                    fontWeight={"bold"}
                    color={"#EEEEEE"}
                    fontSize={30}
                    m={"50px 0px 100px 0px"}
                >
                    My{" "}
                    <Text as={"span"} color={"#00ADB5"}>
                        GitHub Stats
                    </Text>
                </Text>
                <Center
                    color={"#EEEEEE"}
                    w={"90%"}
                    borderRadius={8}
                    border={"1px solid #EEEEEE"}
                    fontWeight={"bold"}
                    p={10}
                >
                    <GithubCalendar
                        className="react-activity-calendar"
                        username="atomic-hiroto"
                        year={new Date().getFullYear()}
                    />
                </Center>
                <Center flexWrap={"wrap"} w={"88%"} mt={20} gap={10}>
                    <Img
                        id="github-streak-stats"
                        src="https://github-readme-streak-stats.herokuapp.com?user=Atomic-Hiroto&theme=react&mode=weekly"
                    />
                    <Img
                        id="github-stats-card"
                        src="https://github-readme-stats.vercel.app/api?username=atomic-hiroto&show_icons=true&theme=react&locale=en"
                    />
                    <Img
                        id="github-top-langs"
                        src="https://github-readme-stats.vercel.app/api/top-langs?username=atomic-hiroto&show_icons=true&theme=react&locale=en&layout=compact"
                    />
                </Center>
            </Center>
            <Flex
                id="contact"
                flexDirection={"column"}
                p={50}
                pt={100}

            >
                <Text textAlign={"center"} fontWeight={"bold"} color={"#EEEEEE"} fontSize={30}>
                    My{" "}
                    <Text as={"span"} color={"#00ADB5"}>
                        Contacts
                    </Text>
                </Text>
                <Flex m={"auto"} mt={10} color={"#EEEEEE"}  w={"70%"} justifyContent={"space-between"}>
                    <Flex flexDirection={["column","column","row"]}>
                        <Button
                            as={Link}
                            rightIcon={<PhoneIcon />}
                            id="contact-phone"
                            variant={"ghost"}
                            href="tel:+919867150296"
                            transition={"0.2s ease-in-out"}
                            _hover={{ color: "#00ADB5" }}
                            display={"block"}
                        >
                            +91-9867150296
                        </Button>
                        <Button
                            as={Link}
                            rightIcon={<EmailIcon />}
                            id="contact-email"
                            variant={"ghost"}
                            href="mailto:borolepritam@gmail.com"
                            transition={"0.2s ease-in-out"}
                            _hover={{ color: "#00ADB5" }}
                            display={"block"}
                        >
                            borolepritam@gmail.com
                        </Button>
                    </Flex>
                    <Flex alignItems={"center"} flexDirection={["column","row"]} gap={5}>
                        <IconButton id="contact-github" as={Link} href="https://github.com/Atomic-Hiroto" colorScheme="teal" icon={<FaGithub />} />
                        <IconButton id="contact-linkedin" as={Link} href="https://www.linkedin.com/in/pritam-sb/" colorScheme="teal" icon={<FaLinkedinIn />} />
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default Contact;
