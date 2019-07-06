package lohith.com.careworks;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private TextView mTextMessage;
    Button button;
    EditText username;
    EditText password;
    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            switch (item.getItemId()) {
                case R.id.navigation_home:
                    mTextMessage.setText(R.string.title_home);
                    return true;
                case R.id.navigation_dashboard:
                    mTextMessage.setText(R.string.title_dashboard);
                    return true;

            }
            return false;
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        button = findViewById(R.id.submit);
        username = findViewById(R.id.email);
        password = findViewById(R.id.password);

        final String skills = "IT,Science";
        final String number = "80959588327";

        String name = username.getText().toString().trim();
        Log.e( name , "onCreate: name*************************************************** " );
        final globalclass globalvariable = (globalclass) getApplicationContext();
        globalvariable.setUsername(name);
        globalvariable.setSkills(skills);
        globalvariable.setNumber(number);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String name = username.getText().toString().trim();
                Log.e( name , "onCreate: name*************************************************** " );
                final globalclass globalvariable = (globalclass) getApplicationContext();
                globalvariable.setUsername(name);
                globalvariable.setSkills(skills);
                globalvariable.setNumber(number);
                Intent intent = new Intent(MainActivity.this,eventactivity.class);
                startActivity(intent);
            }
        });




    }

}
