import React, { useState, useEffect } from 'react';
import Playlist from 'react-mp3-player'; 

export default function AudioPlayer(){
    const tracks = [{ img: require('../../assets/TUNE_COVERART.jpg'), name: 'ComeVibe', desc: 'produced by tune.', src: 'https://res.cloudinary.com/https-pilot-tune-herokuapp-com/video/upload/v1581756932/come_vibe_final_vtfuqy.wav' },
        { img: require('../../assets/tokyo.jpg'), name: 'TOKYO!', desc: 'produced by tune.', src: 'https://res.cloudinary.com/https-pilot-tune-herokuapp-com/video/upload/v1581757054/MASTERED_4-tokyo_normalize_mix_2-px24-uhq_z237yc.wav' }]

    const playlistOverideStylingOpts = {
        
        breakpoint: {
            maxWidth: 768
        }
    };

    return (
        <div>
            <Playlist tracks={tracks} opts={playlistOverideStylingOpts} />
        </div>
    )
}