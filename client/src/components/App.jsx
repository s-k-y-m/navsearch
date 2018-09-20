import React from "react";
import NavBar from "./NavBar.jsx";
import DropDownDetails from "./DropdownDetails.jsx";
import styles from "../styles/app.css";
// import styles from '../styles/dropdown.css';

var fakeLocations = [
  {
    city: "San Francisco",
    state: "California"
  },
  {
    city: "Los Angeles",
    state: "California"
  },
  {
    city: "Las Vegas",
    state: "Nevada"
  },
  {
    city: "Atlanta",
    state: "Georgia"
  },
  {
    city: "Austin",
    state: "Texas"
  },
  {
    city: "Baltimore",
    state: "Maryland"
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nearest: "San Francisco",
      displayDropDown: false
    };
  }

  displayDropDown() {
    var count = 0;

    return (
      <React.Fragment>
        <div className={styles.dropDownContainer}>
          {/* <div className={styles.dropDownLeftContainer} /> */}
          <div className={styles.dropDownDetails}>
            <div className={styles.selectCity}>- Select A City -</div>
            {fakeLocations.map(location => {
              count++;
              return (
                <DropDownDetails
                  location={location}
                  nearest={this.state.nearest}
                  id={count}
                  className={styles.dropDownDetailsItem}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h1 className={styles.placeholder} />
        </div>
      </React.Fragment>
    );
  }

  handleDropDownClicked() {
    this.setState({
      displayDropDown: !this.state.displayDropDown
    });
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
