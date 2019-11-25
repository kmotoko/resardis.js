"use strict";

module.exports = {

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },

    env: {
        es6: true,
        node: true,
    },

    overrides: [
        {
            files: ["**/*.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "./tsconfig.json",
                ecmaVersion: 2018,
                sourceType: "module",

                // typescript-eslint specific options
                warnOnUnsupportedTypeScriptVersion: true,
            },
            plugins: ["@typescript-eslint"],
            // If adding a typescript-eslint version of an existing ESLint rule,
            // make sure to disable the ESLint rule here.
            rules: {
                // TypeScript's `noFallthroughCasesInSwitch` option is more robust
                "default-case": "off",
                // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
                "no-dupe-class-members": "off",
                // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
                "no-undef": "off",

                // Add TypeScript specific rules (and turn off ESLint equivalents)
                "@typescript-eslint/consistent-type-assertions": "error",
                "no-array-constructor": "off",
                "@typescript-eslint/no-array-constructor": "error",
                "@typescript-eslint/no-namespace": "error",
                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": [
                    "error",
                    {
                        "functions": false,
                        "classes": false,
                        "variables": false,
                        "typedefs": false,
                    },
                ],
                "no-unused-expressions": "off",
                "@typescript-eslint/no-unused-expressions": [
                    "error",
                    {
                        "allowShortCircuit": true,
                        "allowTernary": true,
                        "allowTaggedTemplates": true,
                    },
                ],
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        "args": "none",
                        "ignoreRestSiblings": true,
                    },
                ],
                "no-useless-constructor": "off",
                "@typescript-eslint/no-useless-constructor": "error",

                // Custom Rules for Typescript
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/ban-types": "error",
                "@typescript-eslint/class-name-casing": "error",
                // '@typescript-eslint/explicit-function-return-type': 'error',
                "@typescript-eslint/interface-name-prefix": "error",
                "@typescript-eslint/member-delimiter-style": [
                    "error",
                    {
                        "multiline": {
                            "delimiter": "semi",
                            "requireLast": true,
                        },
                        "singleline": {
                            "delimiter": "semi",
                            "requireLast": false,
                        },
                    },
                ],
                "@typescript-eslint/no-empty-function": "error",
                "@typescript-eslint/no-empty-interface": "error",
                // "@typescript-eslint/no-explicit-any": "error",
                "@typescript-eslint/no-inferrable-types": "error",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/no-this-alias": "error",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/triple-slash-reference": "error",
                "@typescript-eslint/type-annotation-spacing": "error",
                // Custom Rules for Typescript - Type Checking Rules
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/no-floating-promises": "error",
                "@typescript-eslint/no-for-in-array": "error",
                "@typescript-eslint/no-misused-promises": "error",
                "@typescript-eslint/no-unnecessary-qualifier": "error",
                "@typescript-eslint/no-unnecessary-type-arguments": "error",
                "@typescript-eslint/no-unnecessary-type-assertion": "error",
                "@typescript-eslint/prefer-includes": "error",
                "@typescript-eslint/prefer-readonly": "error",
                "@typescript-eslint/prefer-regexp-exec": "error",
                "@typescript-eslint/prefer-string-starts-ends-with": "error",
                "@typescript-eslint/promise-function-async": "error",
                "@typescript-eslint/require-array-sort-compare": "error",
                "@typescript-eslint/require-await": "error",
                "@typescript-eslint/restrict-plus-operands": "error",
                "@typescript-eslint/restrict-template-expressions": "error",
                // '@typescript-eslint/strict-boolean-expressions': 'error',
                "@typescript-eslint/unbound-method": "error",
            },
        },
        {
            files: [".eslintrc.js", "typedoc.js"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],

    // NOTE: When adding rules here, you need to make sure they are compatible with
    // `typescript-eslint`, as some rules such as `no-array-constructor` aren't compatible.
    rules: {
    // http://eslint.org/docs/rules/
        "array-callback-return": "error",
        "default-case": ["error", { "commentPattern": "^no default$" }],
        "dot-location": ["error", "property"],
        "eqeqeq": ["error", "smart"],
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-caller": "error",
        "no-cond-assign": ["error", "except-parens"],
        "no-const-assign": "error",
        "no-control-regex": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-implied-eval": "error",
        "no-invalid-regexp": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": ["error", { "allowLoop": true, "allowSwitch": false }],
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-mixed-operators": [
            "error",
            {
                "groups": [
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"],
                ],
                "allowSamePrecedence": false,
            },
        ],
        "no-multi-str": "error",
        "no-native-reassign": "error",
        "no-negated-in-lhs": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        // TODO: Remove this option in the next major release of CRA.
        // https://eslint.org/docs/user-guide/migrating-to-6.0.0#-the-no-redeclare-rule-is-now-more-strict-by-default
        "no-redeclare": ["error", { "builtinGlobals": false }],
        "no-regex-spaces": "error",
        "no-restricted-syntax": ["error", "WithStatement"],
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true,
                "allowTaggedTemplates": true,
            },
        ],
        "no-unused-labels": "error",
        "no-unused-vars": [
            "error",
            {
                "args": "none",
                "ignoreRestSiblings": true,
            },
        ],
        "no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": false,
                "variables": false,
            },
        ],
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": [
            "error",
            {
                "ignoreDestructuring": false,
                "ignoreImport": false,
                "ignoreExport": false,
            },
        ],
        "no-with": "error",
        "no-whitespace-before-property": "error",
        "require-yield": "error",
        "rest-spread-spacing": ["error", "never"],
        "strict": ["error", "global"],
        "unicode-bom": ["error", "never"],
        "use-isnan": "error",
        "valid-typeof": "error",
        "no-restricted-properties": [
            "error",
            {
                "object": "require",
                "property": "ensure",
                "message":
          "Please use import() instead.",
            },
            {
                "object": "System",
                "property": "import",
                "message":
          "Please use import() instead.",
            },
        ],
        "getter-return": "error",

        // Custom Rules
        "camelcase": ["error", { "properties": "always" }],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "dot-notation": ["error", { "allowKeywords": true, "allowPattern": "" }],
        "eol-last": ["error", "always"],
        "generator-star-spacing": ["error", "before"],
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "max-len": ["error", 120, 4],
        "no-debugger": "off",
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "no-trailing-spaces": ["error", { "skipBlankLines": false }],
        "no-var": "error",
        "object-curly-spacing": ["error", "always"],
        "prefer-const": "error",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "space-before-function-paren": ["error", "always"],

    },
};
