import React, { useState, useEffect } from 'react';
import tmdbApi from './tmdbApi';
import apiConfig from '../config';

const CastList = props => {

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits('movie', props.id);
            
            setCasts(res.cast.slice(0, 6));
        }
        getCredits();
    }, [props.id]);

    
    return (
        <div className="grid grid-cols-3 md:grid-cols-6">
            {  
                casts.map((c, i) => (
                    <div key={i} className="flex flex-col justify-start items-start p-3">
                        <div className="w-24 h-36 bg-contain bg-no-repeat" style={{backgroundImage: `url(${apiConfig.w500Image(c.profile_path ? c.profile_path : '8Q36TGfbnm4CjuKVWz1XGmTiZtk.jpg')})`}}></div>
                        <p className="text-white">{c.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CastList;
