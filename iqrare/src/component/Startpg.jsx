import React, { Component } from 'react'

class Startpg extends Component {


	render() {
		return (
			<div>
                  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="/">RareIQ</a></h1>
        
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="/">Home</a></li>
          <li><a class="nav-link scrollto" href="/">About</a></li>
		   <li class="dropdown"><a href="/"><span>Courses</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/">Testing</a></li>
              <li class="dropdown"><a href="/"><span>Framework</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/">Yii</a></li>
                  <li><a href="/">Laravel</a></li>
                  <li><a href="/">Codeigniter</a></li>
                  <li><a href="/">Sympfony</a></li>
               
                </ul>
              </li>
              <li><a href="/">Oracle</a></li>
              <li><a href="/">C, C++</a></li>
              <li><a href="/">Java</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="/">Trainer</a></li>
          <li><a class="nav-link scrollto " href="/">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="/">Team</a></li>
          
         
        	<li>  
  <a href="/" class="btn btn-default btn-rounded" data-toggle="modal">Login</a>
</li>
		  
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav> 

    </div>
  </header>   

 
<div class="modal fade" id="modalLoginAvatar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog cascading-modal modal-avatar modal-sm" role="document">
   
    <div class="modal-content">
	
      
      <div class="modal-header">
        </div>
       <div class="modal-body text-center mb-1">

        <h5 class="mt-1 mb-2">We will give a call back!</h5>

        <div class="md-form ml-0 mr-0">
        <div>
          <input type="name"  id="form29" placeholder="Enter your Name" class="form-control form-control-sm validate ml-0"/>
          </div>
          <div>

		  <input type="number"   id="form29" placeholder="Enter your Phone Number" class="form-control form-control-sm validate ml-0"/>
          </div>
          <div>
          <input type="password"  id="form29" placeholder="Enter your Email" class="form-control form-control-sm validate ml-0"/>
          </div>
        </div>

        <div class="text-center mt-4">
          <button class="btn btn-cyan mt-1">Login <i class="fas fa-sign-in ml-1"></i></button>
        </div>
      </div>

    </div>
     
  </div>
</div>


<section id="hero">
    <div class="hero-container">
      <h3>Your Future is near!</h3>
      <h1>We're Creative Agency</h1>
      <h2>We are team of talented Trainers making Computer software engineers to find employment in MNC industry!!</h2>
      <a href="/about" class="btn-get-started scrollto">Search your course..</a>
    </div>
  </section> 

  
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>RareIQ</h3>
          
          </div>
       
           
        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>RareIQ</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="/" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="/" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="/" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="/" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer> 




			</div>);
	}
}

export default Startpg