# JWT Token Util

A CLI tool to aid with development with JWT token.

## Features

- Generate valid token
- Generate invalid token
  - Expired token
  - Future token
- Validate token
  - With a secret

| Flag             | Description                            |
| ---------------- | -------------------------------------- |
| `--body`, `-b`   | What to add into your signed JWT token |
| `--secret`, `-s` | JWT Token secret                       |

## Usage

Quick way of generating a JWT token
```bash
jwt --body '{"username": "khanguslee"}' --secret 'topSecret'
```

Bring up an interactive CLI that will ask you a bunch of questions.
```bash
jwt interactive
```