import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';


function StrapiData() {
  const [posts, setPosts] = useState({}); // {data: [], meta: {}}



  useEffect(()=>{
    axios.get("http://localhost:1337/api/blog-articles/?populate=*").then((response)=>{
      console.log(response.data)
      setPosts(response.data)
    })

  }, [])

  console.log(posts, "This is post data")
  return (
    <div>
      {posts && posts.data && posts.data.map((post, idx) => {
        const {attributes: {imageUrl: {data: {attributes: {url}}}}} = post
        return (<div key={idx}>
          {post.attributes.Title}
          <img src={`http://localhost:1337${url}`} alt=""/>
        </div>
      )})}
    </div>
  )
}

export default StrapiData;