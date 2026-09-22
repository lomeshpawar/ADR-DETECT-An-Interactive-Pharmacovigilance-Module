# Security Policy

ADR-DETECT is an educational application and should not be used with real patient information or production credentials.

## Reporting a vulnerability

If you identify a security issue, please do not publish sensitive details in a public issue. Contact the repository owner privately through an appropriate GitHub channel and include:

- A concise description of the issue
- The affected file or component
- Reproduction steps when safe to share
- Suggested remediation, if known

Do not include passwords, access tokens, private keys, patient information, or other secrets in reports.

## Security expectations

- Keep credentials outside Git.
- Use environment variables for runtime secrets.
- Keep dependencies current through normal maintenance.
- Keep H2 console access disabled except when explicitly needed for local development.
- Use synthetic educational data only.
