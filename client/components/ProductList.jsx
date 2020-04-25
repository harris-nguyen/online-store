import React from 'react';
import ProductItemList from './ProductListItem';
import ClickModal from './ClickModal';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      addModalShow: false
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
    this.setState({ addModalShow: true });
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
    const addModalClose = () => this.setState({ addModalShow: false });
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
        <div className=" text-center">

          <ClickModal show={this.state.addModalShow} onHide={addModalClose} />

        </div>
        <div className="cardMargin">{data}</div>
      </div>
    );
  }
}
