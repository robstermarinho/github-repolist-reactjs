import styled from 'styled-components';

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
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex: 10;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 15px;
  }
`;
export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  flex: 1;
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
