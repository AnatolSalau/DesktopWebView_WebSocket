package websocket_example.backend;
import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@ClientEndpoint
@ServerEndpoint(value = "/events")
public class EventSocketForServer
{
    private static Set<Session> sessions = Collections.synchronizedSet(new HashSet<Session>());
    @OnOpen
    public void onOpen(Session sess) throws IOException {
        sessions.add(sess);
        System.out.println("New session open");
        System.out.println("Sessions list:");
        System.out.println(sessions);
        sess.setMaxIdleTimeout(0);
        System.out.println("Socket Connected: " + sess + " " + sess.getId());
    }

    @OnMessage
    public void onMessage(Session sess, String message) throws IOException, InterruptedException {
        System.out.println("Handling message " + message+ " " + sess.getId());
/*        for (int i = 0; i < 5; i++) {
            sess.getBasicRemote().sendText("This is Example Test " + i);
            Thread.sleep(1000);
        }*/

/*        return "From server : "+ message ;*/
    }
    @OnClose
    public void onClose(Session sess)
{
    sessions.remove(sess);
    System.out.println("Socket Closed: " + sess + " " + sess.getId());
    System.out.println("Sessions list:");
    System.out.println(sessions);

    }

    public static Set<Session> getSessions() {
        return sessions;
    }
}
