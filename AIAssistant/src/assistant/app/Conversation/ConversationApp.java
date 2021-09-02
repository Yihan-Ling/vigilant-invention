package assistant.app.Conversation;

import java.util.Arrays;
import java.util.List;

import assistant.app.Action;
import assistant.app.App;

public class ConversationApp extends App{
	public List<Action> getActions(){
		return Arrays.asList(new ConverseAction());
	}

}
