import React from 'react'


  

const Project = (data) =>{
return (
  <div key = {data.id}>
    
    <img src={data.img} alt='my image' height='200px' width = '200px'/>
    <div>{data.title}</div>
    <p>{data.description}</p>
    <a href={data.link}>repo</a>
    <a href={data.site_link}>my site</a>

  </div>
)
}



export default Project;