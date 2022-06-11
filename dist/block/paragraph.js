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
var paragraph_exports = {};
__export(paragraph_exports, {
  paragraph: () => paragraph
});
module.exports = __toCommonJS(paragraph_exports);
var import_types = require("../types");
function paragraph(state) {
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
  let block = {
    type: import_types.MarkdownElementBlockType.Paragraph,
    content: [],
    raw: content.join("\n")
  };
  state.blocks.push(block);
  state.line = line;
  return true;
}
//# sourceMappingURL=paragraph.js.map
