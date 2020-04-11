module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],

  rules: {
    "semi": "error",
    "no-unused-vars": "error",
    "prettier/prettier": "error",
  },

  overrides: [
    {
      files: [ "**/*.js" ],

      parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module",
      },

      globals: {
        // A safe subset of "browser:true":
        "window": true,
        "document": true,
        "setTimeout": true,
        "clearTimeout": true,
        "setInterval": true,
        "clearInterval": true,
        "console": true,
        "Map": true,
        "Set": true,
        "Symbol": true,
        "WeakMap": true,
      },

      rules: {
        "semi": "error",
        "no-unused-vars": "error",
        "comma-dangle": "off",
        "max-len": [
          "error",
          {
            "code": 80 ,
            "tabWidth": 2
          }
        ]
      },
    },
    {
      files: [
        "test/**/*.js",
      ],
      globals: {
        "beforeEach": true,
        "describe": true,
        "it": true
      },
    },
  ]
};
