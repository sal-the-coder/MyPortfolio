import React from 'react'
import { FaTwitter, FaGithub } from 'react-icons/fa'
function NavBar() {

  return (
<nav class="navbar navbar-inverse fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">my portfolio</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><FaTwitter /></a></li>
      <li><a href="#">< FaGithub/></a></li>
      
    </ul>
  </div>
</nav>

  )
}



export default NavBar


