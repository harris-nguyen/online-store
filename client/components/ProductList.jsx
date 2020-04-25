import React from 'react';
import ProductItemList from './ProductListItem';
import ClickModal from './ClickModal';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      addModalShow: true
    };
    this.getProducts = this.getProducts.bind(this);
    this.turnoff = this.turnoff.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  turnoff() {
    this.setState({ addModalShow: false });
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
    // eslint-disable-next-line no-console
    console.log('products', this.state.addModalShow);
    return (
      <div className="container">
        {this.state.addModalShow === true ? (
          <ClickModal
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        ) : null}
        <div className=" text-center"></div>
        <div className="cardMargin">{data}</div>
      </div>
    );
  }
}
