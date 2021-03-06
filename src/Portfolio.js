import bbadmin from './images/Bookbakadmin.png';
import bbuser from './images/Bookbakuser.png';
import ashbook from './images/ashbook.jpg';
import ashcheck from './images/ashcheck.jpg';
import multicorrect from './images/multicorrect.png';
import multihome from './images/multihome.png';
import multimain from './images/multimain.png';




const Portfolio = () => {
    return (
        <div className="about-main">
            <h1>Projects</h1><br/>
        <div className="container">
            <h4>BookBak Library Management System</h4><br/>
            <div className="row">
                <div className="col-md-6">
                    <img src={bbadmin} alt="" className="pro-img"/>
                    <img src={bbuser} alt="" className="pro-img"/>
                </div>
                <div className="col-md-6 project-bio">
                    <p>A personal project built using PHP, Javascript, MySQL, HTML and CSS. With this project, the lives of 
                        users and Administrators is made easier. Users are able to borrow return books. Whereas Administrators 
                        can remind users who have overdue books or upcoming deadlines to return their books by
                        sending a message to their inbox. 
                    </p>
                </div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="container">
            <h4>AshTransit - Bus Booking Service</h4><br/>
            <div className="row">
                <div className="col-md-6 project-bio">
                    <p>A group project built using PHP, Javascript, MySQL, HTML and CSS. With this project, the lives of 
                        Ashesi Students and Bus coordinators are made easier. Students are able to book seats on the bus in advance in order to avoid disappointment.
                        Users cannot books buses which are full.
                        Coordinators can check which people are on which bus and can send emails to Ashesi Students who have booked a particular bus 
                        to for the purpose of announcements and reminders
                    </p>
                </div>
                <div className="col-md-6">
                    <img src={ashbook} alt="" className="pro-img"/>
                    <img src={ashcheck} alt="" className="pro-img"/>
                </div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="container">
            <h4>MultiShake Multiplication Game</h4><br/>
            <div className="row">
                <div className="col-md-6">
                    <img src={multihome} alt="" className="mo-img"/>
                    <img src={multimain} alt="" className="mo-img"/>
                    <img src={multicorrect} alt="" className="mo-img"/>
                </div>
                <div className="col-md-6 project-bio">
                    <p>
                        A personal project which is just a simple multiplication game built using MIT AppInventor 2.
                        The game is played by shaking the phone to change questions. Users have the option to type or speak the answer to the phone.

                    </p>
                </div>
            </div>
        </div>
        
            More projects are available upon request.

        </div>
    );
}
export default Portfolio;