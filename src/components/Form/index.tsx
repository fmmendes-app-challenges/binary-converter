import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
  className: 'b2d' | 'd2b';
}

const buttonVariations = {
  d2b: css`
    background: #92828d;
    border: 1px solid #92828d;

    &:hover {
      background: ${shade(0.1, '#92828d')};
      border-color: ${shade(0.1, '#92828d')};
    }
  `,
  b2d: css`
    background: #db9d47;
    border: 1px solid #db9d47;

    &:hover {
      background: ${shade(0.1, '#db9d47')};
      border-color: ${shade(0.1, '#db9d47')};
    }
  `,
};

const Form = styled.form<FormProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0 0;
  width: 400px;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 2px solid #fff;
    max-width: 360px;
    height: 60px;
    margin-left: 16px;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    input {
      border: 2px solid #fff;
      padding: 16px;
      height: 100%;
      color: #030027;
      font-size: 20px;
      width: 100%;
    }
  }

  button {
    ${(props) => buttonVariations[props.className]}
    height: 60px;
    padding: 16px;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    transition: background-color 0.2s, border-color 0.2s;
  }
`;

export default Form;
