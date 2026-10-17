import c from "../steps.module.css";

/* 6 */ export function SlashCrumbs() {
  return <nav className={c.slash} aria-label="Slash breadcrumb"><a href="#s">studio</a><span>/</span><a href="#s">work</a><span>/</span><a href="#s">2024</a><span>/</span><b aria-current="page">report</b></nav>;
}
