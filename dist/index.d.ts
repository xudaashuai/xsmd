declare module "types" {
    export enum MarkdownElementBlockType {
        Header = "Header",
        Paragraph = "Paragraph"
    }
    export enum MarkdownElementInlineType {
        Strong = 0,
        Text = 1
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
}
declare module "block/header" {
    import { State } from "types";
    export function header(state: State): boolean;
}
declare module "block/paragraph" {
    import { State } from "types";
    export function paragraph(state: State): boolean;
}
declare module "parser" {
    export default function parse(data: string[]): import("types").MarkdownBlockElement[];
}
declare module "index" {
    import parse from "parser";
    export { parse };
}
declare module "run" { }
declare module "inline/strong" {
    export default function strong(): void;
}
