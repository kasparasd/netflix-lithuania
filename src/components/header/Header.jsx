import style from "./Header.module.css";

export function Header(){
    return (
        <>
            <header>
                <dir className={style.logo}>Netflix</dir>
                <div className={style.langLogin}>
                    
                <div >
                    <select className={style.language} name="language" id="lang">
                        <option value="English">English</option>
                        <option value="Lithuanian">Lithuanian</option>
                    </select>
                </div>

                        <a href="##">Log in</a>
                </div>
            </header>
        </>
    )
}