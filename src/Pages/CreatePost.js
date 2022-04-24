import { withAuthenticator } from "@aws-amplify/ui-react"
import React, { useState,useRef } from 'react'
import { API } from 'aws-amplify'
import {v4 as uuid} from 'uuid'
import { createPost } from '../../src/graphql/mutations'
import { useNavigate } from 'react-router-dom'
import SimpleMDE from "react-simplemde-editor"
// import "easymade/dist/easymade.min.css"

const initialState = {title: "", content: ""}
function CreatePost () {
  const [post, setPost] = useState(initialState);
  const {title, content} = post;
  let navigate = useNavigate();
  function onChange(e) {
     setPost(()=>({
       ...post, [e.target.name]:e.target.value
     }))
  }

  async function createNewPost() {
    if(!title || !content) return;
    const id = uuid();
    post.id = id
     await API.graphql({
      query: createPost,
      variables: {input: post},
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    navigate.push(`/post/${id}`)
  }
  return (
    <div className=' px-10 bg-slate-100 h-screen'>
        <h1 className="text-3xl font-semibold tracking-wide mt-6">Create Vlog</h1>
    </div>
  )
}

export default withAuthenticator(CreatePost);