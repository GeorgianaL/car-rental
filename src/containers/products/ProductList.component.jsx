import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/productActions";

import './style.scss';

class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;
    console.log(this.props);
    if (error) {
      return <div>{error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="products">
      <ul>
        {products.map(product =>
          <li key={product.id}>{product.brand}</li>
        )}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductList);
