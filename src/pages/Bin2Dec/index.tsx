import React, { useState, useCallback } from 'react';
import * as Yup from 'yup';
import { FiAlertCircle } from 'react-icons/fi';

import PageContainer from '../../components/PageContainer';
import Content from '../../components/Content';
import Form from '../../components/Form';
import Error from '../../components/Error';

import { binaryToDecimal } from '../../utils';

const Bin2Dec: React.FC = () => {
  const [binaryInput, setBinaryInput] = useState('');
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
        const inputSchema = Yup.string()
          .matches(/^[0-1]*$/, 'Not a binary')
          .required('Insert a binary');
        await inputSchema.validate(binaryInput);

        const result = binaryToDecimal(binaryInput);

        setBinary(binaryInput);
        setDecimal(result);
        setBinaryInput('');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setError(err.message);
          setBinary('0');
          setDecimal(0);
        } else {
          console.log(err);
        }
      }

      setCalculating(false);
    },
    [binaryInput],
  );

  return (
    <PageContainer>
      <Content className="b2d">
        <h1>Binary to Decimal Converter</h1>
        <small>Enter binary number:</small>
        <Form onSubmit={handleSubmit} hasError={!!error} className="b2d">
          <label htmlFor="binaryInput">
            <input
              id="binaryInput"
              type="text"
              value={binaryInput}
              onChange={(event) => setBinaryInput(event.target.value)}
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
            <div className="binary">
              <small>Binary: </small> <p>{binary}</p>
            </div>
            <p>=</p>
            <div className="decimal">
              <small>Decimal:</small> <p>{decimal}</p>
            </div>
          </div>
        )}
      </Content>
    </PageContainer>
  );
};

export default Bin2Dec;
