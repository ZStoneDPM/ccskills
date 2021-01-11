import React from 'react';
import ReactDOM from 'react-dom';
import '../components/recipes/semantic.css';


const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className=""style={{width: '400px'}}>
      <div
        onClick={e => e.stopPropagation()}
        className="ui  modal  active"
        style={{width: window.visualViewport.width * .5,height: window.visualViewport.height * .5, margin: 'auto'}}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;

