import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (
    <div className="page-wrap">
      
      <input id="hmpid" name="hmpid" type="hidden" value="0" />
      <input id="hmpname" name="hmpname" type="hidden" value="" />
      <input type="hidden" id="currenttab" value="chennai" />
      <div className="wrapper contact">
    

        <div className="banner">
          <h2>Contact us</h2>
        </div>
        <div className="info">
          <div className="customercare">
            <span>Customer Support India</span>
            {/* <div className="serviceinfo">
                <span className="webdata">1800 420 1212</span>                        
                        <a className="mobdata tel" href="tel:18004201212">1800 420 1212</a>
                <span className="time">8am to 10pm - EST</span>
            </div> */}
            <div className="serviceinfo">
              <span className="webdata">bluncky 3.0</span>
              <a className="mobdata email" href="visra777@gmail.com" target="_top">
                bluncky@3.com
              </a>
            </div>
          </div>
          <div className="customercare">
            <span>Customer Support USA/Canada</span>
            <div className="serviceinfo">
              <span className="webdata">1 512 788 5300</span>
              <a className="mobdata tel" href="tel:15127885300">
                1 512 788 5300
              </a>
              <span className="time">Mon to Fri - 11am to 8pm - EST</span>
            </div>
            <span className="webdata">visra777@gmail.com</span>
            <a className="mobdata email" href="visra777@gmail.com" target="_top">
            visra777@gmail.com
            </a>
          </div>
          <div className="customercare">
            <span>For Advertisement Call</span>
            <div className="serviceinfo">
              {/* <span className="webdata">92450 92450</span>
                         <a className="mobdata tel" href="tel:9245092450">92450 92450</a> */}
              <a className="btn-p" href="visra777@gmail.com">
                Advertise Now
              </a>
            </div>
          </div>
        </div>
        {/* fini */}
        <div className="branch">
          <div className="container">
            <div className="address">
              <div className="container">
                <span className="title">Offices</span>
                <div className='box'>
                <ul>
                  {/*<li>
                            <span className="location">Registered head Office</span>
                            <address>
                                Sulekha.com New Media Pvt. Ltd.<br />
                                # 484 &amp; 485, 4th Floor, <br />
                                Pantheon Plaza, <br />
                                Pantheon Road, Egmore,<br />
                                Chennai - 600 008.<br/>
                                Call : 1800 420 1212  
<br/>
<br/>                                   
                            </address>
                            <span className="contact f-icon"></span>
                        </li>*/}
                  <li>
                    <span className="location">Registered head Office</span>
                    <address>
                      Sulekha.com New Media Pvt. Ltd. <br />
                      RMZ Millenia Business Park,<br />
                      2nd Floor of, Campus 1A, <br />
                      No 143, Dr. MGR Road,<br />
                      Kandanchavadi, Perungudi,<br />
                      Chennai - 600 096.<br />
                      Call : 1800 420 1212
                    </address>
                  </li>
                  <li>
                    <span className="location">Bangalore</span>
                    <address>
                      Sulekha.com New Media Pvt. Ltd. <br />
                      No.33, 2nd Floor, Naseer Affinity, <br />
                      Miller Tank Bunk Raod, <br />
                      Kaveriappa Layout,<br />
                      Vasanth Nagar,<br />
                      Bangalore - 560 052.<br />
                      Call : 1800 420 1212
                      <br />
                      <br />
                    </address>
                  </li>
                  <li>
                    <span className="location">Hyderabad</span>
                    <address>
                      Sulekha.com New Media Pvt. Ltd. <br />
                      B block - 2nd floor<br />
                      # 6-2-981, Maruthi Plaza<br />
                      Beside Shadan Pharmacy <br />
                      College, <br />
                      Khairathabad, <br />
                      Hyderabad - 500 004.<br />
                      Call : 1800 420 1212
                    </address>
                  </li>
                  <li>
                    <span className="location">Mumbai</span>
                    <address>
                      Sulekha.com New Media Pvt. Ltd. <br />
                      Unit No. 201 <br />
                      2nd Floor, Land Mark, B wing<br />
                      Andheri Kurla Road<br />
                      Near Western Express Highway<br />
                      Andheri(East),<br />
                      Mumbai - 400 093.<br />
                      Call : 1800 420 1212
                    </address>
                  </li>
                  <li>
                    <span className="location">Noida</span>
                    <address>
                      Sulekha.com New Media Pvt. Ltd. <br />
                      C104, Second Floor, <br />
                      Sector - 2, Noida - 201 301.<br />
                      Call : 1800 420 1212
                    </address>
                  </li>
                  <li>
                    <span className="location">Kolkata</span>
                    <address>
                      Sulekha.com New Media Pvt. Ltd. <br />
                      Chaterjee International Center, <br />
                      #33 A, 13th Floor, <br />
                      A12, Jawaharlal Nehru Road,<br />
                      Kolkata - 700 071.<br />
                      Call : 1800 420 1212
                    </address>
                  </li>
                  {/* <li>
                            <span className="location">Ahmedabad</span>
                            <address>
                                Sulekha.com New Media Pvt. Ltd.<br />
                                Mridul Tower, Ground Floor,#135,<br />
                                Opposite Bata Showroom. <br />
                                Ashram Road,Ellis Bridge,<br />
                                Ahmedabad - 380 006.<br />
				Call : 1800 420 1212
                            </address>
                        </li>*/}
                  <li>
                    <span className="location">Pune</span>
                    <address>
                      Sulekha.com New Media Pvt. Ltd. <br />
                      Office no. 32 and 33,<br />
                      1st Floor, Sangam commercial complex, <br />
                      Sangamvadi, Near RTO, <br />
                      Shivaji Nagar, Pune – 411001,<br />
                      Call : 1800 420 1212
                    </address>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="footer-main">
            <div>
              <h4>Corporate</h4>
              <ul>
                <li>
                  <a title="About us" href="https://www.sulekha.com/collateral/aboutus"  target ="_blank" rel="noreferrer">
                    About us
                  </a>
                </li>
                <li>
                  <a title="Careers" href="http://careers.sulekha.com/" tabIndex="0">
                    Careers
                  </a>
                </li>
                <li>
                  <a title="Contact us" href="https://www.sulekha.com/collateral/contactus" tabIndex="0">
                    Contact us
                  </a>
                </li>
                {/*<li><a title="Meet our users" href="http://www.sulekha.com/collateral/testimonial" tabIndex="0">Meet our users</a></li>*/}
                <li>
                  <a title="Media coverage" href="https://www.sulekha.com/collateral/press" tabIndex="0">
                    Media coverage
                  </a>
                </li>
                <li>
                  <a title="Ads&nbsp;/&nbsp;commercials" href="https://www.sulekha.com/collateral/ads" tabIndex="0">
                    Ads&nbsp;/&nbsp;commercials
                  </a>
                </li>
                <li>
                  <a title="Advertise on Sulekha" href="https://www.sulekha.com/collateral/advertise" tabIndex="0">
                    Advertise on Sulekha
                  </a>
                </li>
                <li>
                  <a title="Terms &amp; conditions" href="/collateral/terms" tabIndex="0">
                    Terms &amp; conditions
                  </a>
                </li>
                <li>
                  <a title="Privacy policy" href="/collateral/privacy" tabIndex="0">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a title="Copyright policy" href="/collateral/collateralpolicy" tabIndex="0">
                    Copyright policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Top cities (India)</h4>
              <ul>
                <li>
                  <a href="https://www.sulekha.com/bangalore" title="Sulekha.com Bangalore" tabIndex="0">
                    Bangalore
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/chennai" title="Sulekha.com Chennai" tabIndex="0">
                    Chennai
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/delhi" title="Sulekha.com Delhi" tabIndex="0">
                    Delhi
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/mumbai" title="Sulekha.com Mumbai" tabIndex="0">
                    Mumbai
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/hyderabad" title="Sulekha.com Hyderabad" tabIndex="0">
                    Hyderabad
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/pune" title="Sulekha.com Pune" tabIndex="0">
                    Pune
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/kolkata" title="Sulekha.com Kolkata" tabIndex="0">
                    Kolkata
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/ahmedabad" title="Sulekha.com Ahmedabad" tabIndex="0">
                    Ahmedabad
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/gurgaon" title="Sulekha.com Gurgaon" tabIndex="0">
                    Gurgaon
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/faridabad" title="Sulekha.com Faridabad" tabIndex="0">
                    Faridabad
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/ghaziabad" title="Sulekha.com Ghaziabad" tabIndex="0">
                    Ghaziabad
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/noida" title="Sulekha.com Noida" tabIndex="0">
                    Noida
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/greaternoida" title="Sulekha.com Greater Noida" tabIndex="0">
                    Greater Noida
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Top cities (US)</h4>
              <ul>
                <li>
                  <a href="http://us.sulekha.com/austin-metro-area" title="Austin" tabIndex="0">
                    Austin
                  </a>
                </li>
                <li>
                  <a href="http://us.sulekha.com/atlanta-metro-area" title="Atlanta" tabIndex="0">
                    Atlanta
                  </a>
                </li>
                <li>
                  <a href="http://us.sulekha.com/bay-area" title="Bay Area" tabIndex="0">
                    Bay Area
                  </a>
                </li>
                <li>
                  <a href="http://us.sulekha.com/boston-metro-area" title="Boston" tabIndex="0">
                    Boston
                  </a>
                </li>
                <li>
                  <a href="http://us.sulekha.com/chicago-metro-area" title="Chicago" tabIndex="0">
                    Chicago
                  </a>
                </li>
                <li>
                  <a href="http://us.sulekha.com/los-angeles-metro-area" title="Los Angeles" tabIndex="0">
                    Los Angeles
                  </a>
                </li>
                <li>
                  <a href="http://us.sulekha.com/new-jersey-area" title="New Jersey" tabIndex="0">
                    New Jersey
                  </a>
                </li>
                <li>
                  <a href="http://us.sulekha.com/new-york-metro-area" title="New York" tabIndex="0">
                    New York
                  </a>
                </li>
                <li>
                  <a href="http://us.sulekha.com/toronto-metro-area" title="Toronto" tabIndex="0">
                    Toronto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Bluncky domains</h4>
              <ul>
                <li>
                  <a href="http://property.sulekha.com" title="Sulekha Property" tabIndex="0">
                    Property
                  </a>
                </li>
                <li>
                  <a href="http://property.sulekha.com/rentals" title="Sulekha Rentals" tabIndex="0">
                    Rentals
                  </a>
                </li>
                <li>
                  <a href="http://property.sulekha.com/paying-guest-hostels/chennai" title="PG in chennai" tabIndex="0">
                    PG
                  </a>
                </li>
                <li>
                  <a href="http://property.sulekha.com/roommates-flatmates/chennai" title="Roommates in chennai" tabIndex="0">
                    Roommates
                  </a>
                </li>
                <li>
                  <a href="/home-services/chennai" title="Sulekha Home services" tabIndex="0">
                    Home services
                  </a>
                </li>
                <li>
                  <a href="/business-services/chennai" title="Sulekha Office services" tabIndex="0">
                    Office services
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/products" title="Sulekha Products" tabIndex="0">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/education-training/chennai" title="Sulekha Education" tabIndex="0">
                    Education
                  </a>
                </li>
                <li>
                  <a href="/wedding-services/" title="Sulekha Wedding Services" tabIndex="0">
                    Wedding Services
                  </a>
                </li>
                <li>
                  <a href="/home/" title="Sulekha Home Improvement" tabIndex="0">
                    Home Improvement
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/study-abroad/" title="Sulekha Study Abroad" tabIndex="0">
                    Study Abroad
                  </a>
                </li>
                <li>
                  <a href="https://elearn.sulekha.com/" title="Sulekha Elearn" tabIndex="0">
                    Elearn
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/safety-tips" title="Sulekha Safety Tips" tabIndex="0">
                    Safety Tips
                  </a>
                </li>
                <li>
                  <a href="https://www.sulekha.com/buy-sell-tickets" title="Sulekha Tickets" tabIndex="0">
                    Tickets
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <h4>Bluncky apps</h4>
              <ul>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.sulekha.businessapp" title="Sulekha Business App" tabIndex="0">
                  Bluncky Business App
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.sulekha.searchapp" title="Sulekha Search App" tabIndex="0">
                  Bluncky Search App
                  </a>
                </li>
                <li>
                  <a href="https://itunes.apple.com/in/app/sulekha-business/id964132378?mt=8" title="Sulekha Business App" tabIndex="0">
                  Bluncky Business App
                  </a>
                </li>
                <li>
                  <a href="https://itunes.apple.com/in/app/sulekha-search/id464907708?mt=8" title="Sulekha Search App" tabIndex="0">
                  Bluncky Search App
                  </a>
                </li>
              </ul>
            </div>*/}
          </div> 
          <div className="footer-bottom">
            {/* <p>&copy; 2023 Bluncky. All Rights Reserved.</p> */}
            <div className="follow-us">
              <span>Follow us</span>
              {/* <div className="social">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebook size={30} style={{color:"fff",marginRight:"1rem"}}/>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter size={30} style={{color:"fff",marginRight:"1rem"}}/> 
                </a>
                <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedin size={30} style={{color:"fff",marginRight:"1rem"}}/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram size={30} style={{color:"fff",marginRight:"1rem"}}/>
                </a>
               </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
