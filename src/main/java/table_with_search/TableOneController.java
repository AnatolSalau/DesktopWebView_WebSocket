package table_with_search;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.net.URL;
import java.util.ResourceBundle;

public class TableOneController implements Initializable {
    @FXML
    private WebView tableOne;
    @FXML
    private StackPane tableOneStackPane;

    private String link = getClass().getResource("/table_with_search/table_one.html").toExternalForm();
    private WebEngine engine;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        tableOne.setContextMenuEnabled(false);
        engine = tableOne.getEngine();
        engine.setJavaScriptEnabled(true);
        engine.load(link);
    }
}
