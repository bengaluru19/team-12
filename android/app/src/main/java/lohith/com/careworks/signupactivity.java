package lohith.com.careworks;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.widget.EditText;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class signupactivity extends AppCompatActivity {
    EditText name , email , age , number , skillset , city , gender;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.sign_up);
        name = findViewById(R.id.name);
        email = findViewById(R.id.name);
        age = findViewById(R.id.name);
        number = findViewById(R.id.name);
        skillset = findViewById(R.id.name);
        city = findViewById(R.id.name);
        gender = findViewById(R.id.gender);


        DatabaseReference databaseReference = FirebaseDatabase.getInstance().getReference("volunteers");

    }
}
