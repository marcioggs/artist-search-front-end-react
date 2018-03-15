import React from 'react';
import ReactDOM from 'react-dom'; 

class Loading extends React.Component {
    constructor(props) {
      super(props);
      this.loading = document.getElementById('loading');
      this.el = document.createElement('span');
    }
  
    componentDidMount() {
      this.loading.appendChild(this.el);
    }
  
    componentWillUnmount() {
      this.loading.removeChild(this.el);
    }
    
    render() {
      return ReactDOM.createPortal(
        <img src='spinner.gif' />,
        this.el,
      );
    }
  }

export default Loading;
