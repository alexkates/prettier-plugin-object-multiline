import test from 'node:test';
import assert from 'node:assert';
import prettier from "prettier";
import path from "path";
import { fileURLToPath } from "url";
import babel from "prettier/plugins/babel";
import estree from "prettier/plugins/estree";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pluginPath = path.resolve(__dirname, "../index.mjs");

test('prettier-plugin-object-multiline', async (t) => {
  const formatWithPlugin = async (code) => {
    // Import the plugin directly
    const { default: objectMultilinePlugin } = await import(pluginPath);

    return await prettier.format(code, {
      parser: "babel",
      plugins: [babel, estree, objectMultilinePlugin],
    });
  };

  await t.test('formats empty objects', async () => {
    const code = "const obj = {};";
    const formatted = await formatWithPlugin(code);
    assert.strictEqual(formatted, "const obj = {};\n");
  });

  await t.test('formats short objects with multiline', async () => {
    const code = "const obj = { a: 1, b: 2 };";
    const formatted = await formatWithPlugin(code);
    assert.strictEqual(formatted, "const obj = {\n  a: 1,\n  b: 2,\n};\n");
  });

  await t.test('formats nested objects', async () => {
    const code = "const obj = { a: 1, b: { c: 2, d: 3 } };";
    const formatted = await formatWithPlugin(code);
    assert.strictEqual(formatted, "const obj = {\n  a: 1,\n  b: {\n    c: 2,\n    d: 3,\n  },\n};\n");
  });

  await t.test('formats objects in arrays', async () => {
    const code = "const arr = [{ a: 1, b: 2 }, { c: 3, d: 4 }];";
    const formatted = await formatWithPlugin(code);
    assert.strictEqual(formatted, "const arr = [\n  {\n    a: 1,\n    b: 2,\n  },\n  {\n    c: 3,\n    d: 4,\n  },\n];\n");
  });
});
