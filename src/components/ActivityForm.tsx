import styles from "./ActivityForm.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import useActivityStore from "../store/scheduledActivityStore";
import { Activity } from "../data/ActivityEnum.ts";

interface FormData {
  duration: string;
  datetime: string;
  selectOption: string;
}

const ActivityForm = () => {
  ///////////////////////// STATE /////////////////////////////////////////////
  const { addActivity, setModalOpen, activeIcon, setActiveIcon } =
    useActivityStore();

  //////////////////////////////////////////////////////////////////////////////////////////////
  const { register, handleSubmit } = useForm<FormData>();

  //////////////////////////////////////////////////////////////////////////////////////////////
  const iconPaths = {
    [Activity.Spinning]: {
      default: "/icon-spinning-filled.png",
      active: "/icon-spinning-light.png",
    },
    [Activity.Surfing]: {
      default: "/icon-surfing-filled.png",
      active: "/icon-surfing-light.png",
    },
    [Activity.Weights]: {
      default: "/icon-weights-filled.png",
      active: "/icon-weights-light.png",
    },
    [Activity.Hiking]: {
      default: "/icon-hiking-filled.png",
      active: "/icon-hiking-light.png",
    },
  };

  ////////////////////////// CLICK EVENTS //////////////////////////////////////////

  // Event handlers for button clicks

  const handleIconClick = (event: React.MouseEvent, activity: Activity) => {
    event.preventDefault();
    setActiveIcon(activity);
  };

  // eslint-disable-next-line @typescript-eslint/require-await
  const onSubmit = async (data: FormData) => {
    if (activeIcon) {
      const result = {
        activity: activeIcon,
        icon: iconPaths[activeIcon]?.default,
        duration: data.duration,
        selectOption: data.selectOption,
        datetime: data.datetime,
      };

      addActivity(result);
    }

    setModalOpen(false);
    console.log(data.selectOption);
    console.log(data.datetime);
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row m-auto">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.activityForm} col-12 col-md-12 col-lg-12`}
        >
          <h3 className={styles.header}>Schedule your activity</h3>
          <div className={styles.activityIcon}>
            {Object.keys(iconPaths).map((activity) => (
              <button
                key={activity}
                className={`${styles.icon} ${
                  activity === activeIcon ? styles.iconActive : ""
                }`}
                onClick={(event) =>
                  handleIconClick(event, activity as Activity)
                }
              >
                <img
                  src={
                    activeIcon === activity
                      ? iconPaths[activity].active
                      : iconPaths[activity as Activity].default
                  }
                  alt={activity}
                />
              </button>
            ))}
          </div>

          {/**/}
          <div className={styles.containerInput}>
            <label htmlFor="select-option" className={styles.labelContainer}>
              How long do you want to do this activity?
            </label>
            <div className={styles.container1}>
              <div className={styles.customSelect}>
                <select id="selectOption" {...register("selectOption")}>
                  <option value="default">15 min</option>
                  <option value="option1">30 min</option>
                  <option value="option2">45 min</option>
                  <option value="option3">1 hour</option>
                  <option value="option4">1 h 15 min</option>
                  <option value="option5">1 h 30 min</option>
                </select>
              </div>
              <button className={styles.searchBtn} type="button">
                <img src="/icon-dropdown-light.png" alt="dropdown" />
              </button>
            </div>
          </div>

          {/* */}

          {/**/}

          <div className={styles.containerInput}>
            <label htmlFor="select-option" className={styles.labelContainer}>
              When do you want to do this activity?
            </label>
            <div className={styles.container1}>
              <div className={styles.customSelect}>
                <input
                  type="datetime-local"
                  id="datetime"
                  className="form-control"
                  min="2023-01-01T00:00"
                  max="2024-12-31T00:00"
                  placeholder="Pick a date & time or find a free slot"
                  required
                  {...register("datetime")}
                />
              </div>
              <button className={styles.searchBtn} type="button">
                <img src="/icon-search-light.png" alt="search" />
              </button>
            </div>
          </div>

          {/*  */}
          <button className={styles.scheduleBtn} type="submit">
            SCHEDULE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActivityForm;
