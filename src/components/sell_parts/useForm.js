import { useState, useEffect } from 'react';
import { auth, db } from '../../firebase/firebase';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    title: '',
    price: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  async function postData(values){
    var dateNow = new Date;
    const data = {
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
        title: values.title,
        price: values.price,
        description: values.description,
        date: dateNow.toString(),            
    };  
    await db.collection('car_parts').doc().set(data)
  }

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    // Send data to firestore
    postData(values)
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;