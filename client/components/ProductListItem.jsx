import React from 'react';

export default class ProductItemList extends React.Component {
  render() {
    return (
      <div className="text-center cardMargin">
        <div className="row">

          <div className="col">
            <div className="card">
              <img
                src={this.props.image}
                className="card-img-top"
                alt={this.props.name}
              />
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text"><small className="text-muted">{this.props.price}</small></p>
              <div className='container'>
                <p className="card-text">{this.props.shortDesc}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}