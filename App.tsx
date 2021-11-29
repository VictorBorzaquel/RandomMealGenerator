import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './src/screens/Home';
import 'react-native-gesture-handler';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <Routes/>
      <StatusBar style="dark" backgroundColor="transparent" translucent={false} />
    </>
  );
}
