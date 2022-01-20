export interface Anchor{

    href: string;
    text: string;
    class: string;

}

export interface Image {

    src: string;
    alt?: string;
    class?: string;

}

export interface Peliculas {

    title: string,
    peliculas: Image[],

}