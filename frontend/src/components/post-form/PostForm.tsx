import React, { useState } from 'react';
import axios from 'axios';
import fetchLocationData from '../../utilities/locationUtils.ts';

interface CategoryOptions {
  label: string;
  value: 'event' | 'recipe' | 'podcast' | 'music';
}

const categoryOptions: CategoryOptions[] = [
  { label: 'Recipe', value: 'recipe' },
  { label: 'Podcast', value: 'podcast' },
  { label: 'Music', value: 'music' },
  { label: 'Event', value: 'event' },
];

const PostForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [ingredients, setIngredients] = useState([
    { name: '', quantity: '' },
    { name: '', quantity: '' },
    { name: '', quantity: '' },
  ]);
  const [steps, setSteps] = useState(['']);

  const options = categoryOptions.map((category) => {
    return <option value={category.value}> {category.label} </option>;
  });

  const handleIngredientChange = (index, key, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = {
      ...newIngredients[index],
      [key]: value,
    };
    setIngredients(newIngredients);
    console.log(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '' }]);
  };
  const removeIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };
  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };
  const addStep = () => {
    setSteps([...steps, '']);
  };

  const removeStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log('attemping to send user post to backend');
      const locationData = await fetchLocationData();

      const userPost = {
        title: title,
        body: body,
        category: selectedCategory,
        neighborhood: locationData.neighborhood,
        city: locationData.city,
        county: locationData.country,
        state: locationData.state,
        country: locationData.country,
        zipcode: locationData.zipcode,
        ingredients: ingredients,
        steps: steps,
      };

      const endpoint = 'http://localhost:3001/api/v1/postings';
      const response = await axios.post(endpoint, userPost);
      setTitle('');
      setBody('');
      setSelectedCategory('');
      setIngredients([
        { name: '', quantity: '' },
        { name: '', quantity: '' },
        { name: '', quantity: '' },
      ]);
      setSteps(['']);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className='flex flex-col border 8'>
        {/* title */}
        <input
          className='border 6'
          type='string'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter Title'
          required
        ></input>
        {/* body */}
        <input
          className='border 4 h-40'
          type='string'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='Write A Description'
        ></input>
        <h3>Add Cuisine Category</h3>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {options}
        </select>
        {/* ingredients */}
        <div>
          <h3>Ingredients</h3>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type='text'
                value={ingredient.name}
                onChange={(e) =>
                  handleIngredientChange(index, 'name', e.target.value)
                }
                placeholder='Ingredient Name'
              />
              <input
                type='text'
                value={ingredient.quantity}
                onChange={(e) =>
                  handleIngredientChange(index, 'quantity', e.target.value)
                }
                placeholder='Quantity'
              />
              <button type='button' onClick={() => removeIngredient(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type='button' onClick={addIngredient}>
            Add Ingredient
          </button>
        </div>
        {/* Steps */}
        <div>
          <h3>Steps</h3>
          {steps.map((step, index) => (
            <div key={index}>
              <div className='flex'>
                <h5>{index + 1}:</h5>
                <input
                  value={step}
                  className='border 8 w-50'
                  type='text'
                  onChange={(e) => handleStepChange(index, e.target.value)}
                />
                <button onClick={() => removeStep(index)}>-</button>
              </div>
            </div>
          ))}
          <button onClick={addStep}>Add Step</button>
        </div>

        <button
          className=' focus:ring bg-sky-500 hover:bg-sky-700'
          type='submit'
        >
          {' '}
          Submit Form
        </button>
        {/* Add Picture */}
      </form>
    </>
  );
};

export default PostForm;
