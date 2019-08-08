import React from 'react';

import { Container, Title } from './styles';

export default function Main() {
  return (
    <Container>
      <Title error>
        Main
        <small>123123</small>
      </Title>

      <Title>
        Title withou error
        <small>123123</small>
      </Title>
    </Container>
  );
}
