import { WHITE_COLOR } from '@/config/constants/theme.const';
import React from 'react';

import { View as DefaultView } from 'react-native';

export type ViewProps = DefaultView['props'];

const View = (props: ViewProps) => {
  const { style, ...other } = props;

  return (
    <DefaultView style={[{ backgroundColor: WHITE_COLOR }, style]} {...other} />
  );
};

export default View;
