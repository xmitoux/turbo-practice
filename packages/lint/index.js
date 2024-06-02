// @ts-check

import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
// @ts-ignore
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

/**
 * rules
 * @type {import('eslint').Linter.FlatConfig}
 */
export const customEslintRules = {
    // plugins: {
    //   /**@type {any} missing types */
    //   perfectionist: perfectionist,
    // },
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
export const eslintConfigNuxt = [customEslintRules, customIgnores, unicornRecommended];

/**
 * For standalone usage in packages without Nuxt context.
 * `createConfigForNuxt()` will create all best-practices rules for js/ts/vue from `@nuxt/eslint-config`.
 * @see https://eslint.nuxt.com/packages/config
 */
export const eslintConfigStandalone = createConfigForNuxt().append([
    customEslintRules,
    customIgnores,
    // @ts-ignore
    unicornRecommended,
]);
