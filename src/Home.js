import headshot from './images/headshot.jpg';
import web from './images/web.jpg';
import phone from './images/phone.png';
import dev from './images/dev.png';
import { Link} from "react-scroll";
import {Link as Reroute} from 'react-router-dom';
import emailjs from 'emailjs-com';


const Home = () => {

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_seyt', 'template_yz5zumg', e.target, 'user_axI2yywIIPaWFLDhYFrOX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return(
        <div className="home-main">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    
                        <h1>Hi, My name is Stephen </h1>
                        <p>I'm an aspiring Software Engineer <br/> hoping to specialize in Machine Learning/Data Science. <br/>
                            I am interested in building softwares <br/>and I particulary love apps with beautiful UI/UX
                        </p>
                        <button className="btn-about">
                            <Link to="aboutme"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About Me</Link></button>
                        <button className ="btn-portfolio"><Reroute to="/projects">Portfolio</Reroute></button>
                </div>
                
                <div className="col-md-6">
               
                    <img src={headshot} alt="me" className="headshot"/>
              
                </div>
                </div>
            </div>
            <div className="divider"> 
            </div>

            <section className="aboutme" id="aboutme">
            <h1>About me</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 mgbtm">
                            <img src={web} alt="" className="icons"/>
                    </div>
                    <div className="col-md-2 mgbtm">
                        <img src={phone} alt="" className="icons"/>
                    </div>
                    <div className="col-md-2 mgbtm">
                        <img src={dev} alt="" className="icons"/>
                    </div>  
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                    <div className="bio">
                        
                        I am Ghanaian. <br/>
                        I am a Computer Science major at Ashesi University looking for new challenges everyday.
                        I enjoy creating things and making sure they work to perfection. I am interested in Mobile development, Web development and Machine Learning. 
                        Here are a few techonologies I have been working with:<br/>     
                            <ul>
                                <li> React </li>
                                <li> Flutter</li>
                                <li> PHP</li>
                                <li> Elementor in Wordpress</li>
                                <li> Django</li>
                                <li>  Java</li>
                            </ul>
                    </div>
                    </div>
                
                </div>
            
            </div>
                
            <button className="btn-portfolio"><Reroute to="/about">Find out more</Reroute></button>
            </section>


            <div className="in-touch">
                <h1>Get in touch</h1>
                <p>I'm open to opportunities :)</p>
                <form onSubmit={sendEmail}>
                    
                    <input type="text" placeholder="Name" name="name" required/><br/>
                    
                    <input type="email" placeholder="Email" name="email" required/><br/>
                   
                    <textarea name="message" id="textarea" cols="30" rows="10" placeholder="Message" required></textarea><br/>
                    <button type="submit" value="submit">Send</button>
                </form>
            </div>
        </div>
    );
}
export default Home;