import style from "../main/Main.module.css";
import { Benefits } from "../benefits/Benefits";
import { Tv } from "../benefits/tv/Tv";
import { Phone } from "../benefits/phone/Phone";
import { Monitor } from "../benefits/monitor/Monitor";
import { Kids } from "../benefits/kids/Kids";
import { Faq } from "../faq/Faq";

export function Main(){
    return (
        <div className={style.main}> 
        <Benefits
        mediaDirection = "right" 
        h1="Enjoy on your TV" 
        p="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        playerType = {<Tv video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>}
        />

        <Benefits
        mediaDirection = "left" 
        h1="Download your shows to watch offline" 
        p="Save your favorites easily and always have something to watch."
        playerType = {<Phone />}
        />

        <Benefits
        mediaDirection = "right" 
        h1="Watch everywhere" 
        p="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        playerType = {<Monitor video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"/>}
        />

        <Benefits
        mediaDirection = "left" 
        h1="Create profiles for kids" 
        p="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        playerType = {<Kids />}
        />
        
        <Faq/>
        </div>
    )
}