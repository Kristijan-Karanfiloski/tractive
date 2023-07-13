interface Activity {
  time: string;
  date: string;
  type: string;
}

interface ActivityListProps {
  activities: Activity[];
}

function ActivityList({ activities = [] }: ActivityListProps) {
  return (
    <div>
      {activities?.map((activity, index) => (
        <div key={index}>
          <h4>{activity.type}</h4>
          <p>Time: {activity.time}</p>
          <p>Date: {activity.date}</p>
        </div>
      ))}
    </div>
  );
}

export default ActivityList;
