package lohith.com.careworks;

import android.content.Intent;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class signupactivity extends AppCompatActivity {
    EditText name , email , age , number , skillset , city , gender;
    Button b;
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
        final String myname = name.getText().toString();
        final String myemail = email.getText().toString();
        final String mynumber = number.getText().toString();
        final String myage = age.getText().toString();
        final String myskills = skillset.getText().toString();
        final String mycity = city.getText().toString();
        final String mygender = gender.getText().toString();
        b = findViewById(R.id.submit);


        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                DatabaseReference databaseReference = FirebaseDatabase.getInstance().getReference("volunteers");
                volunteer v = new volunteer(myname,myemail,myage,mynumber,myskills,mycity,mygender);
                databaseReference.child(myname).setValue(v).addOnSuccessListener(new OnSuccessListener<Void>() {
                    @Override
                    public void onSuccess(Void aVoid) {
                        Toast.makeText(signupactivity.this,"Registration success,Please login using phone number as password",Toast.LENGTH_LONG).show();
                        Intent intent = new Intent(signupactivity.this,MainActivity.class);
                        startActivity(intent);
                    }
                });
            }
        });






    }
}
