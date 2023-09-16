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
  Image
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack>
            <Image src="./Logo512.png"/>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
