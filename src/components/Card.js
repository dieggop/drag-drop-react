import React from 'react'
const draggingStyle = {
    opacity: 0.25,
};
function Card(props) {
    const [isDragging, setIsDragging] = React.useState(false);
    
    const dragStart = e => {
        setIsDragging(true);
        
        e.dataTransfer.setData('card_id',props.id)


         document.getElementById(props.id).classList.add('is-dragging');
    }
   
    const dragOver = ev => {
        ev.stopPropagation();
        ev.dataTransfer.dropEffect = props.dropEffect;
    }
    const dragEnd = () => {
        setIsDragging(false)
        document.getElementById(props.id).classList.remove('is-dragging');
    };
    return (
        <div style={isDragging ? draggingStyle : {}}  id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDragEnd={dragEnd}
        
        >
            {props.children}
        </div>
    )
}

export default Card
