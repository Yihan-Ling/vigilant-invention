package assistant.app;

public abstract class Action {
	  
	  public abstract void doCommand(String command);
	  
	  public abstract double getLikelihood(String command);
}