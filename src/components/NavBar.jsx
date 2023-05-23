import React from "react";
import { Element, Link } from "react-scroll";
import {
    Box,
    Flex,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import pdf from "../other/Pritam-Borole-Resume.pdf"

function NavBar(props) {
    return (
        <>
        <Element name="top"></Element>
        <Flex
            position={"sticky"}
            justifyContent={"space-between"}
            alignItems={"center"}
            top={0}
            Text={25}
            color={"#EEEEEE"}
            backgroundColor={"#393E46"}
            p={5}
            zIndex={1}
            id="nav-menu"
        >
            <Flex>
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
            <Flex display={["none",null,"flex"]} gap={19} alignItems={"center"}>
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
                <a className="nav-link resume" href={pdf} target="_blank"
                id="resume-link-1" download={true}  onClick={()=>{
                    window.open(
                        "https://drive.google.com/file/d/14u7LzggoNAAlz6a2mgSkSabl3xpURU_O/view?usp=share_link",
                        "_blank"
                    );
                }}>RESUME <DownloadIcon /></a>
                </Text>
            </Flex>
            <Box display={["block",null,"none"]}>
            
            </Box>
        </Flex>
        </>
    );
}

export default NavBar;
