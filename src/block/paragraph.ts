import {
  State,
  MarkdownHeaderBlockElement,
  MarkdownParagraphBlockElement,
  MarkdownElementBlockType,
} from '../types';

export function paragraph(state: State) {
  let line = state.line;
  let content = [];
  while (line < state.raw.length) {
    if (state.raw[line].trim().length === 0) {
      break;
    } else {
      content.push(state.raw[line]);
    }
    line += 1;
  }
  let block: MarkdownParagraphBlockElement = {
    type: MarkdownElementBlockType.Paragraph,
    content: [],
    raw: content.join('\n'),
  };
  state.blocks.push(block);
  state.line = line;

  return true;
}
