package dropdown_users;

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
            Parent gorizontalSliderFxml = FXMLLoader.load(getClass().getResource("/dropdown_users/dropdown_one.fxml"));
            primaryStage.setTitle("Dropdown One");
            primaryStage.setScene(new Scene(gorizontalSliderFxml,800,600));
            primaryStage.show();
            //Show window 2
            Parent verticalSliderFxml = FXMLLoader.load(getClass().getResource("/dropdown_users/dropdown_two.fxml"));
            Stage secondStage = new Stage();
            secondStage.setTitle("Dropdown Two");
            secondStage.setScene(new Scene(verticalSliderFxml, 800, 600));
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

