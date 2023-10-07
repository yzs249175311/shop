import { useCallback, useEffect } from "react";
export default function About() {
  let nt = useCallback(async () => {
    if (Notification.permission === "default") {
      let res = await Notification.requestPermission();
      if (res === "granted") {
        new Notification("hello");
      }
    } else if (Notification.permission === "granted") {
      setTimeout(() => {
        new Notification("hello 中文");
      }, 2000);
    }
  }, []);

  useEffect(() => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("注册成功:", registration);
        registration.showNotification("register success");
      })
      .catch((err) => console.log("注册失败:", err));
  }, []);

  return (
    <div>
      <button className="border-2 border-red-500 p-4" onClick={() => nt()}>
        notification test
      </button>
    </div>
  );
}
