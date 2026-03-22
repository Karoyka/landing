export default function imageLoader({ src }: { src: string }) {
    const prefix = process.env.NODE_ENV === 'production' ? '/landing' : '';
    return `${prefix}${src}`;
}
