package lohith.com.careworks;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

public class startevent extends AppCompatActivity {

    Button b;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.event_guidelines);
        b = findViewById(R.id.end);
        final String evname = getIntent().getStringExtra("evname");
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(startevent.this,qrscan.class);
                intent.putExtra("evname",evname);
                startActivity(intent);
            }
        });


    }
}
