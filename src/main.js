import './styles/animation.scss';
import './styles/about-me.scss';
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="about-me">
        <body>
          <h1>
            Yohanes Demissie
          </h1>
          <h4>Full-Stack Developer</h4>
          <p className="header-content">
            Seattle, WA<br />
            <a href="https://www.linkedin.com/in/yohanes-demissie/" target="_blank">Contact/Connect via LinkedIn</a>
          </p>
          <br className="header-break"/>
          <h3>
            An aspired innovator and revolutionist implementing critical thinking, team dynamic, creative solutions and full-stack applications; moving society forward and ultimately making our world a better place!
          </h3>
          <h5> A Few Things Yohanes Aspires To Accomplish:
            <ul>
              <li>Create The Most Successful Operating System</li>
              <li>Historic Recognition</li>
              <li>All new innovative technology</li>
              <li>Revolutionary Software</li>
              <li>Accumulate $100,000,000+</li>
              <li> Nobel Peace Prize</li>
            </ul>
          </h5>
          <p className= "p-content" data-hover="JavaScript developer that has built full-stack web applications with server-side Node.js and modern, client-side, front-end libraries and frameworks, including React, implementing best industry practices.
              My higher education focused on positive psychology, implementing positive practices into everyday activities. With a history of visual arts, screen printing, sketching, abstract painting, wardrobe design, manufacturing and various creative practices.
            I intend on applying my critical thinking skills and positive practices attained from my post grad studies and exercise my creative ambitions to challenge the technical industry, and redefine the definition of innovation.">
            <b><div>Yohanes Demissie: </div></b>
          </p>
        </body>
        <footer>
          Technical Tools
          <ol>
            <li>ES6, HTML 5, CSS</li>
            <li>React, Jquery, Vanilla JS</li>
            <li>Atom, VS Code</li>
            <li>Github, Trello(add more organization methods)</li>
            <li>Mongo DB, MySQL</li>
            <li>Testing with Jest</li>
          </ol>
        </footer>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('about-me'));
