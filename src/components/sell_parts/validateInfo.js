export default function validateInfo(values) {
    let errors = {};
  
    if (!values.title.trim()) {
      errors.title = 'Title is required';
    }
    else if (!/^[A-Za-z]+/.test(values.title.trim())) {
       errors.title = 'Please enter a valid title, only words no special characters';
    }
  
    if (!values.price) {
      errors.price = 'Price is required';
    } 
    if (!values.description) {
      errors.description = 'Description is required';
    } else if (values.description.length < 25) {
      errors.description = 'Description needs to be 25 characters or more';
    }
    return errors;
  }