package co.com.sofka.crud;


import co.com.sofka.crud.Entities.Todo;
import co.com.sofka.crud.Services.TodoService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CrudApplicationTests {

    @Test
    void contextLoads() {
    }


    @Test
    @DisplayName("Probando funcion validar")
    public void validar() {
        Todo todo = new Todo();
        todo.setId(100L);
        todo.setName("Tarea prueba");
        todo.setCompleted(false);
        todo.setGroupListId(null);


        TodoService todoService = new TodoService();


        assertEquals(todoService.validate(todo), true);
    }

	@Test
	@DisplayName("Probando funcion validar con false")
	public void validarFalse() {
		Todo todo = new Todo();
		todo.setId(100L);
		todo.setName("in");
		todo.setCompleted(false);
		todo.setGroupListId(null);


		TodoService todoService = new TodoService();


		assertEquals(todoService.validate(todo), false);
	}


}
