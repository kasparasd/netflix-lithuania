import style from "../benefits/Benefits.module.css";


export function Benefits(props){
    return (
        <div className={style[`${props.videoDirection}`]}>
            <div className={style.benefitstext}>
                <h1 className={style.benefitsH1}>
                {props.h1}
                </h1>
                <p className={style.benefitsP}>
                {props.p}
                </p>
            </div>
            {props.playerType}
         
        </div>
    )
}