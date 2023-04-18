import React from "react";
function Login(){
    return(
        <>
        <div className="container-fluid">

        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 forms">
        <center><h2 style={{color:"#FB4570"}}>Login</h2></center><br></br>
        <form>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email"/>
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd"/>
        </div>
        <div class="checkbox">
          <label><input type="checkbox"/> Remember me</label>
        </div>
        <center><button type="submit" class="btn btn-info">Submit</button></center>
      </form>
      </div>
      <div className="col-md-4"></div>
      </div>
      </div>
      </>
    )
}
export default Login;