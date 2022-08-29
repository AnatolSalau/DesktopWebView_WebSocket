package slider_with_cards;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.net.URL;
import java.util.ResourceBundle;

public class GorizontalController implements Initializable {
    @FXML
    private WebView gorizontalSliderPage;
    @FXML
    private StackPane gorizontalStackPane;

    private String link = getClass().getResource("/slider_with_cards/gorizontal.html").toExternalForm();
    private WebEngine engine;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        engine = gorizontalSliderPage.getEngine();
        engine.setJavaScriptEnabled(true);
        engine.load(link);
    }
}
