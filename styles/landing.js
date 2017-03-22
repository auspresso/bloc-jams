 body.landing {
     background-color: rgb(58,23,63);
 }
 
 .hero-content {
     position: relative;
     min-height: 600px;
     background-image: url(../assets/images/bloc_jams_bg.jpg);
     background-repeat: no-repeat;
     background-position: center center;
     background-size: cover;
 }
 
 .hero-content .hero-title {
     position: absolute;
     top: 40%;
     -webkit-transform: translateY(-50%);
     -moz-transform: translateY(-50%);
     transform: translateY(-50%);
     width: 100%;
     text-align: center;
     font-size: 4rem;
     font-weight: 300;
     text-transform: uppercase;
     letter-spacing: 0.5rem;
     text-shadow: 1px 1px 0px rgb(58,23,63);
 }
 
 .selling-points {
     position: relative;
 }
 
 .point {
     position: relative;
     padding: 2rem;
     text-align: center;
     opacity: 0;
     -webkit-transform: scaleX(0.9) translateY(3rem);
     -moz-transform: scaleX(0.9) translateY(3rem);
     transform: scaleX(0.9) translateY(3rem);
     -webkit-transition: all 0.25s ease-in-out;
     -moz-transition: all 0.25s ease-in-out;
     transition: all 0.25s ease-in-out;
     -webkit-transition-delay: 0.2s;
     -moz-transition-delay: 0.2s;
     transition-delay: 0.2s;
 }
 
 .point .point-title {
     font-size: 1.25rem;
 }
 
 .ion-music-note,
 .ion-radio-waves,
 .ion-iphone {
     color: rgb(233,50,117);
     font-size: 5rem;
 }