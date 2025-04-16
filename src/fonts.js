import { Roboto, Merriweather } from "next/font/google";

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'] // You can add other weights if needed
});

const merriweather = Merriweather({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '700', '900']
});

export { roboto, merriweather };
