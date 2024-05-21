import React, { useEffect } from 'react'
import styled from '@emotion/styled';
import './playlis.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Playlis() {
  const token = useSelector(store => store.auth.token);
    const params = useParams()
    useEffect(()=> {
        fetch(`https://api.spotify.com/v1/${params.id}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
            .then(res => res.json())
            .then(d => {
              if (d.message === "Popular Playlists") {
                setData(d.playlists.items);
              }
            })
            .catch(err => {
              console.log(err);
            });    
    }, [])
  
    const LikesWrapper = styled.div`
  width: 66%;
  height: 100vh;
  overflow-y: auto;
  background-color: #111111;
`;

return (

    

    <LikesWrapper>
        <div>
            <h1>Playlis</h1>
        </div>
    </LikesWrapper>
  )
}

export default Playlis