import { useEffect, useState } from "react";

export default function useTimer(total: number) {
  const [seconds, setSeconds] = useState(total);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((sec) => {
        if (sec <= 0) {
          clearInterval(intervalId);

          return 0;
        }

        return sec - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return {seconds};
}
