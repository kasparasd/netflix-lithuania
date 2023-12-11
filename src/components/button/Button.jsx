import style from "../button/Button.module.css";

export function Button(props){
    const btnstyle= props.type;
    return(<>
        <a style={btnstyle} href="##" className={style.button}>{props.text}</a>
    </>)
}