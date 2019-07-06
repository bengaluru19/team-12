package lohith.com.careworks;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;

public class register_event extends AppCompatActivity {

    TextView namedisplay , datedisplay , descriptiondisplay , number_of_prople_display , skillsetdisplay , materials_requireddisplay , locationdisplay;
    String evid , evname , evdate;
    Button b;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout_event);

        namedisplay = findViewById(R.id.name);
        datedisplay = findViewById(R.id.date);
        descriptiondisplay = findViewById(R.id.desc);
        number_of_prople_display = findViewById(R.id.numberpeople);
        skillsetdisplay = findViewById(R.id.skillset);
        locationdisplay = findViewById(R.id.location);
        materials_requireddisplay = findViewById(R.id.materials);
        b = findViewById(R.id.submit);

        final String id = getIntent().getStringExtra("id");
        final DatabaseReference databaseReference = FirebaseDatabase.getInstance().getReference("Events");

        databaseReference.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                for( DataSnapshot d: dataSnapshot.getChildren() ){
                    Log.e(String.valueOf(d.getValue()), "onDataChange: " );
                      String idfromdb = d.child("id").getValue().toString();
                      evid = idfromdb;
                    Log.e( idfromdb, "onDataChange: idoriginal" );
                      if(id.equals(idfromdb)){
                          String name = d.child("name").getValue().toString();
                          evname = name;
                          String description = d.child("description").getValue().toString();
                          String date = d.child("date").getValue().toString();
                          evdate = date;
                          String number_of_people = d.child("numParticipant").getValue().toString();
                          String skillset = d.child("skills").getValue().toString();
                          String location = d.child("location").getValue().toString();
                          String materials_required = d.child("materials").getValue().toString();
                          Log.e( name + " " + description + " " + date , "onDataChange: details" );
                          namedisplay.setText(name);
                          datedisplay.setText(date);
                          descriptiondisplay.setText(description);
                          number_of_prople_display.setText(number_of_people);
                          skillsetdisplay.setText(skillset);
                          materials_requireddisplay.setText(materials_required);
                          locationdisplay.setText(location);
                      }
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DatabaseReference databaseReference1 = FirebaseDatabase.getInstance().getReference("user1");
                final globalclass globalvariable = (globalclass) getApplicationContext();
                final String name  = globalvariable.getUsername();
                final String number = globalvariable.getNumber();
                final String skills = globalvariable.getSkills();

                Log.e( name , "onClick: skills");
                String key = databaseReference1.push().getKey();

                RegisterEvent re = new RegisterEvent(evid,evname,name,number,skills,evdate);
                databaseReference1.child(key).setValue(re).addOnCompleteListener(new OnCompleteListener<Void>() {
                    @Override
                    public void onComplete(@NonNull Task<Void> task) {
                        Toast.makeText(register_event.this,"We have recieved your application, your status will be informed shortly",Toast.LENGTH_LONG).show();
                    }
                });



            }
        });
    }
}
