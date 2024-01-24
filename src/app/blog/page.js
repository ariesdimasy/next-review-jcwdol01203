"use client";

import { Box, Center, Container, Heading } from "@chakra-ui/react";
import useSWR from "swr";
import fetcher from "./../../utils/swrFetcher";

export default function Page() {
  const { error, data, isLoading } = useSWR(
    "http://localhost:3456/api/posts",
    fetcher
  );

  if (error)
    return (
      <Center>
        <Container>
          <Heading as={"h4"}> Failed to Load </Heading>
        </Container>
      </Center>
    );

  if (isLoading)
    return (
      <Center>
        <Container>
          <Heading as={"h4"}> Loading ... </Heading>
        </Container>
      </Center>
    );

  return (
    <Box padding={"20px 0"}>
      <Center>
        <Container w={"container.xl"}>
          <Heading as={"h1"} marginBottom={"20px"}>
            {" "}
            Blog{" "}
          </Heading>
          <hr style={{ marginBottom: "20px" }}></hr>

          {data.data.map((item, index) => {
            return (
              <Box
                bgColor={"orange.500"}
                color={"white"}
                h={"30px"}
                lineHeight={"30px"}
                marginBottom={"10px"}
                key={index}
              >
                <a href={`/blog/${item.id}`}>{item.title}</a>
              </Box>
            );
          })}
        </Container>
      </Center>
    </Box>
  );
}
