import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error(error, errorInfo);
  }

  handleToggleError = () => {
    this.setState((prevState) => ({ hasError: !prevState.hasError }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h1>Whoops, something went wrong.</h1>
          <p>Please refresh the page to go back to Counter App.</p>
        </div>
      );
    }

    return (
      <div className="container border p-3 position-relative">
        {/* Button to trigger an error */}
        <button
          className="btn btn-danger position-absolute top-0 end-0 m-2"
          onClick={this.handleToggleError}
        >
          Error Boundary
        </button>

        {/* Render children if there's no error */}
        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;
