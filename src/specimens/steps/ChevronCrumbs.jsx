import { Ico } from '../../stage/icons';
import c from './steps.module.css';

/* 7 */ export function ChevronCrumbs() {
  return <nav className={c.chev} aria-label="Chevron breadcrumb"><a href="#c" aria-label="Home"><Ico n="home" /></a><Ico n="right" /><a href="#c">Library</a><Ico n="right" /><a href="#c">Data</a><Ico n="right" /><b aria-current="page">Reports</b></nav>;
}
