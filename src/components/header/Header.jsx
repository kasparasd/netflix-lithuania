import style from "./Header.module.css";
import { Language } from "../language/Language";

export function Header(){
    return (
        <>
            <header>
                <dir className={style.logo}>Netflix</dir>
                <div className={style.langLogin}>
                    
                <div className={style.langLogIn}>
                   <Language/>
                        <a className={style.logInBtn} href="##">Log in</a>
                </div>

                </div>
            </header>
        </>
    )
}