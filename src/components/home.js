import React from 'react';
import NavBar from './nav';

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <NavBar />
        <div className="home-text">
          <p>
            The history of mathematics deals with the origin of discoveries in mathematics and
            the mathematical methods and notation
            of the past. Before the modern age and the worldwide spread of knowledge, written
            examples of new mathematical
            developments have come to light only in a few locales. From 3000 BC the
            Mesopotamian states of Sumer, Akkad and Assyria, followed closely by Ancient Egypt
            and the Levantine state of Ebla began using arithmetic, algebra and geometry for
            purposes of taxation, commerce, trade and also in the patterns in nature, the field
            of astronomy and to record time and formulate calendars.
          </p>
          <p className="source">
            <a
              href="https://en.wikipedia.org/wiki/History_of_mathematics"
            >
              Source: Wikipedia
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default Home;
