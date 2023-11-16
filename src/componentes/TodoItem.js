import React from 'react'

function TodoItem({todo}) {

  const getStyle = () => {

    return {

        textDecoration: todo.completed ? 'line-through' : 'none',
        margin: '20px' ,
        border: '1px solid #ffffff' ,
        backgroundColor: '#CCF7E3'
    }
  }
 
  return (
    <div style={getStyle()}>
      {
        todo.task
      }
    </div>
  )
}

export default TodoItem;