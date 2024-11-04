import React, { useState } from 'react';

const CardForm = () => {
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
    <div className="add-card-form">
      <h2>Add a New Card</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Card Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter card name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value.replace(/\D/g, ''))} 
            placeholder="Enter price"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
          />
        </div>

        <button type="submit" disabled={!isFormValid} className="submit-button">
          Post Card
        </button>
      </form>
    </div>
  );
};

export default CardForm;
