import java from './images/java.png';
import djangopy from './images/django.png';
import flutter from './images/flutter.png';
import phpmysql from './images/phpmysql.jpg';
import react from './images/react.png';
import r from './images/R.svg';
import ml from './images/ml.jpg';
import datascience from './images/datascience.png';
import sre from './images/sre.jpg';

const About = () =>{
    return (
        <div className="about-main">
            <h1>Computer Science Major</h1>
            <div className="education">
                <p>Currently pursuing a Bsc. Computer Science @ <a href="www.ashesi.edu.gh" target="_blank">Ashesi University</a>. <br/>I have a particular interest in Mathematics related projects or topics.
                I plan to go into Machine Learning and or Data Science. <br/>
                Fun fact: If I didn't get into tech, I would probably have ended u as a Chemical Engineer.<br/> I am open to new opportunities (Freelancing, Internships etc.)</p>
            </div>
            <div className="divider"></div>
            <h2>Skills</h2>
            <div className="container">
                
                <div className="row">
                    <div className="col-md-4 mgbtm">
                    <img src={java} alt="" className="skill-img"/>
                    </div>
                    <div className="col-md-4 mgbtm">
                    <img src={phpmysql} alt="" className="skill-img"/>
                    </div>
                    <div className="col-md-4 mgbtm">
                    <img src={r} alt="" className="skill-img"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mgbtm">
                    <img src={djangopy} alt="" className="skill-img"/>
                    </div>
                    <div className="col-md-4 mgbtm">
                    <img src={flutter} alt="" className="skill-img"/>
                    </div>
                    <div className="col-md-4 mgbtm">
                    <img src={react} alt="" className="skill-img"/>
                    </div>
                </div>
            </div>

            <div className="divider"></div>
            <h2>Career Interests</h2>
            <div className="container">
                
                <div className="row">
                    <div className="col-md-4 mgbtm">
                    <img src={ml} alt="" className="skill-img"/>
                    </div>
                    <div className="col-md-4 mgbtm">
                    <img src={datascience} alt="" className="skill-img"/>
                    </div>
                    <div className="col-md-4 mgbtm">
                    <img src={sre} alt="" className="skill-img"/>   
                    </div>
                </div>
            </div>
            <div className="space"></div>
        </div>
        
        
    );
}

export default About;