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

    const styles =
    {
      backgroundImage: 'url("./img/candy.jpg")',
      backgroundColor: '#cccccc',
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '-1',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }


    if (loading) return <div><img src="https://cdn.dribbble.com/users/484807/screenshots/4421616/kinsella_jared_chemistryloading_2017-08-09.gif"></img></div >
    return (
      <div style={styles}>
      </div>);
  }
}

export default Candy;