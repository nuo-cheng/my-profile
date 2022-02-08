// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
          <h1>Nuo Cheng</h1>
      </header>
          <h3>Eduation</h3>
          <p>University of San Francisco</p>
          <p>08/2019 - Present</p>


          <h3>Technical Skills</h3>
          <h6>Programming Language</h6>
          <p>Java, Go, Python, JavaScript, C/C++, SQL</p>

          <h6>Frontend Framework/Tool</h6>
          <p>React/React Native, HTML/CSS, JSP, JSTL</p>

          <h6>Backend Framework/Tool</h6>
          <p>PostgreSQL, MySQL, Google Cloud Datastore, Sequelize ORM, Node.js, JSON API, RESTful API, Spring Framework, Google AppEngine, Google DataFlow, AWS SDK, Apache Beam SDK, Xcode, JUnit, PowerMock, Cucumber</p>


          <h3>Project Experience</h3>
          <h6>Hotel Search System  (Full Stack, Java) </h6>
          <p> - Designed and developed a Hotel Search System website using  Java, and used MySQL as the database.<br/>
              - Implemented a reentry read-write lock and implemented multi-threading on processing hotel information.<br/>
              - Implemented Inverted Index and TreeSet Data Structure to make searching more efficient.<br/>
              - Implemented server-side RESTful APIs by overriding  Java servlet for search and filter information operations.<br/>
              - Designed and built frontend using Velocity, HTML, CSS. Implemented list view, grid view, navigation header, etc.<br/>
          </p>
          <br/>
          <br/>
          <h6>Distributed File System (Go)</h6>
          <p>
            - Built a Distributed File System that supports multiple storage nodes responsible for managing data using Go.<br/>
            - Implemented 4 key features: Probabilistic Lookups, Parallel retrievals, Interoperability, Fault Tolerance.<br/>
            - Used Google Protocol Buffers to serialize messages.<br/>
            - Implemented a bloom filter of all the file names stored in the system.<br/>
          </p>


        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
    </div>
  );
}

export default App;
