import { motion } from "motion/react"
import { useEffect, useState } from "react"
import bg from "../assets/bg.jpg"

const image: React.CSSProperties = {
  // maxWidth: "80vw",
  // background: "red"
}

const shape: React.CSSProperties = {
  strokeWidth: 10,
  // strokeLinecap: "round",
  fill: "transparent",
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => {
    // const delay = 0
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "tween", duration: 2, bounce: 0 },
        opacity: { delay, duration: .1 },
      },
    }
  },
}

export default function Animation() {
  const [rotate, setRotate] = useState(0);

  const WIDTH = 1440 / 2;
  const HEIGHT = 1024 / 2; 

  return (
    <div
      style={{
        position: "relative",
        width: WIDTH,
        height: HEIGHT
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
        // height={802}
        viewBox="0 0 1440 802"
        initial="hidden"
        animate="visible"
        style={{
          position: "absolute",
          top: "14.5%",
          left: 0,
        }}
      >

        <motion.path
          d="M-58.4772 539.125C-58.4772 501.705 -58.7864 464.273 -58.4772 426.855C-58.2058 394.018 -47.7103 358.305 -32.7928 329.149C-15.0079 294.387 12.3115 287.398 46.5 271.69C79.6832 256.444 139.319 247.5 170.156 286.783C193.968 317.117 199.462 342.495 198.896 381.577C198.282 423.923 171.565 461.275 162.62 501.525C154.347 538.755 134.553 569.01 134.553 608.234C134.553 628.076 132.054 651.921 139.319 670.724C145.351 686.336 155.64 701.406 165.533 714.943C174.052 726.602 190.069 736.925 203.397 742.217C236.854 755.501 269.283 773.967 306.664 775.05C350.936 776.333 355.882 781.52 397 758C413.475 748.576 440.4 729.53 458.5 703.5C469.642 687.476 490.918 663.644 500.5 646.5C509.749 629.952 540.998 588.75 557.5 585C574.388 581.162 606 580 620.702 595.263C643.313 618.738 684.506 661.813 716.555 663.045C736.401 663.808 759.442 673.558 779.839 667.282C797.741 661.773 866 641.5 876 599.5"
          stroke="#009494"
          strokeWidth="50"
          strokeLinecap="square"
          variants={draw}
          fill="transparent"
          
        />
        <motion.path
          d="M966.184 398.428C981 367.5 978.071 337.673 966.184 321.508C939.367 285.036 895.666 261.839 864.902 229.891C845.827 210.082 830.878 190.029 819.623 165.019C808.953 141.308 808.557 88.6251 824.389 67.3121C851.479 30.846 895.838 25.5 936.5 25.5C966.23 25.5 999 45.5 1016.89 62.546C1030.2 75.2272 1041.92 90.9491 1052.11 105.441C1060.39 117.236 1064.88 131.665 1072.23 144.1C1084.32 164.565 1094.43 186.642 1105.06 207.914C1124.67 247.124 1135.01 290.235 1156.04 329.054C1173.01 360.387 1194.1 385.005 1227.66 398.428C1255.03 409.377 1298.13 412.822 1320.73 390.22C1342.24 368.714 1350.52 345.879 1350.52 316.344C1350.52 300.512 1348.78 290.213 1342.18 275.7C1337.12 264.561 1330.72 251.858 1327.88 239.953C1321.84 214.593 1317.5 189.5 1324.31 161.576C1327.32 149.207 1337.38 131.929 1345.5 123C1355.5 112 1368.75 103.043 1384.5 97.5C1411.5 88 1438.3 100.675 1464.91 100.675"
          stroke="#009494"
          strokeWidth="50"
          strokeLinecap="square"
          variants={draw}
          fill="transparent"
          custom={2.3}
        />


      </motion.svg>I
    </div>
  )
}