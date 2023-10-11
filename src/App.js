import React, {useState, useEffect} from 'react';
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
  Skeleton, 
  SkeletonCircle, 
  SkeletonText,
  ButtonGroup,
  IconButton
} from '@chakra-ui/react';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//Подключение анимаций
import { motion } from 'framer-motion';

//Подключение иконок
import {AiFillGithub, 
  AiFillCheckCircle, 
  AiFillYoutube, 
  AiFillDollarCircle,
  AiFillInstagram,
} from 'react-icons/ai';

import {FaTelegram, 
  FaLinkedin, 
  FaVk, 
  FaGlobe,
  FaYoutube
} from "react-icons/fa"

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
      {url: "https://github.com/FilimonovAlexey/awesome-frontend-dev", icon: AiFillGithub, text: "Awesome dev"},
      {url: "https://github.com/FilimonovAlexey/school21", icon: AiFillGithub, text: "Подготовка к Школе 21"},
      {url: "https://youtu.be/3G1-r8uqbnc?si=Vd67S5T9zDGR9Xc9", icon: FaYoutube, text: "Настрой свой VPN"},
      {url: "https://youtu.be/2K69fwmCGQc?si=g__lQ-WLCZ00eapF", icon: FaYoutube, text: "Telegram бот с chatGPT"},
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

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/');
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } else {
        throw new Error('Ошибка получения данных');
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid 
          minH="100vh"
          p={3}
          sx={{
            backgroundImage: "url('./background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundBlendMode:"soft-light"
          }}
          >
          <VStack marginTop="2em">

            {/* логотип */}
            <Link to="/" style={{ textDecoration: 'none' }}>
            {isLoading ? (
                <SkeletonCircle size="6em" />
              ) : (
                <Image 
                  src="./Logo.png"
                  alt="Логотип канала Техноманьяк"
                  w="9em"
                  borderRadius="50%"
                  border="3px solid white"
                  boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
                  as={motion.img}
                  initial={{scale: 0}}
                  animate={{scale: 1}}
                  transition="linear 0.1s"
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                />
              )}
            </Link>

            {/* Блок с названием */}
            <HStack
              as={motion.div}
              initial={{x: "-50px"}}
              animate={{x: "0px"}}
              transition="linear 0.1s"
            >
              {isLoading ? (
                <>
                  <SkeletonText noOfLines={1} width="10em" skeletonHeight='10'/>
                  <Skeleton height="30px" width="30px" borderRadius="50%" />
                </>
              ) : (
                <>
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
                </>
              )}
            </HStack>

            {/* Блок с ссылками на мои соц сети */}
            <ButtonGroup variant='solid' spacing='3' size='lg'>
              {isLoading ? (
                <>
                  <Skeleton width="12" height="12" />
                  <Skeleton width="12" height="12" />
                  <Skeleton width="12" height="12" />
                  <Skeleton width="12" height="12" />
                </>
              ) : (
                <>
                  <ChakraLink href={socialLink.vk} target="_blank">
                    <IconButton
                      bgColor={color.colorButton}
                      color="gray.900"
                      icon={<FaVk />}
                      as={motion.div}
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                      _hover={{ // добавляем стили для hover состояния
                        boxShadow:"3px 3px 3px 0px rgba(188,19,254)",
                        color:"rgba(188,19,254)"
                      }}
                    />
                  </ChakraLink>
                  <ChakraLink href={socialLink.telegram} target="_blank">
                    <IconButton
                      bgColor={color.colorButton}
                      color="gray.900"
                      icon={<FaTelegram />}
                      as={motion.div}
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                      _hover={{ // добавляем стили для hover состояния
                        boxShadow:"3px 3px 3px 0px rgba(188,19,254)",
                        color:"rgba(188,19,254)"
                      }}
                    />
                  </ChakraLink>
                  <ChakraLink href={socialLink.instagram} target="_blank">
                    <IconButton
                      bgColor={color.colorButton}
                      color="gray.900"
                      icon={<AiFillInstagram />}
                      as={motion.div}
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                      _hover={{ // добавляем стили для hover состояния
                        boxShadow:"3px 3px 3px 0px rgba(188,19,254)",
                        color:"rgba(188,19,254)"
                      }}
                    />
                  </ChakraLink>
                  <ChakraLink href={socialLink.linkedin} target="_blank">
                    <IconButton
                      bgColor={color.colorButton}
                      color="gray.900"
                      icon={<FaLinkedin />}
                      as={motion.div}
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                      _hover={{ // добавляем стили для hover состояния
                        boxShadow:"3px 3px 3px 0px rgba(188,19,254)",
                        color:"rgba(188,19,254)"
                      }}
                    />
                  </ChakraLink>
                </>
              )}
            </ButtonGroup>


            {/* Блок с ссылками */}
            <List as={motion.ul} variants={parentContainer} initial="hidden" animate="show">
              {links.map(link => (
                <a href={link.url}>
                  <HStack 
                    w="15em" 
                    h="3em" 
                    borderRadius="12px"
                    boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                    bgColor={color.colorButton}
                    p="1em"
                    marginY="1em"
                    color="gray.900"
                    as={motion.div}
                    variants={chieldElement}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    _hover={{ // добавляем стили для hover состояния
                      boxShadow:"12px 14px 14px 0px rgba(188,19,254)",
                      color:"rgba(188,19,254)"
                    }}
                  >
                    <Text 
                      as={link.icon} 
                      
                      fontSize={30} 
                      marginRight="auto"
                    />
                    <Text 
                      
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
                    w="15em" 
                    h="3em" 
                    borderRadius="12px"
                    boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                    color="gray.900"
                    bgColor={color.colorButton}
                    p="1em"
                    marginY="1em"
                    _hover={{ // добавляем стили для hover состояния
                      boxShadow:"12px 14px 14px 0px rgba(156, 38, 184, 0.84)",
                      color:"rgba(156, 38, 184, 0.84)"
                    }}
                    as={motion.div}
                    variants={chieldElement}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                  >
                    <Text 
                      as={link.icon} 
                      fontSize={30} 
                      marginRight="auto"
                    />
                    <Text
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
