package table_with_search;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class Main extends Application {
    @Override
    public void init() throws Exception {
    }

    @Override
    public void stop() throws Exception {
    }

    @Override
    public void start(Stage primaryStage)  {
        try {
            //Show window 1
            //gorizontal slider window
            Parent gorizontalSliderFxml = FXMLLoader.load(getClass().getResource("/table_with_search/table_one.fxml"));
            primaryStage.setTitle("Table one");
            primaryStage.setScene(new Scene(gorizontalSliderFxml,900,900));
            primaryStage.show();
            //Show window 2
            //vertical slider window
            Parent verticalSliderFxml = FXMLLoader.load(getClass().getResource("/table_with_search/table_two.fxml"));
            Stage secondStage = new Stage();
            secondStage.setTitle("Table two");
            secondStage.setScene(new Scene(verticalSliderFxml, 900, 900));
            secondStage.show();
        }
        catch (Exception ex) {
            ex.printStackTrace();
        }
    }
    public static void main(String[] args) {
        launch(args);
    }
}