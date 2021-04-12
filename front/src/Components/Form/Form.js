import React, { useContext, useRef, useState } from 'react';
import { Store } from '../Context/StoreProvider';
import HOST_API from '../API/Api';
import './Form.css';

const Form = () => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    if (state.name !== undefined && state.name !== '') {
      if (state.name.length > 3) {
        const request = {
          name: state.name,
          id: null,
          completed: false,
        };

        fetch(HOST_API + '/todo', {
          method: 'POST',
          body: JSON.stringify(request),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((todo) => {
            dispatch({ type: 'add-item', item: todo });
            setState({ name: '' });
            formRef.current.reset();
          });
      } else {
        alert('Este campo debe de tener mas de 3 caracteres');
      }
    } else {
      alert('Este campo no puede estar vacio');
    }
  };

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted,
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
        setState({ name: '' });
        formRef.current.reset();
      });
  };

  const onChange = (e) => {
    setState({ ...state, name: e.target.value });
  };

  return (
    <form ref={formRef} className='form_container'>
      <input
        type='text'
        name='name'
        placeholder='¿Qué piensas hacer hoy?'
        defaultValue={item.name}
        onChange={onChange}
      />
      {item.id && <button onClick={onEdit}>Actualizar</button>}
      {!item.id && <button onClick={onAdd}>Crear</button>}
    </form>
  );
};

export default Form;
