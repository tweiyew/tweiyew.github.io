import React from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  VStack,
  useColorMode,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';

import Header from './components/Header';
import Profile from './components/Profile';
import TabbedPortfolio from './components/TabbedPortfolio';

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack>

      <Header></Header>
      <TabbedPortfolio></TabbedPortfolio>
      <Profile></Profile>
    </VStack>
  );
}

export default App;