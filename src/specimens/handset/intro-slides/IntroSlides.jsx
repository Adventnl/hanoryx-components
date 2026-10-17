import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../handset.module.css";
import { Phone } from "../shared";

const SL = [['Plan', '#ff5a5a'], ['Track', '#4ade80'], ['Share', '#60a5fa']];

/* 02 */ export function IntroSlides() {
  const [i, setI] = useState(0);
  return (
    <Phone label="Intro slides" className={c.center}>
      <span className={c.art} style={{ background: SL[i][1] }}><Ico n={['grid', 'clock', 'share'][i]} /></span>
      <b className={c.h}>{SL[i][0]} it</b>
      <span className={c.dotsRow}>{SL.map((s, k) => <s key={s[0]} data-on={k === i} />)}</span>
      <button type="button" className={c.btn} onClick={() => setI((v) => (v + 1) % 3)}>{i === 2 ? 'Start' : 'Next'}</button>
    </Phone>
  );
}
