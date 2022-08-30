package slider_with_cards;

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
            Parent gorizontalSliderFxml = FXMLLoader.load(getClass().getResource("/slider_with_cards/gorizontal.fxml"));
            primaryStage.setTitle("Gorizontal slider");
            primaryStage.setScene(new Scene(gorizontalSliderFxml,1000,200));
            primaryStage.show();
            //Show window 2
            //vertical slider window
            Parent verticalSliderFxml = FXMLLoader.load(getClass().getResource("/slider_with_cards/vertical.fxml"));
            Stage secondStage = new Stage();
            secondStage.setTitle("Vertical slider");
            secondStage.setScene(new Scene(verticalSliderFxml, 700, 200));
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
