import { create } from "zustand";
import { Activity } from "../data/ActivityEnum.ts";

export interface ActivityItems {
  activity: string;
  icon: string;
  duration: string;
  datetime: string;
}

interface ActivityStore {
  activities: ActivityItems[];
  addActivity: (activity: ActivityItems) => void;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  activeIcon: Activity | null;
  setActiveIcon: (value: Activity | null) => void;
}

const useActivityStore = create<ActivityStore>((set) => ({
  activities: [],
  addActivity: (activity) =>
    set((store) => ({ activities: [...store.activities, activity] })),
  modalOpen: false,
  setModalOpen: (value) => set(() => ({ modalOpen: value })),
  activeIcon: null,
  setActiveIcon: (value) => set(() => ({ activeIcon: value })),
}));

export default useActivityStore;
