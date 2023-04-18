import React from "react";
function Contact(){
    return(
        <>
        <div className="container-fluid">

        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 cforms">
        <center><h2 style={{color:"#FB4570"}}>Contact Us</h2></center><br></br>
        <form>
        <div class="form-group">
          <label for="uname">User Name:</label>
          <input type="text" class="form-control" id="name"/>
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email"/>
        </div>
        <div class="form-group">
          <label for="phno">Contact No:</label>
          <input type="text" class="form-control" id="phno"/>
        </div>
        <div class="form-group">
          <label for="add">Queries:</label>
          <textarea  class="form-control"></textarea>
        </div>
        
        <br></br><center><button type="submit" class="btn btn-info">Submit</button></center>
      </form>
      </div>
      <div className="col-md-4"></div>
      </div>
      </div>
      </>
    )
}
export default Contact;