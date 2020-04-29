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
    const ascendingOrderItems = this.state.products;
    ascendingOrderItems.sort(function (a, b) {
      return a.productId - b.productId || a.name.localeCompare(b.name);
    });

    const productData = this.state.products;
    const data = productData.map((e, index) => {
      return (
        <ProductItemList
          key={index}
          productId={e.productId}
          name={e.name}
          price={(e.price / 100).toFixed(2)}
          image={e.image}
          shortDesc={e.shortDescription}
          setView={this.props.setView}
        />
      );
    });
    return (
      <div className="container">
        <div className="text-center"></div>
        <div className="cardMargin">{data}</div>
        <div className="paddingCard"></div>
      </div>
    );
  }
}
