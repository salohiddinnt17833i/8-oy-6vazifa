import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getToken } from '../components/utils';
import { create } from '../redux/authSlice';
import MusicTables from '../components/MusicTables';
import './playlis.css';

function Playlis() {
    const params = useParams();
    const token = useSelector(store => store.auth.token);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

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
        if (params.id && token) {
            fetch(`${import.meta.env.VITE_API_MUSIC}playlists/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(d => {
                    setData(d.tracks.items.map(item => item.track)); // Extract the track information
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [params.id, token]);

    const HomeWrapper = styled.div`
        width: 66%;
        height: 100vh;
        overflow-y: auto;
        background-color: #111111;
        color: #fff;
        padding: 20px;
    `;

    return (
        <HomeWrapper>
            <h1>Playlists</h1>
            {data.length > 0 ? (
                <>
                    <div className='tables header'>
                        <div className='p pp'>#</div>
                        <div className='p pp'>TITLE</div>
                        <div className='p pp'>ALBUM</div>
                        <div className='p pp'>DATE</div>
                        <div className='p pp'>TIME</div>
                    </div>
                    <div className='wra'>
                        {data.map((track, index) => (
                            <MusicTables data={{ track, added_at: track.added_at }} key={track.id || index} />
                        ))}
                    </div>
                </>
            ) : (
                <p>No tracks available</p>
            )}
        </HomeWrapper>
    );
}

export default Playlis;
