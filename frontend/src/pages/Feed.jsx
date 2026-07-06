import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/posts');
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (isLoading) {
        return (
            <section className='feed-section'>
                <p className='loading-state'>Loading posts...</p>
            </section>
        );
    }

    if (posts.length === 0) {
        return (
            <section className='feed-section'>
                <p>No posts available.</p>
            </section>
        );
    }

    return (
        <section className='feed-section'>
            {posts.map((post) => (
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))}
        </section>
    );
};

export default Feed;