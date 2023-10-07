import React from "react";

function Card() {
  return (
    <div className="">
      <p class="display-6 text-center">PLANS</p>
    

    <div class="container">
      <div class="row">
       <div class="col-md-3 h-100 frist">
       <img src="https://horizonsoffices.com.gh/wp-content/uploads/2021/10/DSC_9236-1536x1024.jpg" 
       class="card-img-top" alt="..."/>
          <h5 class="card-title">Customized Offices</h5>
            <p class="card-text">We can customized your office space for you. We would build your own offices according to your specification, 
              taste and preference with your own corporate image at no upfront cost.</p>
        </div>

       <div class="col-md-3 h-100 frist">
          <img src="https://horizonsoffices.com.gh/wp-content/uploads/2021/10/DSC_8914.jpg" 
          class="card-img-top" alt="..."/>
          
            <h5 class="card-title">Conference Rooms</h5>
            <p class="card-text">We have a very nice spacious conference with connected phones for your meetings.</p>
            
        </div>

       <div class="col-md-3 h-100">
          <img src="https://horizonsoffices.com.gh/wp-content/uploads/2021/10/DSC_9271-2.jpg" 
          class="card-img-top" alt="..."/>
          
            <h5 class="card-title">Coworking Office</h5>
            <p class="card-text">A perfect working environment for Start-ups, SME’s and Business incubators. Join a community of like-minded entreprenuers. 
              A world class full-time office in a co-working environment with flexible payment terms</p>

          </div>
          
        


       <div class="col-md-3 h-100">
          <img src="https://horizonsoffices.com.gh/wp-content/uploads/2021/10/DSC_8508-1536x1024.jpg" 
          class="card-img-top" alt="..."/>
            <h5 class="card-title">Virtual Offices</h5>
            <p class="card-text">Horizons Offices would run your office for you. 
              We would receive your business calls on your behalf, prime business address, receive your letters and messenger service.

            </p>
        </div>

    </div>
    </div>
    </div>
  );
}

export default Card