import { Ico } from "../../../stage/components/icons/icons";
import c from "../progress.module.css";
import { run } from "../shared";

/* 32 */ export function RocketBar() { return <div className={c.rocket} {...run('Rocket')}><i /><b><Ico n="bolt" /></b></div>; }
