import backend.EventServer;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;


public class Main extends Application {
    //Logger class to avoid logger exeptions
    //private static final Logger logger = LoggerFactory.getLogger(Main.class);
    EventServer server = new EventServer();
    // We must run jetty in another thread
    @Override
    public void init() throws Exception {
            //Start server in another thread
            Thread serverThread = new Thread() {
                @Override
                public void run() {
                    server.setPort(8080);
                    try {
                        server.start();
                        server.join();
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            };
            serverThread.start();
    }
    @Override
        public void start(Stage primaryStage)  {
            try {
                Parent startFxml = FXMLLoader.load(getClass().getResource("/startwindow.fxml"));
                primaryStage.setTitle("GlucoReader");
                primaryStage.setScene(new Scene(startFxml, 500, 300));
                primaryStage.show();
            }
            catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        public static void main(String[] args) {
            launch(args);
        }

        //Stop server when javafx app wii closed
    @Override
    public void stop()  {
        try {
            server.stop();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
