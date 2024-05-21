import React, { useEffect, useState } from 'react';
import './tables.css';

function MusicTables(props) {
    const [number, setNumber] = useState(0);
    const { data } = props;

    useEffect(() => {
        if (data.track && data.track.id) {
            setNumber(number + 1);
        }
        console.log(data);
    }, [data]);

    return (
        <div>
            {data.track && (
                <div className='tables'>
                    <div>{number}</div>
                    <p>{data.track.name}</p>
                    <p>{data.track.album.name}</p>
                    <p>{new Date(data.added_at).toLocaleDateString()}</p>
                    <p>{Math.floor(data.track.duration_ms / 60000)}:{((data.track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}</p>
                </div>
            )}
        </div>
    );
}

export default MusicTables;

// import React, { useEffect, useState } from 'react'
// import './tables.css'
// function MusicTables(props) {
//     const [number, setNumber] = useState(0)
//     const { data } = props
//     console.log(data);
//     useEffect(()=> {
//         if (data.track.id) {
//             setNumber(...number, number +1)
//             console.log(number);
//         }
//     },[])
//     return (
//     <div>
//         <div className='tables'>
//             <div></div>
//             <div>TITLE</div>
//             <div>ALBUM</div>
//             <div>DATE ADDED</div>
//             <div>TIME</div>
//         </div>
//     </div>
// )
// }

// export default MusicTables