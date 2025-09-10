import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
export default function PostList(){
const [posts, setPosts] = useState([])
const [loading, setLoading] = useState(true)
useEffect(()=>{
const fetchPosts = async ()=>{
try{
const { data } = await api.get('/posts')
setPosts(data)
}catch(err){
console.error(err)
}finally{ setLoading(false) }
}
fetchPosts()
},[])
if(loading) return <p>Loading...</p>
return (
<div>
    {posts.length === 0 && <p>No posts yet</p>}
<ul>
{posts.map(p => (
<li key={p._id} className="mb-4">
<Link to={`/posts/${p._id}`} className="block">
<h2 className="font-semibold">{p.title}</h2>
</Link>
<p className="text-sm">{p.author} • {new
Date(p.createdAt).toLocaleString()}</p>
</li>
))}
</ul>
</div>
)
}