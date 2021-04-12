import React, { useContext, useEffect } from 'react';
import { Store } from '../Context/StoreProvider';
import HOST_API from '../API/Api';
import './List.css';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

const List = () => {
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const currentList = todo.list;

  useEffect(() => {
    fetch(HOST_API + '/todos')
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: 'update-list', list });
      });
  }, [dispatch]);

  const onDelete = (id) => {
    fetch(HOST_API + '/' + id + '/todo', {
      method: 'DELETE',
    }).then((list) => {
      dispatch({ type: 'delete-item', id });
    });
  };

  const onEdit = (todo) => {
    dispatch({ type: 'edit-item', item: todo });
  };

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
    };
    fetch(HOST_API + '/todo', {
      method: 'PUT',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: 'update-item', item: todo });
      });
  };

  const decorationDone = {
    textDecoration: 'line-through',
  };
  return (
    <div className='general-container'>
      {currentList.map((todo) => {
        return (
          <div key={todo.id} className='list-container'>
            <p style={todo.completed ? decorationDone : {}}>
              {todo.id} {todo.name}
            </p>

            <div className='iscomplete-container'>
              <label htmlFor='check'>Is Completed ?</label>
              <input
                type='checkbox'
                defaultChecked={todo.completed}
                name='check'
                onChange={(event) => onChange(event, todo)}
              />
            </div>
            <div className ='button-container'>
              <button
                className='delete-button'
                onClick={() => onDelete(todo.id)}>
                <DeleteIcon />
              </button>
              <button className='update-button' onClick={() => onEdit(todo)}>
                <UpdateIcon />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
