import { useState } from "react";
import style from "./EmailForm.module.css";
import { Button } from "../button/Button";

export function EmailForm(){

    const [isActive, setIsActive] = useState(false)

    function addEmail (){
        setIsActive(true)
    }

    function removeEmail (event){
        if(event.target.value === ''){
            setIsActive(false)
        }
    }
    return (
    <div className={style.emailContainer}>

        <p className={style.emailFormText}>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className={isActive ? `${style.addEmailCss}` : `${style.emailHidden}`}>Email address</div>
        <div className={style.formContainer}>
        <input onBlur={removeEmail} onFocus={addEmail} placeholder="Email address" className={style.emailInput} type="text" />
        <Button text="Get Started"/>
        </div>
    </div>)
}