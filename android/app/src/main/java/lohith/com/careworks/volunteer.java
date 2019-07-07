package lohith.com.careworks;

public class volunteer {
    String name , email , age , number , skills , city , gender;

    public volunteer(String name, String email, String age, String number, String skills, String city, String gender) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.number = number;
        this.skills = skills;
        this.city = city;
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getAge() {
        return age;
    }

    public String getNumber() {
        return number;
    }

    public String getSkills() {
        return skills;
    }

    public String getCity() {
        return city;
    }

    public String getGender() {
        return gender;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
