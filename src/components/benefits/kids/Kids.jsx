import style from "./Kids.module.css";
import kidsImg from "../kids/kids.png"

export function Kids(){
    return (<>
        <img className={style.kidsImg} src={kidsImg} alt="account for kids" />
    </>)
}