package multiple_tabs_for_users;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.net.URL;
import java.util.ResourceBundle;

public class WindowOneController implements Initializable {
    @FXML
    private WebView windowOne;

    private String link = getClass().getResource("/multiple_tabs_for_users/window_one.html").toExternalForm();
    private WebEngine engine;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        windowOne.setContextMenuEnabled(false);
        engine = windowOne.getEngine();
        engine.setJavaScriptEnabled(true);
        engine.load(link);
    }
}
