import React from "react";
import Resume1 from '../res1.webp';
import Resume2 from '../res02.webp';
import Resume3 from '../resss3.png';
import Carosol from "./carosol";
import {useNavigate} from 'react-router-dom';
import Createres from "./createres";
function Home(){
       const navigate=useNavigate()
        const resu=()=>{
            navigate('/Createres');
        }
        const images = [
            Resume1,
            Resume2,
            Resume3,
          ];
        
          return (
            <>
            <br></br>
            <div className="container">
            <div>
              <Carosol images={images} />
            </div><br></br>
            <div className="butt">
                <button className="btn btn-success" onClick={resu}>Create Resume</button>
            </div>
            </div><br></br>
            <div className="foot">
                <div className="row g-0">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 f1">
                        <h5>Resume</h5>
                        <p>Resume Builder</p>
                        <p>Resume Templates</p>
                        <p>Resume Examples</p>
                        <p>Resume Format</p>

                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 f1">
                        <h5>CV</h5>
                        <p>CV Builder</p>
                        <p>CV Templates</p>
                        <p>CV Examples</p>
                        <p>CV Format</p>

                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 f1">
                        <h5>Cover Letter</h5>
                        <p>Cover Letter Builder</p>
                        <p>Cover Letter Templates</p>
                        <p>Cover Letter Examples</p>
                        <p>Cover Letter Format</p>

                    </div>
                </div><br></br>
                <div className="row g-0">
                    <h5>All Rights are Reserved</h5>
                </div>
            </div>
            </>
          );
}
export default Home;