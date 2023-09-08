import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  return <>{children}</>;
};

export default ThemeProvider;
