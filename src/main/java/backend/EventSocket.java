package backend;
import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import java.util.concurrent.CountDownLatch;

@ClientEndpoint
@ServerEndpoint(value = "/events")
public class EventSocket
{
    private static Set<Session> sessions = Collections.synchronizedSet(new HashSet<Session>());
    @OnOpen
    public void onOpen(Session sess)
    {
        System.out.println("Socket Connected: " + sess + " " + sess.getId());
    }

    @OnMessage
    public String onMessage(Session sess, String message) throws IOException
    {
        System.out.println("Handling message " + message+ " " + sess.getId());
        return null;
    }

    @OnClose
    public void onClose(Session sess)
    {
        System.out.println("Socket Closed: " + sess + " " + sess.getId());
    }

}
