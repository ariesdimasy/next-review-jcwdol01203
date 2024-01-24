"use client";

import { Box, Center, Container, Heading } from "@chakra-ui/react";
import useSWR from "swr";
import fetcher from "./../../utils/swrFetcher";

export default function Page() {
  const { error, data, isLoading } = useSWR(
    "https://cdn.contentful.com/spaces/y4lqlhcyc2lr/environments/master/entries?access_token=i8EKrSf2agSubIgFn6kiOvv3kFjgZUG_UIZviR3T_CQ&content_type=project",
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
            Project{" "}
          </Heading>
          <hr style={{ marginBottom: "20px" }}></hr>
          {data?.items.map((item, index) => {
            return (
              <Box
                bgColor={"orange.500"}
                color={"white"}
                h={"30px"}
                lineHeight={"30px"}
                marginBottom={"10px"}
                key={index}
              >
                <a href={item.fields.projectUrl}>{item.fields.projectTitle}</a>
              </Box>
            );
          })}
        </Container>
      </Center>
    </Box>
  );
}
