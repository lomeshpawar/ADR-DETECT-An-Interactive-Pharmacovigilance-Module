# Contributing

Thanks for helping improve ADR-DETECT.

## Before contributing

- Keep changes focused and technically justified.
- Do not add real patient data, credentials, API keys, or other sensitive information.
- Preserve the educational-only scope of the application.
- Update documentation when behavior or configuration changes.

## Development workflow

1. Create a focused branch from `main`.
2. Make the smallest reasonable change.
3. Run backend tests with `mvn -B test`.
4. Run the frontend production build with `npm run build`.
5. Review the diff for accidental files or secrets.
6. Open a pull request with a clear summary and testing notes.

## Commit style

Use concise, meaningful messages such as:

- `feat: add assessment validation`
- `fix: handle missing case id`
- `test: cover score calculation`
- `docs: update local setup`
- `ci: improve frontend build check`

Do not create artificial commits or changes solely to increase activity metrics.
