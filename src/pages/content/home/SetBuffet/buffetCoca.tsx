import srcCoca from "./Image/coca-cola.png";
import srcLogoCoca from "./Image/Logo-Cocacola.png";
import { motion } from "framer-motion";
export default function BuffetCoca() {
  const variantsText = {
    hidden: { opacity: 0, x: "101%" },
    screen: {
      opacity: 1,
      x: 0,
    },
  };

  const variantsTextLeft = {
    hidden: { opacity: 0, x: "-101%" },
    screen: {
      opacity: 1,
      x: 0,
    },
  };

  const transitionText = { type: "spring", duration: 1 };
  const viewportText = { once: true, amount: 0.2 };

  return (
    <div className="flex mt-[80px]">
      <div className="flex flex-col justify-center font-Lobster text-6xl pl-[50px]">
        <div className="text-[#ca9c5e] pr-[50px] leading-[65px]">
          <div className="leading-relaxed">
            <motion.span
              initial="hidden"
              whileInView="screen"
              viewport={viewportText}
              variants={variantsTextLeft}
              transition={transitionText}
              className="inline-block"
            >
              Buffet
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="screen"
              viewport={viewportText}
              variants={variantsTextLeft}
              transition={transitionText}
              className="inline-block"
            >
              Coca-Cola
            </motion.span>
          </div>
          <div>
            <motion.span
              initial="hidden"
              whileInView="screen"
              viewport={viewportText}
              variants={variantsTextLeft}
              transition={transitionText}
              className="inline-block"
            >
              Uống thả ga Coca-Cola
            </motion.span>
          </div>
          <div>
            <motion.span
              initial="hidden"
              whileInView="screen"
              viewport={viewportText}
              variants={variantsTextLeft}
              transition={transitionText}
              className="inline-block"
            >
              Chỉ với 29k/người
            </motion.span>
          </div>
        </div>
      </div>
      <div className="w-[40%] relative">
        <div className="absolute w-[80%] top-[-41px] right-[-132px] rounded-full">
          <motion.img
            initial="hidden"
            whileInView="screen"
            viewport={viewportText}
            variants={variantsTextLeft}
            transition={{ type: "spring", duration: 1.5 }}
            className="rounded-full"
            src={srcLogoCoca}
            alt="Logo Coca-Cola"
          />
        </div>
        <motion.img
          initial="hidden"
          whileInView="screen"
          viewport={{ once: true, amount: 0.2 }}
          variants={variantsText}
          transition={{ type: "spring", duration: 1.5 }}
          className="min-h-[620px] relative inline-block"
          src={srcCoca}
          alt="Coca-Cola"
        />
      </div>
    </div>
  );
}
