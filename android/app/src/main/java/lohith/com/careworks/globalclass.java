package lohith.com.careworks;

import android.app.Application;

public class globalclass extends Application {
    String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
