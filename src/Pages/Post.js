import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from 'aws-amplify';
import reactMarkdown from 'react-markdown';
import '../configureAmplify'
import { getPost, listPosts } from '../graphql/queries';


const Post = () => {
  const params = useParams();
  const {id } = params;
  const [myPost, setMyPost] = useState([]);
  // console.log(myPost)
  const getMyPost = async ()=> {
    const postData = await API.graphql({
      query: getPost,
      variables: {id}
    })
    setMyPost(postData.data.getPost)
  }
  useEffect(()=>{
    getMyPost();
  },[])
  // console.log(params.id)
  return (
   <div>
      <h1 className=' text-5xl font-semibold mt-4 tracking-wide'>
         {myPost.title}
      </h1>
      <p className=' text-sm font-light my-4'> By: {myPost.username} </p>
    <div className='mt-8'>
    <p reactMarkdown=' prose '> {myPost.content} </p>
    </div>
    </div>
  )
}

export default Post


