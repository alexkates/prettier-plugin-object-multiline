import prettier from "prettier";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pluginPath = path.resolve(__dirname, "../index.mjs");

describe("prettier-plugin-object-multiline", () => {
  const formatWithPlugin = (code) => {
    return prettier.format(code, {
      parser: "babel",
      plugins: [pluginPath],
    });
  };

  test("formats empty objects", () => {
    const code = "const obj = {};";
    const formatted = formatWithPlugin(code);
    expect(formatted).toBe("const obj = {};\n");
  });

  test("formats short objects with multiline", () => {
    const code = "const obj = { a: 1, b: 2 };";
    const formatted = formatWithPlugin(code);
    expect(formatted).toBe("const obj = {\n  a: 1,\n  b: 2,\n};\n");
  });

  test("formats nested objects", () => {
    const code = "const obj = { a: 1, b: { c: 2, d: 3 } };";
    const formatted = formatWithPlugin(code);
    expect(formatted).toBe("const obj = {\n  a: 1,\n  b: {\n    c: 2,\n    d: 3,\n  },\n};\n");
  });

  test("formats objects in arrays", () => {
    const code = "const arr = [{ a: 1, b: 2 }, { c: 3, d: 4 }];";
    const formatted = formatWithPlugin(code);
    expect(formatted).toBe("const arr = [\n  {\n    a: 1,\n    b: 2,\n  },\n  {\n    c: 3,\n    d: 4,\n  },\n];\n");
  });
});
