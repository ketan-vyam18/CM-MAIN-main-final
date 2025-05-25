// import { useState, useEffect } from 'react';

// import "./assets/css/bootstrap.min.css";

// import "./azonics.css";
// import "https://cdn.lineicons.com/2.0/LineIcons.css";
// import "./slicknav.css";
// import "./assets/css/nivo-lightbox.css";
// import "./assets/css/animate.css";

// import "./responsive.css";
// import './App.css';

// import AOS from "aos";
// import "aos/dist/aos.css";






// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 1600 });
//   }, []);
//   const [isOpen, setIsOpen] = useState(false);

//   const [key, setKey] = useState(0); // Key to force re-render
//   // const sectionRef = useRef(null);


//   const restartAnimation = () => {
//     setKey(Key => Key + 1); // Change key to remount component
//   };
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };


//   // useEffect(() => {
//   //   const observer = new IntersectionObserver(
//   //     (entries) => {
//   //       entries.forEach((entry) => {
//   //         if (entry.isIntersecting) {
//   //           entry.target.classList.add("show"); // Add class when in view
//   //         }
//   //       });
//   //     },
//   //     { threshold: 0.2 } // Triggers when 20% of the section is visible
//   //   );

//   //   const items = sectionRef.current.querySelectorAll(".services-item");
//   //   items.forEach((item) => observer.observe(item));

//   //   return () => {
//   //     items.forEach((item) => observer.unobserve(item));
//   //   };
//   // }, []);




//   return (
//     <>
//       <div className={isOpen ? "nav_core_open" : "nav_core"} >
//         <div id="logo1">
//           <img src="./public/WhatsApp_Image_2025-02-28_at_21.50.10_86d30eac-removebg-preview 2.svg" />
//           <p id="name"><span id="club">CLUB</span> <span>MATHEMATICA</span></p>
//         </div>






//         <div className={isOpen ? "nav-menuopen" : "nav-menu"}>


//           <p className={isOpen ? "elements_open" : "elements"}> Home  </p>


//           <p className="elements">Infinitum  </p>


//           <p className="elements">Events  </p>


//           <p className="elements">Our Team </p>


//           <p className="elements">Gallery  </p>


//           <button className="elements">
//             About Us
//           </button>


//           <button className="elements">
//             Contact Us
//           </button>
//           <div className="menu-toggle" onClick={toggleMenu} >
//             ☰
//           </div>
//         </div>

//       </div>
//       <div className={isOpen ? 'dropdown_open' : 'dropdown'}>
//         <div id="menu_drop"> ☰</div>
//         <div className='drop_list' onClick={toggleMenu}>
//           <p id="items">Home</p>
//           <p id="items">Infinitum</p>
//           <p id="items">Events</p>
//           <p id="items">Our Team</p>
//           <p id="items">Gallery</p>
//         </div>
//       </div>


//       <img id="page1" src="./public/Component 7.svg" />

//       <img id="page2" src="./public/Component 5.svg" />



//       <div id="pics">
//         <p id="description">
//           <b>About C M</b><br />
//           <p>At <strong>Club Mathematica, NIT Calicut</strong>, we believe that mathematics is more than just numbers—it’s a language of patterns, a tool for innovation, and a bridge between logic and creativity. As a vibrant cultural club, we create a dynamic space where intellectual curiosity meets exhilarating competition.</p>

//           <p>Through engaging events, challenging puzzles, and thrilling contests, we inspire students to embrace problem-solving, strategic thinking, and the sheer joy of discovery. Our club thrives on the spirit of collaboration, learning, and the relentless pursuit of excellence. Whether you’re a math enthusiast, a puzzle solver, or just someone who loves a good challenge, <strong>Club Mathematica</strong> is where you belong.</p>

//           <p>Join us in celebrating the beauty of mathematics beyond textbooks—where logic meets culture, and knowledge turns into an adventure!</p>

//           <p><strong>Motto:</strong> <em>Unravel. Compete. Conquer.</em></p>


//         </p>
//         <div id="infi_flex">
//           <img id="infi" src="./public/Component 4.svg" />
//           <button className="site">Visit Site</button>
//         </div>
//       </div>
//       <div id="team">
//         <div id="event">

//           <b>GALLERIA</b>
//         </div>
//         <div id="boxes">
//           <div className="box"></div>
//           <div className="box"></div>
//           <div className="box"></div>
//           <div className="box"></div>
//           <div className="box"></div>
//           <div className="box"></div>
//           <div className="box"></div>
//           <div className="box"></div>
//           <div className="box"></div>

//         </div>

