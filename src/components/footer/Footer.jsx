import style from "../footer/Footer.module.css";
import { Language } from "../language/Language";

export function Footer(){
    return(
    
    <div className={style.footerContainer}>
    <div className={style.footer}>
        <a className={style.questions} href="##">Questions? Contact us.</a>
        <div className={style.links}>
            <div>
                <a href="##">FAQ</a>
                <a href="##">Investor Relations</a>
                <a href="##">Privacy</a>
                <a href="##">Speed Test</a>
                <a href="##">Ad Choices</a>
            </div>
            <div>
                <a href="##">Help Center</a>
                <a href="##">Jobs</a>
                <a href="##">Cookie Preferences</a>
                <a href="##">Legal Guarantee</a>
            </div>
            <div>
                <a href="##">Account</a>
                <a href="##">Ways to Watch</a>
                <a href="##">Corporate Information</a>
                <a href="##">Legal Notices</a>
            </div>
            <div>
                <a href="##">Media Center</a>
                <a href="##">Terms of Use</a>
                <a href="##">Contact UsContact Us</a>
                <a href="##">Only on Netflix</a>
            </div>
        </div>
        <Language/>
        <p className={style.langLith}>Netflix Lithuania</p>
    </div>
    </div>
    )
}

