package dropdown_users;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.net.URL;
import java.util.ResourceBundle;

public class DropDownTwoController implements Initializable {
    @FXML
    private WebView dropdownTwo;

    private String link = getClass().getResource("/dropdown_users/dropdown_two.html").toExternalForm();
    private WebEngine engine;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        dropdownTwo.setContextMenuEnabled(false);
        engine = dropdownTwo.getEngine();
        engine.setJavaScriptEnabled(true);
        engine.load(link);
    }
}
