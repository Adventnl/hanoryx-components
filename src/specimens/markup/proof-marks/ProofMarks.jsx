import c from "../markup.module.css";

export function ProofMarks() {
  return (
    <div className={c.fig} role="img" aria-label="A sentence with proofreader's marks: insert an e, swap two letters, delete a word">
      <div className={c.proof}>
        <p>the quick brown fox jumpd over teh lazy very dog</p>
        <span className={c.caret} style={{ '--c': 24, '--k': 0 }}><b>e</b></span>
        <span className={c.swapMark} style={{ '--c': 32, '--k': 1 }} />
        <span className={c.delMark} style={{ '--c': 40, '--w': 4, '--k': 2 }}><b>d</b></span>
      </div>
    </div>
  );
}
