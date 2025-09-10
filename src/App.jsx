import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostView from './components/PostView'
import './App.css';
export default function App(){
return (
<div className="container mx-auto p-4">
    <div className="center-container">
  <div className="container mx-auto p-4 bg-white rounded shadow-lg">
    {/* Your content */}
  </div>
</div>

<header className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-bold">MERN Blog</h1>
<nav>
<Link to="/">Home</Link> | <Link to="/create">Create</Link>
</nav>
</header>
<Routes>
<Route path="/" element={<PostList/>} />
<Route path="/create" element={<PostForm/>} />
<Route path="/posts/:id" element={<PostView/>} />
<Route path="/edit/:id" element={<PostForm edit/>} />
</Routes>
</div>
)
}