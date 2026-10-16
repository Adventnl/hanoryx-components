/* RECIPE · Specimen sheet — stand-alone pieces on a grid.
   Specimens are `capped` or `fixed` pieces drawn at natural size, so each sits in a
   bed (the Specimen frame) of ≥ 17rem. `Grid` lays the beds out; do not stretch a
   specimen to fill its cell.
   Sizes: bed min-height 9.5rem · bed padding 0.9rem 0.4rem · cell ≥ 17.5rem. */
import { Switchboard, Dials } from 'hanoryx-components/specimens';
import { Specimen } from 'hanoryx-components/stage';
import { Grid, SectionHeader, Stack } from 'hanoryx-components';

export const meta = {
  title: 'Specimen sheet',
  summary: 'Six specimens from two families, each in its frame, on a responsive grid.',
  uses: ['Grid', 'Specimen', 'Switchboard.*', 'Dials.*'],
  notes: [
    'Import a family namespace (`Switchboard`) or a single piece (`import { Rocker } from \'hanoryx-components/specimens/switchboard\'`).',
    '`Specimen` is the frame: a numbered caption (code, name, how to use it) over a bed. `data-frame` on a parent picks the look: bracket, plate, ticket, slab, tape, bare.',
    'Pieces keep their own size. A dial is about 8rem wide whatever its cell is; the bed centres it.',
  ],
};

const PIECES = [
  ['Rocker', Switchboard.Rocker, 'click'], ['Pill', Switchboard.Pill, 'click'], ['Slide lock', Switchboard.SlideLock, 'drag'],
  ['Detent knob', Dials.DetentKnob, 'drag'], ['Jog wheel', Dials.JogWheel, 'drag'], ['Tuning dial', Dials.TuningDial, 'drag'],
];

export default function SpecimenSheet() {
  return (
    <section className="section" style={{ paddingBlock: 'var(--section-pad-sm)' }}>
      <div className="container">
        <Stack gap={6}>
          <SectionHeader eyebrow="Specimens" title="Small objects, at their own size." reveal={false} />
          <div data-frame="bracket">
            <Grid min="17.5rem" gap={4}>
              {PIECES.map(([name, C, mode], i) => <Specimen key={`${name}-${i}`} no={1} i={i} name={name} mode={mode} slug="recipe"><C /></Specimen>)}
            </Grid>
          </div>
        </Stack>
      </div>
    </section>
  );
}
