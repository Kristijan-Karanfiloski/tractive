import ActivityCard from "./ActivityCard.tsx";
import activities from "../data/activity-data.ts";

function AvailableActivities() {
  return (
    <div className="container mt-4 text-center">
      <h1 style={{ color: "#1B1C20", fontSize: "1.1rem", fontWeight: "bold" }}>
        Track Your Activity
      </h1>
      <div className="row mt-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="col-6 col-lg-3 d-flex justify-content-center mb-3"
          >
            <ActivityCard
              title={activity.title}
              text={activity.text}
              imgSrc={activity.img}
              icon={activity.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableActivities;
