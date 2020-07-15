import React from 'react'

function Card(props) {
    const dragStart = e => {
       
        const target = e.target;
        const card_id = e.dataTransfer.setData('card_id', target.id)

        setTimeout(() => {
            target.style.display='is-dragging';
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
        
    }

    return (
        <div id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Card
