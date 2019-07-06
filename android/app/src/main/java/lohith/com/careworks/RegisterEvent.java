package lohith.com.careworks;

public class RegisterEvent {

    String eventid , eventname , username , number , skills , date;

    public RegisterEvent(){

    }

    public RegisterEvent(String eventid , String eventname , String username , String number , String skills,String date ){
        this.eventid = eventid;
        this.eventname = eventname;
        this.number  = number;
        this.username = username;
        this.skills = skills;
        this.date  = date;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getEventid() {
        return eventid;
    }

    public String getEventname() {
        return eventname;
    }

    public String getUsername() {
        return username;
    }

    public String getNumber() {
        return number;
    }

    public String getSkills() {
        return skills;
    }

    public void setEventid(String eventid) {
        this.eventid = eventid;
    }

    public void setEventname(String eventname) {
        this.eventname = eventname;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }
}
