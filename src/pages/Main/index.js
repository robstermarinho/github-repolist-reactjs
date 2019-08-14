import React from 'react';

import { Container, Form, SubmitButton } from './styles';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt className="gh_icon" />
        Repositories
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Add Repository" />
        <SubmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
