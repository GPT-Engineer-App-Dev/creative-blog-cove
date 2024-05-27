import { Box, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <Stack direction="row" spacing={4}>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Blog</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
        </Stack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
          <Box mb={8} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="lg">First Blog Post</Heading>
            <Text mt={2}>This is a summary of the first blog post...</Text>
          </Box>
          <Box mb={8} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="lg">Second Blog Post</Heading>
            <Text mt={2}>This is a summary of the second blog post...</Text>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>Recent Post 1</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>Recent Post 2</Text>
            </Box>
          </VStack>

          <Heading as="h2" size="lg" mt={8} mb={4}>Categories</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>Category 1</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>Category 2</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" bg="gray.800" color="white" p={4} mt={8} justifyContent="center">
        <Stack direction="row" spacing={4}>
          <Link href="#" isExternal>
            <FaTwitter />
          </Link>
          <Link href="#" isExternal>
            <FaFacebook />
          </Link>
          <Link href="#" isExternal>
            <FaInstagram />
          </Link>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;