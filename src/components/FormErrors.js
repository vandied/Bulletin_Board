import React from 'react';
export const FormErrors = ({ formErrors }) => (
  <div className="form__errors">{<p>{formErrors}</p>}</div>
);
export default FormErrors;
