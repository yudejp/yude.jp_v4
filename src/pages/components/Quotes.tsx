import { useEffect, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

import type { Quote } from "@/types/quote";
import { motion } from "framer-motion";

export default function Quotes() {
  const [data, setData] = useState<Quote>();
  const quoteRef = useRef(null);
  const fetchData = async () => {
    const req = await fetch("./assets/quotes.json");
    const jsonData = await req.json();
    const len = jsonData.length;
    const picked = jsonData[Math.floor(Math.random() * len)];

    return setData(picked);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="position-relative text-center mt-2 mb-2 shadow-lg p-2 rounded text-black"
      style={{
        backgroundImage: `url("./assets/images/marisa.png")`,
        backgroundPositionY: "400px",
        backgroundColor: `rgba(255, 255, 255, 0.8)`,
        backgroundBlendMode: "lighten",
      }}
    >
      <span
        className="position-absolute text-secondary"
        style={{ bottom: "3px", right: "3px" }}
      >
        絵: 猫蝉 さん (
        <a
          href="https://twitter.com/NekoSemi96"
          style={{ color: "currentcolor" }}
        >
          @NekoSemi96
        </a>
        )
      </span>
      <div
        className="fs-4 container"
        style={{ fontFamily: "serif", textShadow: `1px 1px 3px gray` }}
      >
        {data && (
          <motion.div
            key={data.text}
            style={{
              overflow: "hidden",
              display: "flex",
              fontSize: "2rem",
            }}
            variants={container}
            initial="hidden"
            animate="visible"
            className="justify-content-center"
          >
            {Array.from(data.text).map((letter, index) => (
              <motion.span variants={child} key={index}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
      <span className="d-block">
        <a className="text-black" href={data && data.source}>
          {data && data.artist} / {data && data.title}
        </a>
      </span>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faRefresh} width={30} />
      </button>
    </div>
  );
}
