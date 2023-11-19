import style from "./Header.module.css";
import { Language } from "../language/Language";
import { Button } from "../button/Button";

export function Header(){
    return (
        <>
            <header>
                <dir className={style.logo}>Netflix</dir>
                <div className={style.langLogin}>
                    
                <div className={style.langLogIn}>
                   <Language/>
                        <Button text="Sign In" style={{ width: "90px", fontSize:"14px"}}/>
                </div>

                </div>
            </header>
        </>
    )
}