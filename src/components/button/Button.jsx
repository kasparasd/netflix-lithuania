import style from "../button/Button.module.css";

export function Button(props){
    return(<>
        <a style={props.style} href="##" className={style.button}>{props.text}</a>
    </>)
}