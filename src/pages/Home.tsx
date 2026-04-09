import itsme from '@/assets/literally-me.png'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main>
            <div className="split-2-1">
                <div className="card left left-side">
                    <h1 className="a-lot-bigger">
                        Hi hello!
                    </h1>
                    <p className="a-little-bigger">
                        I'm currently a student at Neumont University and will be graduating this year with a Bachelor's of Science
                        in Software and Game Development. I have several years of great experience working in fast-paced, team-based 
                        environments on many different types of projects, a setting I've thrived in better than any other I've experienced.
                        I'm very detail-oriented and am very passionate about what I do.
                    </p>
                    <br/>
                    <p className="a-little-bigger">
                        Check out my <Link to="/about" className="faint"> about page </Link> to see everything I'm good at and learn a bit
                        more about what I'm interested in! Also take a look at my <Link to="/projects" className="faint"> portfolio </Link>
                        to see all the cool stuff I've worked on!
                    </p>
                    <br/>
                    <p className="a-little-bigger">
                    </p>
                </div>
                <img src={itsme} className="card-image right-side"/>
            </div>
        </main>
    );
}