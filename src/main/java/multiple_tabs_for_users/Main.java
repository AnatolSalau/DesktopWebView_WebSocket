package multiple_tabs_for_users;

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
            Parent gorizontalSliderFxml = FXMLLoader.load(getClass().getResource("/multiple_tabs_for_users/window_one.fxml"));
            primaryStage.setTitle("Window One");
            primaryStage.setScene(new Scene(gorizontalSliderFxml,800,600));
            primaryStage.show();
            //Show window 2
            Parent verticalSliderFxml = FXMLLoader.load(getClass().getResource("/multiple_tabs_for_users/window_two.fxml"));
            Stage secondStage = new Stage();

            secondStage.setTitle("Window Two");
            Image icon = new Image("/images/png/blood.png");
            secondStage.getIcons().add(icon);

            Scene scene = new Scene(verticalSliderFxml, 800, 600);
            scene.getStylesheets().add(getClass().getResource("/multiple_tabs_for_users/window_two.css").toExternalForm());
            secondStage.setScene(scene);
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

