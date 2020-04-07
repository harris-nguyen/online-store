import React from 'react';
import Header from './Header';
import ProductList from './ProductList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <div className='container'>

        <div>
          <Header text={'Online Store'}/>
        </div>

        <div>
          <ProductList />
        </div>

      </div>
    );
  }
}
