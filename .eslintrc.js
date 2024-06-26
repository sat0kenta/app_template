module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended', // これを追加
  ],
  plugins: ['import', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module', // import/export 構文を使用する
  },
  rules: {
    // 一般的なルールの設定例
    'comma-dangle': ['error', 'always-multiline'], // 複数行の場合に末尾カンマを要求する
    'no-console': 'warn', // console ログの使用を警告する
    'no-unused-vars': 'error', // 未使用の変数をエラーとする
    'prettier/prettier': 'error',
  },
};
