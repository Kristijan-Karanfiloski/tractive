import { ActivityItems } from "../store/scheduledActivityStore";

interface ActivityProps {
	activity: ActivityItems;
}

const Activity = ({ activity }: ActivityProps) => {
	return (
		<div className="col-4">
			<div className="d-flex align-items-center">
				<img
					src={activity.icon}
					alt={activity.activity}
					className="rounded-circle shadow-lg p-2"
				/>
			</div>
			<p>
				{new Date(activity.datetime).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				})}
			</p>
		</div>
	);
};
export default Activity;
