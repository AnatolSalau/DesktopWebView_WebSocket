package glucoreader_one;

import com.jfoenix.controls.JFXDecorator;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.paint.LinearGradient;
import javafx.stage.Stage;
import javafx.stage.StageStyle;

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
            Image iconLogoHeader = new Image("/images/png/logosmall.png");
            ImageView imageView = new ImageView(iconLogoHeader);
            primaryStage.setTitle("Window One");
            primaryStage.getIcons().add(icon);
            Parent windowOne = FXMLLoader.load(getClass().getResource("/glucoreader_one/window_one.fxml"));
            JFXDecorator decorator = new JFXDecorator(primaryStage , windowOne);
            decorator.setCustomMaximize(true);
            decorator.setGraphic(imageView);
            decorator.setText("GlucoAssist window one");
            String uri = getClass().getResource("/glucoreader_one/css/jfxdecorator.css").toExternalForm();
            Scene scene = new Scene(decorator,1000,700);
            scene.getStylesheets().add(uri) ;
            primaryStage.setScene(scene);
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

