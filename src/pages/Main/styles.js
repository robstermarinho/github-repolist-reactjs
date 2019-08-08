import styled from 'styled-components';

export const Container = styled.div`
  background-color: #444;
`;
export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'blue' : 'white')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 12px;
  }
`;
