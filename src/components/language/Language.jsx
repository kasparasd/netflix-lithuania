import style from "./Language.module.css";

export function Language(){
    return (<>
         <select className={style.language} name="language" id="lang">
            <option value="English">English</option>
            <option value="Lithuanian">Lithuanian</option>
        </select>
    </>)
}