import { useEffect, useState } from "react";
import type { CounterData } from "@/types/counter";
import Rampart from "./Rampart.module.css";
import { motion } from "framer-motion";

export default function Cookie() {
  const [cookie, setCookie] = useState<CounterData>({
    name: "counter",
    num: 0,
  });
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    fetch("https://moe-counter.yude.jp/record/@:yude-button-counter")
      .then((res) => res.json())
      .then((data) => {
        setCookie(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="card mb-2">
      <div className="card-body text-center">
        <span className="d-block" onClick={handleSubmit}>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            className={`${Rampart.use}`}
            style={{ fontSize: 200, userSelect: "none" }}
          >
            🍪
          </motion.div>
        </span>
        <span
          className="d-block"
          style={{ fontFamily: "Rampart One", fontSize: 70 }}
        >
          {!isLoading && cookie && cookie.num}
          {isLoading && cookie.num}
        </span>
      </div>
    </div>
  );
}
