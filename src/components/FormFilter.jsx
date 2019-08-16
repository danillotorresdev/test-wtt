import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookModal from './BookModal'
import { NotificationContainer, NotificationManager } from 'react-notifications';

import ActionCreators from '../redux/actionCreators';

class FormFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: 0,
      showModal: null,
    };

    this.handleModal = this.handleModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    const { loadBooks } = this.props;
    loadBooks();
  }

  handleModal(index) {
    this.setState({
      modalActive: index,
      showModal: 'show',
    });
  }

  hideModal() {
    console.log("funcionou")
    this.setState({
      modalActive: 0,
      showModal: null,
    });
  }

  render() {
    const { books } = this.props;
    const { modalActive, showModal } = this.state;
    let modalBookTitle;
    let modalBookInfo;
    let modalBookPrice;
    let modalBookImage;
    if (books.data) {
      if (books.data[modalActive]) {
        modalBookTitle = books.data[modalActive].title;
        modalBookInfo = books.data[modalActive].info;
        modalBookPrice = books.data[modalActive].price;
        modalBookImage = books.data[modalActive].image;
      }
    }
    return (
      <>
        <div className="container pt-4">
          <div className="row">
            {books.data.map(
              (book, index) => (
                <div role="presentation" key={book.id} className="col-md-3" onClick={() => this.handleModal(index)}>
                  <div className="card border-0" style={{ width: '100%' }}>
                    <img src={book.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                    </div>
                  </div>
                </div>
              ),
            )}

          </div>
          <NotificationContainer />
        </div>
        <BookModal
          modalBookInfo={modalBookInfo}
          modalBookImage={modalBookImage}
          showModal={showModal}
          modalBookPrice={modalBookPrice}
          modalBookTitle={modalBookTitle}
          hideModal={() => this.hideModal()}

        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: () => dispatch(ActionCreators.getBooksRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);
