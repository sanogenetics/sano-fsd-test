module.exports = {
    plugins: ["cypress"],
    env: {
        mocha: true,
        "cypress/globals": true,
    },
    rules: {
        strict: "off",
        "no-unused-expressions": "off", // cause problems with expect(someTrueValue).to.be.true;
    },
};
