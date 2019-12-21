import Head from 'next/Head';

const _Head = ({ title }) => (
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Head>
)
export default _Head;
