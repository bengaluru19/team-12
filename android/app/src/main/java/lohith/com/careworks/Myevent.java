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

public class Myevent extends AppCompatActivity {

    eventdisplayadapter adapter;
    List<viewmyevent> item_list;
    RecyclerView recyclerView;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout_details);

        recyclerView = (RecyclerView) findViewById(R.id.recyclerView);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        item_list = new ArrayList<>();

        DatabaseReference database = FirebaseDatabase.getInstance().getReference("user1");

        database.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                final globalclass globalvariable = (globalclass) getApplicationContext();
                final String name  = globalvariable.getUsername();
                for( DataSnapshot d: dataSnapshot.getChildren() ){
                    Log.e(String.valueOf(d.getValue()), "onDataChange: " );
                    String username = d.child("username").getValue().toString();
                    if( name.equals(username) ){
                        String ename = d.child("eventname").getValue().toString();
                        String edate = d.child("date").getValue().toString();
                        viewmyevent e = new viewmyevent(ename,edate);
                        item_list.add(e);

                    }


                    adapter = new eventdisplayadapter(Myevent.this,item_list);
                    recyclerView.setAdapter(adapter);


                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });


    }
}
