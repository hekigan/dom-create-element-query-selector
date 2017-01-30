// get the script
const createElement = require(`../`);

let elt = null;

// some examples

elt = createElement(); // <div></div>

elt = createElement('span#my-id'); // <span id="my-id"></span>

elt = createElement('span.my-class'); // <span class="my-class"></span>

elt = createElement('span#my-id.my-class'); // <span id="my-id" class="my-class"></span>

elt = createElement('a[href=#].link'); // <a class="link" href="#"></a>

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