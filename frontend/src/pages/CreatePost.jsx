import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export const CreatePost = () => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        axios.post("http://localhost:3000/create-post", formData)
            .then((response) => {
                navigate('/feed');
            })
            .catch((error) => {
                console.error('Error creating post:', error);
            });
    }

  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit} >
            <input type="file" name="image" accept="image/*" />
            <input type="text" name="caption" placeholder="Enter a caption..." required />
            <button type="submit">Submit</button>
        </form>

    </section>
  )
}


export default CreatePost