import React from 'react';
import { Card, Container, Divider, Header, Icon } from 'semantic-ui-react';

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale&blur=1',
    color: 'red', header: 'Imagen #1', meta: 'Color red',
  },
  {
    image: 'https://picsum.photos/300/300?grayscale',
    color: 'blue', header: 'Imagen #2', meta: 'Color blue',
  },
  {
    image: 'https://picsum.photos/300/300?&blur',
    color: 'teal', header: 'Imagen #3', meta: 'Color teal',
  },
  {
    image: 'https://picsum.photos/300/300',
    color: 'yellow', header: 'Imagen #4', meta: 'Color yellow',
  },
];

const Cards = () => ( 
  <Container>
    
    <Divider horizontal>
      <Header as='h2' color="blue">
        <Icon name='images' />
        Modulo de cards
      </Header>
    </Divider>

  <Card.Group items = { items } itemsPerRow = { 4 } />
  </Container>
);

export default Cards;