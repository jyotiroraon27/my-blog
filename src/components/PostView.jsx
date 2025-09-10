import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import api from '../api'
export default function PostView(){
const { id } = useParams()
const [post, setPost] = useState(null)
const navigate = useNavigate()
useEffect(()=>{
api.get(`/posts/${id}`).then(res => setPost(res.data)).catch(console.error)
},[id])
const del = async ()=>{
if(!confirm('Delete this post?')) return
await api.delete(`/posts/${id}`)
navigate('/')
}
if(!post) return <p>Loading...</p>
return (
<div>
<h2 className="text-2xl font-bold">{post.title}</h2>
<p className="text-sm">{post.author} • {new
Date(post.createdAt).toLocaleString()}</p>
<div className="mt-4">{post.content}</div>
<div className="mt-4">
<Link to={`/edit/${post._id}`}>Edit</Link>
<button onClick={del} style={{marginLeft:10}}>Delete</button>
</div>
</div>
)
}