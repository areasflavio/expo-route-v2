import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
}

export const Button = forwardRef<TouchableOpacity, Props>(
  ({ title, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.7}
        style={{
          width: 200,
          padding: 16,
          backgroundColor: '#1e90ff',
          alignItems: 'center',
          borderRadius: 8,
        }}
        {...rest}
      >
        <Text
          style={{
            fontSize: 16,
            color: '#ffffff',
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
);
