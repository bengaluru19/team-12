package lohith.com.careworks;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

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
        event e = my_events.get(i);

        eventview.title.setText(items.getName());
        eventview.desc.setText(items.getDesc());
        eventview.price.setText(items.getPrice());
        Picasso.get().load(items.getUrl()).into(farmerViewholder.imageView);

    }

    @Override
    public int getItemCount() {
        return my_events.size();
    }

    class eventviewholder extends RecyclerView.ViewHolder {
        TextView name , description , date;
        ImageView img;
        public eventviewholder( View itemview){
            super(itemview);
            name = itemview.findViewById(R.id.textname);
            description = itemview.findViewById(R.id.textfname);
            date = itemview.findViewById(R.id.textmname);
            img = itemview.findViewById(R.id.textage);

        }

    }
}
