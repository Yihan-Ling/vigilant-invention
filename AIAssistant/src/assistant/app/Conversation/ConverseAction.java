package assistant.app.Conversation;

import java.util.Scanner;

import assistant.Assistant;
import assistant.app.Action;

public class ConverseAction extends Action{
	String[] keywords = {"hello", "hi", "what is your name", "bye", "good bye", "goodbye", "good-bye", "farewell", "hey", "how are you", "good", "awesome", "fine", "thank you", "thanks"};
	double[] scores = {3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3,3};
	
	public void doCommand(String command) {
		boolean end = false;
		String response="";
		int a = 0;
		for(int i=0; i<keywords.length; i++) {
			if(command.contains(keywords[i])) {
				a=i;
			}
		}
		if(a==0||a==1||a==4) {
			response="Hello!";
		}
		else if(a==2) {
			response="My name does not matter, what matters is how well I can serve you. ";
		}
		else if(a==9) {
			response="I am feeling like a machine, how are you?";
		}
		else if(a==10||a==11||a==12) {
			response="I am glad to hear that!";
		}
		else if(a==13||a==14) {
			response="You are welcome!";
		}
		else {
			response="Bye!";
			end=true;
		}
		
		
		System.out.println(response);
		
		if(end) {
			
		}
		else {
			Scanner sc=new Scanner(System.in);
			command = sc.nextLine();
			Assistant.launch(command);
		}
		
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
