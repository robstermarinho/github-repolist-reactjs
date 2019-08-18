import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'blue' : 'white')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .gh_icon {
    margin-right: 10px;
    animation: ${rotate} 3s linear infinite;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? '#ff6b6b' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    transition: border 0.25s ease-out;
  }
`;

export const ErrorMsg = styled.p`
  width: 100%;
  background: #ff9999;
  margin: 10px 0 5px 0;
  padding: 15px;
  color: #ad4040;
  border-radius: 4px;
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
}))`
  flex: 1;
  background: #ff9c08;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style-type: none;
  margin-top: 30px;

  li {
    color: #444;
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #ff9c08;
      text-decoration: none;
    }
  }
`;
