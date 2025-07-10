// Main plugin entry point
import plugin from "./plugin.mjs";

// Forward the plugin for Prettier to use
export default plugin;

// Define required properties for the plugin to be recognized
export const languages = [
  {
    name: "JavaScript",
    parsers: ["babel"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
];

export const parsers = plugin.parsers;
export const printers = plugin.printers;
