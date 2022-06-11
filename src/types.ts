export enum MarkdownElementBlockType {
  Header = 'Header',
  Paragraph = 'Paragraph',
}
export enum MarkdownElementInlineType {
  Strong,
  Text,
}

export interface MarkdownElement {
  type: MarkdownElementBlockType | MarkdownElementInlineType;
  raw: string;
}

export type MarkdownInlineElement = {
  type: MarkdownElementInlineType;
  content: string;
};

export interface MarkdownBlockElement extends MarkdownElement {
  raw: string;
  content: MarkdownInlineElement[];
  type: MarkdownElementBlockType;
}

export interface MarkdownHeaderBlockElement extends MarkdownBlockElement {
  level: number;
  type: MarkdownElementBlockType.Header;
}

export interface MarkdownParagraphBlockElement extends MarkdownBlockElement {
  type: MarkdownElementBlockType.Paragraph;
}

export interface State {
  raw: string[];
  blocks: MarkdownBlockElement[];
  line: number;
}

export interface InlineState {
  raw: string[];
  blocks: MarkdownInlineElement[];
  line: number;
}
