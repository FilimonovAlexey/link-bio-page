import React from 'react';
import { ChakraProvider, Box, Text, VStack, Grid, theme, Image, List, HStack } from '@chakra-ui/react';

function MyDevice() {

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} bgGradient="linear(to-b, purple.200, purple.700)">
          <VStack marginTop="2em">
            {/* логотип */}
            <Image 
              src="./Logo.png"
              w="6em"
              borderRadius="50%"
              boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
            />
            {/* название */}
            <Text fontSize="3xl" fontWeight="bold" color="white">Test</Text>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default MyDevice;