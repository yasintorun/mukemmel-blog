import _Head from '../components/Head';
import Header from '../components/header';

const AboutMe = () => (
    <div>
        <_Head title="Hakkımda Ben Kimim!" />
        <Header />
        <div className="container">
            <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <style jsx>{`
            .text{
                max-width: 540px;
                width: 100%;
                margin: auto;
                font-size: 20px;
            }
        `}</style>
    </div>
)

export default AboutMe;
