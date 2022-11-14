import React from 'react';
import "./Music.scss";
import ReactAudioPlayer from 'react-audio-player';
import music from '../../assets/Master_KG_-_Jerusalema_Ft_Nomcebo_CeeNaija.com_.mp3'

const Music = () => {
    return (<div className={'reverse'}>
        <ReactAudioPlayer className={'player'}
                          src={music}
                          loop
                          controlsList={'play'}
                          autoPlay={true}
                          controls
                          volume={.3}
        />
    </div>);
};

export default Music;