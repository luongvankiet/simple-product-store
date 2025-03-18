import { Box } from "@chakra-ui/react";
import Router from "./routes.jsx";
import { useColorModeValue } from "./components/ui/color-mode";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Router />
      <Toaster />
    </Box>
  );
}

export default App;
