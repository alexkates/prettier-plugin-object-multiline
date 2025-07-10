import { builders as b } from "prettier/doc";
const { group, indent, hardline, join } = b;
const estreePrinter = require("prettier/plugins").printers.estree;

function printObject(path, options, print) {
  const node = path.getValue();
  const parts = path.map((propPath) => print(propPath), "properties");

  if (node.properties.length === 0) {
    return group(["{}",]);
  }

  return group([
    "{",
    indent([hardline, join([",", hardline], parts)]),
    hardline,
    "}",
  ]);
}

export const printers = {
  estree: {
    ...estreePrinter,
    print(path, options, print) {
      const node = path.getValue();
      if (node && node.type === "ObjectExpression") {
        return printObject(path, options, print);
      }
      return estreePrinter.print(path, options, print);
    },
  },
};
export const languages = [
  {
    name: "JavaScript",
    parsers: ["babel"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
];
export const parsers = {
  babel: {
    ...require("prettier/parser-babel").parsers.babel,
  },
};
