import createElement from '../src/index';

describe('list all possibilities', () => {
    it('should return <div></div>', () => {
        var elt = createElement();
        var result = '<div></div>';
        expect(elt.outerHTML).toBe(result);
    });

    it('should return <span id="my-id"></span>', () => {
        var elt = createElement('span#my-id');
        var result = '<span id="my-id"></span>';
        expect(elt.outerHTML).toBe(result);
    });

    it('should return <span class="my-class"></span>', () => {
        var elt = createElement('span.my-class');
        var result = '<span class="my-class"></span>';
        expect(elt.outerHTML).toBe(result);
    });

    it('should return <span id="my-id" class="my-class"></span>', () => {
        var elt = createElement('span#my-id.my-class');
        var result = '<span id="my-id" class="my-class"></span>';
        expect(elt.outerHTML).toBe(result);
    });

    it('should return <a class="link" href="#"></a>', () => {
        var elt = createElement('a[href=#].link');
        var result = '<a class="link" href="#"></a>';
        expect(elt.outerHTML).toBe(result);
    });

    it('should return <div></div>', () => {
        var elt = createElement('div',
            'paragraphs',
            createElement('p', 'paragraph 1'),
            createElement('p', 'paragraph 2')
        );
        var result = '<div>paragraphs<p>paragraph 1</p><p>paragraph 2</p></div>';
        expect(elt.outerHTML).toBe(result);
    });
});