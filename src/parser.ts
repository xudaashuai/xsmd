import { State } from './types';
import { header } from './block/header';
import { paragraph } from './block/paragraph';
let blockRules = [
  header,
  // should be last rule
  paragraph,
];

function praseBlock(state: State) {
  while (state.line < state.raw.length) {
    for (let rule of blockRules) {
      if (rule(state)) {
        break;
      }
    }
  }
}

export default function parse(data: string[]) {
  let state: State = {
    raw: data,
    line: 0,
    blocks: [],
  };

  praseBlock(state);

  return state.blocks;
}
