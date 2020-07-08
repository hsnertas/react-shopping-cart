import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./Notfound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FromDemo2 from "./FormDemo2";
import FormDemo2 from "./FormDemo2";
class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
  addToChart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + "adeed to cart", 0.8);
  };

  removeFromChart = (product) => {
    let newChart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newChart });
    alertify.error(product.productName + "removed from cart", 0.8);
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "Product List", x: "got" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromChart={this.removeFromChart} />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                    {...props}
                      products={this.state.products}
                      addToChart={this.addToChart}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  )}
                />
                <Route exact path="/cart"    render={(props) => (
                    <CartList
                    {...props}
                    cart={this.state.cart}
                    removeFromChart={this.removeFromChart}
                    />
                  )}
              
                />
                <Route exact path="/form1" render={(props) => (
                    <FormDemo1
                    {...props}
                    
                    />
                  )}/>
                   <Route exact path="/form2" component={FormDemo2}/>
                  
                <Route component={NotFound} />
              </Switch> 
             
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
