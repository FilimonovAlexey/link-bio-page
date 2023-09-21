import React from 'react';
import { Link } from "react-router-dom";
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
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Stack,
  Heading,
  Button
 } from '@chakra-ui/react';

function MyDevice() {

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} bgGradient="linear(to-b, purple.200, purple.700)">
          <VStack marginTop="2em">
            {/* логотип */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Image 
                src="./LogoDevice.png"
                w="15em"
                boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
                borderRadius="10%"
              />
            </Link>

            {/* название */}
            <Text 
              fontSize={30} 
              fontWeight="bold"
              color="black"
              >Мои девайсы
            </Text>

            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              w="30em" 
              h="12em"
              boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
              />

              <Stack>
                <CardBody>
                  <Heading 
                    size='md'
                  >
                    Test
                  </Heading>
                  <Text 
                    py='2'
                  >
                    Test
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button 
                    variant='solid' 
                    colorScheme='blue'
                  >
                    Купить
                  </Button>
                </CardFooter>

              </Stack>
            </Card>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default MyDevice;