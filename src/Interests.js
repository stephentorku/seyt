import glls from './images/GLLS.jpg';
import nwts from './images/NWTS.jpg';
import lfnk from './images/lfnk2.jpg';
import syre from './images/syre.jpg';
import mufc from './images/mufc.png';
const Interests = () => {
    return (
        <div className="about-main">
            <h1>Interests</h1>
            <p>Despite having so many interests, here are a few</p>
            <div className="divider"></div>
            <div className="music">
                <h3>Music</h3>
                Some of my favorite albums:<br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <img src={glls} alt="" className="in-img"/>
                        </div>
                        <div className="col-md-3">
                        <img src={nwts} alt="" className="in-img"/>
                        </div>
                        <div className="col-md-3">
                        <img src={lfnk} alt="" className="in-img"/>
                        </div>
                        <div className="col-md-3">
                        <img src={syre} alt="" className="in-img"/>
                        </div>
                    </div><br/><br/>
                    
                </div>
            </div>
            <div className="divider"></div>
            <div className="football">
                <h3>Football</h3>
                A Manchester United fan most of the time<br/>
                <img src={mufc} alt="" className="mo-img"/><br/><br/>
            </div>
            <div className="divider"></div>
            <div className="movies">
                <h3>Movies and Series</h3>
                <p>When I'm not busy creating things I like to watch movies and series. <br/>
                Depending on my mood
                I prefer either Action movies or Sitcoms.<br/>
                 My favorite sitcom is definitely That 70s Show, 
                 with Fresh Prince of Bel-Air following closely behind</p>
                
            </div>

        </div>
    );
}

export default Interests;