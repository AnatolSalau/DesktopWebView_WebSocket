package backend;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.Session;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Set;


public class DataBaseServlet extends HttpServlet {
    static  int count = 0;
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        PrintWriter  printWriter= resp.getWriter();
        printWriter.println("Hello from DataBaseServlet");
        Set<Session> sessions = EventSocketForServer.getSessions();
        String message = "message" + count;
        sessions.forEach(session -> session.getAsyncRemote().sendText(message));
        count++;
    }
}
