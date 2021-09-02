package assistant.app.Dictionary;


import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

import javax.net.ssl.HttpsURLConnection;

import assistant.Assistant;
import assistant.app.Action;

public class GetDefinitionAction extends Action{
	String[] keywords = {"definition", "mean", "what", "does", "of", "is", "the", "do", "/a"};
	double[] scores = {5, 3, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2, 1};
	
	public void doCommand(String command) {
		
		String word = "";
	    List<String> keywordsList = Arrays.asList(keywords);
		for(String w : command.split(" ")) {
		      if(!keywordsList.contains(w)) {
		        word += w;
		      }
		}
		
		System.out.println("Finding definition of "+word);
		
		
		final String language = "en-gb";
        final String fields = "definitions,examples";
        final String strictMatch = "false";
        final String word_id = word.toLowerCase();
        String call= "https://od-api.oxforddictionaries.com/api/v2/entries/" + language + "/" + word_id + "?" + "fields=" + fields + "&strictMatch=" + strictMatch;

        final String app_id  = "bf9ffb96";
        final String app_key  = "b4d41907c948364db8906b21b6cda6f0";
        try {
            URL url = new URL(call);
            HttpsURLConnection urlConnection = (HttpsURLConnection) url.openConnection();
            urlConnection.setRequestProperty("Accept","application/json");
            urlConnection.setRequestProperty("app_id",app_id);
            urlConnection.setRequestProperty("app_key",app_key);

            // read the output from the server
            BufferedReader reader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
            StringBuilder stringBuilder = new StringBuilder();
            if(command.contains("/a")) {
            	String line = null;
                while ((line = reader.readLine()) != null) {
                		stringBuilder.append(line + "\n");
                }
            }
            else {
            	String line = null;
	            while ((line = reader.readLine()) != null) {
	            	if(line.contains("definitions")) {
	            		stringBuilder.append(line + "\n");
	            		line = reader.readLine();
	            		if(line!=null) {
	            			stringBuilder.append(line+"\n");
	            		}
	            	}
	 
	            }
            }
            
            System.out.println(stringBuilder.toString());

        }
        catch (FileNotFoundException f) {
        	f.printStackTrace();
        	System.out.println(f.toString());
        	System.out.println("Sorry, I don't understand your word. Try again with no punctuation marks or spell the word correctly.");
        }
        catch (Exception e) {
            e.printStackTrace();
            System.out.println( e.toString());
        }
        
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
