import style from "./Faq.module.css";
import { useState } from "react";
import { EmailForm } from "../emailForm/EmailForm";

export function Faq(){

    const [selected, setSelected] = useState(null)

    const toggle = (i)=>{
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i)
        // return i;
    }

    const data = [
        {
            question: 'What is Netflix?',
            answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\n\n You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`
        },
        {
            question: 'How much does Netflix cost?',
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts."
        },
        {
            question: '',
            answer: ``
        },
        {
            question: '',
            answer: ``
        },
        {
            question: '',
            answer: ``
        },
        {
            question: '',
            answer: ``
        },
        {
            question: '',
            answer: ``
        }
    ]

    return (
        <div className={style.border}>
        <div className={style.faqContainer}>
            <h1 className={style.faqH1}>Frequently Asked Questions</h1>
            <div className={style.accordion}>
                {data.map((item, i)=>(
                    <div className={style.item} onClick={()=>toggle(i)}>
                        <div className={style.title} >
                            <div>{item.question}</div>
                            <span>{selected === i ? "-" : '+'}</span>
                        </div>
                        <div className={selected === i ? `${style.contentShow}` : `${style.content}`}>
                                {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        <EmailForm/>
        </div>

        </div>
    )

}
