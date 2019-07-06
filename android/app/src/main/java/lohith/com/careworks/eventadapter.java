package lohith.com.careworks;

import android.content.Context;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import java.util.List;

public class eventadapter extends RecyclerView.Adapter<eventadapter.eventviewholder> {
    Context context;
    List<event> my_events;

    public eventadapter(Context context,List<event> my_stud) {
        this.context = context;
        this.my_events = my_stud;
    }

    @NonNull
    @Override
    public eventviewholder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.card_view,null);
        return new eventviewholder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull eventviewholder eventview, int i) {
        final event e = my_events.get(i);


        eventview.name.setText(e.getName());
        eventview.description.setText(e.getDescription());
        eventview.date.setText(e.getDate());
        Picasso.get().load(e.getUrl()).into(eventview.img);

        eventview.img.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context,register_event.class);
                intent.putExtra("id",e.getId());
                context.startActivity(intent);
            }
        });

    }

    @Override
    public int getItemCount() {
        return my_events.size();
    }

    class eventviewholder extends RecyclerView.ViewHolder {
        TextView name , description , date , id;
        ImageView img;

        public eventviewholder( View itemview){
            super(itemview);
            name = itemview.findViewById(R.id.name_of_event);
            description = itemview.findViewById(R.id.event_description);
            date = itemview.findViewById(R.id.event_date);
            img = itemview.findViewById(R.id.imageView);
            id = itemview.findViewById(R.id.id);


        }

    }
}
