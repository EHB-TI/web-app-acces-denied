import React from 'react';
import congrat from "../../gif/congrat.gif"
import '../../layout/Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request! Your car part announcement has been successfully added! Congratulations</h1>
      <img className='form-img-2' src={congrat} alt='success-image' />
    </div>
  );
};

export default FormSuccess;