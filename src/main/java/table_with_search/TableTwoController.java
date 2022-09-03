package table_with_search;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.net.URL;
import java.util.ResourceBundle;

public class TableTwoController implements Initializable {
    @FXML
    private WebView tableTwo;
    @FXML
    private StackPane tableTwoStackPane;

    private String link = getClass().getResource("/table_with_search/table_two.html").toExternalForm();
    private WebEngine engine;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        tableTwo.setContextMenuEnabled(false);
        engine = tableTwo.getEngine();
        engine.setJavaScriptEnabled(true);
        engine.load(link);
    }
}
