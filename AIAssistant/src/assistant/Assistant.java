package assistant;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import assistant.app.Action;
import assistant.app.App;
import assistant.app.Conversation.ConversationApp;
import assistant.app.Date.DateApp;
import assistant.app.Dictionary.DictionaryApp;
import assistant.app.Time.TimeApp;
import assistant.app.ToDoList.ToDoListApp;

public class Assistant {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		String command =sc.nextLine();
		launch(command);
	}
	public static void launch(String command) {
		App[] apps = getAvailableApps();
		List<Action> actions = new ArrayList<>();
		
		for(App a : apps) {
			actions.addAll(a.getActions());
		}
		
		Action bestAction=null;
		double bestActionScore =0;
		
		for (Action action : actions) {
			double actionScore = action.getLikelihood(command);
			if(actionScore>bestActionScore) {
				bestAction = action;
				bestActionScore = actionScore;
			}
		}
		if(bestAction==null) {
			System.out.println("Sorry, I can't find a best action to do with your command.");
			Scanner sc=new Scanner(System.in);
			command = sc.nextLine();
			launch(command);
		}
		//test
		else {
			
			System.out.println(command + ", best action: " + bestAction.getClass() + ", score: " + bestActionScore);
			
			if(bestActionScore >0.5) {
				try {
					bestAction.doCommand(command);
				}
				catch(Exception e) {
					System.out.println("Sorry, there was an error while runing your command. Detail: "+e);
				}
			}
			else {
				System.out.println("Sorry, I am still learning, I can't understand you command yet.");
			}
		}

	}

	
	
	public void displayItem(String response) {
		System.out.println(response);
	}
	
	static App[] getAvailableApps(){
	    
	    return new App[]{new ToDoListApp(), new TimeApp(), new DateApp(), new ConversationApp(), new DictionaryApp()};
	}
	
//	void IniAppActions() {
//		
//	}

}
