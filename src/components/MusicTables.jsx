import React from 'react';
import './tables.css';

function MusicTables({ data }) {
    const { track, added_at } = data;

    return (
        <div className='tables tabless'>
            <div className='p'>{track.track_number}</div>
            <div className='p'>{track.name.length > 15 ? 'Music Name' : track.name}</div>
            <div className='p'>{track.album.name.length > 20 ? 'Album' : track.album.name}</div>
            <div className='p'>{new Date(added_at).toLocaleDateString()}</div>
            <div className='p time'>{Math.floor(track.duration_ms / 60000)}:{((track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}</div>
            {track.preview_url ? (
                <audio controls>
                    <source src={track.preview_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            ) : <>No music is played</>}
        </div>
    );
}

export default MusicTables;
