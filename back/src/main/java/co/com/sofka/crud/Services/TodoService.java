package co.com.sofka.crud.Services;

import co.com.sofka.crud.Entities.Todo;
import co.com.sofka.crud.Interfaces.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public Iterable<Todo> list() {
        return repository.findAll();
    }

    public boolean validate(Todo todo) {
        return todo.getName()!= "" && todo.getName().length()>3;

    }

    public Todo save(Todo todo) {
        if(validate(todo))
            return repository.save(todo);
        return null;
    }

    public void delete(Long id) {
        repository.delete(get(id));
    }

    public Todo get(Long id) {
        return repository.findById(id).orElseThrow();
    }

}
