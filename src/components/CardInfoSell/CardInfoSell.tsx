import React, { useState } from 'react';

const AddCardForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const isFormValid = name !== '' && price !== '' && description !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Post Card:', { name, price: parseFloat(price), description });
      setName('');
      setPrice('');
      setDescription('');
    }
  };

  return (
    
  );
};

export default AddCardForm;
