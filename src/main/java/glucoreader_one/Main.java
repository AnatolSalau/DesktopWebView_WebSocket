package glucoreader_one;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
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
            Image icon = new Image("/images/png/logoDHnew.png");
            Parent gorizontalSliderFxml = FXMLLoader.load(getClass().getResource("/glucoreader_one/window_one.fxml"));
            primaryStage.setTitle("Window One");
            primaryStage.getIcons().add(icon);
            primaryStage.setScene(new Scene(gorizontalSliderFxml,900,650));
            primaryStage.setX(100);
            primaryStage.show();
            //Show window 2
            Parent verticalSliderFxml = FXMLLoader.load(getClass().getResource("/glucoreader_one/window_two.fxml"));
            Stage secondStage = new Stage();
            secondStage.setTitle("Window Two");
            secondStage.getIcons().add(icon);
            secondStage.setScene(new Scene(verticalSliderFxml,900,650));
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

