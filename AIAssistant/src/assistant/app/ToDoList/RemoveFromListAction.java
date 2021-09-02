package assistant.app.ToDoList;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

import assistant.Assistant;
import assistant.app.Action;

public class RemoveFromListAction extends Action{
	String[] keywords = {"list", "to", "do", "remove", "from", "delete", "my"};
	double[] scores = {3, 1, 1, 2, 0.5, 2, 0.2};
	
	
	public void doCommand(String command) {
//		Assistant assistant = Assistant.getInstance();
		
		String item = "";
	    List<String> keywordsList = Arrays.asList(keywords);
		for(String word : command.split(" ")) {
		      if(!keywordsList.contains(word)) {
		        item += word + " ";
		      }
		}
		
		for (int i=0; i<ToDoListApp.toDoList.size(); i++) {
			if(ToDoListApp.toDoList.get(i).equals(item)) {
				ToDoListApp.toDoList.remove(i);
			}
		}
		
		
		
//		assistant.displayItem("Remove item "+item);
//		assistant.displayItem("List: "+ToDoListApp.toDoList);
		
		System.out.println("Remove item "+item);
		System.out.println("List: "+ToDoListApp.toDoList);
		Scanner sc=new Scanner(System.in);
		command = sc.nextLine();
		Assistant.launch(command);
	}
	
	public double getLikelihood(String command) {
	    double score = 0;
	    for(int i = 0; i < keywords.length; i++) {
	      String keyword = keywords[i];
	      if(command.contains(keyword)) {
	        score += scores[i];
	      }
	    }
	    return score;
	 }
}
