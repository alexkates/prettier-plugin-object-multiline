# prettier-plugin-object-multiline

[![npm version](https://img.shields.io/npm/v/prettier-plugin-object-multiline.svg)](https://www.npmjs.com/package/prettier-plugin-object-multiline)
[![Build Status](https://github.com/alexkates/prettier-plugin-object-multiline/actions/workflows/ci.yml/badge.svg)](https://github.com/alexkates/prettier-plugin-object-multiline/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/alexkates/prettier-plugin-object-multiline/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/alexkates/prettier-plugin-object-multiline/blob/main/CONTRIBUTING.md)

A Prettier plugin that enforces **one property per line** in all object literals, regardless of the `printWidth` setting.

## 🚀 Installation

```bash
npm install --save-dev prettier prettier-plugin-object-multiline
```

## 📝 Usage

Once installed, Prettier will automatically use this plugin. No configuration needed!

### Example

**Input:**

```javascript
const shortObject = {
  a: 1,
  b: 2,
  c: 3,
};
const longObject = {
  propertyOne: "value",
  propertyTwo: "another value",
  propertyThree: "yet another value",
};
```

**Output:**

```javascript
const shortObject = {
  a: 1,
  b: 2,
  c: 3,
};
const longObject = {
  propertyOne: "value",
  propertyTwo: "another value",
  propertyThree: "yet another value",
};
```

### Nested Objects

The plugin also formats nested objects correctly:

```javascript
// Input
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: 4,
};

// Output with this plugin
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: 4,
};

// Default Prettier output (without this plugin) might be:
// const nestedObject = { a: 1, b: { c: 2, d: 3 }, e: 4 };
// or
// const nestedObject = {
//   a: 1, b: { c: 2, d: 3 }, e: 4
// };
// depending on printWidth and object size
```

### Complex Example

The plugin handles complex, deeply nested objects with consistency:

```javascript
// Input
const config = {
  server: {
    port: 3000,
    host: "localhost",
    options: {
      timeout: 1000,
      secure: true,
    },
  },
  logging: {
    level: "info",
    format: "json",
  },
};

// Output with this plugin
const config = {
  server: {
    port: 3000,
    host: "localhost",
    options: {
      timeout: 1000,
      secure: true,
    },
  },
  logging: {
    level: "info",
    format: "json",
  },
};
```

## ⚙️ How It Works

This plugin overrides the default object expression printer in Prettier to always format objects with one property per line, regardless of the object's length or the `printWidth` setting.

It uses Prettier's own babel and estree plugins as a foundation and extends them to modify the object expression formatting behavior.

## Why Use This Plugin?

- **Consistency**: Ensures all object properties are formatted in the same way, regardless of object size
- **Readability**: Makes objects easier to read, with each property on its own line
- **Cleaner Git Diffs**: When objects change, Git diffs are cleaner with one property per line
- **Simplified Editing**: Makes it easier to add, remove, or reorder properties
- **Zero Configuration**: Works out of the box with no additional setup

## Compatibility

This plugin:

- Requires Prettier v3.0.0 or newer
- Is fully compatible with ES Modules
- Requires Node.js 18.0.0 or newer
- Adds trailing commas to all object properties

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For more detailed information, please see the [CONTRIBUTING.md](https://github.com/alexkates/prettier-plugin-object-multiline/blob/main/CONTRIBUTING.md) file.

## Testing

This plugin uses Node.js built-in test runner. To run the tests:

```bash
npm test
```

## License

MIT
