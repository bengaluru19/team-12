package lohith.com.careworks;

import android.app.Application;

public class globalclass extends Application {
    String username , number , skills;

    public String getNumber() {
        return number;
    }

    public String getSkills() {
        return skills;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
