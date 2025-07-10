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
  c: 3,
};
const longObject = {
  propertyOne: "value",
  propertyTwo: "another value",
  propertyThree: "yet another value",
};
```

## ⚙️ How It Works

This plugin overrides the default object expression printer in Prettier to always format objects with one property per line, regardless of the object's length or the `printWidth` setting.

## 📄 License

MIT
