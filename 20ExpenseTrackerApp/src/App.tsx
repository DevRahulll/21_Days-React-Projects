import { Box, Container, Flex } from "@chakra-ui/react";
import MainSection from "./components/MainSection";

export default function App() {
  return (
    <Container bg={"#333B42"} maxW={"Container.3xl"} height={"100vh"} p={"0"}>
      <Flex height={"full"}>
        <Box height={"full"} flex={5} w={["20%", "30%", "20%", "50%", "60%"]}>
          <MainSection />
        </Box>
      </Flex>
    </Container>
  );
}
