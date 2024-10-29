import React, { useState } from 'react';

const AddCardForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const isFormValid = name !== '' && price !== '' && description !== '';



  return (
    
  );
};

export default AddCardForm;
