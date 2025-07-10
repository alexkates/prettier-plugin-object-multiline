# Contributing to prettier-plugin-object-multiline

Thank you for considering contributing to prettier-plugin-object-multiline! This document provides guidelines and instructions to help you contribute effectively.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct: be respectful, considerate, and constructive in all interactions.

## How Can I Contribute?

### Reporting Bugs

Before submitting a bug report:

- Check the existing issues to see if someone has already reported the problem.
- Ensure you're using the latest version of the plugin.

When submitting a bug report, please include:

- A clear, descriptive title
- The exact steps to reproduce the issue
- What you expected to happen and what actually happened
- Code examples or sample files demonstrating the issue
- Your environment details (OS, Node.js version, Prettier version)

### Suggesting Enhancements

Enhancement suggestions are welcome! When submitting:

- Use a clear, descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful
- Provide examples of how it would work if possible

### Pull Requests

1. Fork the repository and create your branch from `main`.
2. If you've added code, add tests to cover your changes.
3. Ensure your code passes all tests.
4. Make sure your code follows the existing style guidelines.
5. Write a clear commit message.
6. Submit your pull request!

## Development Setup

1. Clone your fork of the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests to make sure everything is working:
   ```bash
   npm test
   ```

## Development Workflow

1. Make your changes to the code
2. Run the formatter to ensure your code adheres to our style:
   ```bash
   npm run format
   ```
3. Run the tests to ensure your changes don't break anything:
   ```bash
   npm test
   ```
4. Commit your changes with a descriptive message
5. Push your changes to your fork
6. Open a pull request to the main repository

## Testing

This plugin uses Node.js built-in test runner. Tests are located in the `__tests__` directory.

Run the test suite with:

```bash
npm test
```

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

All JavaScript code is formatted with Prettier, using the project's own formatting rules (since it's a Prettier plugin).

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.
