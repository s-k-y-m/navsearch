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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nearest: 'San Francisco',
      displayDropDown: false
    };
  }

  displayDropDown() {
    var count = 0;

    return (
      <React.Fragment>
        <div className="dropDownContainer">
          <div className="dropDownLeftContainer" />
          <div className="dropDownDetails">
            <div className="selectCity">- Select A City -</div>
            {fakeLocations.map(location => {
              count++;
              return (
                <DropDownDetails
                  location={location}
                  nearest={this.state.nearest}
                  id={count}
                  className="dropDownDetailsItem"
                />
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="placeholder" />
        </div>
      </React.Fragment>
    );
  }

  handleDropDownClicked() {
    this.setState({
      displayDropDown: !this.state.displayDropDown
    });
    console.log('Dropdown Clicked');
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <NavBar
              onDropDownClicked={this.handleDropDownClicked.bind(this)}
              displayDropDown={this.state.displayDropDown}
            />
          </div>
        </div>
        {this.state.displayDropDown ? this.displayDropDown() : null}
      </React.Fragment>
    );
  }
}

export default App;
