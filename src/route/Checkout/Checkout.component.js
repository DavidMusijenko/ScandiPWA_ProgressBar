// no need to import React - it is automatically imported
// library imports first
// absolute imports from other directories are second
import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";
import ProgressBar from "Component/ProgressBar.component";

// we use the SourceComponent alias to explicitly import from the parent theme
// (if we would use Component/ProductCard/... instead, we would be trying to import
// the current file, which would result in an error)
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";

// relative imports from the same directory are last
import "./Checkout.style.scss";

// you should always copy over the namespace declaration when overriding an existing class
// to avoid breaking plugins
/** @namespace Route/Checkout/Component */

export class Checkout extends SourceCheckout {
  render() {
    return (
      <main block="Checkout">
        <ProgressBar
          allSteps={Object.keys(this.stepMap)}
          currentStep={this.props.checkoutStep}
        />
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
