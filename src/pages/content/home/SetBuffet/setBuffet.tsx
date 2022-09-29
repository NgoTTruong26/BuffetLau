import srcSet159 from "./Image/277356723_5190374224361404_1978612321309134065_n.jpg";
import srcSet219 from "./Image/276124313_5190374667694693_2373930496844717162_n.jpg";
import srcSet299 from "./Image/276137555_5190374801028013_8807721092422998356_n.jpg";
import clsx from "clsx";
import BuffetCoca from "./buffetCoca";
import { motion } from "framer-motion";

export default function SetBuffet() {
  const menuSet = [
    {
      nameClass: "set159",
      set: "SET",
      price: "159K",
      slogan: "Gọi thả ga, ăn thật đã",
      somon: "15 món",
      src: srcSet159,
    },
    {
      nameClass: "set219",
      set: "SET",
      price: "219K",
      slogan: "-Best Seller- Thêm hải sản",
      somon: "19 món",
      src: srcSet219,
      left: true,
    },
    {
      nameClass: "set299",
      set: "SET",
      price: "299K",
      slogan: "Special",
      somon: "23 món",
      src: srcSet299,
    },
  ];

  const variantsImg = {
    hidden: { opacity: 0 },
    screen: {
      opacity: 1,
    },
  };

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
    <div className="relative ">
      {menuSet.map((set, index) =>
        set.left ? (
          <div
            key={index}
            className={clsx("flex", {
              "mt-[80px]": index > 0,
            })}
          >
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
                    {set.set}{" "}
                  </motion.span>
                  <motion.span
                    initial="hidden"
                    whileInView="screen"
                    viewport={viewportText}
                    variants={variantsTextLeft}
                    transition={transitionText}
                    className="text-8xl inline-block"
                  >
                    {set.price}
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
                    {set.slogan}
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
                    {set.somon}
                  </motion.span>
                </div>
              </div>
              <div>
                <img
                  className="w-[470px] mt-[100px] rotate-180"
                  src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/divider.png"
                  alt=""
                />
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="screen"
              viewport={{ once: true, amount: 0.1 }}
              variants={variantsImg}
              transition={{ duration: 0.3 }}
              className={clsx(
                `w-[40%] relative bg-115% bg-no-repeat bg-top-[15px]`,
                {
                  "bg-set159": "set159" === set.nameClass,
                  "bg-set219": "set219" === set.nameClass,
                  "bg-set299": "set299" === set.nameClass,
                }
              )}
            >
              <img className="invisible" src={set.src} alt="Set159" />
              <div className="absolute top-0 w-full h-full bg-black opacity-[0.08]"></div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            key={index}
            className={clsx("flex", {
              "mt-[80px]": index > 0,
            })}
          >
            <motion.div
              initial="hidden"
              whileInView="screen"
              viewport={{ once: true, amount: 0.1 }}
              variants={variantsImg}
              transition={{ duration: 0.3 }}
              className={clsx(
                `w-[40%] relative bg-115% bg-no-repeat bg-top-[15px]`,
                {
                  "bg-set159": "set159" === set.nameClass,
                  "bg-set219": "set219" === set.nameClass,
                  "bg-set299": "set299" === set.nameClass,
                }
              )}
            >
              <img className="invisible" src={set.src} alt="Set159" />
              <div className="absolute top-0 w-full h-full bg-black opacity-[0.08]"></div>
            </motion.div>
            <div className="flex flex-col justify-center font-Lobster text-6xl">
              <div className="text-[#ca9c5e] pl-[100px] leading-[65px]">
                <div className="leading-relaxed">
                  <motion.span
                    initial="hidden"
                    whileInView="screen"
                    viewport={{ once: true, amount: 1 }}
                    variants={variantsText}
                    transition={transitionText}
                    className="inline-block"
                  >
                    {set.set}
                  </motion.span>
                  <motion.span
                    initial="hidden"
                    whileInView="screen"
                    viewport={viewportText}
                    variants={variantsText}
                    transition={transitionText}
                    className="text-8xl inline-block"
                  >
                    {set.price}
                  </motion.span>
                </div>
                <div>
                  <motion.span
                    initial="hidden"
                    whileInView="screen"
                    viewport={viewportText}
                    variants={variantsText}
                    transition={transitionText}
                    className="inline-block"
                  >
                    {set.slogan}
                  </motion.span>
                </div>
                <div>
                  <motion.span
                    initial="hidden"
                    whileInView="screen"
                    viewport={viewportText}
                    variants={variantsText}
                    transition={transitionText}
                    className="inline-block"
                  >
                    {set.somon}
                  </motion.span>
                </div>
              </div>
              <div>
                <img
                  className="w-[470px] mt-[100px]"
                  src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/divider.png"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        )
      )}
      <BuffetCoca />
    </div>
  );
}
