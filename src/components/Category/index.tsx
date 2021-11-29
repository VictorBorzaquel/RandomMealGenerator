import React from 'react';
import { ICategory } from '../../interfaces';

import {
  Container,
  Content,
  Description,
  Header,
  Thumb,
  Title
} from './styles';

export function Category({ data, goTo }: { 
  data: ICategory; 
  goTo(category: string): void 
}) {
  function handleGoTo() {
    goTo(data.strCategory)
  }

  return (
    <Container>
      <Content onPress={handleGoTo}>
        <Header>
          <Title>{data.strCategory}</Title>
          <Description>{data.strCategoryDescription}</Description>
        </Header>
          <Thumb
            source={{ uri: data.strCategoryThumb }}
            resizeMode='contain'
          />
      </Content>
    </Container>
  );
}