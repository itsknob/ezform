module.exports = {
    transform: {
        "^.+\\.[jt]sx?$": "babel-jest",
    },
    setupFilesAfterEnv: [
        "./jest.setup.ts"
    ]
}