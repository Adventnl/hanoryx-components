import { Sim } from '../../stage/Sim';
import { moving } from './shared';

const setup = () => ({ x: 20, e: [], n: 0 });

const tick = moving(80);

export function MachCone() {
  return <Sim label={'A source outrunning its own waves'} mode={"auto"} setup={setup} tick={tick} />;
}
