import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
`;

export const Tab = styled.header`
  display: flex;
  justify-content: right;
  width: 100%;
  overflow: hidden;

  a {
    flex: 1;
    text-align: center;
    padding: 16px;
    text-decoration: none;
    color: #fff;
    height: 100%;

    &.b2d {
      background: #92828d;

      &.active {
        font-weight: 600;
        box-shadow: -2px 0px 5px -2px rgba(0, 0, 0, 0.4);
        z-index: 1;
      }
    }

    &.d2b {
      background: #db9d47;

      &.active {
        font-weight: 600;
        box-shadow: 2px 0px 5px -2px rgba(0, 0, 0, 0.4);
        z-index: 1;
      }
    }

    &:hover {
      font-weight: 600;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.className === 'd2b' ? '#db9d47' : '#92828d')};
  padding: 50px 100px;
  width: 100%;
  box-shadow: 0px -2px 6px -2px rgba(0, 0, 0, 0.4);

  h1 {
    font-weight: 600;
  }

  small {
    font-size: 16px;
    margin: 25px 0 0;
  }

  p {
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    margin: 0 16px;
  }

  div {
    display: flex;
    align-items: flex-end;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
