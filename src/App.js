import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Image,
  List,
  HStack
} from '@chakra-ui/react';

//Подключение иконок
import {AiFillCode, AiFillGithub, AiFillCheckCircle} from 'react-icons/ai';
import {FaTelegram} from "react-icons/fa"

//Подключение анимаций
import { motion } from 'framer-motion';

function App() {

  //Ссылки на социальные сети и их логотипы
  const links = [
    {url: "https://filimonov-blog.ru/", icon: AiFillCode, text: "Мой Сайт"},
    {url: "https://github.com/FilimonovAlexey", icon: AiFillGithub, text: "Мой GitHub"},
    {url: "https://t.me/tehnomaniak07", icon: FaTelegram, text: "Telegram група"},
  ]

  const parentContainer = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.15}},
  }

  const chieldElement = {
    hidden: {opacity: 0, x: "-50px"},
    show: {opacity: 1, x: "0px"}
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} bgGradient="linear(to-b, purple.200, purple.700)">
          <VStack marginTop="3em">
            {/* логотип */}
            <Image 
              src="./Logo.png"
              w="6em"
              borderRadius="50%"
              boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
              as={motion.img}
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition="linear 0.1s"
            />
            {/* Блок с названием */}
            <HStack
              as={motion.div}
              initial={{x: "-50px"}}
              animate={{x: "0px"}}
              transition="linear 0.1s"
            
            >
              <Text
                fontSize={30} 
                fontWeight="bold"
              >
                Техноманьяк
              </Text>
              <Text 
                as={AiFillCheckCircle} 
                color="rgba(3, 177, 252)" 
                fontSize={30} 
                marginRight="auto"
              />
            </HStack>
            {/* Блок с информацией */}
            <HStack>
              <Text
                color="gray.900"
                fontSize={20}
                w="30em" 
                h="6em"
                as={motion.div}
                initial={{x: "-50px"}}
                animate={{x: "0px"}}
                transition="linear 0.1s"
              >
                Меня зовут Алексей и я начинающий Frontend разработчик.
                Владелец YouTube канала: Техноманьяк, где я рассказываю о 
                Программировании и Технологиях. На этой странице собраны все
                мои социальные сети и не только!
              </Text>
            </HStack>
            {/* Блок с ссылками */}
            <List as={motion.ul} variants={parentContainer} initial="hidden" animate="show">
              {links.map(link => (
                <a href={link.url}>
                  <HStack 
                    w="15em" 
                    h="3em" 
                    borderRadius="lg"
                    boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                    bgColor="rgba(255,255,255,0.7)"
                    p="1em"
                    marginY="1em"
                    as={motion.div}
                    variants={chieldElement}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
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
                      fontWeight="bold"
                      margin="auto"
                      p="1em"
                      marginY="1em"
                    >
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
