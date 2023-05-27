import React from "react";
import { Element, Link } from "react-scroll";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Flex,
    IconButton,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import pdf from "../other/Pritam-Borole-Resume.pdf";

function NavBar(props) {
    const handleButtonClick = () => {
        window.open(
            "https://drive.google.com/file/d/14u7LzggoNAAlz6a2mgSkSabl3xpURU_O/view?usp=share_link",
            "_blank"
        ); // Open a new tab with the desired URL

        const link = document.createElement("a");
        link.href = pdf;
        link.download = pdf;
        link.target = "_blank";
        link.click();
    };
    return (
        <>
            <Element name="top"></Element>
            <Flex
                position={"sticky"}
                justifyContent={"space-between"}
                alignItems={["flex-start",null,"center"]}
                top={0}
                Text={25}
                color={"#EEEEEE"}
                backgroundColor={"#393E46"}
                p={5}
                zIndex={2}
                id="nav-menu"
            >
                <Flex alignItems={"center"} >
                    <Link smooth={true} duration={500} to={"top"}>
                        <Text
                            fontWeight={"bold"}
                            fontSize={30}
                            cursor={"pointer"}
                        >
                            PRITAM
                        </Text>
                    </Link>
                </Flex>
                <Flex
                    display={["none", null, "flex"]}
                    gap={19}
                    alignItems={"center"}
                >
                    <Text
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        transition={"0.2s ease-in-out"}
                        _hover={{ color: "#00ADB5" }}
                    >
                        <Link
                            smooth={true}
                            duration={500}
                            to="top"
                            className="nav-link home"
                        >
                            HOME
                        </Link>
                    </Text>
                    <Text
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        transition={"0.2s ease-in-out"}
                        _hover={{ color: "#00ADB5" }}
                    >
                        <Link
                            smooth={true}
                            duration={500}
                            to="about"
                            className="nav-link about"
                        >
                            ABOUT
                        </Link>
                    </Text>
                    <Text
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        transition={"0.2s ease-in-out"}
                        _hover={{ color: "#00ADB5" }}
                    >
                        <Link
                            smooth={true}
                            duration={500}
                            to="skills"
                            className="nav-link skills"
                        >
                            SKILLS
                        </Link>
                    </Text>
                    <Text
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        transition={"0.2s ease-in-out"}
                        _hover={{ color: "#00ADB5" }}
                    >
                        <Link
                            smooth={true}
                            duration={500}
                            to="projects"
                            className="nav-link projects"
                        >
                            PROJECTS
                        </Link>
                    </Text>
                    <Text
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        transition={"0.2s ease-in-out"}
                        _hover={{ color: "#00ADB5" }}
                    >
                        <Link
                            smooth={true}
                            duration={500}
                            to="contact"
                            className="nav-link contact"
                        >
                            CONTACT
                        </Link>
                    </Text>
                    <Text
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        transition={"0.2s ease-in-out"}
                        _hover={{ color: "#00ADB5" }}
                    >
                        <Button
                            href={pdf}
                            className="nav-link resume"
                            target="_blank"
                            id="resume-button-1"
                            download={true}
                            variant={"ghost"}
                            rightIcon={<DownloadIcon />}
                            onClick={handleButtonClick}
                        >
                            RESUME
                        </Button>
                    </Text>
                </Flex>
                <Box display={["block", null, "none"]}>
                    <Accordion allowToggle >
                        <AccordionItem border={"0"} >
                            <h2>
                                <AccordionButton p={0}>
                                    <IconButton variant={"ghost"} _hover={{"":""}} icon={<HamburgerIcon />} />
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={2} >
                                <Flex flexDirection={"column"} gap={2}>
                                <Text
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        transition={"0.2s ease-in-out"}
                        _hover={{ color: "#00ADB5" }}
                    >
                        <Link
                            smooth={true}
                            duration={500}
                            to="top"
                            className="nav-link home"
                        >
                            HOME
                        </Link>
                    </Text>
                    <Text
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        transition={"0.2s ease-in-out"}
                        _hover={{ color: "#00ADB5" }}
                    >
                        <Link
                            smooth={true}
                            duration={500}
                            to="about"
                            className="nav-link about"
                        >
                            ABOUT
                        </Link>
                    </Text>
                    <Text
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        transition={"0.2s ease-in-out"}
                        _hover={{ color: "#00ADB5" }}
                    >
                        <Link
                            smooth={true}
                            duration={500}
                            to="skills"
                            className="nav-link skills"
                        >
                            SKILLS
                        </Link>
                    </Text>
                    <Text
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        transition={"0.2s ease-in-out"}
                        _hover={{ color: "#00ADB5" }}
                    >
                        <Link
                            smooth={true}
                            duration={500}
                            to="projects"
                            className="nav-link projects"
                        >
                            PROJECTS
                        </Link>
                    </Text>
                    <Text
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        transition={"0.2s ease-in-out"}
                        _hover={{ color: "#00ADB5" }}
                    >
                        <Link
                            smooth={true}
                            duration={500}
                            to="contact"
                            className="nav-link contact"
                        >
                            CONTACT
                        </Link>
                    </Text>
                                </Flex>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Flex>
        </>
    );
}

export default NavBar;
