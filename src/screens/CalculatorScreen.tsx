import {Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../theme/appTheme';
import {ButtonType, FunctionButton} from '../components/FunctionButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    onAdd,
    onSubtraction,
    onDivision,
    onMultiplication,
    onResolveOperation,
    onNumberPressed,
    onClean,
    onDelete,
    onChangeSign,
  } = useCalculator();

  return (
    <View>
      {previousNumber !== '0' && (
        <Text style={globalStyles.previousResult}>{previousNumber}</Text>
      )}
      <Text style={globalStyles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={globalStyles.row}>
        <FunctionButton text="C" action={onClean} type={ButtonType.ACTION} />
        <FunctionButton
          text="+/-"
          action={onChangeSign}
          type={ButtonType.ACTION}
        />
        <FunctionButton text="Del" action={onDelete} type={ButtonType.ACTION} />
        <FunctionButton
          text="/"
          action={onDivision}
          type={ButtonType.OPERATION}
        />
      </View>
      <View style={globalStyles.row}>
        <FunctionButton
          text="7"
          action={() => onNumberPressed('7')}
          type={ButtonType.NUMBER}
        />
        <FunctionButton
          text="8"
          action={() => onNumberPressed('8')}
          type={ButtonType.NUMBER}
        />
        <FunctionButton
          text="9"
          action={() => onNumberPressed('9')}
          type={ButtonType.NUMBER}
        />
        <FunctionButton
          text="X"
          action={onMultiplication}
          type={ButtonType.OPERATION}
        />
      </View>
      <View style={globalStyles.row}>
        <FunctionButton
          text="4"
          action={() => onNumberPressed('4')}
          type={ButtonType.NUMBER}
        />
        <FunctionButton
          text="5"
          action={() => onNumberPressed('5')}
          type={ButtonType.NUMBER}
        />
        <FunctionButton
          text="6"
          action={() => onNumberPressed('6')}
          type={ButtonType.NUMBER}
        />
        <FunctionButton
          text="-"
          action={onSubtraction}
          type={ButtonType.OPERATION}
        />
      </View>
      <View style={globalStyles.row}>
        <FunctionButton
          text="1"
          action={() => onNumberPressed('1')}
          type={ButtonType.NUMBER}
        />
        <FunctionButton
          text="2"
          action={() => onNumberPressed('2')}
          type={ButtonType.NUMBER}
        />
        <FunctionButton
          text="3"
          action={() => onNumberPressed('3')}
          type={ButtonType.NUMBER}
        />
        <FunctionButton text="+" action={onAdd} type={ButtonType.OPERATION} />
      </View>
      <View style={globalStyles.row}>
        <FunctionButton
          doubleWidth
          text="0"
          action={() => onNumberPressed('0')}
          type={ButtonType.NUMBER}
        />
        <FunctionButton
          text="."
          action={() => onNumberPressed('.')}
          type={ButtonType.NUMBER}
        />
        <FunctionButton
          text="="
          action={() => onResolveOperation(true)}
          type={ButtonType.OPERATION}
        />
      </View>
    </View>
  );
};
