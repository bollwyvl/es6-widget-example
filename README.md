# ES6 Widget Example
![](http://i.imgur.com/EtoyFIo.jpg)
> [Discuss here!](https://github.com/ipython/ipywidgets/issues/14)

An evolving approach to creating a [Jupyter widget](https://github.com/ipython/ipywidgets) with [ES6 _ne_ ES2015 classes](http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions).

## Challenges
- [Backbone and ES6 Classes](http://benmccormick.org/2015/07/06/backbone-and-es6-classes-revisited/) have slightly different opinions, especially with respect to static properties

## Process Tools
- [x] [`npm run`](https://docs.npmjs.com/cli/run-script) for minimal automation tasks
- [x] [`watch`](https://www.npmjs.com/package/watch) for live developing with continuous integration
- [x] [`babel`](https://babeljs.io) for compilation
  - [x] [`babel-preset-es2015`](https://www.npmjs.com/package/babel-preset-es2015) for un-opinonated use of experimental features
  - [x] [`babel-plugin-transform-es2015-modules-amd`](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-amd) for `require.js`-compatible modules
- [x] [`esdoc`](https://esdoc.org) for documentation
- [x] [`eslint`](http://eslint.org) for code style
- [ ] [`mocha`](https://mochajs.org) for tests and coverage
- [ ] [`browserify`](http://browserify.org/) for (inevitable) packaging of external dependencies distributed on `npm`
