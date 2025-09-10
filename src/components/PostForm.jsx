import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../api'
export default function PostForm({ edit }){
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [author, setAuthor] = useState('')
const navigate = useNavigate()
const { id } = useParams()
useEffect(()=>{
if(edit && id){
api.get(`/posts/${id}`).then(res => {
setTitle(res.data.title)
setContent(res.data.content)
setAuthor(res.data.author || '')
}).catch(console.error)
}
},[edit,id])
const submit = async (e) =>{
e.preventDefault()
try{
const payload = { title, content, author }
if(edit && id){
await api.put(`/posts/${id}`, payload)
} else {
    await api.post('/posts', payload)
}
navigate('/')
}catch(err){
console.error(err)
}
}
return (
<form onSubmit={submit} className="max-w-xl">
<div>
<label>Title</label>
<input value={title} onChange={e=>setTitle(e.target.value)} required />
</div>
<div>
<label>Content</label>
<textarea value={content} onChange={e=>setContent(e.target.value)}
required />
</div>
<div>
<label>Author</label>
<input value={author} onChange={e=>setAuthor(e.target.value)} />
</div>
<button type="submit">{edit ? 'Update' : 'Create'}</button>
</form>
)
}