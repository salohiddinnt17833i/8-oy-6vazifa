import React from 'react';
import { RingLoader } from 'react-spinners';
import './Loader.css'
const LoaderComponent = () => (
    <div className="loader-container">
        <RingLoader color="#1db954" size={150} />
    </div>
);

export default LoaderComponent;
