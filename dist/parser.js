var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var parser_exports = {};
__export(parser_exports, {
  default: () => parse
});
module.exports = __toCommonJS(parser_exports);
var import_header = require("./block/header");
var import_paragraph = require("./block/paragraph");
let blockRules = [
  import_header.header,
  import_paragraph.paragraph
];
function praseBlock(state) {
  while (state.line < state.raw.length) {
    for (let rule of blockRules) {
      if (rule(state)) {
        break;
      }
    }
  }
}
function parse(data) {
  let state = {
    raw: data,
    line: 0,
    blocks: []
  };
  praseBlock(state);
  return state.blocks;
}
//# sourceMappingURL=parser.js.map
