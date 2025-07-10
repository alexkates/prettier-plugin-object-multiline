# prettier-plugin-object-multiline

Enforces **one property per line** in all object literals, no matter `printWidth`.

## 🚀 Installation

```bash
npm install --save-dev prettier prettier-plugin-object-multiline
```

## 📝 Usage

Once installed, Prettier will automatically use this plugin. No configuration needed!

### Example

Input:

```javascript
const shortObject = { a: 1, b: 2, c: 3 };
const longObject = { propertyOne: "value", propertyTwo: "another value", propertyThree: "yet another value" };
```

Output:

```javascript
const shortObject = {
  a: 1,
  b: 2,
  c: 3
};
const longObject = {
  propertyOne: "value",
  propertyTwo: "another value",
  propertyThree: "yet another value"
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
    d: 3
  }
};

// Output
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
};
```

## ⚙️ How It Works

This plugin overrides the default object expression printer in Prettier to always format objects with one property per line, regardless of the object's length or the `printWidth` setting.

It uses Prettier's own babel and estree plugins as a foundation and extends them to modify the object expression formatting behavior.

## 📄 License

MIT
