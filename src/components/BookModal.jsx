import React, { Component } from 'react';

class BookModal extends Component {
  constructor(props) {
    super(props);

    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.props.hideModal();
  }

  render() {
    const {
      modalBookInfo,
      modalBookImage,
      showModal,
      modalBookTitle,
      modalBookPrice,
    } = this.props;

    return (
      <div className={`bookModal bookModal--${showModal}`}>
        <div className="bookModal--box">
          <span role="presentation" className="bookModal--close" onClick={this.hideModal}>x</span>
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid bookModal--img" src={modalBookImage} alt="" />
            </div>
            <div className="col-md-6">
              <div className="bookModal--info h-100 d-flex flex-column justify-content-between">
                <div>
                  <h3>{modalBookTitle}</h3>
                  <p className="">{modalBookInfo}</p>
                </div>
                <div className="d-flex align-items-center justify-content-around mb-4">
                  <span className="bookModal--price">
                    R$
                  {modalBookPrice}
                  </span>
                  <div className="bookModall--cart">
                    <button type="button" className="btn btn-primary">Adicionar ao carrinho</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookModal;
