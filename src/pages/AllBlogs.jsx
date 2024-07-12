import React, { useState, useEffect } from 'react'
import service from '../appwrite/config'
import { Blog, Container } from '../components'

function AllBlogs() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.listBlogs([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div className='p-2 w-1/4' key={post.$id}>
                        <Blog post={post} />
                    </div>
                ))}
            </div> 
        </Container>
    </div>
  )
}

export default AllBlogs
