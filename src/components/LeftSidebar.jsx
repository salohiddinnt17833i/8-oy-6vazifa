import React from 'react'
import styled from '@emotion/styled'
import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";
import { IoMdHeartDislike } from "react-icons/io";



import './sidebar.css'
import { NavLink } from 'react-router-dom';
function LeftSidebar() {

  const LeftSideWrapper = styled.div`
    width: 17%;
    height: 100vh;
    background-color: black;
    color: white
  `

  return (
    <LeftSideWrapper>
      <div className='container'>
        <div className='head'>
          <NavLink className="navlink" to={'/'}><p><GrHomeRounded className='icon'></GrHomeRounded><span>Home</span></p></NavLink>
          <NavLink className="navlink"><p><IoSearch className='icon'></IoSearch><span>Search</span></p></NavLink>
          <NavLink className="navlink"><p><BsCollection className='icon'></BsCollection><span>Your Library</span></p></NavLink>
          <NavLink className="navlink"><p><CiSquarePlus className='icon'></CiSquarePlus><span>Create Playlist</span></p></NavLink>
          <NavLink className="navlink"><p><IoMdHeartDislike className='icon'></IoMdHeartDislike><span>Liked Songs</span></p></NavLink>
        </div>
        <div className='text'>
          <p>Chill Mix</p>
          <p>Insta Hits</p>
          <p>Your Top Songs 2021</p>
          <p>Mellow Songs</p>
          <p>Anime Lofi & Chillhop Music</p>
          <p>BG Afro “Select” Vibes</p>
          <p>Afro “Select” Vibes</p>
          <p>Happy Hits!</p>
          <p>Deep Focus</p>
          <p>Instrumental Study</p>
          <p>OST Compilations</p>
          <p>Nostalgia for old souled mill...</p>
          <p>Mixed Feelings</p>
        </div>
      </div>
    </LeftSideWrapper>
  )
}

export default LeftSidebar