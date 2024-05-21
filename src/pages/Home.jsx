import styled from '@emotion/styled';
import { useEffect, useState } from "react";
import { getToken } from "../components/utils";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../redux/authSlice";
import Musics from './Musics';
import './home.css'

function Home() {
  const HomeWrapper = styled.div`
    width: 66%;
    height: 100vh;
    overflow-y: auto;
    background-color: #111111;

  `;
  const CardWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
    justify-content: center;
  `;

  const dispatch = useDispatch();
  const token = useSelector(store => store.auth.token);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!token) {
      getToken()
        .then(res => {
          dispatch(create(res));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_API_MUSIC}browse/featured-playlists`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(d => {
          if (d.message === "Popular Playlists") {
            setData(d.playlists.items); // Accessing the playlists array correctly
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [token]);

  return (
    <HomeWrapper>
      <h1>Your top mixed</h1>
      <CardWrap>
        {
          data.length > 0
            ? data.map((ele, index) => <Musics key={index} data={ele} />)
            : <p>No playlists available</p>
        }
      </CardWrap>
    </HomeWrapper>
  );
}

export default Home;
