import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';

/**
 * rules
 * @type {import('eslint').Linter.FlatConfig}
 */
export const customEslintRules = {
    // rules: {
    //   "no-console": "error"
    // }
};

/**
 * dirs and files to ignore
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
export const customIgnores = {
    ignores: ['**/node_modules', '**/public', '**/vendor', '**/dist', '**/.nuxt'],
};

const unicornRecommended = eslintPluginUnicorn.configs['flat/recommended'];

/**
 * For usage within a Nuxt context
 *
 * The helper `withNuxt()` from auto-generated `.nuxt/eslint.config.mjs` can be used to append
 * these rules after the config tailored to the Nuxt-app where the eslint config is being used.
 * @see https://eslint.nuxt.com/packages/module
 *
 * It will also add all best-practices rules for js/ts/vue from `@nuxt/eslint-config`.
 * @see https://eslint.nuxt.com/packages/config
 */
export const eslintConfigNuxt = [customEslintRules, customIgnores, unicornRecommended, perfectionistNatural];

/**
 * For standalone usage in packages without Nuxt context.
 * `createConfigForNuxt()` will create all best-practices rules for js/ts/vue from `@nuxt/eslint-config`.
 * @see https://eslint.nuxt.com/packages/config
 */
export const eslintConfigStandalone = createConfigForNuxt().append([
    customEslintRules,
    customIgnores,
    unicornRecommended,
    perfectionistNatural,
]);
