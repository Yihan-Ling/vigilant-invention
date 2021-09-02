package assistant.app.Time;

import java.time.LocalTime;
import java.util.Scanner;

import assistant.Assistant;
import assistant.app.Action;

public class GetTimeAction extends Action{
	String[] keywords = {"time", "clock", "what", "is", "in", "now"};
	double[] scores = {3, 2, 0.2, 0.2, 0.2, 0.5};
	
	public void doCommand(String command) {
		
		String result = LocalTime.now().toString();
		
		System.out.println("Local time: "+ result);
		
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
