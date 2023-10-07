import { useCallback } from "react";
export default function About() {
  let nt = useCallback(async () => {
    if (Notification.permission === "default") {
      let res = await Notification.requestPermission();
      if (res === "granted") {
        new Notification("hello");
      }
    } else if (Notification.permission === "granted") {
      new Notification("hello 中文");
    }
  },[]);

  return (
    <div>
      <button className="border-2 border-red-500 p-4" onClick={() => nt()}>
        notification test
      </button>
    </div>
  );
}
