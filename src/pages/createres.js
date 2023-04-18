import React, { useState } from "react";
import Template from "./template";
function Createres(){
    const [data,setData]=useState({
      name:"",
      email:"",
      phno:"",
      address:"",
      btech:"",
      btechcollege:"",
      btechper:"",
      btechyear:"",
      inter:"",
      intercollege:"",
      interper:"",
      interyear:"",
      ssc:"",
      ssccollege:"",
      sscper:"",
      sscyear:"",
      obj:"",
      skill1:"",
      skill2:"",
      skill3:"",
      skill4:"",
      Certification1:"",
      Certification2:"",
      Certification3:"",
      Certification4:"",
      Acheivements1:"",
      Acheivements2:"",
      Acheivements3:"",
      Acheivements4:"",
      Project1:"",
      desc1:"",
      Project2:"",
      desc2:"",

    });
    const [issub,setSub]=useState(false);
    const handlechange=(e)=>{
      setData({
        ...data,
        [e.target.name]:e.target.value,
      })
    }
    const handlesub=(e)=>{
      e.preventDefault();
      setSub(true);
    }
    if(issub){
      return(
        <Template name={data.name} email={data.email} phone={data.phno}  address={data.address}
        btech={data.btech} btechcol={data.btechcollege} btechper={data.btechper} btechyear={data.btechyear}
        inter={data.inter} intercol={data.intercollege} interper={data.interper} interyear={data.interyear}
        ssc={data.ssc} ssccol={data.ssccollege} sscper={data.sscper}  sscyear={data.sscyear}
        obj={data.obj}
        skill1={data.skill1} skill2={data.skill2} skill3={data.skill3} skill4={data.skill4}
        Certification1={data.Certification1} Certification2={data.Certification2} Certification3={data.Certification3} Certification4={data.Certification4}
        Acheivements1={data.Acheivements1} Acheivements2={data.Acheivements2} Acheivements3={data.Acheivements3} Acheivements4={data.Acheivements4}
        Project1={data.Project1} desc1={data.desc1} Project2={data.Project2} desc2={data.desc2} />
      )
    }

    return(
        <div className="container-fluid">

        <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
        <br></br><center><h3 style={{color:"#FB4570"}}>Personal Details</h3></center><br></br>
        <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" name="name" onChange={handlechange}/>
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" name="email" onChange={handlechange}/>
        </div>
        <div class="form-group">
          <label for="phno">Phone no:</label>
          <input type="text" class="form-control" id="phno" name="phno" onChange={handlechange}/>
        </div>
        <div class="form-group">
          <label for="add">Address:</label>
          <textarea  class="form-control" name="address" onChange={handlechange}></textarea>
        </div>
      </form>
      </div>
      <div className="col-md-3"></div>
      </div> 
       {/* objective */}
       <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
                <br></br><center><h3 style={{color:"#FB4570"}}>Objective</h3></center><br></br>
                <form>
                <div class="form-group">
                  <textarea  class="form-control" name="obj" onChange={handlechange}></textarea>
                </div>
                </form>
        </div>
        <div className="col-md-3"></div>
      </div>
      {/* ed */}
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <br></br><center><h3 style={{color:"#FB4570"}}>Education</h3></center><br></br>
                <h5>Education 1</h5>
                <form>
                <div class="form-group">
                <label for="cname">Course / Degree</label>
                <input type="text" class="form-control" id="cname" name="btech" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="sname">School / University</label>
                <input type="text" class="form-control" id="sname" name="btechcollege" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="grade">Grade / Score</label>
                <input type="text" class="form-control" id="grade" name="btechper" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="year">Year</label>
                <input type="text" class="form-control" id="year" name="btechyear" onChange={handlechange}/>
                </div>
                </form><br></br>
                <h5>Education 2</h5>
                <form>
                <div class="form-group">
                <label for="cname">Course / Degree</label>
                <input type="text" class="form-control" id="cname" name="inter" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="sname">School / University</label>
                <input type="text" class="form-control" id="sname" name="intercollege" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="grade">Grade / Score</label>
                <input type="text" class="form-control" id="grade" name="interper" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="year">Year</label>
                <input type="text" class="form-control" id="year" name="interyear" onChange={handlechange}/>
                </div>
                </form><br></br>
                <h5>Education 3</h5>
                <form>
                <div class="form-group">
                <label for="cname">Course / Degree</label>
                <input type="text" class="form-control" id="cname" name="ssc" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="sname">School / University</label>
                <input type="text" class="form-control" id="sname" name="ssccollege" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="grade">Grade / Score</label>
                <input type="text" class="form-control" id="grade" name="sscper" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="year">Year</label>
                <input type="text" class="form-control" id="year" name="sscyear" onChange={handlechange}/>
                </div>
                </form>
      </div>
      <div className="col-md-3"></div>
      </div>
      {/* skills */}
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
                <br></br><center><h3 style={{color:"#FB4570"}}>Skills</h3></center><br></br>
                <div className="row">
                  <div className="col-md-3">
                <form>
                <div class="form-group">
                <label for="cname">Skill 1</label>
                <input type="text" class="form-control" id="cname" name="skill1" onChange={handlechange}/>
                </div></form>
                </div>
                <div className="col-md-3">
                <form>
                <div class="form-group">
                <label for="cname">Skill 2</label>
                <input type="text" class="form-control" id="cname" name="skill2" onChange={handlechange}/>
                </div></form>
                </div>
                <div className="col-md-3">
                <form>
                <div class="form-group">
                <label for="cname">Skill 3</label>
                <input type="text" class="form-control" id="cname" name="skill3" onChange={handlechange}/>
                </div></form>
                </div>
                <div className="col-md-3">
                <form>
                <div class="form-group">
                <label for="cname">Skill 4</label>
                <input type="text" class="form-control" id="cname" name="skill4" onChange={handlechange}/>
                </div></form>
                </div>
            </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      {/* certifications */}
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <br></br><center><h3 style={{color:"#FB4570"}}>Certifications</h3></center><br></br>
                <form>
                <div class="form-group">
                <label for="cname">Certification 1</label>
                <input type="text" class="form-control" id="cname" name="Certification1" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="sname">Certification 2</label>
                <input type="text" class="form-control" id="sname" name="Certification2" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="grade">Certification 3</label>
                <input type="text" class="form-control" id="grade" name="Certification3" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="year">Certification 4</label>
                <input type="text" class="form-control" id="year" name="Certification4" onChange={handlechange}/>
                </div>
                </form><br></br>
                
      </div>
      <div className="col-md-3"></div>
      </div>
      {/* Acheivements */}
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <br></br><center><h3 style={{color:"#FB4570"}}>Acheivements</h3></center><br></br>
                <form>
                <div class="form-group">
                <label for="cname">Acheivements 1</label>
                <input type="text" class="form-control" id="cname" name="Acheivements1" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="sname">Acheivements 2</label>
                <input type="text" class="form-control" id="sname" name="Acheivements2" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="grade">Acheivements 3</label>
                <input type="text" class="form-control" id="grade" name="Acheivements3" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="year">Acheivements 4</label>
                <input type="text" class="form-control" id="year" name="Acheivements4" onChange={handlechange}/>
                </div>
                </form><br></br>
                
      </div>
      <div className="col-md-3"></div>
      </div>
      {/* Projects */}
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <br></br><center><h3 style={{color:"#FB4570"}}>Projects</h3></center><br></br>
                <form>
                <div class="form-group">
                <label for="cname">Project 1</label>
                <input type="text" class="form-control" id="cname" name="Project1" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="sname">Description</label>
                <textarea  class="form-control" name="desc1" onChange={handlechange}></textarea>
                </div>
                <div class="form-group">
                <label for="grade">Project 2</label>
                <input type="text" class="form-control" id="grade" name="Project2" onChange={handlechange}/>
                </div>
                <div class="form-group">
                <label for="year">Description</label>
                <textarea  class="form-control" name="desc2" onChange={handlechange}></textarea>
                </div>
                </form><br></br>
                
      </div>
      <div className="col-md-3"></div>
      </div>
      {/* submit */}
      <br></br><center><button className="btn btn-success" onClick={handlesub} style={{alignItems:"center"}}>Submit</button></center><br></br>

      
    </div>
    )
}
export default Createres;