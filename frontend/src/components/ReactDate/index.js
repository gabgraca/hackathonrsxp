import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function ReactDate({ name, handleInputChange }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => {
          setSelected(date);
          //handleInputChange(date);
        }}
        ref={ref}
        dateFormat="dd/MM/yyyy"
      />
      {error && <span>{error}</span>}
    </>
  );
}

ReactDate.propTypes = {
  name: PropTypes.string.isRequired,
 // handleInputChange: PropTypes.func.isRequired,
};
