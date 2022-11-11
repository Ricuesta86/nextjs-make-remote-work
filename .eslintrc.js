module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    "plugin:prettier/recommended",
    "next/core-web-vitals",

  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    "prettier"
  ],
  rules: {
    semi:[2,'always'],
    "prettier/prettier": ["error",{
      
    }]
  }
}
