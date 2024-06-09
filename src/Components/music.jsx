import cindrella from '../assets/cindrella.mp3'
import useSound from 'use-sound'
import React from 'react'
import HeadsetIcon from '@mui/icons-material/Headset';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';
import  IconButton  from "@mui/material/IconButton";
import {useState} from 'react'


export default function Music(){

    const [play , {stop , pause} ] = useSound(cindrella);
    const [music , setMusic] = useState(true);
    music ? play() : pause();
    function togglemusic(){
        setMusic((prevstate)=>{
            return !prevstate
        })
    }

    return (
        <div className="music-button">
        <IconButton onClick={togglemusic} sx={{marginLeft:"5vh"}}>{music ? <HeadsetIcon sx={{color:"white" , fontSize:"34px"}}/> :<HeadsetOffIcon sx={{color:"white" , fontSize:"36px"}} /> }</IconButton>
        </div>
    )
}