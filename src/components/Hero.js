import { Box, Center, Container, Heading } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box height={"300px"} bgColor={"gray.200"}>
      <Center>
        <Container w={"lg"}>
          <div style={{ marginTop: "15%" }}>
            <Heading textAlign={"center"} as={"h1"}>
              {" "}
              Hello, Iam Aries Dimas{" "}
            </Heading>
            <Heading textAlign={"center"} as={"h5"} fontSize={20}>
              {" "}
              A Passionate Web Developer
            </Heading>
          </div>
        </Container>
      </Center>
    </Box>
  );
}
