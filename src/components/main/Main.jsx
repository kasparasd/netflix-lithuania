import style from "../main/Main.module.css";
import { Benefits } from "../benefits/Benefits";
import { Tv } from "../benefits/tv/Tv";
import { Phone } from "../benefits/phone/Phone";

export function Main(){
    return (
        <div className={style.main}> 
        <Benefits
        videoDirection = "right" 
        h1="Enjoy on your TV" 
        p="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        playerType = {<Tv video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>}
        />

        <Benefits
        videoDirection = "left" 
        h1="Download your shows to watch offline" 
        p="Save your favorites easily and always have something to watch."
        playerType = {<Phone video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>}
        />
        
        </div>
    )
}