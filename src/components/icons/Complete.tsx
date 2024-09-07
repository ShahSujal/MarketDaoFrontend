import { motion } from "framer-motion";
function Complete(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="114"
      height="114"
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.circle
        cx="57.0008"
        cy="56.7"
        r="56.2"
        fill="#085D3A"
        fillOpacity="0.2"
        stroke="#17B26A"
        strokeDasharray="4.2 4.2"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 180 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
      />
      <rect x="14" y="13" width="86" height="87" rx="43" fill="#17B26A" />
      <rect
        x="14"
        y="13"
        width="86"
        height="87"
        rx="43"
        stroke="white"
        strokeWidth="2"
      />
      <motion.path
        d="M45.8008 56.5001L52.8008 63.5001L68.2008 48.1001"
        stroke="white"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, strokeOpacity: 0 }}
        animate={{ pathLength: 1, strokeOpacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

export default Complete;
