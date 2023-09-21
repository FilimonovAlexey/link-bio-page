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
import { Link } from "react-router-dom";

//Подключение иконок
import {AiFillCode, AiFillGithub, AiFillCheckCircle, AiFillYoutube, AiFillDollarCircle, AiFillCustomerService} from 'react-icons/ai';
import {FaTelegram} from "react-icons/fa"

//Подключение анимаций
import { motion } from 'framer-motion';

function App() {

  //Ссылки на социальные сети и их логотипы
  const links = [
    {url: "https://www.youtube.com/@tehno.maniak", icon: AiFillYoutube, text: "YouTube канал"},
    {url: "https://filimonov-blog.ru/", icon: AiFillCode, text: "Мой Сайт"},
    {url: "https://github.com/FilimonovAlexey", icon: AiFillGithub, text: "Мой GitHub"},
    {url: "https://t.me/tehnomaniak07", icon: FaTelegram, text: "Группа Telegram"},
    {url: "https://boosty.to/tehnomaniak", icon: AiFillDollarCircle, text: "Поддержать канал"},
  ]

    //Ссылки на доп. материалы
    const devlinks = [
      {url: "/mydevice", icon: AiFillCustomerService, text: "Мои девайсы"},
      {url: "https://github.com/FilimonovAlexey/awesome-frontend-dev", icon: AiFillGithub, text: "Полезные материалы для Программиста"},
      {url: "https://github.com/FilimonovAlexey/school21", icon: AiFillGithub, text: "Подготовка к Школе 21"},
    ]

  //Название страницы
  const info = {
    name: "@Техноманьяк",
  }

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
        <Grid minH="100vh" p={3} bgGradient="linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)">
          <VStack marginTop="2em">

            {/* логотип */}
            <Link to="/" style={{ textDecoration: 'none' }}>
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
            </Link>

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
                {info.name}
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
                h="4em"
                as={motion.div}
                initial={{x: "-50px"}}
                animate={{x: "0px"}}
                transition="linear 0.1s"
              >
                👨🏻‍💻 Начинающий <b>Frontend разработчик.</b> <br /> 
                🎥 Владелец <b>YouTube канала: Техноманьяк.</b> <br /> 
                📲 Тут ты найдешь все мои ссылки в социальных сетях!
              </Text>
            </HStack>

            {/* Блок с ссылками */}
            <List as={motion.ul} variants={parentContainer} initial="hidden" animate="show">
              {links.map(link => (
                <a href={link.url}>
                  <HStack 
                    w="25em" 
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
                      marginRight="auto"
                      p="1em"
                      marginY="1em"
                    >
                        {link.text}
                    </Text>
                  </HStack>
                </a>
              ))}
            </List>

            {/* Блок с доп ссылками */}
            <List as={motion.ul} variants={parentContainer} initial="hidden" animate="show">
              {devlinks.map(link => (
                <a href={link.url}>
                  <HStack 
                    w="25em" 
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
                      marginRight="auto"
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
