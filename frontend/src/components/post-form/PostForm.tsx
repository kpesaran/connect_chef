import React, { useState } from 'react';
import axios from 'axios';

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

const PostForm: React.FC = ({ location, onCreatePost, onCloseForm}) => {
  
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
      

      const userPost = {
        title: title,
        body: body,
        category: selectedCategory,
        neighborhood: location.neighborhood,
        city: location.city,
        county: location.country,
        state: location.state,
        country: location.country,
        zipcode: location.zipcode,
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
      onCloseForm()
      onCreatePost(location)
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
        <div className='flex flex-col gap-4' >
          <h3>Add Ingredients</h3>
          {ingredients.map((ingredient, index) => (
            <div className = 'flex gap-4' key={index}>
              <button type='button' onClick={() => removeIngredient(index)}>
                -
              </button>
              <input
                className='w-4/12'
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
              
            </div>
          ))}
          <button className='w-5' type='button' onClick={addIngredient}>
            +
          </button>
        </div>
        {/* Steps */}
        <div className='flex flex-col gap-4'>
          <h3 >Add Instructions</h3>
          {steps.map((step, index) => (
            <div key={index}>
              
              <div className='flex'>
              <button onClick={() => removeStep(index)}>-</button>
                <h5 className='m-2'>{index + 1}:   </h5>
                <input
                  value={step}
                  className='border 8 w-10/12'
                  type='text'
                  onChange={(e) => handleStepChange(index, e.target.value)}
                />
               
              </div>
            </div>
          ))}
          <button className = 'w-5' onClick={addStep}>+</button>
        </div>

        <button
          className=' focus:ring bg-sky-500 hover:bg-sky-700'
          type='submit'
        >
          {' '}
          Submit Form
        </button>
        <button onClick={onCloseForm}>Close Form </button>
        {/* Add Picture */}
      </form>
    </>
  );
};

export default PostForm;
