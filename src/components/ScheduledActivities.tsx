import styles from "./ScheduledActivities.module.css";
import Modal from "./Modal.tsx";
import ActivityForm from "./ActivityForm.tsx";
import Activity from "./ActivityItem.tsx";
import { groupBy } from "lodash";
import useActivityStore, {
  ActivityItems,
} from "../store/scheduledActivityStore.ts";
import { DateTime } from "luxon";

function ScheduledActivities() {
  const { activities, setModalOpen, modalOpen } = useActivityStore();

  const activitiesByDate = groupBy<ActivityItems>(
    activities,
    (activity: ActivityItems) => DateTime.fromISO(activity.datetime).toISODate()
  );

  return (
    <div className="container p-3">
      <h2 className={`mx-2 ${styles.h2}`}>Scheduled Activities</h2>

      {activities.length === 0 ? (
        <p>You don't have any activities scheduled yet.</p>
      ) : (
        Object.entries(activitiesByDate).map(([date, activities], index) => (
          <div key={index}>
            <h3 className={styles.h3}>
              {DateTime.fromISO(date).toLocaleString({
                day: "numeric",
                month: "long",
              })}
            </h3>
            <p className={styles.p}>
              {DateTime.fromISO(date).toLocaleString({
                weekday: "long",
              })}
            </p>
            <div className="row">
              {activities.map((activity, index) => (
                <Activity key={index} activity={activity} />
              ))}
            </div>
          </div>
        ))
      )}

      <Modal onClose={() => setModalOpen(false)} open={modalOpen}>
        <ActivityForm />
      </Modal>

      <div className="row text-center px-4">
        <button
          onClick={() => setModalOpen(true)}
          className={`${styles.button}`}
        >
          <img src="/icn_plus.png" alt="icon" style={{ marginRight: "8px" }} />
          SCHEDULE ACTIVITY
        </button>
      </div>
    </div>
  );
}

export default ScheduledActivities;
