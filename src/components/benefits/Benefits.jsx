import style from "../benefits/Benefits.module.css";

export function Benefits(props) {
  return (
    <div className={style.border}>
      <div className={style.container}>
        <div className={style[`${props.mediaDirection}`]}>
          <div className={style.benefitstext}>
            <h1 className={style.benefitsH1}>{props.h1}</h1>
            <p className={style.benefitsP}>{props.p}</p>
          </div>
          {props.playerType}
        </div>
      </div>
    </div>
  );
}
