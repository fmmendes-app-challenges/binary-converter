import React from 'react';

import { Container } from './styles';
import Footer from '../Footer';

const PageContainer: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
      <Footer />
    </Container>
  );
};

export default PageContainer;
