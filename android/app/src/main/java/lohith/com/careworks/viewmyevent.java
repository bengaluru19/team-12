package lohith.com.careworks;

public class viewmyevent {
    String name , date;

    public viewmyevent(){

    }

    public viewmyevent(String name ,  String date){
        this.name = name;
        this.date = date;
    }

    public String getName() {
        return name;
    }



    public String getDate() {
        return date;
    }

    public void setName(String name) {
        this.name = name;
    }



    public void setDate(String date) {
        this.date = date;
    }
}
