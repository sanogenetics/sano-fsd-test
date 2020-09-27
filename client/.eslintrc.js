module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        "eslint:recommended", // configures ESLint to use some default best-practice rules
        "plugin:vue/recommended", // tells ESLint to incorporate Vue specific rules (e.g you cannot use v-model on divs)
        "@vue/airbnb",
        "prettier/vue", // adds Vue specific formatting rules to prettier (e.g v-for comes before class)
        "plugin:prettier/recommended", // tells ESLint to treat prettier errors as linting errors and disable certain rules that interfere with prettier
    ],
    // override/add rules settings here, such as:
    rules: {
        "prefer-destructuring": ["warn", { object: true, array: false }], // dont destructure arrays as this is confusing
        "one-var": ["warn", "consecutive"], // less rigid on this one
        "vue/no-use-v-if-with-v-for": ["warn", { allowUsingIterationVar: true }], // make this just a warning so as to make these changes separately
        "vue/require-default-prop": ["off"], // don't require a default where a property is not required
        "import/extensions": ["warn", "never"], // prefer no extension on imports where not necessary
        "vue/html-indent": ["error", 4], // indent 4 spaces for vue-html
        indent: ["error", 4], // and for js
        "vue/prop-name-casing": ["warn", "snake_case"], // use snake case in variables: my_variable
        camelcase: ["off"],
        "linebreak-style": 0, // disable unix/windows line style
        "no-plusplus": ["error", { allowForLoopAfterthoughts: true }], // dont use ++ but OK in loops
        quotes: ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }], // use "" instead of ''
        "no-unused-vars": "warn", // every variable should be used
        "no-console": ["warn", { allow: ["info", "warn", "error", "clear"] }], // only use console.info or console.error
        "no-var": ["error"], // use const/let instead of var
        "max-len": ["error", { code: 150, ignoreComments: true }], // max 150 but doesnt apply to comments
        "no-param-reassign": ["warn", { props: false }], // dont allow function params to be re-assigned but allow object properties to be modified ex. function foo(bar) {bar.prop = "value";}
    },
    parserOptions: {
        parser: "babel-eslint",
    },
};
