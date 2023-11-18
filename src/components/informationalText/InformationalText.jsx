import style from "./InformationalText.module.css";

export function InformationalText(props){
    return (
        <>
            <h1 className={style.mainTitle}>{props.mainTitle}</h1>
            <p className={style.secondaryText}>{props.secondaryText}</p>
        </>
    )
}