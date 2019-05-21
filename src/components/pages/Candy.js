import React, { Component } from 'react';

class Candy extends Component {
  state = {
    loading: true
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }

  render() {

    const { loading } = this.state

    if (loading) return <div><img src="https://cdn.dribbble.com/users/484807/screenshots/4421616/kinsella_jared_chemistryloading_2017-08-09.gif"></img></div>
    return (
      <div>
        <img src="https://media.giphy.com/media/Qrg53V9x9Ia08/giphy.gif"></img>
      </div>);
  }
}

export default Candy;