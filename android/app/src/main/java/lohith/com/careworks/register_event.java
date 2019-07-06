package lohith.com.careworks;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.TextView;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;

public class register_event extends AppCompatActivity {

    TextView namedisplay , datedisplay , descriptiondisplay , number_of_prople_display , skillsetdisplay , materials_requireddisplay;


    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout_details);

        namedisplay = findViewById(R.id.name);
        datedisplay = findViewById(R.id.date);
        descriptiondisplay = findViewById(R.id.desc);
        number_of_prople_display = findViewById(R.id.numberpeople);
        skillsetdisplay = findViewById(R.id.skillset);
        materials_requireddisplay = findViewById(R.id.materials);

        final String id = getIntent().getStringExtra("id");
        DatabaseReference databaseReference = FirebaseDatabase.getInstance().getReference("Events");

        databaseReference.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                for( DataSnapshot d: dataSnapshot.getChildren() ){
                    Log.e(String.valueOf(d.getValue()), "onDataChange: " );
                      String idfromdb = d.child("id").getValue().toString();
                    Log.e( idfromdb, "onDataChange: idoriginal" );
                      if(id.equals(idfromdb)){
                          String name = d.child("name").getValue().toString();
                          String description = d.child("description").getValue().toString();
                          String date = d.child("date").getValue().toString();
                          String number_of_people = d.child("numParticipant").getValue().toString();
                          String skillset = d.child("skills").getValue().toString();
                          String materials_required = d.child("materials").getValue().toString();
                          namedisplay.setText(name);
                          datedisplay.setText(date);
                          descriptiondisplay.setText(description);
                          number_of_prople_display.setText(number_of_people);
                          skillsetdisplay.setText(skillset);
                          materials_requireddisplay.setText(materials_required);
                      }
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });
    }
}
