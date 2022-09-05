package multiple_tabs_for_users;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.net.URL;
import java.util.ResourceBundle;

public class WindowTwoController implements Initializable {
    @FXML
    private WebView windowTwo;

    private String link = getClass().getResource("/multiple_tabs_for_users/window_two.html").toExternalForm();
    private WebEngine engine;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        windowTwo.setContextMenuEnabled(false);
        engine = windowTwo.getEngine();
        engine.setJavaScriptEnabled(true);
        engine.load(link);
    }
}
