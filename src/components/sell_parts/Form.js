import React, { useState } from 'react';
import '../../layout/Form.css';
import FormSellPart from './FormSellPart';

import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
      
          <img className='form-img' src='assets/images/car-parts.png' alt='auto parts' />
        </div>
        {!isSubmitted ? (
          <FormSellPart submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;