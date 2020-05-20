import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 20px;
  margin-left: 16px;

  svg {
    margin-right: 16px;
  }

  span {
    width: 160px;
    background: #f34213;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-55%);

    color: #fff;
    text-align: center;

    &::before {
      content: '';
      position: absolute;
      border-style: solid;
      border-color: #f34213 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
