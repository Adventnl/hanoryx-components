export const docs = {
  origin: 'hanoryx-web',
  summary: 'The shared scene, section padding and container around a page block.',
  props: [{ name: 'block', type: '{anchor?: string, scene?: string, intensity?: string}', required: true, description: 'The outer block configuration; children provide the content.' }, { name: 'children', type: 'ReactNode', required: true, description: 'Content inside the block container.' }],
  examples: [{ title: 'A section wrapper', code: '<Shell block={{ anchor: "details" }}><p>Section content.</p></Shell>' }],
  sizing: { rules: ['Fills its parent. Owns section padding and the inner page container; do not add padding from outside.'] },
};
