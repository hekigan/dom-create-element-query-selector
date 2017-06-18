
declare function createElement<T extends HTMLElement>(
    querySelector: string
  , ...content: (string | number | HTMLElement)[]
  ): T;

export = createElement;
