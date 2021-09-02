package assistant.app.News;

import java.util.Arrays;
import java.util.List;

import assistant.app.Action;
import assistant.app.App;


public class NewsApp extends App{

	@Override
	public List<Action> getActions() {
		return Arrays.asList(new GetPopularNewsAction(), new SearchNewsByNameAction());
	}

}
