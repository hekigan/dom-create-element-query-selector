# dom-create-element-query-selector

![Node](https://img.shields.io/node/v/dom-create-element-query-selector.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/dom-create-element-query-selector.svg?style=flat-square)](https://www.npmjs.com/package/dom-create-element-query-selector)
[![Travis](https://img.shields.io/travis/hekigan/dom-create-element-query-selector/master.svg?style=flat-square)](https://travis-ci.org/hekigan/dom-create-element-query-selector)
[![Coverage Status](https://coveralls.io/repos/github/hekigan/dom-create-element-query-selector/badge.svg?branch=master)](https://coveralls.io/github/hekigan/dom-create-element-query-selector?branch=master)

> A utility function to create DOM elements with CSS selector-like syntax

### Description

As I had to use vanilla Javascript for a project, I got upset with how verbose it was to create DOM elements.

I use the same css-selector-like syntax as `document.querySelector()` to create the new Nodes in a more compact, simple and readable way.

There are no dependencies and multiple versions are available (es5, es6, UMD). See the BUILD section below for more information. 

### Usage

#### Basic

The simplest example add an empty `div` tag to the document's `body`.
```js
import createElement from 'dom-create-element-query-selector';

const body = document.querySelector('body');
body.appendChild(createElement());
```

#### Other usages
```js
import createElement from 'dom-create-element-query-selector';

let elt = null;

// some examples

elt = createElement(); // <div></div>

// create a span node with an id
elt = createElement('span#my-id'); // <span id="my-id"></span>

// add class
elt = createElement('span.my-class'); // <span class="my-class"></span>

// add id and class
elt = createElement('span#my-id.my-class'); // <span id="my-id" class="my-class"></span>

// add class and attributes
elt = createElement('a[href=#].link'); // <a class="link" href="#"></a>

// add content to the new element (text & other nodes)
elt = createElement('div',
    'paragraphs',
    createElement('p', 'paragraph 1'),
    createElement('p', 'paragraph 2')
);
// <div>
//  paragraphs
//  <p>paragraph 1</p>
//  <p>paragraph 2</p>
// </div>

// add the generated element to the DOM
document.querySelector('body').appendChild(elt);

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add dom-create-element-query-selector (--dev)

or npm

	npm install dom-create-element-query-selector (--save-dev)


### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/hekigan/dom-create-element-query-selector) example.

### Builds

If you don't use a package manager, you can [access `dom-create-element-query-selector` via unpkg (CDN)](https://unpkg.com/dom-create-element-query-selector/), download the source, or point your package manager to the url.

`dom-create-element-query-selector` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `dom-create-element-query-selector` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/dom-create-element-query-selector/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/dom-create-element-query-selector) on your page. The UMD builds make `dom-create-element-query-selector` available as a `window.createElement` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
