package assistant.app.Date;

import java.util.Arrays;
import java.util.List;

import assistant.app.Action;
import assistant.app.App;

public class DateApp extends App{
	public List<Action> getActions(){
		return Arrays.asList(new GetDateAction());
	}
}
