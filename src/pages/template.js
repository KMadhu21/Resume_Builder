import React from "react";
function Template(props){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5 template1">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h4 style={{textAlign:"center",marginTop:"10px"}}>{props.name}</h4>
                            <p style={{textAlign:"center"}}>{props.phone} | {props.email} | {props.address} </p>
                        </div>
                        <div className="col-md-2"></div>

                    </div>
                    <div className="row">
                        <h5>Objective</h5><hr></hr>
                        <p style={{marginBottom:"10px"}}>{props.obj}</p>
                    </div>
                    <div className="row">
                        <h5>Education</h5><hr></hr>
                        <h6>{props.btech} | {props.btechyear}</h6>
                        <p>{props.btechcol}</p>
                        <p style={{marginBottom:"5px"}}>{props.btechper}</p>
                        <h6>{props.inter} | {props.interyear}</h6>
                        <p>{props.intercol}</p>
                        <p style={{marginBottom:"5px"}}>{props.interper}</p>
                        <h6>{props.ssc} | {props.sscyear}</h6>
                        <p>{props.ssccol}</p>
                        <p style={{marginBottom:"5px"}}>{props.sscper}</p>
                    </div>
                    <div className="row">
                        <h5>Skills</h5><hr></hr>
                        <ul>
                            <li style={{marginLeft:"15px"}}><p>{props.skill1}</p></li>
                            <li style={{marginLeft:"15px"}}><p>{props.skill2}</p></li>
                            <li style={{marginLeft:"15px"}}><p>{props.skill3}</p></li>
                            <li style={{marginLeft:"15px"}}><p>{props.skill4}</p></li>
                            
                        </ul>
                    </div>
                    <div className="row">
                        <h5>Certifications</h5><hr></hr>
                        <ul>
                            <li style={{marginLeft:"15px"}}><p>{props.Certification1}</p></li>
                            <li style={{marginLeft:"15px"}}><p>{props.Certification2}</p></li>
                            <li style={{marginLeft:"15px"}}><p>{props.Certification3}</p></li>
                            <li style={{marginLeft:"15px"}}><p>{props.Certification4}</p></li>
                        </ul>
                    </div>
                    <div className="row">
                        <h5>Acheivements</h5><hr></hr>
                        <ul>
                            <li style={{marginLeft:"15px"}}><p>{props.Acheivements1}</p></li>
                            <li style={{marginLeft:"15px"}}><p>{props.Acheivements2}</p></li>
                            <li style={{marginLeft:"15px"}}><p>{props.Acheivements3}</p></li>
                            <li style={{marginLeft:"15px"}}><p>{props.Acheivements4}</p></li>
                        </ul>
                    </div>
                    <div className="row">
                        <h5>Projects</h5><hr></hr>
                        <h6>{props.Project1}</h6>
                        <p style={{marginBottom:"10px"}}>{props.desc1}</p>
                        <h6>{props.Project2}</h6>
                        <p style={{marginBottom:"15px"}}>{props.desc2}</p>

                    </div>



                </div>
                <div className="col-md-5 template1">
                <div className="row">
                        <div className="col-md-1 temp3"></div>
                        <div className="col-md-11 temp2">
                            <h4>{props.name}</h4>
                            <p>{props.phone}</p>
                            <p>{props.email}</p>
                            <p>{props.address}</p>
                            <p>{props.link}</p>
                            <h4><u>Objective</u></h4>
                            <p style={{marginBottom:"10px"}}>{props.obj}</p>
                            <h4><u>Education</u></h4>
                            <h6>{props.btech} | {props.btechyear}</h6>
                            <p>{props.btechcol}</p>
                            <p style={{marginBottom:"5px"}}>{props.btechper}</p>
                            <h6>{props.inter} | {props.interyear}</h6>
                            <p>{props.intercol}</p>
                            <p style={{marginBottom:"5px"}}>{props.interper}</p>
                            <h6>{props.ssc} | {props.sscyear}</h6>
                            <p>{props.ssccol}</p>
                            <p style={{marginBottom:"5px"}}>{props.sscper}</p>
                            <h4><u>Certifications</u></h4>
                            <ul>
                                <li ><p>{props.Certification1}</p></li>
                                <li ><p>{props.Certification2}</p></li>
                                <li ><p>{props.Certification3}</p></li>
                                <li ><p>{props.Certification4}</p></li>
                            </ul>
                            <h4><u>Acheivements</u></h4>
                            <ul>
                                <li ><p>{props.Acheivements1}</p></li>
                                <li ><p>{props.Acheivements2}</p></li>
                                <li ><p>{props.Acheivements3}</p></li>
                                <li ><p>{props.Acheivements4}</p></li>
                            </ul>
                            <h4><u>Projects</u></h4>
                            <h6>{props.Project1}</h6>
                            <p style={{marginBottom:"10px"}}>{props.desc1}</p>
                            <h6>{props.Project2}</h6>
                            <p style={{marginBottom:"15px"}}>{props.desc2}</p>



                        </div>
                    </div>



                </div>
            </div><br></br>
            {/* row2 */}
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5 template1">
                <div className="row">
                    <div className="col-md-8">
                        <h4 style={{textAlign:"left",marginTop:"10px"}}>{props.name}</h4>
                    </div>
                   </div>
                   <div className="row">
                        <div className="col-md-4 temp2">
                            <p>{props.phone}</p>
                            <p>{props.email}</p>
                            <p>{props.address}</p>
                            <p>{props.link}</p>
                            <h4><u>Skills</u></h4>
                            <ul>
                                <li><p>{props.skill1}</p></li>
                                <li ><p>{props.skill2}</p></li>
                                <li ><p>{props.skill3}</p></li>
                                <li ><p>{props.skill4}</p></li>
                                
                            </ul>
                            <h4><u>Acheivements</u></h4>
                            <ul>
                                <li ><p>{props.Acheivements1}</p></li>
                                <li ><p>{props.Acheivements2}</p></li>
                                <li ><p>{props.Acheivements3}</p></li>
                                <li ><p>{props.Acheivements4}</p></li>
                            </ul>

                        </div>
                        <div className="col-md-8 temp21">
                            <h4><u>Objective</u></h4>
                            <p style={{marginBottom:"10px"}}>{props.obj}</p>
                            <h4><u>Education</u></h4>
                            <h6>{props.btech} | {props.btechyear}</h6>
                            <p>{props.btechcol}</p>
                            <p style={{marginBottom:"5px"}}>{props.btechper}</p>
                            <h6>{props.inter} | {props.interyear}</h6>
                            <p>{props.intercol}</p>
                            <p style={{marginBottom:"5px"}}>{props.interper}</p>
                            <h6>{props.ssc} | {props.sscyear}</h6>
                            <p>{props.ssccol}</p>
                            <p style={{marginBottom:"5px"}}>{props.sscper}</p>
                            <h4><u>Certifications</u></h4>
                            <ul>
                                <li ><p>{props.Certification1}</p></li>
                                <li ><p>{props.Certification2}</p></li>
                                <li ><p>{props.Certification3}</p></li>
                                <li ><p>{props.Certification4}</p></li>
                            </ul>
                            <h4><u>Projects</u></h4>
                            <h6>{props.Project1}</h6>
                            <p style={{marginBottom:"10px"}}>{props.desc1}</p>
                            <h6>{props.Project2}</h6>
                            <p style={{marginBottom:"15px"}}>{props.desc2}</p>

                        </div>
                   </div>
                    

                </div>
                <div className="col-md-5 template1">
                   <div className="row">
                    <div className="col-md-12 temp4">
                        <h4 style={{textAlign:"left",marginTop:"10px"}}>{props.name}</h4>
                        <p>{props.phone}</p>
                            <p>{props.email}</p>
                            <p>{props.address}</p>
                            <p>{props.link}</p>
                            
                    </div>
                   </div>
                   <div className="row">
                        <div className="col-md-4 temp2">
                            <h4><u>Skills</u></h4>
                            <ul>
                                <li><p>{props.skill1}</p></li>
                                <li ><p>{props.skill2}</p></li>
                                <li ><p>{props.skill3}</p></li>
                                <li ><p>{props.skill4}</p></li>
                                
                            </ul>
                            <h4><u>Acheivements</u></h4>
                            <ul>
                                <li ><p>{props.Acheivements1}</p></li>
                                <li ><p>{props.Acheivements2}</p></li>
                                <li ><p>{props.Acheivements3}</p></li>
                                <li ><p>{props.Acheivements4}</p></li>
                            </ul>


                        </div>
                        <div className="col-md-8 temp2">
                            <h4><u>Objective</u></h4>
                            <p style={{marginBottom:"10px"}}>{props.obj}</p>
                            <h4><u>Education</u></h4>
                            <h6>{props.btech} | {props.btechyear}</h6>
                            <p>{props.btechcol}</p>
                            <p style={{marginBottom:"5px"}}>{props.btechper}</p>
                            <h6>{props.inter} | {props.interyear}</h6>
                            <p>{props.intercol}</p>
                            <p style={{marginBottom:"5px"}}>{props.interper}</p>
                            <h6>{props.ssc} | {props.sscyear}</h6>
                            <p>{props.ssccol}</p>
                            <p style={{marginBottom:"5px"}}>{props.sscper}</p>
                            <h4><u>Certifications</u></h4>
                            <ul>
                                <li ><p>{props.Certification1}</p></li>
                                <li ><p>{props.Certification2}</p></li>
                                <li ><p>{props.Certification3}</p></li>
                                <li ><p>{props.Certification4}</p></li>
                            </ul>
                            <h4><u>Projects</u></h4>
                            <h6>{props.Project1}</h6>
                            <p style={{marginBottom:"10px"}}>{props.desc1}</p>
                            <h6>{props.Project2}</h6>
                            <p style={{marginBottom:"15px"}}>{props.desc2}</p>

                        </div>
                   </div>



                </div>
            </div><br></br>

            
        </div>
    )
}
export default Template;