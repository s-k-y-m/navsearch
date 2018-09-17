import React from 'react';
import NavBar from './NavBar.jsx';
import DropDownDetails from './DropdownDetails.jsx';

var fakeLocations = [
  {
    city: 'San Francisco',
    state: 'California'
  },
  {
    city: 'Los Angeles',
    state: 'California'
  },
  {
    city: 'Las Vegas',
    state: 'Nevada'
  },
  {
    city: 'Atlanta',
    state: 'Georgia'
  },
  {
    city: 'Austin',
    state: 'Texas'
  },
  {
    city: 'Baltimore',
    state: 'Maryland'
  }
];

const App = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <NavBar />
        </div>
      </div>
      <div className="dropDownContainer">
        <div className="dropDownLeftContainer" />
        <div className="dropDownDetails">
          {fakeLocations.map(location => {
            return <DropDownDetails location={location} />;
          })}
        </div>
      </div>
      <div>
        <h1 className="placeholder" />
      </div>
    </React.Fragment>
  );
};

export default App;
