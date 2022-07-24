/* TODO

1. animate 0 to 1st step

- if previous props undefined? => renderEmptyBar() .then renderProgressBar()

2. put an object under each step to make the progress bar appear rounded OR
subtract some value from a $progress and make the line rounded itself

Questions:

why use block if className works?

*/

// no need to import React - it is automatically imported

// library imports first
import { PureComponent } from "react";

// absolute imports from other directories are second
// relative imports from the same directory are last
import "./ProgressBar.style.scss";

// namespaces are necessary for the plugin mechanism to work
/** @namespace Component/ProgressBar/Component */
export class ProgressBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  calculateProgress() {
    return (
      // progress: (100 / (allSteps.length + 1)) * (index + 1)
      (100 / this.props.allSteps.length) *
      (this.props.allSteps.indexOf(this.props.currentStep) + 1)
    );
  }

  renderProgressBar() {
    const progress = this.calculateProgress();
    const state = `${progress}%`;
    return (
      <div>
        <div style={{ width: state }} className="progress-bar__line"></div>
      </div>
    );
  }

  renderEmptyBar() {
    return (
      <div>
        <div style={{ width: 0 }} className="progress-bar__line"></div>
      </div>
    );
  }

  renderSteps() {
    const stepsArr = this.props.allSteps.slice(0, -1);
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
      <div className="progress-bar__steps-container">
        {stepsArr.map((el, i) => {
          const isActive =
            i === this.props.allSteps.indexOf(this.props.currentStep);
          const isCompleted =
            i < this.props.allSteps.indexOf(this.props.currentStep);
          const stepNumber = i + 1;
          const notUglyStepName = capitalizeFirstLetter(el.slice(0, -5));

          return (
            <div key={el} className="progress-bar__step">
              <div
                className={
                  isActive
                    ? "progress-bar__circle progress-bar__circle--active"
                    : isCompleted
                    ? "progress-bar__circle progress-bar__circle--completed"
                    : "progress-bar__circle progress-bar__circle--not-active"
                }
              ></div>
              <div className="progress-bar__circle-number">{stepNumber}</div>
              <div className="progress-bar__step-name">{notUglyStepName}</div>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    //  console.log(this.props.currentStep);
    //  console.log(this.state.progress);
    return (
      <div>
        <div className="progress-bar__wrapper">
          {this.renderProgressBar()}
          {this.renderSteps()}
        </div>
      </div>
    );
  }
}

export default ProgressBar;
