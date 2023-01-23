import React from 'react'

const Recipe = () => {
  return (
    <div className="recipe">
    <img 
    src="https://media.istockphoto.com/id/1170788512/photo/slice-of-homemade-carrot-cake-with-cream-cheese-frosting-side-view-table-scene-against-white.jpg?s=612x612&w=0&k=20&c=0MisjjRRS9OG1qN1FqwXNnoZfJYkab56u8mZblR06AY="
     alt=""/>
    <div className="recipe-content">
     <h3>Carrot Cake</h3>
     <small>888Kcal</small>
     <div className="ingredients">
<p> 2 cups of milk.Carrots. 2 cups of milk.Carrots. 2 cups of milk.Carrots. 2 cups of milk.Carrots</p>
     </div>
     <div className="nutritions">
<small>Calcium :12mg | pottasium :12mg | vitamin C : 12mg </small>
     </div>

     <button>See More</button>
    </div>
     </div>
  )
}

export default Recipe;