//       </div>
//       <div id="events_">
//         <div id="black-sheet">
//           <div id="event_title">
//             <span id="our1"><b>EVENTS</b></span>
//             <span id="events1"><b>'2024&25</b></span>
//           </div>
//         </div>
//       </div>
//       <section id="services" onMouseEnter={restartAnimation} className="services section-padding" data-aos="zoom-in">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h1
//                 className="section-title wow fadeInUp cluboutlooks animated"
//                 data-wow-delay="0.2s"
//                 style={{ visibility: "visible", animationDelay: "0.2s" }}
//               >
//                 <span id="Club">Club</span> Outlook
//               </h1>
//             </div>
//           </div>
//           <div className="services-wrapper">
//             <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "1.2s" }}>
//               <div className="icon">
//                 <i className="lni lni-consulting"></i>
//               </div>
//               <div className="services-content">
//                 <h3><a href="#">Diligent and dependable executives</a></h3>
//               </div>
//             </div>
//             <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.2s" }}>
//               <div className="icon">
//                 <i className="lni lni-network"></i>
//               </div>
//               <div className="services-content">
//                 <h3><a href="#">Adept and aspiring team</a></h3>
//               </div>
//             </div>
//             <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.4s" }}>
//               <div className="icon">
//                 <i className="lni lni-code-alt"></i>
//               </div>
//               <div className="services-content">
//                 <h3><a href="#">Proficient technical team</a></h3>
//               </div>
//             </div>
//             <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.6s" }}>
//               <div className="icon">
//                 <i className="lni lni-pallet"></i>
//               </div>
//               <div className="services-content">
//                 <h3><a href="#">Ingenious and idealistic designers</a></h3>
//               </div>
//             </div>
//             <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.8s" }}>
//               <div className="icon">
//                 <i className="lni lni-bar-chart"></i>
//               </div>
//               <div className="services-content">
//                 <h3><a href="#">Analytical marketing and event organization team</a></h3>
//               </div>
//             </div>
//             <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "1s" }}>
//               <div className="icon">
//                 <i className="lni lni-pencil-alt"></i>
//               </div>
//               <div className="services-content">
//                 <h3><a href="#">Articulate content writers</a></h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="contact-us" className="section-padding" data-aos="zoom-in">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-12">
//               <div className="section-title-header text-center">
//                 <h1 className="section-title wow fadeInUp contactuss" data-wow-delay="0.2s">Contact Us</h1>
//               </div>
//             </div>
//             <div className="col-lg-7 col-md-12 col-xs-12">
//               <div className="container-form wow fadeInLeft" data-wow-delay="0.2s">
//                 <div className="form-wrapper">
//                   <form role="form" action="https://formspree.io/f/xvovqdkl" method="POST">
//                     <div className="row">
//                       <div className="col-md-6 form-line">
//                         <div className="form-group">
//                           <input type="text" className="form-control name" id="name1" name="name" placeholder="Name" required data-error="Please enter your name" />
//                           <div className="help-block with-errors"></div>
//                         </div>
//                       </div>
//                       <div className="col-md-6 form-line">
//                         <div className="form-group">
//                           <input type="email" className="form-control email" id="email" name="_replyto" placeholder="Email" required data-error="Please enter your Email" />
//                           <div className="help-block with-errors"></div>
//                         </div>
//                       </div>
//                       <div className="col-md-12 form-line">
//                         <div className="form-group">
//                           <input type="tel" className="form-control" id="msg_subject" name="subject" placeholder="Subject" required data-error="Please enter your message subject" />
//                           <div className="help-block with-errors"></div>
//                         </div>
//                       </div>
//                       <div className="col-md-12">
//                         <div className="form-group">
//                           <textarea className="form-control" rows="4" id="message" name="message" required data-error="Write your message"></textarea>
//                         </div>
//                         <div className="form-submit">
//                           <button type="submit" className="btn btn-common" value="Send" id="form-submit">
//                             <i className="fa fa-paper-plane" aria-hidden="true"></i> Send Us Now
//                           </button>
//                           <div id="msgSubmit" className="h3 text-center hidden"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>




//       <div id="deco">

//         <h2 id="head">Dive into the realm of Mathematica!</h2>
//         <button className='site1'>Know More!</button>

//       </div>
//       <section class="counter-section section-padding">
//         <div class="container">
//           <div class="row">
//             <div class="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
//               <div class="counter wow fadeInRight" data-wow-delay="0.3s">
//                 <div class="icon"><i class="lni-map"></i></div>
//                 <p>INFINITUM</p>
//               </div>
//             </div>
//             <div class="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
//               <div class="counter wow fadeInRight" data-wow-delay="0.6s">
//                 <div class="icon"><i class="lni-timer"></i></div>
//                 <p>January 2024</p>
//               </div>
//             </div>
//             <div class="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
//               <div class="counter wow fadeInRight" data-wow-delay="0.9s">
//                 <div class="icon"><i class="lni-users"></i></div>
//                 <p>30,000+ Participants</p>
//               </div>
//             </div>
//             <div class="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
//               <div class="counter wow fadeInRight" data-wow-delay="1.2s">
//                 <div class="icon"><i class="lni-cup"></i></div>
//                 <p>1 lakh worth prizes</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div id="footer">
//         <img id="logo" src="./public/Component 9.svg" />
//         <p id="quick">
//           <h3>Quick Links</h3>

//           <h4>Home</h4>
//           <h4>Infinitum</h4>
//           <h4>Events</h4>
//           <h4>Our Team</h4>
//           <h4>Gallery</h4>
//         </p>
//         <p id="credits">
//           <h3>Contact Us</h3>

//           <h4>Phone:</h4>
//           <h5>+919778112422</h5>
//           <h4>Email:</h4>
//           <h5>clubmath@nitc.ac.in</h5>
//           <h4>Follow Us On:</h4>
//           <div id="icons">
//             <img id="icon1" src="insta.svg" />
//             <img id="icon2" src="facebook.svg" />
//           </div>
//         </p>
//       </div>

//     </>

//   )
// }


// export default App;
