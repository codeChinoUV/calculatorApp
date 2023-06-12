import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export enum ButtonType {
  ACTION,
  OPERATION,
  NUMBER,
}

interface FunctionButtonProps {
  text: string;
  action: () => void;
  type: ButtonType;
  doubleWidth?: boolean;
}

export const FunctionButton = ({
  text,
  type,
  action,
  doubleWidth,
}: FunctionButtonProps) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={{...styles.button, ...MAP_STYLES_WITH_BUTTON_TYPE[type]}}>
        <Text
          style={{
            ...styles.buttonText,
            ...MAP_STYLES_WITH_BUTTON_TEXT_TYPE[type],
            width: doubleWidth ? 164 : 75,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 75,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 7,
  },
  buttonText: {
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
  },
  buttonAction: {
    backgroundColor: '#9B9B9B',
  },
  buttonTextAction: {
    color: 'black',
  },
  buttonOperation: {
    backgroundColor: '#FF9427',
  },
  textWhite: {
    color: 'white',
  },
  buttonNumber: {
    backgroundColor: '#2D2D2D',
  },
});

const MAP_STYLES_WITH_BUTTON_TYPE: Record<ButtonType, any> = {
  [ButtonType.OPERATION]: styles.buttonOperation,
  [ButtonType.ACTION]: styles.buttonAction,
  [ButtonType.NUMBER]: styles.buttonNumber,
};

const MAP_STYLES_WITH_BUTTON_TEXT_TYPE: Record<ButtonType, any> = {
  [ButtonType.OPERATION]: styles.textWhite,
  [ButtonType.ACTION]: styles.buttonTextAction,
  [ButtonType.NUMBER]: styles.textWhite,
};
