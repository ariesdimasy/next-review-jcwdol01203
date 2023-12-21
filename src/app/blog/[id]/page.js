"use client";
import { useParams } from "next/navigation";
import { Box, Center, Container, Heading } from "@chakra-ui/react";
import useSWR from "swr";
import fetcher from "./../../../utils/swrFetcher";

export default function Page() {
  const params = useParams();

  const { error, data, isLoading } = useSWR(
    `http://localhost:3456/api/posts/${params.id}`,
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
            {data.data.title}
          </Heading>
          <hr style={{ marginBottom: "20px" }}></hr>
          <p>{data.data.body}</p>
        </Container>
      </Center>
    </Box>
  );
}
