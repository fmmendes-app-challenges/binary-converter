import React, { createContext, useContext, useCallback, useState } from 'react';

interface InputContextData {
  setInputData(input: string): void;
  input: string;
}
const InputContext = createContext<InputContextData>({} as InputContextData);

const InputProvider: React.FC = ({ children }) => {
  const [input, setInput] = useState('');

  const setInputData = useCallback((inputData: string) => {
    setInput(() => inputData);
  }, []);

  return (
    <InputContext.Provider value={{ setInputData, input }}>
      {children}
    </InputContext.Provider>
  );
};

function useInput(): InputContextData {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('useInput must be used within a InputProvider');
  }

  return context;
}

export { InputProvider, useInput };
