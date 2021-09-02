package assistant.app.Dictionary;

import java.util.Arrays;
import java.util.List;

import assistant.app.Action;
import assistant.app.App;

public class DictionaryApp extends App{
	public List<Action> getActions(){
		return Arrays.asList(new GetDefinitionAction());
	}
}
