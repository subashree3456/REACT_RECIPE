import React from 'react';
import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal-inner">
        <div className="header">
      <h2>Carrot Cake</h2>
      <button className="close-modal">X</button>
        </div>
<div className="modal-content">
<div className="ingredients">
<small>
2 cups of milk.Carrots. 2 cups of milk.Carrots. 2 cups of milk.Carrots. 2 cups of milk.Carrots
2 cups of milk.Carrots. 2 cups of milk.Carrots. 2 cups of milk.Carrots. 2 cups of milk.Carrots
</small>
</div>
<table>
    <thead>
        <tr>
            <th>Ingredient</th>
            <th>Calories</th>
        </tr>
    </thead>
    
</table>
 </div>
      </div>
    </div>
  )
}

export default Modal
