package lohith.com.careworks;

import android.content.Context;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import java.util.List;

public class eventdisplayadapter extends RecyclerView.Adapter<eventdisplayadapter.eventviewholder> {
    Context context;
    List<viewmyevent> my_events;

    public eventdisplayadapter(Context context,List<viewmyevent> my_stud) {
        this.context = context;
        this.my_events = my_stud;
    }

    @NonNull
    @Override
    public eventviewholder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.card_view1,null);
        return new eventviewholder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull eventviewholder eventview, int i) {
        final viewmyevent e = my_events.get(i);
        eventview.name.setText(e.getName());
        eventview.date.setText(e.getDate());


        eventview.checkin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context,qrscan.class);
                context.startActivity(intent);

            }
        });

    }

    @Override
    public int getItemCount() {
        return my_events.size();
    }

    class eventviewholder extends RecyclerView.ViewHolder {
        TextView name , date;
        Button checkin;

        public eventviewholder( View itemview){
            super(itemview);
            name = itemview.findViewById(R.id.name_of_event);
            date = itemview.findViewById(R.id.event_date);
            checkin = itemview.findViewById(R.id.checkin);
        }

    }
}
