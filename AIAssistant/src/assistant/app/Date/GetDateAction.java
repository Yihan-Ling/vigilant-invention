package assistant.app.Date;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

import assistant.Assistant;
import assistant.app.Action;

public class GetDateAction extends Action{
	String[] keywords = {"date", "day", "what", "is", "it", "now", "today"};
	double[] scores = {3, 2, 0.2, 0.2, 0.2, 0.5, 1};
	
	public void doCommand(String command) {
		
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
		LocalDateTime now = LocalDateTime.now();  
		System.out.println(dtf.format(now)); 
		
		
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
