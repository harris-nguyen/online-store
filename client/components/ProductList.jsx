import React from 'react';
import ProductItemList from './ProductListItem';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          products: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const productData = this.state.products;
    const data = productData.map((e, index) => {
      return (
        <ProductItemList
          key={index}
          name={e.name}
          price={(e.price / 100).toFixed(2)}
          image={e.image}
          shortDesc={e.shortDescription}
        />
      );
    });
    return (
      <div className="">
        <div className="cardMargin">{data}</div>
      </div>
    );
  }
}
