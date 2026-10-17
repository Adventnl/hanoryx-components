import c from "../progress.module.css";
import { run } from "../shared";

/* 20 */ export function BulletChart() { return <div className={c.bullet} {...run('Bullet')}><i /><b /></div>; }
