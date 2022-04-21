import React, { useEffect, useState } from 'react'
import { API } from 'aws-amplify';
import { listPosts } from '../graphql/queries';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
const Home = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts)
    const fetchPost = async () => {
        const postData = await API.graphql({
            query: listPosts
        })
        setPosts(postData.data.listPosts.items)
    }

    useEffect(()=>{
      fetchPost()
    },[])

  return (
    <div>
        {posts.map((post,index)=> (
            <p key={index} className=' text-2xl'>{post.content}</p>
        ))}

    </div>
  )
}

export default Home