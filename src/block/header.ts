import {
  State,
  MarkdownHeaderBlockElement,
  MarkdownElementBlockType,
} from '../types';

export function header(state: State) {
  let line = state.raw[state.line];
  let reg = /\s*(#+)\s+(.+)/;
  let [, level, content] = line.match(reg) || [];
  console.log(level, content);
  if (!level || level.length > 6) {
    return false;
  }

  let block: MarkdownHeaderBlockElement = {
    type: MarkdownElementBlockType.Header,
    level: level.length,
    content: [],
    raw: content,
  };

  state.blocks.push(block);
  state.line = state.line + 1;

  return true;
}
