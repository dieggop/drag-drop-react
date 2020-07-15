import React from 'react'

function Board(props) {
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id')
        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
      
    }

    const dragOver = e => {
        
        e.preventDefault(); 

        const cardBeingDragged = document.querySelector('.is-dragging')

        e.target.appendChild(cardBeingDragged)
    }
    
    const dragEnter = ev => {
        ev.dataTransfer.dropEffect = props.dropEffect;
        
    };
    return (
        <div id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver} 
        
        onDragEnter={dragEnter}
        >
            {props.children}
        </div>
    )
}

export default Board
