import React from 'react';
import DeleteModal from './deleteModal';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false
    };

  }

  render() {
    const addModalClose = () =>
      this.setState({ addModalShow: false });
    return (
      <div className="container cardMargin boxShadowCart">
        <div className="row border paddingCard">
          <div className="col">
            <img
              src={this.props.image}
              alt={this.props.name}
              className="card-img-top"
            />
          </div>
          <div className="col align-self-center">
            <h5>{this.props.name}</h5>
            <div className="text-muted">
              ${(this.props.price / 100).toFixed(2)}
            </div>
            <div>{this.props.shortDesc}</div>
            <div>
              <div>
                <span
                  className=""
                  onClick={() => this.setState({ addModalShow: true })}
                >
                  <div type="button" className="btn btn-danger">
                    Delete
                  </div>
                </span>

                <DeleteModal
                  show={this.state.addModalShow}
                  onHide={addModalClose}
                  setView={this.props.setView}
                  onclickDel={this.props.onclickDel}
                  image={this.props.image}
                  name={this.props.name}
                  price={this.props.price}
                  shortDesc={this.props.shortDesc}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <button
//   type="button"
//   className="btn btn-danger"
//   onclickDel={this.props.onclickDel}
// >
//   Delete
// </button>;
