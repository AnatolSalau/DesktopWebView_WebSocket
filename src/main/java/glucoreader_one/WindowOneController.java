package glucoreader_one;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.net.URL;
import java.util.ResourceBundle;

public class WindowOneController implements Initializable {
    @FXML
    private WebView windowOne;

    private String link = getClass().getResource("/glucoreader_one/window_one.html").toExternalForm();
    private WebEngine engine;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        engine = windowOne.getEngine();
        engine.setJavaScriptEnabled(true);
        engine.load(link);
    }
}
