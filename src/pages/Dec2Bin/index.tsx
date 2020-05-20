import React, { useState, useCallback } from 'react';
import * as Yup from 'yup';
import { FiAlertCircle } from 'react-icons/fi';

import { useInput } from '../../hooks/input';

import PageContainer from '../../components/PageContainer';
import Content from '../../components/Content';
import Form from '../../components/Form';
import Error from '../../components/Error';

import { decimalToBinary } from '../../utils';

const Dec2Bin: React.FC = () => {
  const { input, setInputData } = useInput();

  const [binary, setBinary] = useState('0');
  const [decimal, setDecimal] = useState(0);
  const [calculating, setCalculating] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setDecimal(0);
      setBinary('0');
      setError('');
      setCalculating(true);

      try {
        const inputSchema = Yup.number()
          .positive('Not a valid number')
          .typeError('Insert a valid number');
        await inputSchema.validate(input);

        const result = decimalToBinary(Number(input));

        setDecimal(Number(input));
        setBinary(result);
        setInputData('');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setError(err.message);
          setDecimal(0);
          setBinary('0');
        } else {
          console.log(err);
        }
      }

      setCalculating(false);
    },
    [input, setInputData],
  );

  return (
    <PageContainer>
      <Content className="d2b">
        <h1>Decimal to Binary Converter</h1>
        <small>Enter decimal number:</small>
        <Form onSubmit={handleSubmit} hasError={!!error} className="d2b">
          <label htmlFor="decimalInput">
            <input
              id="decimalInput"
              type="text"
              value={input}
              onChange={(event) => setInputData(event.target.value)}
              autoComplete="off"
            />
            {error && (
              <Error title={error}>
                <FiAlertCircle color="#f34213" size={20} />
              </Error>
            )}
          </label>
          <button type="submit">Go</button>
        </Form>
        {!calculating && (
          <div>
            <div className="decimal">
              <small>Decimal: </small> <p>{decimal}</p>
            </div>
            <p>=</p>
            <div className="binary">
              <small>Binary:</small> <p>{binary}</p>
            </div>
          </div>
        )}
      </Content>
    </PageContainer>
  );
};

export default Dec2Bin;
