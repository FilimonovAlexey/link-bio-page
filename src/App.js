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
import {AiFillCode, AiFillGithub} from 'react-icons/ai';
import { FaTelegram } from "react-icons/fa"

function App() {

  //Ссылки на социальные сети и их логотипы
  const links = [
    {url: "https://filimonov-blog.ru/", icon: AiFillCode, text: "Мой Сайт"},
    {url: "https://github.com/FilimonovAlexey", icon: AiFillGithub, text: "Мой GitHub"},
    {url: "https://t.me/tehnomaniak07", icon: FaTelegram, text: "Telegram група"},
  ]

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
              {links.map(link => (
                <a href={link.url}>
                  <HStack 
                    w="15em" 
                    h="3em" 
                    borderRadius="lg" 
                    bgColor="rgba(255,255,255,0.7)"
                    p="1em"
                    marginY="1em"
                  >
                    <Text 
                      as={link.icon} 
                      color="gray.900" 
                      fontSize={30} 
                      marginRight="auto"
                    />
                    <Text 
                      color="gray.900"
                      fontSize={20} 
                      fontWeight="bold">
                        {link.text}
                    </Text>
                  </HStack>
                </a>
              ))}
            </List>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
