# dom-create-element-query-selector

![Node](https://img.shields.io/node/v/dom-create-element-query-selector.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/dom-create-element-query-selector.svg?style=flat-square)](https://www.npmjs.com/package/dom-create-element-query-selector)
[![Travis](https://img.shields.io/travis/hekigan/dom-create-element-query-selector/master.svg?style=flat-square)](https://travis-ci.org/hekigan/dom-create-element-query-selector)
[![David](https://img.shields.io/david/hekigan/dom-create-element-query-selector.svg?style=flat-square)](https://david-dm.org/hekigan/dom-create-element-query-selector)
[![Coverage Status](https://img.shields.io/coveralls/hekigan/dom-create-element-query-selector.svg?style=flat-square)](https://coveralls.io/github/hekigan/dom-create-element-query-selector)

> A utility function to create DOM elements with CSS selector-like syntax

### Usage

```js
import domCreateElementQuerySelector from 'dom-create-element-query-selector';

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add dom-create-element-query-selector (--dev)

or npm

	npm install dom-create-element-query-selector (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import domCreateElementQuerySelector from 'dom-create-element-query-selector';

```

➖ **property** ( type ) ` ✏️ default `
<br/> 📝 description
<br/> ❗️ warning
<br/> ℹ️ info
<br/> 💡 example

### methods

#### #name

```js
domCreateElementQuerySelector

```

### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/hekigan/dom-create-element-query-selector) example.

### Builds

If you don't use a package manager, you can [access `dom-create-element-query-selector` via unpkg (CDN)](https://unpkg.com/dom-create-element-query-selector/), download the source, or point your package manager to the url.

`dom-create-element-query-selector` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `dom-create-element-query-selector` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/dom-create-element-query-selector/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/dom-create-element-query-selector) on your page. The UMD builds make `dom-create-element-query-selector` available as a `window.domCreateElementQuerySelector` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
