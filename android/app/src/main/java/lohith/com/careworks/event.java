package lohith.com.careworks;

public class event {
    String name , description , date , url , id;

    public event(){

    }

    public event(String name , String description , String date , String url, String id ){
        this.name = name;
        this.description = description;
        this.date = date;
        this.url = url;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getDate() {
        return date;
    }

    public String getUrl() {
        return url;
    }

    public String getId() { return id;}

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setId(String id) { this.id = id;}
}
