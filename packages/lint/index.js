// @ts-check

import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

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
  ignores: ["**/node_modules", "**/public", "**/vendor", "**/dist", "**/.nuxt"],
};

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
export const eslintConfigNuxt = [
  customEslintRules,
  customIgnores,
];

/**
 * For standalone usage in packages without Nuxt context.
 *
 * `createConfigForNuxt()` will create all best-practices rules for js/ts/vue from `@nuxt/eslint-config`.
 * @see https://eslint.nuxt.com/packages/config
 *
 * The activated `tooling` feature enables rules with unicorn, regexp and jsdoc.
 * @see https://eslint.nuxt.com/packages/config#module-authors
 *
 */
export const eslintConfigStandalone = createConfigForNuxt({
  features: { tooling: true },
}).append(
  customEslintRules,
  customIgnores,
);