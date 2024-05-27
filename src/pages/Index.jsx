import { Box, Container, Flex, Heading, Link, Stack, Text, VStack, Button } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link as={RouterLink} to="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
          <Link as={RouterLink} to="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Blog</Link>
          <Link as={RouterLink} to="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
        </Stack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading as="h2" size="xl">Blog Posts</Heading>
            <Button as={RouterLink} to="/add-post" colorScheme="blue">
              Add New Post
            </Button>
          </Flex>
          {posts.map((post, index) => (
            <Box key={index} mb={8} p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="lg">{post.title}</Heading>
              <Text mt={2}>{post.content}</Text>
              <Text mt={2} fontStyle="italic">Tags: {post.tags.join(", ")}</Text>
            </Box>
          ))}
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            {posts.slice(0, 5).map((post, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
                <Text>{post.title}</Text>
              </Box>
            ))}
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