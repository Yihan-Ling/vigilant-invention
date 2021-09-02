package assistant.app.Photography;

import java.util.Arrays;
import java.util.List;

import assistant.app.Action;
import assistant.app.App;

public class PhotographyApp extends App{
	public List<Action> getActions(){
		return Arrays.asList(new GetPhotographyAction());
	}
}
