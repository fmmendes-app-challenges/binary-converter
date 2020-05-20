import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Tab, MainContent } from './styles';

interface ContentClass {
  className: string;
}

const Content: React.FC<ContentClass> = ({ className, children }) => {
  return (
    <Container>
      <Tab>
        <NavLink to="/dec2bin" className="d2b" activeClassName="active">
          Decimal to Binary
        </NavLink>
        <NavLink to="/bin2dec" className="b2d" activeClassName="active">
          Binary to Decimal
        </NavLink>
      </Tab>
      <MainContent className={className}>{children}</MainContent>
    </Container>
  );
};

export default Content;
