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
  HStack,
  Button,
  Flex
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

//Подключение иконок
import {AiFillGithub, 
  AiFillCheckCircle, 
  AiFillYoutube, 
  AiFillDollarCircle, 
  AiFillCustomerService, 
  AiFillInstagram,
} from 'react-icons/ai';

import {FaTelegram, 
  FaLinkedin, 
  FaVk, 
  FaGlobe,
} from "react-icons/fa"

//Подключение анимаций
import { motion } from 'framer-motion';

function App() {

  //Ссылки на социальные сети и их логотипы
  const links = [
    {url: "https://www.youtube.com/@tehno.maniak", icon: AiFillYoutube, text: "YouTube канал"},
    {url: "https://filimonov-blog.ru/", icon: FaGlobe, text: "Мой Сайт"},
    {url: "https://github.com/FilimonovAlexey", icon: AiFillGithub, text: "Мой GitHub"},
    {url: "https://t.me/tehnomaniak07", icon: FaTelegram, text: "Группа Telegram"},
    {url: "https://boosty.to/tehnomaniak", icon: AiFillDollarCircle, text: "Поддержать канал"},
  ]

    //Ссылки на доп. материалы
    const devlinks = [
      {url: "https://github.com/FilimonovAlexey/awesome-frontend-dev", icon: AiFillGithub, text: "Полезные материалы для Программиста"},
      {url: "https://github.com/FilimonovAlexey/school21", icon: AiFillGithub, text: "Подготовка к Школе 21"},
      {url: "https://youtu.be/3G1-r8uqbnc?si=Vd67S5T9zDGR9Xc9", icon: AiFillCustomerService, text: "Настрой свой VPN"},
      {url: "https://youtu.be/2K69fwmCGQc?si=g__lQ-WLCZ00eapF", icon: AiFillCustomerService, text: "Telegram бот с chatGPT"},
    ]

    //Название страницы
    const info = {
      name: "@Техноманьяк",
    }

    // Настройка цвета страницы
    const color = {
      colorTheme: "linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)",
      colorButton: "rgba(255,255,255)"
    }

    // Ссылки на личные социальные сети
    const socialLink = {
      vk:"https://vk.com/f1ll_zzz",
      telegram:"https://t.me/f1llzzz",
      instagram:"https://www.instagram.com/filimonovalexey/",
      linkedin:"https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%84%D0%B8%D0%BB%D0%B8%D0%BC%D0%BE%D0%BD%D0%BE%D0%B2-2a0b07257/",
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
        <Grid 
          minH="100vh" 
          minW="30.6em" 
          p={3} 
          // bgGradient={color.colorTheme}
          sx={{
            backgroundImage: "url('./background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >
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
                color="white"
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
                color="white"
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

            {/* Блок с ссылками на мои соц сети */}
            <HStack>
              <Flex
                w="3em" 
                h="3em"
                borderRadius="lg"
                p="1em"
                as={motion.div}
                initial={{x: "-50px"}}
                animate={{x: "0px"}}
                transition="linear 0.1s"
                justifyContent="center"
                margin="auto"
                gap="10px"
              >
                <Link target="_blank" to={socialLink.vk}>
                  <Button 
                    colorScheme='facebook' 
                    leftIcon={<FaVk />}
                    as={motion.div}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                  >
                    VK
                  </Button>
                </Link>
                <Link target="_blank" to={socialLink.telegram}>
                  <Button 
                    colorScheme='telegram' 
                    leftIcon={<FaTelegram />}
                    as={motion.div}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                  >
                    Telegram
                  </Button>
                </Link>
                <Link target="_blank" to={socialLink.instagram}>
                  <Button 
                    colorScheme='red' 
                    leftIcon={<AiFillInstagram />}
                    as={motion.div}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                  >
                    Instagram
                  </Button>
                </Link>
                <Link target="_blank" to={socialLink.linkedin}>
                  <Button 
                    colorScheme='linkedin' 
                    leftIcon={<FaLinkedin />}
                    as={motion.div}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                  >
                    linkedin
                  </Button>
                </Link>
              </Flex>
            </HStack>

            {/* Блок с ссылками */}
            <List as={motion.ul} variants={parentContainer} initial="hidden" animate="show">
              {links.map(link => (
                <a href={link.url}>
                  <HStack 
                    w="25em" 
                    h="3em" 
                    borderRadius="25px"
                    boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                    bgColor={color.colorButton}
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
                    borderRadius="25px"
                    boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                    bgColor={color.colorButton}
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
