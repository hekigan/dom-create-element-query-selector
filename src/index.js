/**
 * Create a DOM element from a CSS query with option to include content
 *
 * @author Laurent Blanes <laurent.blanes@gmail.com>
 * @param {String} querySelector (optional) default to div
 * @param {...*} [content] (optional) String|Number|DOMElement
 * @return DOMElement
 *
 * @example
 * - createElement(); // <div>
 * - createElement('span#my-id.my-class.second-class'); // <span id="my-id" class="my-class second-class">
 * - createElement('#my-id.my-class.second-class', 'text to insert', 12345); // <div id="my-id" class="my-class second-class">
 * - const div = createElement('#my-div',
 *     'Random text',
 *     createElement('p.paragraph', 'my text'),
 *     createElement('p.paragraph', 'my second text'),
 *     createElement('a.link[href=https://github.com/hekigan/create-element]', 'link to a site'),
 * ); // <div id="my-id" class="my-class second-class">
 *    //   Random text
 *    //   <p class="paragraph">my text</p>
 *    //   <p class="paragraph">my second text</p>
 *    //   <a class="link" href="https://github.com/hekigan/create-element" class="paragraph">link to a site</a>
 *    // </div>
 */
export default function createElement (querySelector = 'div', ...content) {
    let nodeType = querySelector.match(/^[a-z]+/i);
    let id = querySelector.match(/#([a-z]+[a-z0-9-]*)/gi);
    let classes = querySelector.match(/\.([a-z]+[a-z0-9-]*)/gi);
    let attributes = querySelector.match(/\[([a-z][a-z-]+)(=['|"]?([^\]]*)['|"]?)?\]/gi);
    let node = (nodeType) ? nodeType[0] : 'div';

    if (id && id.length > 1) {
        throw CreateElementException('only 1 ID is allowed');
    }

    const elt = document.createElement(node);

    if (id) {
        elt.id = id[0].replace('#', '');
    }

    if (classes) {
        const attrClasses = classes.join(' ').replace(/\./g, '');
        elt.setAttribute('class', attrClasses);
    }

    if (attributes) {
        attributes.forEach(item => {
            item = item.slice(0, -1).slice(1);
            let [label, value] = item.split('=');
            if (value) {
                value = value.replace(/^['"](.*)['"]$/, '$1');
            }
            elt.setAttribute(label, value || '');
        });
    }

    content.forEach(item => {
        if (typeof item === 'string' || typeof item === 'number') {
            elt.appendChild(document.createTextNode(item));
        } else if (item.nodeType === document.ELEMENT_NODE) {
            elt.appendChild(item);
        }
    });

    return elt;
}

function CreateElementException (message) {
    this.message = message;
    this.name = 'CreateElementException';
}
