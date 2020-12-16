import React from 'react';
import { TextField } from '@material-ui/core';
import '../App.css';

const NumberBox = (props) => {
  return (
    <TextField
      id='standard-number'
      label={props.label}
      type='number'
      helperText={props.helper}
      style={{ width: '80%' }}
      InputProps={{ inputProps: { min: props.min, max: props.max } }}
      name={props.name}
      onChange={props.onChangeProp}
    />
  );
};

export default NumberBox;
