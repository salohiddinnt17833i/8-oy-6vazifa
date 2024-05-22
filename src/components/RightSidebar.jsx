import styled from '@emotion/styled'
import React from 'react'
import { LuUserPlus2 } from "react-icons/lu";
import { GrAdd } from "react-icons/gr";

import userLoading from '../assets/userLoading.svg'


import './sidebar.css'

function RightSidebar() {

  const RightSideWrapper = styled.div`
    width: 17%;
    height: 100vh;
    background-color: black;
    color: white
  `
  const useLoa = [
    {
      img: userLoading
    },
    {
      img: userLoading
    },
    {
      img: userLoading
    }
  ]


  return (
    <RightSideWrapper>
      <div className='container'>
        <div className='top'>
          <p className='topp'>
            Friend Activity
          </p>
          <p>
            <LuUserPlus2 className='icons' />
            <GrAdd className='icons' />
          </p>
        </div>
        <div>
          <span className='lorem'>Let friends and followers on Spotify see what you’re listening to.</span>
        </div>
        <div className='users'>
          {
            useLoa.map((ele, inde) => {
              return (
                <img style={{
                  height: "62px"
                }} src={ele.img} alt="" />
              )
            })
          }
        </div>
        <div>
          <span className='lorem'>Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</span>
        </div>
        <button>SETTINGS</button>
      </div>
    </RightSideWrapper>
  )
}

export default RightSidebar