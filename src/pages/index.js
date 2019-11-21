import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
// import pic3 from '../assets/images/pic03.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>
          I am a code slinging
          <br />
          burger enthusiast
          <br />
          with a flare for the arts
        </h2>
      </header>

      <div className="box alt container" >
        <section className="feature left" >
          <a href="//chartsmart.us" className="image icon fa-signal" >
            <img src={pic1} alt="" 
            style={{ display:"block", marginLeft:"auto", marginTop:"-5px", marginRight:"-97px", width:"120%", padding:"5px 0px", background:"transparent"}}
             />
          </a>
          <div className="content" style={{ textAlign:"right"}}>
            <h3 style={{ marginTop:"-60px"}}>Chart Smart - Patient Portal</h3>
            <p>
              The purpose of this group project was to create a patient portal 
              that would provide easy to read access to their test results.<br /> 
              - Group Project with a team of four.<br />
              - I learned more about data visualization and working with Chartjs.<br />
              - Learned how important it is to work clean and delegate wisely.
            </p>
          </div>
        </section>
        {/* <section className="feature right">
          <a href="//165.22.58.22:4500" className="image icon fa-code">
            <img src={pic2} alt="" 
            style={{ display:"block", marginLeft:"auto", marginRight:"auto", width:"100%", padding:"5px 0px", background:"transparent"}}
             />
          </a>
          <div className="content" style={{ textAlign:"left"}}>
            <h3 style={{ marginTop:"-30px"}}>Costume Shop Dashboard</h3>
            <p>
              This project was inspired by a costume shop manager; she needed a solution to 
              her shops ever growing workload.<br />
              - I learned how to implement styled components, Chartjs, Material-UI, build authentication, organize and use a database with postgreSQL, and much more.
              <br />- Planning well saves so much time in coding.
              
              
            </p>
          </div>
        </section> */}
        {/* <section className="feature left">
          <a href="/#" className="image icon fa-mobile">
            <img src={pic3} alt="" style={{ display:"block", marginLeft:"auto", marginRight:"-97px", width:"120%", background:"transparent"}} />
          </a>
          <div className="content">
            <h3>The Third Thing</h3>
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
            </p>
          </div>
        </section> */}
      </div>

      <footer className="major container medium">
        <h3>Work Experience</h3>
        <p>
          There is also elements page in this template. Click below button to
          check
        </p>
        <ul className="actions special">
          <li>
            <Link to="/Elements" className="button">
              View Resume
            </Link>
          </li>
        </ul>
      </footer>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
