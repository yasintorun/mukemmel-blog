import Head from 'next/Head';

const _Head = ({ title }) => (
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
)
export default _Head;
