import { Box, Container, Center, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box bgColor={"blue.500"} h={"50px"} lineHeight={"50px"} color={"white"}>
      <Center>
        <Container>
          <Flex>
            <div w={"40%"} style={{ marginRight: 50 }}>
              <Link href={"/"}>Yudhistira.id</Link>
            </div>
            <nav w={"60%"}>
              <Link href={"/project"} className="mr-[20px]">
                {" "}
                Project{" "}
              </Link>
              <Link href={"/about"} className="mr-[20px]">
                {" "}
                About{" "}
              </Link>
            </nav>
          </Flex>
        </Container>
      </Center>
    </Box>
  );
}
