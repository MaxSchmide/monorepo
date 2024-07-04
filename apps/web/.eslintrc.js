module.exports = {
  ignorePatterns: ['next.config.js', '.next', '.turbo'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/external-module-folders': ['node_modules', 'packages/next'],
        'import/resolver': {
          typescript: {},
        },
        react: {
          version: 'detect',
        },
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: [
        'deprecation',
        'promise',
        '@typescript-eslint/eslint-plugin',
        'react',
        'jsx-a11y',
        'import',
      ],
      extends: [
        'next',
        'airbnb-typescript',
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'never' },
        ],
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'promise/prefer-await-to-then': ['error'],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        'linebreak-style': [
          'error',
          process.platform === 'win32' ? 'windows' : 'unix',
        ],
        'import/no-default-export': ['warn'],
        'import/no-cycle': ['warn'],
        'import/prefer-default-export': 'off',
        semi: ['error', 'never'],
        '@typescript-eslint/semi': ['error', 'never'],
        quotes: [
          'error',
          'single',
          {
            avoidEscape: true,
          },
        ],
        'jsx-quotes': ['error', 'prefer-single'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'error',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/extensions': 'off',
        'react/no-array-index-key': 'off',
        'react/jsx-curly-brace-presence': [
          'error',
          {
            props: 'always',
            children: 'always',
          },
        ],
        'max-len': 'off',
        'no-console': [
          'error',
          {
            allow: ['error', 'warn'],
          },
        ],
        'react/jsx-key': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        indent: 'off',
        // 'react/function-component-definition': [
        //   2,
        //   {
        //     namedComponents: 'arrow-function',
        //   },
        // ],
        'react/jsx-filename-extension': 'off',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'function',
            format: ['PascalCase', 'camelCase'],
          },
          {
            selector: 'typeAlias',
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/no-empty-function': 'error',
        'padding-line-between-statements': [
          'warn',
          { blankLine: 'always', prev: '*', next: 'return' },
          { blankLine: 'always', prev: '*', next: 'if' },
          { blankLine: 'always', prev: '*', next: 'export' },
        ],
        'require-await': 'warn',
        // '@typescript-eslint/await-thenable': 'warn',
        'react/require-default-props': 'off',
        'no-underscore-dangle': 'off',
        // 'react/no-unstable-nested-components': 'error',
        '@typescript-eslint/no-shadow': 'error',
        'jsx-a11y/label-has-associated-control': 'error',
        'no-nested-ternary': 'error',
        'jsx-a11y/anchor-is-valid': 'error',
        'jsx-a11y/no-noninteractive-element-interactions': 'error',
        'eol-last': 'error',
        'no-warning-comments': 'warn',
        'react/jsx-no-bind': [
          'error',
          {
            allowArrowFunctions: false,
          },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        'deprecation/deprecation': 'warn',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: false,
            optionalDependencies: false,
            peerDependencies: false,
            // Take both root and package.json into account
            packageDir: ['./../../', './'],
          },
        ],

        //
        // Didn't work with Monorepo
        'import/named': 'off',

        //
        // Fix for
        // TypeError: Error while loading rule 'react/function-component-definition': `[[GeneratorState]]` is not present on `O`
        'react/function-component-definition': 'off',
        'react/no-unstable-nested-components': 'off',
        'react/display-name': 'off',
        'react/no-direct-mutation-state': 'off',
        'react/require-render-return': 'off',
        //
      },
    },
    {
      files: ['src/app/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['src/@generated/zod/**/*'],
      rules: {
        'import/no-cycle': 'off',
        'padding-line-between-statements': 'off',
        quotes: 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/comma-dangle': 'off',
      },
    },
  ],
}
