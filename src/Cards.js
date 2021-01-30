import React from 'react';
import { items } from './data/cards'
import { Card, Container, Divider, Header, Icon } from 'semantic-ui-react';

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