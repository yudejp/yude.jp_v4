import { useEffect, useState } from "react";
import type { CounterData } from "@/types/counter";
import Rampart from "./Rampart.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie } from "@fortawesome/free-solid-svg-icons";

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
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            className={`${Rampart.use}`}
            style={{ fontSize: 100, userSelect: "none" }}
          >
            🍪
          </motion.div>
        </span>
        <span
          className="d-block"
          style={{ fontFamily: "Rampart One", fontSize: 50 }}
        >
          {!isLoading && cookie && cookie.num}
          {isLoading && cookie.num}
        </span>
      </div>
    </div>
  );
}
