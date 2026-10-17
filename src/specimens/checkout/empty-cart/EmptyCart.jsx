import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 24 */ export function EmptyCart() {
  const [has, setHas] = useState(false);
  return (
    <Co label="Empty cart" className={c.center}>
      {has ? <><span className={c.line}><span>Trail shell</span><b>$98</b></span><button type="button" className={c.chip} onClick={() => setHas(false)}>Remove</button></> : <><span className={c.art}><Ico n="cart" /></span><b>Your cart is empty</b><button type="button" className={c.pay} onClick={() => setHas(true)}>Add a shell</button></>}
    </Co>
  );
}
