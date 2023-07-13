import "./App.css";
import NavBar from "./components/nav-bar/NavBar.tsx";

import ScheduledActivities from "./components/ScheduledActivities.tsx";
import AvailableActivities from "./components/AvailableActivities.tsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <section>
          <AvailableActivities />
        </section>
        <section>
          <ScheduledActivities />
        </section>
      </main>
    </>
  );
}

export default App;
