"use client";

import OutlinedCardGoal from "./OutlinedCardGoal";
import OutlinedCardNotification from "./OutlinedCardNotification";

export default function SettingComponent() {
  return (
    <div>
      <div className="my-3 mt-8  mx-4 text-3xl underline underline-offset-0 decoration-indigo-300 decoration-8">Goal Steps Setting</div>
      <OutlinedCardGoal />
      <div className="my-3 mt-10 mx-4 text-3xl underline underline-offset-0 decoration-indigo-300 decoration-8">Notifications Setting</div>
      <OutlinedCardNotification />
    </div>
  );
}