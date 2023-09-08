import {
  BODY_FONT,
  HEADING_FONT,
  TEXT_COLOR,
} from '@/config/constants/theme.const';
import React from 'react';

import { Text as DefaultText } from 'react-native';

export type TextProps = DefaultText['props'] & {
  variant: 'heading' | 'body';
};

const Text = (props: TextProps) => {
  const { style, variant, ...other } = props;

  return (
    <DefaultText
      style={[
        {
          fontFamily: variant === 'heading' ? HEADING_FONT : BODY_FONT,
          color: TEXT_COLOR,
        },
        style,
      ]}
      {...other}
    />
  );
};

export default Text;
