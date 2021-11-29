import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
  Container
} from './styles';

export function Loader() {
  return (
    <Container>
      <ActivityIndicator color="#000" size="large" />
    </Container>
  );
}
