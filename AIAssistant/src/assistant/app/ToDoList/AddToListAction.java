package assistant.app.ToDoList;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

import assistant.Assistant;
import assistant.app.Action;


public class AddToListAction extends Action{
	String[] keywords = {"list", "do", "add", "remind", "to", "me", "my"};
	double[] scores = {3, 1, 2, 2, 0.5, 0.2, 0.2};
	
	public void doCommand(String command) {
//		Assistant assistant = Assistant.getInstance();
		String item = "";
	    List<String> keywordsList = Arrays.asList(keywords);
		for(String word : command.split(" ")) {
		      if(!keywordsList.contains(word)) {
		        item += word + " ";
		      }
		}
	
		ToDoListApp.toDoList.add(item);
		
//		assistant.displayItem("Add item: "+item);
//		assistant.displayItem("List: "+ToDoListApp.toDoList);
		
		System.out.println("Add item: "+item);
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
