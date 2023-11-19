import style from "./Tv.module.css";
import tvImg from "../../benefits/tv/tv.png";

export function Tv(props){
    return(

        <div className={style.videoBox}>
        <video controls className={style.video} width="370" height="270" autoPlay loop muted>
        <source src={props.video} type="video/mp4"/>
        
        Your browser does not support the video tag.
        </video>
        <img className={style.tv} src={tvImg} alt="tv" />
    </div>
    )
}