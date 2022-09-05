package glucoreader_one;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.net.URL;
import java.util.ResourceBundle;

public class WindowTwoController implements Initializable {
    @FXML
    private WebView windowTwo;

    private String link = getClass().getResource("/glucoreader_one/window_two.html").toExternalForm();
    private WebEngine engine;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        windowTwo.setContextMenuEnabled(false);
        engine = windowTwo.getEngine();
        engine.setJavaScriptEnabled(true);
        engine.load(link);
    }
}
