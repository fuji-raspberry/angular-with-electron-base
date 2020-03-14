module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier/@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prefer-arrow",
  ],
  "rules": {
    "indent": [ // インデントスペース幅
      "warn",
      2,
    ],
    "no-var": [ // varを使用せずlet,constを使用する
      "warn",
    ],
    "linebreak-style": [   // 改行はLF
      "warn",
      "unix",
    ],
    "quotes": [ // シングルクオート使用
      "warn",
      "single",
    ],
    "semi": [   // 文末のセミコロン必須
      "warn",
      "always",
    ],
    "no-console": [ // console.log()を使用しない
      "warn",
    ],
    "use-isnan": [  // if(foo == NaN) でなく if(isNaN(foo))にする
      "warn",
    ],
    "eqeqeq": [ // 厳密等価演算子を使用する
      "warn",
      "always",
      { "null": "ignore" }    // nullは例外
    ],
    "default-case": [   // switchのdefaultを必須にする
      "warn",
    ],
    "no-empty": [   // 空のブロック禁止
      "warn",
    ],
    "eol-last": [   // ファイル末尾の改行必須
      "warn",
    ],
    "capitalized-comments": [   // コメントの頭文字は大文字にする -> off
      "off",
    ],
    "spaced-comment": [ // コメントの後のスペース必須
      "warn", "always", { "markers": ["/"] }
    ],
    "max-len": [    // 1行の最大文字数
      "warn",
      { "code": 120 }
    ],
    "brace-style": [    // ifの終わりの括弧とelseが同じ行にある
      "warn",
    ],
    "camelcase": [  // キャメルケースを使用
      "warn",
    ],
    "no-lonely-if": [   // elseに単一のif文を許可しない
      "warn",
    ],
    "no-multiple-empty-lines": [    // 2行以上の連続する空白行を許可しない
      "warn",
      { "max": 1 },
    ],
    "no-ternary": [ // 3項演算子を許可しない -> off (no-nested-ternaryと組み合わせ)
      "off",
    ],
    "no-nested-ternary": [  // ネストする3項演算子は許可しない
      "warn",
    ],
    "no-new-object": [  // Objectコンストラクタの使用に警告
      "warn",
    ],
    "no-cond-assign": [ // if文内の代入禁止
      "warn",
    ],
    "padded-blocks": [ // ブロック内のパディングを強制
      "off",
    ],
    "no-debugger": [    // debuggerの使用禁止
      "warn",
    ],
    "no-dupe-args": [   // 同じ名前の引数禁止
      "warn",
    ],
    "no-shadow": [  // シャドーイング禁止
      "warn",
    ],
    "no-dupe-keys": [   // オブジェクト内の重複するkey禁止
      "warn",
    ],
    "no-duplicate-case": [ // switchに同じcase禁止
      "warn",
    ],
    "no-extra-parens": [ // 不要な括弧警告
      "warn",
    ],
    "no-extra-semi": [  // 余分なセミコロン禁止
      "warn",
    ],
    "no-sparse-arrays": [   // Array内の[a,,b]みたいなの禁止
      "warn",
    ],
    "consistent-return": [  // 値を返さないパスに警告
      "warn",
    ],
    "curly": [  // 中括弧の使用を強制
      "warn",
    ],
    "dot-notation": [ // ドット表記可能な奨励
      "warn",
    ],
    "no-else-return": [ // else内のreturnに警告
      "warn",
    ],
    "no-eval": [    // evalの使用を禁止
      "warn",
    ],
    "no-floating-decimal": [    // 小数を表す際先頭ピリオド警告
      "warn",
    ],
    "no-implicit-coercion": [   // 短い表記での型変換警告
      "warn",
    ],
    "no-multi-spaces": [    // 複数スペースに警告
      "warn",
    ],
    "no-new": [ // newして使っていないものに警告
      "warn",
    ],
    "no-new-wrappers": [
      "warn",
    ],
    "no-redeclare": [   // 複数回同じ変数を宣言許可しない
      "warn",
    ],
    "no-trailing-spaces": [ // 行末の空白許可しない
      "warn",
    ],
    "no-self-compare": [    // 両辺同じ比較禁止
      "warn",
    ],
    "yoda": [   // yoda記法警告、範囲指定のみ例外
      "warn", "never", { "exceptRange": true }
    ],
    "radix": [  // parseIntに基底必須
      "warn",
    ],
    "no-fallthrough": [ // switchのフォールスルー警告
      "warn",
    ],
    "@typescript-eslint/no-empty-function": [   // 空の関数を禁止
      "warn",
    ],
    "@typescript-eslint/class-name-casing": [   // クラス名とインターフェース名は大文字
      "warn",
    ],
    "@typescript-eslint/no-unused-vars": [  // 定義して未使用な場合は警告
      "warn",
    ],
    "@typescript-eslint/explicit-member-accessibility": [   // private, protect, publicを明示する
      "warn",
    ],
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        "classes": [
          // Index signature
          "signature",
          // Fields
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-abstract-field",
          "protected-abstract-field",
          "private-abstract-field",
          // Constructors
          "public-constructor",
          "protected-constructor",
          "private-constructor",
          // Methods
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "public-abstract-method",
          "protected-abstract-method",
          "private-abstract-method",
        ]
      }
    ],
    "@typescript-eslint/no-require-imports": [  // requireでのimport警告
      "warn",
    ],
    "@typescript-eslint/array-type": [  // arrayの宣言は Array<string>よりstring[]を使う
      "warn",
      { ArrayOption: "generic" },
    ],
    "@typescript-eslint/no-inferrable-types": [   // 初期化時に型を宣言しない
      "warn",
    ],
    "prefer-arrow/prefer-arrow-functions": [    // function より () => {} を使う
      "warn",
      {
        "disallowPrototype": true,
        "singleReturnOnly": false,
        "classPropertiesAllowed": false
      }
    ]
  }
};