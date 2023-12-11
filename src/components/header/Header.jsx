import style from "./Header.module.css";
import { Language } from "../language/Language";
import { Button } from "../button/Button";

export function Header() {
  return (
    <>
      <header>
        <div className={style.logo}>Netflix</div>
        <div className={style.langLogin}>
          <div className={style.langLogIn}>
            <Language />
            <div className={style.logInBtn}>
              <Button text="Sign In" type={{padding: "7px 10px", fontSize: "16px"}} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
