interface Activity {
  title: string;
  text: string;
  img: string;
  icon: string;
}

const activities: Activity[] = [
  {
    title: "Surfing",
    text: "OCEAN BEACH",
    img: "/activity-1.png",
    icon: "/icon-surfing-filled.png",
  },
  {
    title: "Hiking",
    text: "TOREY PINES",
    img: "/activity-2.png",
    icon: "/icon-hiking-filled.png",
  },
  {
    title: "Weights",
    text: "ENCINITAS",
    img: "/activity-3.png",
    icon: "/icon-weights-filled.png",
  },
  {
    title: "Spinning",
    text: "GYM",
    img: "/activity-4.png",
    icon: "/icon-spinning-filled.png",
  },
];

export default activities;
