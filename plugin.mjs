// Prettier plugin implementation for multiline objects
import { builders } from "prettier/doc";
import babel from "prettier/plugins/babel";
import estree from "prettier/plugins/estree";

const { group, indent, hardline, join } = builders;

// Our custom printer for objects with one property per line
function printObject(path, options, print) {
  const node = path.getValue();
  const parts = path.map((propPath) => print(propPath), "properties");

  // Add trailing commas to all properties
  const printedParts = parts.map(part => [part, ","]);

  if (node.properties.length === 0) {
    return group(["{}",]);
  }

  return group([
    "{",
    indent([hardline, join(hardline, printedParts)]),
    hardline,
    "}",
  ]);
}

// Create a plugin by extending the existing ones
const plugin = {
  ...babel,
  ...estree,
  printers: {
    estree: {
      ...estree.printers.estree,
      print(path, options, print) {
        const node = path.getValue();

        // Apply our custom formatting to object expressions
        if (node?.type === "ObjectExpression") {
          return printObject(path, options, print);
        }

        // For all other nodes, use the default estree printer
        return estree.printers.estree.print(path, options, print);
      }
    }
  }
};

export default plugin;
