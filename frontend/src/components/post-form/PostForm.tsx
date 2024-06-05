import React, { useState } from 'react';
import axios from 'axios';
import './style.css'
import type { Ingredient } from '../../interfaces';
import { LocationClass } from '../../LocationClass';

const cuisineOptions = [
  'French', 'Indian', 'Japanese', 'Thai', 'Italian', 'American',
  'Mexican', 'Chinese', 'Spanish', 'Lebanese', 'Turkish', 
  'Greek', 'Vietnamese', 'Korean', 'Brazilian', 'Ethiopian',
  'Peruvian', 'Portuguese', 'Moroccan', 'Russian', 
  'Cuban', 'Malaysian', 'Irish', 'Indonesian', 'Polish'
];

interface PostFormProps {
  location: LocationClass;
  onCreatePost: (location: LocationClass) => void;
  onCloseForm: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ location, onCreatePost, onCloseForm}) => {
  
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: '', quantity: '' },
    { name: '', quantity: '' },
    { name: '', quantity: '' },
  ]);
  const [steps, setSteps] = useState<string[]>(['']);
  

  const options = cuisineOptions.map((cuisine, i) => {
    return <option key={i}  value={cuisine}> {cuisine} </option>;
  });
  console.log(location)
  const handleIngredientChange = (index:number, key: keyof Ingredient, value:string) => {
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
  const removeIngredient = (index:number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };
  const handleStepChange = (index:number, value:string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };
  const addStep = () => {
    setSteps([...steps, '']);
  };

  const removeStep = (index:number) => {
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
        lat: location.lat,
        lng: location.lng,
        country: location.country,
        zipcode: location.zipcode,
        ingredients: ingredients,
        steps: steps,
      };
      

      const endpoint = 'http://localhost:3001/api/v1/postings';
      const token = localStorage.getItem('token')
      const response = await axios.post(endpoint, userPost, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
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
    <div className='flex justify-center'>
      <form onSubmit={handleFormSubmit} id='post-form'>
        <p className='text-2xl font-bold'>Add New Recipe</p>
        <div className='flex flex-col border-r-8'>
          <input
            
            className='post-form-input'
            type='string'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter Title'
          
          ></input>
          {/* body */}
          <input
            className='border 8 h-20  mt-2 post-form-input '
            type='string'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Write A Description'
          ></input>
          <div className='m-2'>
            <h3 className='text-xl font-medium underline'>Add Cuisine Category</h3>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {options}
            </select>
          </div>
        </div>
        {/* ingredients */}
        <div className='ingredient-section' >
          <h3 className='text-xl font-medium underline'>Add Ingredients</h3>
          {ingredients.map((ingredient, index) => (
            <div className = 'flex gap-4' key={index}>
              <button className = 'change-input-button' type='button' onClick={() => removeIngredient(index)}>
                -
              </button>
              <input
                className='w-4/12 post-form-input'
                type='text'
                value={ingredient.name}
                onChange={(e) =>
                  handleIngredientChange(index, 'name', e.target.value)
                }
                placeholder='Ingredient Name'
              />
              <input
                className='post-form-input'
                type='text'
                value={ingredient.quantity}
                onChange={(e) =>
                  handleIngredientChange(index, 'quantity', e.target.value)
                }
                placeholder='Quantity'
              />
              
            </div>
          ))}
          <button type ='button' className='w-6 change-input-button ' onClick={addIngredient}>
            + 
           </button>
        </div>
        {/* Steps */}
        <div className='flex  flex-col gap-4'>
          <h3 className='text-xl font-medium underline'>Add Instructions</h3>
          {steps.map((step, index) => (
            <div className='flex' key={index}>
              
              <div className='w-full flex justify-center'>
              <button type ='button'  className=' change-input-button cursor-pointer text-2xl' onClick={() => removeStep(index)}>-</button>
                <h5 className='m-2'>{index + 1}:   </h5>
                <input
                  
                  value={step}
                  placeholder='Add Step...'
                  className=' w-full post-form-input step-input'
                  type='text'
                  onChange={(e) => handleStepChange(index, e.target.value)}
                />
               
              </div>
            </div>
          ))}
          <button type ='button' className = 'w-6 change-input-button cursor-pointer ' onClick={addStep}>+</button>
        </div>
        {/* <div>
          <h3>Add Image</h3>
          <input type='file' onChange={handleImageChange} />
        </div> */}
        <div className='flex gap-4 m-4 justify-center'>
          <button
            className=' focus:ring bg-sky-500 hover:bg-sky-700'
            type='submit'
          >
            {' '}
            Submit Form
          </button>
          <button onClick={onCloseForm}>Close Form </button>
        </div>
      

      </form>
    </div>
  );
};

export default PostForm;
