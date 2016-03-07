var Builder = require("systemjs-builder");

var builder = new Builder();

// Collection bundling
builder.config({
    defaultJSExtensions: true,
    map:{
        "ts": "node_modules/plugin-typescript/lib/plugin.js",
        "typescript": "node_modules/typescript/lib/typescript.js"
    },
    baseURL: './',
    transpiler: "ts",
    typescriptOptions: {
        module: "system",
        target: "es5",
        noImplicitAny: true,
        typeCheck: true,                // also accepts "strict"
        tsconfig: true               // also accepts a path
    },
    packages: {
        application: {
            format: 'register',
                defaultExtension: 'ts'
        }
    }
});
builder
    .buildStatic('./application/main', './dist/application.static.js', { globalDefs: { DEBUG: true } })