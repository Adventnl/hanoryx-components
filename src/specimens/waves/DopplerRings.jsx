import { Sim } from '../../stage/Sim';
import { moving } from './shared';

const setup = () => ({ x: 20, e: [], n: 0 });

const tick = moving(18);

export function DopplerRings() {
  return <Sim label={'A moving source bunching up its waves ahead'} mode={"auto"} setup={setup} tick={tick} />;
}
