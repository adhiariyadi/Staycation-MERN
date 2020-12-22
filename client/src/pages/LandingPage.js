import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "templates/Header";
import Hero from "templates/Hero";
import MostPicked from "templates/MostPicked";
import Categories from "templates/Categories";
import Testimony from "templates/Testimony";
import Footer from "templates/Footer";
import { fetchPage } from "store/actions/page";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage)
      this.props.fetchPage(`/landing-page`, "landingPage");
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return null;

    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Testimony data={page.landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
