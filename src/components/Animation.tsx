import { motion, useScroll, useSpring } from "motion/react";
import bg from "../assets/bg.jpg";

export default function Animation() {
  const WIDTH = 1440;
  const HEIGHT = 1024;

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number = 1) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100vw",
          aspectRatio: WIDTH / HEIGHT
        }}
      >
        <img
          src={bg.src}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <motion.svg
          width="100%"
          viewBox="0 0 1440 849"
          initial="hidden"
          animate="visible"
          style={{
            position: "absolute",
            top: "14.15%",
            left: 0,
          }}
        >
          <defs>
            <clipPath id="underbridge">
              <path
                fill="white"
                fillRule="evenodd"
                clipRule="evenodd"
                d={`
                  M0 0
                  L1440 0
                  L1440 849
                  L0 849
                  L0 0 z
                  M900 400
                  L1020 440
                  L1020 600
                  L880 580
                  L900 400 z
                `}
              />
            </clipPath>
          </defs>

          <motion.path
            id="river"
            d="M-40 315.393C23 273.393 102.838 223.031 166.5 282.893C200 314.393 229.5 365.892 150.5 591.392C71.5 816.892 304 872.392 392.5 783.392C435.836 739.812 461.5 598.392 566.5 591.392C616.888 588.033 645.5 608.892 736 680.392C846.173 767.435 961 688.5 954 577.392C951.222 533.298 922.5 508 973 406.893C1003.31 346.202 956.5 301.392 914 266.392C871.5 231.392 802.5 149.893 832.5 80.8926C862.5 11.8926 956.772 18.2678 998 39.3925C1058.5 70.3921 1112 177.392 1136 266.392C1160 355.393 1240 443.393 1316.5 406.893C1393 370.393 1334 266.392 1334 201.393C1334 152.556 1358 106.893 1449.5 105.893"
            stroke="#009494"
            strokeWidth="50"
            strokeLinecap="square"
            fill="transparent"
            variants={draw}
            clipPath="url(#underbridge)"
          />
        </motion.svg>
      </div>
    </div>
  )
}