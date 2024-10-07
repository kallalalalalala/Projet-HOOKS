import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Amadou Tidiane Sow',
        bio: 'Software developer with a passion for coding and learning new technologies.',
        imgSrc: '',
        profession: 'Web Developer',
      },
      shows: false,
      mountedTime: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  // Method to toggle the 'shows' state
  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  // Lifecycle method to start the interval timer when the component is mounted
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000); // Update every second
  }

  // Lifecycle method to clear the timer when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>React Class-based Component Example</h1>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div style={{ marginTop: '20px' }}>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h4>Profession: {person.profession}</h4>
          </div>
        )}

        <div style={{ marginTop: '20px' }}>
          <h4>Time since mounted: {mountedTime} seconds</h4>
        </div>
      </div>
    );
  }
}

export default App;
