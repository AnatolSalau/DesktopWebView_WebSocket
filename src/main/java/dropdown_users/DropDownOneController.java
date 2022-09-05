package dropdown_users;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.net.URL;
import java.util.ResourceBundle;

public class DropDownOneController implements Initializable {
    @FXML
    private WebView dropdownOne;

    private String link = getClass().getResource("/dropdown_users/dropdown_one.html").toExternalForm();
    private WebEngine engine;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        dropdownOne.setContextMenuEnabled(false);
        engine = dropdownOne.getEngine();
        engine.setJavaScriptEnabled(true);
        engine.load(link);
    }
}
