import { Flex, Img, Text, Button, Link, useDisclosure, Drawer, DrawerContent, DrawerCloseButton, DrawerBody, DrawerOverlay, DrawerHeader } from "@chakra-ui/react";
import React from "react";
import frido from "../images/frido.png";
import swiggy from "../images/swiggy.png";
import ikea from "../images/ikea.png";
import boat from "../images/boat.png";
import country from "../images/country.png";
import mart from "../images/mart.png";
import { LinkIcon } from "@chakra-ui/icons";
import { Tilt } from "react-tilt";

function Projects(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Flex
            id="projects"
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={20}
            pt={100}
        >
            <Flex gap={7}>
            <Text fontWeight={"bold"} color={"#EEEEEE"} fontSize={30}>
                My{" "}
                <Text as={"span"} color={"#00ADB5"}>
                    Projects
                </Text>
            </Text>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen} >
        Mini Projects {">"}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"#222831"}>
          <DrawerCloseButton color={"#EEEEEE"} />
          <DrawerHeader color={"#EEEEEE"} fontWeight={"bold"}>Mini Projects</DrawerHeader>
          <DrawerBody>
            <Flex flexDirection={"column"} gap={8}>
                <Flex backgroundColor={"#393E46"} border={"1px solid #EEEEEE"} borderRadius={8} p={5} color={"#EEEEEE"} flexDirection={"column"} cursor={"pointer"} onClick={()=>{
                    window.open(
                        "https://countryapp-seven.vercel.app/",
                        "_blank"
                    ); // Open a new tab with the desired URL
                }}>
                    <Text fontWeight={"Bold"}>Country Details App</Text>
                    <Img m={5} border={"1px solid gray"} borderRadius={8} src={country} />
                    <Text color={"#EEEEEE"}>A responsive React application built with Chakra UI that fetches country data from an API and displays it in a sortable grid view. Features include a dark mode toggle, sorting by population, and filtering by region.</Text>
                    <br/>
                    <Text>Click to Preview.</Text>
                </Flex>
                <Flex backgroundColor={"#393E46"} border={"1px solid #EEEEEE"} borderRadius={8} p={5} color={"#EEEEEE"} flexDirection={"column"} cursor={"pointer"} onClick={()=>{
                    window.open(
                        "https://masai-mart-pi.vercel.app/index.html",
                        "_blank"
                    ); // Open a new tab with the desired URL
                }}>
                    <Text fontWeight={"Bold"}>Masai Mart App</Text>
                    <Img m={5} border={"1px solid gray"} borderRadius={8} src={mart} />
                    <Text color={"#EEEEEE"}>An e-commerce website built with HTML, CSS and vanilla JavaScript that fetches mock product data from an API and displays it in a paginated grid view. Features sorting by price, filtering by category, and a wishlist functionality that allows users to save items and view them on a separate wishlist page. The wishlist is persisted using local storage.</Text>
                    <br/>
                    <Text>Click to Preview.</Text>
                </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Flex>
            <Flex
                m={"80px 0px"}
                flexDirection={["column", "column", "column", "column", "row"]}
                alignItems={"center"}
                w={"80%"}
                className="project-card"
            >
                <Tilt>
                    <Flex
                        zIndex={1}
                        borderRadius={8}
                        w={[200, 200, 200, 200, 350]}
                        h={[200, 200, 200, 200, 350]}
                        p={5}
                        border={"1px solid #EEEEEE"}
                        transform={"rotate(45deg)"}
                        backgroundColor={"#393E46"}
                        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} 
                    >
                        <Img
                            cursor={"pointer"}
                            transform={"rotate(-45deg)"}
                            w={"100%"}
                            objectFit={"cover"}
                            src={frido}
                            border={"1px solid white"}
                            borderRadius={8}
                        />
                    </Flex>
                </Tilt>
                <Flex
                    flexDirection={"column"}
                    borderRadius={8}
                    p={50}
                    color={"#EEEEEE"}
                    alignItems={"flex-end"}
                    w={"100%"}
                    backgroundColor={"#393E46"}
                    border={"1px solid gray"}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} 
                >
                    <Text
                        fontWeight={"bold"}
                        fontSize={"20px"}
                        className="project-title"
                    >
                        Frido - Music Player
                    </Text>
                    <Text className="project-description">
                        - A simple music player with animations and a great user
                        interface - A solo project
                    </Text>
                    <Text className="project-description">
                        - Listen to your favourite youtube songs by just adding
                        their url links in frido
                    </Text>
                    <br />
                    <Text className="project-tech-stack">
                        <Text as={"span"} fontWeight={"bold"} color={"#00ADB5"}>
                            TECH STACK:
                        </Text>{" "}
                        REACT | REACT-PLAYER | CHAKRA UI | FRAMER MOTION
                    </Text>
                    <br />
                    <Flex gap={5} w={"100%"} flexDirection={["column", "row"]}>
                        <Button
                            as={Link}
                            href="https://github.com/Atomic-Hiroto/Frido"
                            target="_blank"
                            className="project-github-link"
                            variant={"ghost"}
                            rightIcon={<LinkIcon />}
                            _hover={{
                                color: "#00ADB5",
                                "background-color": "white",
                            }}
                        >
                            GitHub
                        </Button>
                        <Button
                            as={Link}
                            href="https://fridoapp.vercel.app"
                            target="_blank"
                            className="project-deployed-link"
                            variant={"ghost"}
                            rightIcon={<LinkIcon />}
                            _hover={{
                                color: "#00ADB5",
                                "background-color": "white",
                            }}
                        >
                            Deployed Link
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                m={"80px 0px"}
                flexDirection={["column", "column", "column", "column", "row"]}
                alignItems={"center"}
                w={"80%"}
                className="project-card"
            >
                <Tilt>
                    <Flex
                        zIndex={1}
                        borderRadius={8}
                        w={[200, 200, 200, 200, 350]}
                        h={[200, 200, 200, 200, 350]}
                        p={5}
                        border={"1px solid #EEEEEE"}
                        transform={"rotate(45deg)"}
                        backgroundColor={"#393E46"}
                        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} 
                    >
                        <Img
                            cursor={"pointer"}
                            transform={"rotate(-45deg)"}
                            w={"100%"}
                            objectFit={"cover"}
                            src={swiggy}
                            border={"1px solid white"}
                            borderRadius={8}
                        />
                    </Flex>
                </Tilt>
                <Flex
                    flexDirection={"column"}
                    borderRadius={8}
                    p={50}
                    color={"#EEEEEE"}
                    alignItems={"flex-end"}
                    w={"100%"}
                    backgroundColor={"#393E46"}
                    border={"1px solid gray"}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} 
                >
                    <Text
                        fontWeight={"bold"}
                        fontSize={"20px"}
                        className="project-title"
                    >
                        Swiggy - Website Clone
                    </Text>
                    <Text className="project-description">
                        - A collaborative project made with a team of 4 in 5
                        days
                    </Text>
                    <Text textAlign={"right"} className="project-description">
                        - The clone uses auto location api to get the current
                        location and <br /> also has sorting and filtering based
                        on various factors.
                    </Text>
                    <br />
                    <Text className="project-tech-stack">
                        <Text as={"span"} fontWeight={"bold"} color={"#00ADB5"}>
                            TECH STACK:
                        </Text>{" "}
                        HTML | CSS | JS | TAILWIND
                    </Text>
                    <br />
                    <Flex gap={5} w={"100%"} flexDirection={["column", "row"]}>
                        <Button
                            as={Link}
                            href="https://github.com/shaad72345/SwiggyClone"
                            target="_blank"
                            className="project-github-link"
                            variant={"ghost"}
                            rightIcon={<LinkIcon />}
                            _hover={{
                                color: "#00ADB5",
                                "background-color": "white",
                            }}
                        >
                            GitHub
                        </Button>
                        <Button
                            as={Link}
                            href="https://voluble-custard-cbe365.netlify.app/index.html"
                            target="_blank"
                            className="project-deployed-link"
                            variant={"ghost"}
                            rightIcon={<LinkIcon />}
                            _hover={{
                                color: "#00ADB5",
                                "background-color": "white",
                            }}
                        >
                            Deployed Link
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                m={"80px 0px"}
                flexDirection={["column", "column", "column", "column", "row"]}
                alignItems={"center"}
                w={"80%"}
                className="project-card"
            >
                <Tilt>
                    <Flex
                        zIndex={1}
                        borderRadius={8}
                        w={[200, 200, 200, 200, 350]}
                        h={[200, 200, 200, 200, 350]}
                        p={5}
                        border={"1px solid #EEEEEE"}
                        transform={"rotate(45deg)"}
                        backgroundColor={"#393E46"}
                        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} 
                    >
                        <Img
                            cursor={"pointer"}
                            transform={"rotate(-45deg)"}
                            w={"100%"}
                            objectFit={"cover"}
                            src={ikea}
                            border={"1px solid white"}
                            borderRadius={8}
                        />
                    </Flex>
                </Tilt>
                <Flex
                    flexDirection={"column"}
                    borderRadius={8}
                    p={50}
                    color={"#EEEEEE"}
                    alignItems={"flex-end"}
                    w={"100%"}
                    backgroundColor={"#393E46"}
                    border={"1px solid gray"}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} 
                >
                    <Text
                        fontWeight={"bold"}
                        fontSize={"20px"}
                        className="project-title"
                    >
                        Ikea - Website Clone
                    </Text>
                    <Text className="project-description">
                        - A collaborative project made with a team of 3 in 5
                        days
                    </Text>
                    <Text textAlign={"right"} className="project-description">
                        - The clone uses a app wide state managed with redux and
                        also has <br /> sorting, filtering and the complete cart
                        flow.
                    </Text>
                    <br />
                    <Text className="project-tech-stack">
                        <Text as={"span"} fontWeight={"bold"} color={"#00ADB5"}>
                            TECH STACK:
                        </Text>{" "}
                        REACT | REDUX | REDUX-THUNK | CHAKRA-UI
                    </Text>
                    <br />
                    <Flex gap={5} w={"100%"} flexDirection={["column", "row"]}>
                        <Button
                            as={Link}
                            href="https://github.com/Atomic-Hiroto/IKea-clone"
                            target="_blank"
                            className="project-github-link"
                            variant={"ghost"}
                            rightIcon={<LinkIcon />}
                            _hover={{
                                color: "#00ADB5",
                                "background-color": "white",
                            }}
                        >
                            GitHub
                        </Button>
                        <Button
                            as={Link}
                            href="https://ikea-clone-eight.vercel.app/"
                            target="_blank"
                            className="project-deployed-link"
                            variant={"ghost"}
                            rightIcon={<LinkIcon />}
                            _hover={{
                                color: "#00ADB5",
                                "background-color": "white",
                            }}
                        >
                            Deployed Link
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                m={"80px 0px"}
                flexDirection={["column", "column", "column", "column", "row"]}
                alignItems={"center"}
                w={"80%"}
                className="project-card"
            >
                <Tilt>
                    <Flex
                        zIndex={1}
                        borderRadius={8}
                        w={[200, 200, 200, 200, 350]}
                        h={[200, 200, 200, 200, 350]}
                        p={5}
                        border={"1px solid #EEEEEE"}
                        transform={"rotate(45deg)"}
                        backgroundColor={"#393E46"}
                        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} 
                    >
                        <Img
                            cursor={"pointer"}
                            transform={"rotate(-45deg)"}
                            w={"100%"}
                            objectFit={"cover"}
                            src={boat}
                            border={"1px solid white"}
                            borderRadius={8}
                        />
                    </Flex>
                </Tilt>
                <Flex
                    flexDirection={"column"}
                    borderRadius={8}
                    p={50}
                    color={"#EEEEEE"}
                    alignItems={"flex-end"}
                    w={"100%"}
                    backgroundColor={"#393E46"}
                    border={"1px solid gray"}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} 
                >
                    <Text
                        fontWeight={"bold"}
                        fontSize={"20px"}
                        className="project-title"
                    >
                        BoAt - Website Clone
                    </Text>
                    <Text className="project-description">
                        - A collaborative project made with a team of 4 in 5
                        days
                    </Text>
                    <Text textAlign={"right"} className="project-description">
                        - The clone was made to look as close as possible to the
                        boAt website and has state managed with LocalStorage and
                        also has the whole user login and payment flow.
                    </Text>
                    <br />
                    <Text className="project-tech-stack">
                        <Text as={"span"} fontWeight={"bold"} color={"#00ADB5"}>
                            TECH STACK:
                        </Text>{" "}
                        HTML | CSS | JS | LocalStorage
                    </Text>
                    <br />
                    <Flex gap={5} w={"100%"} flexDirection={["column", "row"]}>
                        <Button
                            as={Link}
                            href="https://github.com/Atomic-Hiroto/Team-Boat-Masai"
                            target="_blank"
                            className="project-github-link"
                            variant={"ghost"}
                            rightIcon={<LinkIcon />}
                            _hover={{
                                color: "#00ADB5",
                                "background-color": "white",
                            }}
                        >
                            GitHub
                        </Button>
                        <Button
                            as={Link}
                            href="https://team-boat-masai.vercel.app/"
                            target="_blank"
                            className="project-deployed-link"
                            variant={"ghost"}
                            rightIcon={<LinkIcon />}
                            _hover={{
                                color: "#00ADB5",
                                "background-color": "white",
                            }}
                        >
                            Deployed Link
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Projects;
