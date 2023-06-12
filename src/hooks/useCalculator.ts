import {useState} from 'react';
import {Alert} from 'react-native';
enum Operation {
  ADDITION,
  SUBTRACTION,
  DIVISION,
  MULTIPLICATION,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const [operation, setOperation] = useState<Operation | null>(null);

  const passToPreviousValue = (value: string) => {
    if (value.charAt(value.length - 1) === '.') {
      setPreviousNumber(value.slice(0, value.length - 1));
    } else {
      setPreviousNumber(value);
    }
  };

  const onAdd = () => {
    if (operation !== null) {
      onResolveOperation(false);
    } else {
      passToPreviousValue(number);
      setNumber('0');
    }
    setOperation(Operation.ADDITION);
  };

  const onSubtraction = () => {
    if (operation !== null) {
      onResolveOperation(false);
    } else {
      passToPreviousValue(number);
      setNumber('0');
    }
    setOperation(Operation.SUBTRACTION);
  };

  const onDivision = () => {
    if (operation !== null) {
      onResolveOperation(false);
    } else {
      passToPreviousValue(number);
      setNumber('0');
    }
    setOperation(Operation.DIVISION);
  };

  const onMultiplication = () => {
    if (operation !== null) {
      onResolveOperation(false);
    } else {
      passToPreviousValue(number);
      setNumber('0');
    }
    setOperation(Operation.MULTIPLICATION);
  };

  const alertCantDivideByZero = () => {
    Alert.alert('Error', 'You can not divide by zero', [
      {
        text: 'Ok',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  };

  const onResolveOperation = (toFinalResult = false) => {
    let result = 0;
    let successOperation = true;

    if (operation !== null) {
      switch (operation) {
        case Operation.ADDITION:
          result = Number(previousNumber) + Number(number);
          break;
        case Operation.SUBTRACTION:
          result = Number(previousNumber) - Number(number);
          break;
        case Operation.DIVISION:
          if (number !== '0') {
            result = Number(previousNumber) / Number(number);
          } else {
            successOperation = false;
            alertCantDivideByZero();
          }
          break;
        case Operation.MULTIPLICATION:
          result = Number(previousNumber) * Number(number);
          break;
      }

      if (successOperation) {
        if (toFinalResult) {
          setPreviousNumber('0');
          setNumber(result.toString());
        } else {
          setPreviousNumber(result.toString());
          setNumber('0');
        }
        setOperation(null);
      }
    }
  };

  const onClean = () => {
    setNumber('0');
    setPreviousNumber('0');
    setOperation(null);
  };

  const onDelete = () => {
    if (number.includes('-')) {
      if (number.length > 2) {
        setNumber(number.slice(0, number.length - 1));
      } else if (number.length === 2 && number.charAt(0) === '-') {
        setNumber('0');
      }
    } else {
      if (number.length > 1) {
        setNumber(number.slice(0, number.length - 1));
      } else {
        setNumber('0');
      }
    }
  };

  const onChangeSign = () => {
    if (number !== '0') {
      if (number.includes('-')) {
        setNumber(number.replace('-', ''));
      } else {
        setNumber('-' + number);
      }
    }
  };

  const onNumberPressed = (value: string) => {
    if (value === '0' && number === '0') {
      return;
    }
    if (value === '.' && number.includes('.')) {
      return;
    }

    if (number === '0' && value !== '.') {
      setNumber(value);
    } else {
      setNumber(number + value);
    }
  };

  return {
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
  };
};
