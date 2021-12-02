import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../../layout/Form.css';

const FormSellPart = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Let's sell your car part! Create your announcement by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Title</label>
          <input
            className='form-input'
            type='text'
            name='title'
            placeholder='Enter your title'
            value={values.title}
            onChange={handleChange}
          />
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Price</label>
          <input
            className='form-input'
            type='number'
            name='price'
            placeholder='Enter your price'
            value={values.price}
            onChange={handleChange}
          />
          {errors.price && <p>{errors.price}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Description</label>
          <textarea
            className='form-input'
            rows='3'
            name='description'
            placeholder='Enter your description'
            value={values.description}
            onChange={handleChange}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSellPart;