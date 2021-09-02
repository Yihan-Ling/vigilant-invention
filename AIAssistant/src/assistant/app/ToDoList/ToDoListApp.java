package assistant.app.ToDoList;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import assistant.app.Action;
import assistant.app.App;


public class ToDoListApp extends App{
	static ArrayList<String> toDoList=new ArrayList<>();
	
	public List<Action> getActions(){
		return Arrays.asList(new AddToListAction(), new RemoveFromListAction());
	}
}