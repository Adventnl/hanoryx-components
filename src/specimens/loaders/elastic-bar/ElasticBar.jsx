import c from "../loaders.module.css";
import { status } from "../shared";

/* 34 */ export function ElasticBar() { return <span className={c.elastic} {...status('Loading')}><i /></span>; }
