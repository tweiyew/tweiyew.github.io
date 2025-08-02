import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  useMediaQuery
} from '@chakra-ui/react';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di';


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                {/* <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    7+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of Experience</Text> */}
            </Box>
        </Flex>
    )
}

export default Profile