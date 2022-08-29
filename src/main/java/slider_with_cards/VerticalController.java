package slider_with_cards;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.net.URL;
import java.util.ResourceBundle;

public class VerticalController implements Initializable {
    @FXML
    private WebView verticalSliderPage;
    private String link = getClass().getResource("/slider_with_cards/vertical.html").toExternalForm();
    private WebEngine engine;

    @Override
    public void initialize(URL location, ResourceBundle resources) {

        engine = verticalSliderPage.getEngine();
        engine.setJavaScriptEnabled(true);
        engine.load(link);

    }
}
