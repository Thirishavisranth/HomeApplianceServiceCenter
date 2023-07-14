  import React from 'react';
  import  './Service.css';

  const ServicePage = () => {
      const backgroundImageUrls = [
          'https://image1.jdomni.in/preview-theme/8/b/4/c7657b71-f743-4ab7-a1d4-288e80bdac23.jpeg',
          'https://image1.jdomni.in/preview-theme/9/6/4/4b19104d-752f-4615-a65c-39e6b138b0fd.jpeg',
          'https://image1.jdomni.in/preview-theme/4/d/4/a46dbeb6-9250-4b56-ab14-22aad5b09c41.jpeg',
          'https://image1.jdomni.in/preview-theme/7/7/4/b7525a83-29b1-4f87-98bd-f70a499fe006.jpeg',
          'https://image1.jdomni.in/preview-theme/a/2/4/b0b85219-73eb-4b93-ace9-e666641c45e0.jpeg',
          'https://image1.jdomni.in/preview-theme/a/a/4/44a4f1ad-e73b-462b-9590-1c3951bd3ce4.jpeg',
          'https://image1.jdomni.in/preview-theme/c/9/4/d9fbfdb9-474d-4652-ac14-721d02f33ccb.jpeg',
          'https://image1.jdomni.in/preview-theme/e/f/4/b0e6081a-ca5c-4307-a41f-8f822240f227.jpeg',
          'https://image1.jdomni.in/app/05072019/EE/1C/86/69411A4554785FD90C9C977A29_1562308291495.jpg',
        ];
        
    const styles = {
      bdy: {
          
          marginTop:'2%',
          height:'100hv ',
          marginLeft:'1.8%',
          //marginRight:'-3%',
          width:'96vw',
          // overflow:'scroll',
          marginBottom:'-30%',

        },
        servicePage: {
          
        },
      frame1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#737381',
      },
      heading: {
        fontSize: '32px',
        textAlign: 'center',
        padding:'2%',
      },
      searchBar: {
        marginTop: '10px',
        padding: '5px',
        textAlign: 'center',
        
      },
      frame2: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Three equal-sized columns
        gap: '40px',
        padding: '30px',
        backgroundColor: 'gray',
      },
      box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'white',
        height: '100%',
      },
      boxContent: {
          alignItems:'center',
      },
      boxButtons: {
          marginTop: '35px',
          marginLeft:'75%',
          marginRight:'3%',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor:'transparent !important',
        
      },
      frame3: {
        backgroundColor: '#f2f2f2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'0',
        padding:'10%',
        
      },
    };
    //   footerContainer: {
    //     color: 'aliceblue',
    //     textAlign: 'center',
    //     backgroundColor: 'rgba(49, 49, 54, 0.993)',
    //     fontSize: '15px',
    //     width: '100%',
    //     height: '4rem',
    //     display: 'grid',
    //     gridTemplateColumns: '3fr 6fr 1fr 1fr 1fr',
    //   },
    //   footerItem1: {
    //     color: 'inherit',
    //     border: 'none',
    //     backgroundColor: 'inherit',
    //     color: '#6bd1f0',
    //     paddingLeft: '10px',
    //     fontSize: '20px',
    //     display: 'flex',
    //     justifyContent: 'left',
    //     alignItems: 'center',
    //   },
    //   footerItem1Hover: {
    //     textDecoration: 'none',
    //     color: '#48976a',
    //   },
    //   footerItem1Focus: {
    //     outline: '0',
    //   },
    //   footerItem2: {
    //     background: 'rgba(49, 49, 54, 0.993)',
    //     color: 'rgb(190, 190, 190)',
    //     margin: '1px',
    //     fontSize: '15px',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    //   footerItem3: {
    //     fontSize: '20px',
    //     background: '#292a30',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    //   footerItem3Hover: {
    //     backgroundColor: '#000000',
    //     transition: '0.4s',
    //   },
    //   footerItem4: {
    //     fontSize: '20px',
    //     background: '#25252b',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    //   footerItem4Hover: {
    //     backgroundColor: '#4267b2',
    //     transition: '0.4s',
    //   },
    //   footerItem5: {
    //     fontSize: '20px',
    //     background: '#202025',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    //   footerItem5Hover: {
    //     backgroundColor: '#da0e0e',
    //     transition: '0.4s',
    //   },
    // };

    return (
      <div style={styles.bdy}>
      <div style={styles.servicePage}>
        <div style={styles.frame1}>
          <h1 style={styles.heading}>Beast Free Home Appliance Service Center</h1>
          <input type="text" placeholder="Search" style={styles.searchBar} />
        </div>
        <div style={styles.frame2}>

        <div style={styles.box,{backgroundImage: `url(${backgroundImageUrls[0]})`}}>
            <div style={styles.boxContent}>
              <div style={styles.boxButtons}>
                <button>Preview</button>
              </div>
            </div>
            <div style={{ width: '80%', marginTop: '10px', paddingTop: '10px' }}>
              AC repair And Services
            </div>
          </div>
          <div style={styles.box,{backgroundImage: `url(${backgroundImageUrls[1]})`}}>
            <div style={styles.boxContent}>
              <div style={styles.boxButtons}>
                <button>Preview</button>
              </div>
            </div>
            <div style={{ width: '80%', marginTop: '10px', paddingTop: '10px' }}>
              DTH TV Broadcast Service Provider
            </div>
          </div>
          <div style={styles.box,{backgroundImage: `url(${backgroundImageUrls[2]})`}}>
            <div style={styles.boxContent}>
              <div style={styles.boxButtons}>
                <button>Preview</button>
              </div>
            </div>
            <div style={{ width: '80%', marginTop: '10px', paddingTop: '10px' }}>
              Electrician|Home Appliaiance
            </div>
          </div>
          <div style={styles.box,{backgroundImage: `url(${backgroundImageUrls[3]})`}}>
            <div style={styles.boxContent}>
              <div style={styles.boxButtons}>
                <button>Preview</button>
              </div>
            </div>
            <div style={{ width: '80%', borderTop: '1px solid #ccc', marginTop: '10px', paddingTop: '10px' }}>
              Home Appliance Repair Services
            </div>
          </div>
          <div style={styles.box,{backgroundImage: `url(${backgroundImageUrls[4]})`}}>
            <div style={styles.boxContent}>
              <div style={styles.boxButtons}>
                <button>Preview</button>
              </div>
            </div>
            <div style={{ width: '80%', marginTop: '10px', paddingTop: '10px' }}>
              Home And Kitchen Appliance 
            </div>
          </div>
          <div style={styles.box,{backgroundImage: `url(${backgroundImageUrls[5]})`}}>
            <div style={styles.boxContent}>
              <div style={styles.boxButtons}>
                <button>Preview</button>
              </div>
            </div>
            <div style={{ width: '80%', marginTop: '10px', paddingTop: '10px' }}>
              CCTV|Home Appliance Service
            </div>
          </div>
          <div style={styles.box,{backgroundImage: `url(${backgroundImageUrls[6]})`}}>
            <div style={styles.boxContent}>
              <div style={styles.boxButtons}>
                <button>Preview</button>
              </div>
            </div>
            <div style={{ width: '80%', marginTop: '10px', paddingTop: '10px' }}>
              Computer,Laptos Repair Services
            </div>
          </div>
          <div style={styles.box,{backgroundImage: `url(${backgroundImageUrls[7]})`}}>
            <div style={styles.boxContent}>
              <div style={styles.boxButtons}>
                <button>Preview</button>
              </div>
            </div>
            <div style={{ width: '80%', marginTop: '10px', paddingTop: '10px' }}>
              Battery Dealers
            </div>
          </div>
          <div style={styles.box,{backgroundImage: `url(${backgroundImageUrls[8]})`}}>
            <div style={styles.boxContent}>
              <div style={styles.boxButtons}>
                <button>Preview</button>
              </div>
            </div>
            <div style={{ width: '80%', marginTop: '10px', paddingTop: '10px' }}>
              Plumber
            </div>
          </div>



          {/* Repeat the above code to create additional boxes */}
        </div>
        <div style={styles.frame3}>
          
        <footer style={styles.footer}>
        <div style={styles.footerDistributed}>
          <div style={styles.footerLeft}>
            <h3 style={styles.footerH3}>
              Sagar<span style={styles.footerH3Span}>Developer</span>
            </h3>

            <p style={styles.footerLinks}>
              <a href="#" style={styles.footerLinksA}>Home</a>
              |
              <a href="#" style={styles.footerLinksA}>About</a>
              |
              <a href="#" style={styles.footerLinksA}>Contact</a>
              |
              <a href="#" style={styles.footerLinksA}>Blog</a>
            </p>

            <p style={styles.footerCompanyName}>
              Copyright © 2021 <strong>SagarDeveloper</strong>
              All rights reserved
            </p>
          </div>

          <div style={styles.footerCenter}>
            <div>
              <i className="fa fa-map-marker" style={styles.footerCenterI}></i>
              <p style={styles.footerCenterP}><span>Ghaziabad</span> Delhi</p>
            </div>

            <div>
              <i className="fa fa-phone" style={styles.footerCenterI}></i>
              <p style={styles.footerCenterP}>+91 74**9**258</p>
            </div>
            <div>
              <i className="fa fa-envelope" style={styles.footerCenterI}></i>
              <p style={styles.footerCenterP}>
                <a href="mailto:sagar00001.co@gmail.com" style={styles.footerCenterPA}>xyz@gmail.com</a>
              </p>
            </div>
          </div>
          <div style={styles.footerRight}>
            <p style={styles.footerCompanyAbout}>
              <span style={styles.footerCompanyAboutSpan}>About the company</span>
              <strong>Sagar Developer</strong> is a Youtube channel where you can find more creative CSS Animations and Effects along with HTML, JavaScript, and Projects using C/C++.
            </p>
            <div style={styles.footerIcons}>
              <a href="#"><i className="fa fa-facebook" style={styles.footerIconsA}></i></a>
              <a href="#"><i className="fa fa-instagram" style={styles.footerIconsA}></i></a>
              <a href="#"><i className="fa fa-linkedin" style={styles.footerIconsA}></i></a>
              <a href="#"><i className="fa fa-twitter" style={styles.footerIconsA}></i></a>
              <a href="#"><i className="fa fa-youtube" style={styles.footerIconsA}></i></a>
            </div>
          </div>
        </div>
      </footer>

        </div>
      </div>
      </div>
    );
  };

  export default ServicePage;
