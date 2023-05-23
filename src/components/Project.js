import React from 'react'


  

const Project = (data) =>{
return (
  <>
    <img src={data.img} alt='my image' height='200px' width = '200px'/>
    <div>{data.title}</div>
    <p>{data.description}</p>
    <a href={data.link}>repo</a>
    <a href={data.site_link}>my site</a>

  </>
)
}



export default Project;