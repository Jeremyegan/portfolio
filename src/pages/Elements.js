import React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/Layout';
import resume from '../assets/images/Resume.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="box container">
        <header>
          <h2>Resume</h2>
        </header>
        <section>
          <img src={resume} alt="" style={{ width:"100%" }} />

          {/* 
          <header>
            <h3>Paragraph</h3>
            <p>This is the subtitle for this particular heading</p>
          </header>
          <p>
            Phasellus nisl nisl, varius id <sup>porttitor sed pellentesque</sup>{' '}
            ac orci. Pellentesque habitant <strong>strong</strong> tristique{' '}
            <b>bold</b> et netus <i>italic</i> malesuada <em>emphasized</em> ac
            turpis egestas. Morbi leo suscipit ut. Praesent{' '}
            <sub>id turpis vitae</sub> turpis pretium ultricies. Vestibulum sit
            amet risus elit.
          </p>
        </section>
        <section>
          <header>
            <h3>Blockquote</h3>
          </header>
          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus.
          </blockquote>
        </section>
        <section>
          <header>
            <h3>Divider</h3>
          </header>
          <p>
            Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis
            enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend
            nisi ornare vel. Praesent nec orci facilisis leo magna. Cras sit
            amet urna eros, id egestas urna. Quisque aliquam tempus euismod.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia.
          </p>
          <hr />
          <p>
            Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis
            enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend
            nisi ornare vel. Praesent nec orci facilisis leo magna. Cras sit
            amet urna eros, id egestas urna. Quisque aliquam tempus euismod.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia.
          </p>
        </section>
        <section>
          <header>
            <h3>Unordered List</h3>
          </header>
          <ul className="default">
            <li>
              Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis
              enim, at viverra ligula. Ut porttitor sagittis lorem, quis
              eleifend nisi ornare vel.
            </li>
            <li>
              Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis
              enim, at viverra ligula. Ut porttitor sagittis lorem, quis
              eleifend nisi ornare vel.
            </li>
            <li>
              Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis
              enim, at viverra ligula. Ut porttitor sagittis lorem, quis
              eleifend nisi ornare vel.
            </li>
            <li>
              Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis
              enim, at viverra ligula. Ut porttitor sagittis lorem, quis
              eleifend nisi ornare vel.
            </li>
          </ul>
        </section>
        <section>
          <header>
            <h3>Ordered List</h3>
          </header>
          <ol className="default">
            <li>
              Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis
              enim, at viverra ligula. Ut porttitor sagittis lorem, quis
              eleifend nisi ornare vel.
            </li>
            <li>
              Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis
              enim, at viverra ligula. Ut porttitor sagittis lorem, quis
              eleifend nisi ornare vel.
            </li>
            <li>
              Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis
              enim, at viverra ligula. Ut porttitor sagittis lorem, quis
              eleifend nisi ornare vel.
            </li>
            <li>
              Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis
              enim, at viverra ligula. Ut porttitor sagittis lorem, quis
              eleifend nisi ornare vel.
            </li>
          </ol>
        </section>
        <section>
          <header>
            <h3>Table</h3>
          </header>
          <div className="table-wrapper">
            <table className="default">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>45815</td>
                  <td>Something</td>
                  <td>
                    Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.
                  </td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>24524</td>
                  <td>Nothing</td>
                  <td>
                    Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.
                  </td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>45815</td>
                  <td>Something</td>
                  <td>
                    Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.
                  </td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>24524</td>
                  <td>Nothing</td>
                  <td>
                    Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.
                  </td>
                  <td>19.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3"></td>
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
        <section>
          <header>
            <h3>Contacts</h3>
          </header> 
           <form method="post" action="mailto:Jeremyegan1@gmail.com">
            <div className="row">
              <div className="col-6 col-12-mobilep">
                <label htmlFor="name">Name</label>
                <input
                  className="text"
                  type="text"
                  name="name"
                  id="name"
                  defaultValue=""
                  placeholder="John Doe"
                />
              </div>
              <div className="col-6 col-12-mobilep">
                <label htmlFor="email">Email</label>
                <input
                  className="text"
                  type="text"
                  name="email"
                  id="email"
                  defaultValue=""
                  placeholder="johndoe@domain.tld"
                />
              </div>
              <div className="col-12">
                <label htmlFor="subject">Subject</label>
                <input
                  className="text"
                  type="text"
                  name="subject"
                  id="subject"
                  defaultValue=""
                  placeholder="Enter your subject"
                />
              </div>
              <div className="col-12">
                <label htmlFor="subject">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions special">
                  <li>
                    <input type="submit" value="Send" />
                  </li>
                  <li>
                    <input type="reset" value="Reset" className="alt" />
                  </li>
                </ul>
              </div>
            </div>
          </form> */}
        </section><br />
        <section>
        <Link to="/" className="button">
              Home
            </Link>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
