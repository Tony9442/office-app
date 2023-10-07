import React from "react";

function Navbar() {
  return (
  <div className="">
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
         <a class="navbar-brand" href="#"></a> 
        <img src="https://horizonsoffices.com.gh/wp-content/uploads/2021/10/download-160x45.png"/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT US</a>
            </li>
            

          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
}

export default Navbar