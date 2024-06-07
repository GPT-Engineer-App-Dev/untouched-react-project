import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your New React App</Heading>
        <Text fontSize="xl">This is your starting point. Customize it as you wish!</Text>
        {session ? (
          <Button colorScheme="teal" size="lg" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg" as="a" href="/login">
            Login
          </Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;