import style from "./Monitor.module.css";
import monitorImg from "./monitor.png"

export function Monitor(props){
    return (
        <>
            <div className={style.videoBox}>
            <video controls className={style.video} width="320" height="190" autoPlay loop muted>
            <source src={props.video} type="video/mp4"/>
            
            Your browser does not support the video tag.
            </video>
            <img className={style.monitor} src={monitorImg} alt="##" />
            </div>
        </>
    )
}