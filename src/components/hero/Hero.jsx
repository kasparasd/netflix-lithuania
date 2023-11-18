import { Header } from "../header/Header";
import { InformationalText } from "../informationalText/InformationalText";
import style from "./Hero.module.css";


export function Hero(){
    return(
       
            <div className={style.background}>
                 <div className={style.container}>
                <div className={style.widthContainer}>
                <Header/>
                <InformationalText 
                mainTitle="Unlimited movies, TV shows, and more"
                secondaryText = "Watch anywhere. Cancel anytime."
                />
                </div>
               
            </div>
        </div>
    )
}