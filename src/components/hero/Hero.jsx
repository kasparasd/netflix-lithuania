import { Header } from "../header/Header";
import style from "./Hero.module.css";


export function Hero(){
    return(
       
            <div className={style.background}>
                 <div className={style.container}>
                <div className={style.widthContainer}>
                <Header/>
                </div>
               
            </div>
        </div>
    )
}