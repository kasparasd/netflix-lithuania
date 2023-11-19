import style from "./Phone.module.css";
import phoneImg from "../phone/phone.jpg"
import movieImg from "../phone/strangerThings.png"


export function Phone(){
    return(
        <>
        <img className={style.phoneImage} src={phoneImg} alt="Phone image" />

        <div className={style.downloadingContainer}>
            <img className={style.movieImg} src={movieImg} alt="StrangerThingsImg" />
            <div className={style.textContainer}>
                <div>
                    <h4>Stranger Things</h4>
                    <p>Downloading...</p>
                </div>
                <img className={style.animation} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
            </div>
        </div>
        </>
    )
}