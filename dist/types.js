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
var types_exports = {};
__export(types_exports, {
  MarkdownElementBlockType: () => MarkdownElementBlockType,
  MarkdownElementInlineType: () => MarkdownElementInlineType
});
module.exports = __toCommonJS(types_exports);
var MarkdownElementBlockType = /* @__PURE__ */ ((MarkdownElementBlockType2) => {
  MarkdownElementBlockType2["Header"] = "Header";
  MarkdownElementBlockType2["Paragraph"] = "Paragraph";
  return MarkdownElementBlockType2;
})(MarkdownElementBlockType || {});
var MarkdownElementInlineType = /* @__PURE__ */ ((MarkdownElementInlineType2) => {
  MarkdownElementInlineType2[MarkdownElementInlineType2["Strong"] = 0] = "Strong";
  MarkdownElementInlineType2[MarkdownElementInlineType2["Text"] = 1] = "Text";
  return MarkdownElementInlineType2;
})(MarkdownElementInlineType || {});
//# sourceMappingURL=types.js.map
