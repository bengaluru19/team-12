package lohith.com.careworks;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;
import java.util.List;

public class eventactivity extends AppCompatActivity {
    eventadapter adapter;
    List<event> item_list;
    RecyclerView recyclerView;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.event_layout);

        DatabaseReference database = FirebaseDatabase.getInstance().getReference("events");
        recyclerView = (RecyclerView) findViewById(R.id.recyclerView);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        database.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                item_list = new ArrayList<>();
                for( DataSnapshot d: dataSnapshot.getChildren() ){

                    Log.e( String.valueOf(d), "onDataChange: " );
                    event s = d.getValue(event.class);
                    Log.e( s.name + " " + s.date, "onDataChange: student" );
                    item_list.add(s);
                }

                adapter = new eventadapter(eventactivity.this,item_list);
                recyclerView.setAdapter(adapter);
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });



    }
}
