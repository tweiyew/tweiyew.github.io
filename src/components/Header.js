import React from 'react';
import {
  Button,
  useColorMode,
  Image,
  Stack,
  Flex,
  Box,
  Text,
  IconButton
} from '@chakra-ui/react';

import { FaEnvelope, FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa';


function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

return (
    <>
        <Flex
        as="nav"
        position="sticky"
        top="0"
        zIndex="1000"
        w="100%"
        px={8}
        py={4}
        justify="space-between"
        align="center"
        bg={isDark ? 'gray.800' : 'gray.100'}
        borderBottom="1px solid"
        borderColor={isDark ? 'gray.700' : 'gray.300'}
        backdropFilter="blur(10px)"
        boxShadow="sm"
        >
        <Text fontSize="xl" fontWeight="bold" color="blue.400">
            Portfolio
        </Text>

        <Stack direction="row" spacing={4} align="center">
            <IconButton
            as="a"
            href="https://www.linkedin.com/in/wei-yew-teo-ab492332b/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            color={isDark ? 'gray.100' : 'gray.700'}
            isRound
            />
            <IconButton
            as="a"
            href="https://github.com/tweiyew"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
            color={isDark ? 'gray.100' : 'gray.700'}
            isRound
            />
            <IconButton
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            icon={isDark ? <FaSun /> : <FaMoon />}
            variant="ghost"
            color={isDark ? 'gray.100' : 'gray.700'}
            isRound
            />
        </Stack>
        </Flex>

        <Stack w="full" maxW="2000px">

            <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            px={{ base: 6, md: 32 }}
            py={12}
            gap={10}
            zIndex={1}
            overflow="hidden"
            >
            {/* Text Section */}
            <Box
                flex="1"
                w="full"
                maxW="2xl"
                textAlign={{ base: 'center', md: 'left' }}
            >
                <Text
                fontSize={{ base: '4xl', md: '6xl' }}
                fontWeight="bold"
                bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                bgClip="text"
                >
                Hi, I'm Wei Yew
                </Text>

                <Text
                mt={4}
                fontSize="md"
                color={isDark ? 'gray.200' : 'gray.600'}
                lineHeight="taller"
                >
                Penultimate Data Science & AI student at Nanyang Technological University in Singapore.
                <br />
                Currently on exchange at École Polytechnique Fédérale de Lausanne.
                <br />
                Interested in scalable data systems, computer vision, and LLM tools.
                <br />
                Trilingual: EN | CN | FR
                </Text>

                <Button
                leftIcon={<FaEnvelope />}
                mt={6}
                colorScheme="blue"
                size="md"
                onClick={() => window.open('mailto:TEOW0095@e.ntu.edu.sg')}
                >
                Contact Me
                </Button>
            </Box>

            {/* Profile Image */}
            <Box flexShrink={0}>
                <Image
                src="/profile1.png"
                alt="Wei Yew"
                borderRadius="full"
                boxSize={{ base: '180px', md: '250px' }}
                objectFit="cover"
                boxShadow="2xl"
                />
            </Box>
            </Flex>

        </Stack>
    </>
    );
}

export default Header;
