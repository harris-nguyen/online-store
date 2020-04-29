import React from 'react';
import Hover from './Hover';

export default class ProductItemList extends React.Component {
  render() {
    return (
      <div className="col-6 mb-5 zoom pointer">
        <Hover>
          {hovered => (
            <div>
              {hovered ? (
                <div
                  onClick={() =>
                    this.props.setView('details', {
                      productId: this.props.productId
                    })
                  }
                >
                  <div className="container text-center boxShadow image thumbnail">
                    <div>
                      <img
                        src={this.props.image}
                        className="round w-100 p-3 image img hoverFade"
                        alt={this.props.name}
                      />
                      <div className="caption fontSizeTest1">
                        <div className="">{this.props.name}</div>
                        <div className="">{`$${this.props.price}`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() =>
                    this.props.setView('details', {
                      productId: this.props.productId
                    })
                  }
                >
                  <div className="container text-center boxShadow">
                    <img
                      src={this.props.image}
                      className="round w-100 p-3 image"
                      alt={this.props.name}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </Hover>
      </div>
    );
  }
}

//         <h5 className="card-title">{this.props.name}</h5>
//           <small className="text-muted">{`$${this.props.price}`}</small>
//           <p className="card-text">{this.props.shortDesc}</p>
