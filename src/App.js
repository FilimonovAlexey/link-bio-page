import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  List,
  HStack
} from '@chakra-ui/react';
import {AiFillCode} from 'react-icons/ai'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} bgGradient="linear(to-b, gray.900, blue.200)">
          <VStack>
            <Image 
              src="./Logo512.png"
              w="10em"
              borderRadius="50%"
              boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
            />
            <Text as="h1" fontSize={30} fontWeight="bold">
              Техноманьяк
            </Text>
            <List>
              <a href='https://filimonov-blog.ru/'>
                <HStack 
                  w="15em" 
                  h="3em" 
                  borderRadius="lg" 
                  bgColor="rgba(255,255,255,0.7)"
                  p="1em"
                  >
                    <Text 
                      as={AiFillCode} 
                      color="gray.900" 
                      fontSize={30} 
                      marginRight="auto"
                    />
                    <Text color="gray.900" fontSize={20} fontWeight="bold">Мой сайт</Text>
                </HStack>
              </a>
            </List>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
