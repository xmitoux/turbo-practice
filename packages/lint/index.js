import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import configPerfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';
import onlyWarn from 'eslint-plugin-only-warn';
import typescriptParser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';

/**
 * @type {import('eslint').Linter.FlatConfig}
 */
export const customEslintRules = {
    rules: {
        'no-console': 'error',
        'array-callback-return': ['error', { checkForEach: true }],
        '@typescript-eslint/no-extraneous-class': 'off',
        'vue/max-attributes-per-line': 'off'
    },
};

export const customIgnores = {
    ignores: ['**/node_modules', '**/public', '**/vendor', '**/dist', '**/.nuxt'],
};

const configUnicornRecommended = eslintPluginUnicorn.configs['flat/recommended'];

/**
 * @type {import('eslint').Linter.FlatConfig}
 */
const customUnicornRules = {
    rules: {
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prevent-abbreviations': 'off',
    },
};

const customPerfectionistRules = {
    rules: {
        'perfectionist/sort-vue-attributes': 'off'
    }
}

const configOnlyWarn = {
    plugins: {
        'only-warn': onlyWarn,
    },
};

const configStylistic = stylistic.configs.customize({
    semi: true,
});

export const eslintConfigNuxt = [
    customEslintRules,
    customIgnores,
    configUnicornRecommended,
    customUnicornRules,
    configPerfectionistNatural,
    customPerfectionistRules,
    configOnlyWarn,
    configStylistic,
];

// NestJS用のクラスデコレータに関する設定
// https://typescript-eslint.io/blog/changes-to-consistent-type-imports-with-decorators/
const configParser = {
    languageOptions: {
        parser: typescriptParser,
        parserOptions: {
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
        },
    },
};

export const eslintConfigStandalone = createConfigForNuxt().append([
    customEslintRules,
    customIgnores,
    configUnicornRecommended,
    customUnicornRules,
    configPerfectionistNatural,
    customPerfectionistRules,
    configOnlyWarn,
    configParser,
    configStylistic,
]);
