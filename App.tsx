/**
 * React Native App for HackPrinceton Spring 2023
 * @author: Isabel, Spiros, Ahmed, and Mac
 * @version: 1.0.0
 * @description: This is the main file for the React Native app.
 * 
 */

// import * as dotenv from "dotenv";
import React from 'react';
import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, VStack, NativeBaseProvider } from "native-base";
import type {PropsWithChildren} from 'react';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// require('dotenv').config()
const firebaseConfig = {
  apiKey: "AIzaSyA2Caf5qtlM4SnJ5zjBU5Pl4GsRiI6fbOA", // TODO: obfuscate
  authDomain: "hack-princeton-s23.firebaseapp.com",
  projectId: "hack-princeton-s23",
  storageBucket: "hack-princeton-s23.appspot.com",
  messagingSenderId: "673819601662",
  appId: "1:673819601662:web:8c392436b85f6e827893af",
  measurementId: "G-TMC34ZQD9Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
            Welcome
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                I'm a new user.{" "}
              </Text>
              <Link _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} href="#">
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
