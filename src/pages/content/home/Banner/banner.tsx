import styles from "./banner.module.scss";
import clsx from "clsx";
import { Fragment, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Banner() {
  const refDiv = useRef<HTMLDivElement>(null);

  const sloganTop = "Ăn thỏa thích - Nhúng thả ga".split(" ");
  const sloganBottom = "Đến ngay Buffet Lẩu T12 - Chỉ từ 159K".split(" ");

  useEffect(() => {
    const h2 = document.querySelectorAll<HTMLElement>("#h2banner");

    window.onscroll = () => {
      h2.forEach((a: HTMLElement) => {
        if (1 - (window.scrollY / a.offsetTop) * 1.25 >= 0) {
          a.style.transform = `translateY(${
            -(window.scrollY / a.offsetTop) * 80
          }px)`;
          a.style.opacity = `${1 - (window.scrollY / a.offsetTop) * 1.25}`;
          return;
        }
        return (a.style.opacity = `0`);
      });
    };
  }, []);

  const variantsAppear = {
    hidden: { opacity: 0, x: "101%" },
    visible: { opacity: 1, x: 0 },
  };

  const transitionAppear = { type: "spring", duration: 1.3 };

  return (
    <>
      <div
        className="restaurant-name h-screen relative bg-no-repeat bg-center-center bg-cover border-[10px] border-[#ca9c5e]"
        style={{
          backgroundImage: `url(https://themes.themegoods.com/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/eric-mcnew-WWtubRjKXK8-unsplash.jpg)`,
        }}
      >
        <div
          className={clsx(
            "h-full absolute top-0 bg-[#000000] w-full opacity-30",
            styles["banner-overlay"]
          )}
        ></div>
        <div
          ref={refDiv}
          className="h-full flex items-center relative flex-col content-center justify-center leading-[0.9] text-white"
        >
          <h2
            id="h2banner"
            className={clsx("w-full text-center", styles.welcome)}
          >
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variantsAppear}
              transition={transitionAppear}
            >
              Welcome
            </motion.span>
            {"\n"}
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variantsAppear}
              transition={transitionAppear}
            >
              to
            </motion.span>
          </h2>
          <div className={clsx("w-full text-center", styles.name)}>
            <h2 id="h2banner" className="text-9xl">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={variantsAppear}
                transition={transitionAppear}
              >
                BUFFET
              </motion.span>
            </h2>
            <h2 id="h2banner" className="text-8xl">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={variantsAppear}
                transition={transitionAppear}
              >
                LAU T12
              </motion.span>
            </h2>
          </div>
          <div className={clsx("w-full text-center", styles.slogan)}>
            <h2 id="h2banner" className="text-center">
              {sloganTop.map((value, index) => (
                <Fragment key={index}>
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={variantsAppear}
                    transition={transitionAppear}
                    key={index}
                  >{`${value}`}</motion.span>{" "}
                  {"\n"}
                </Fragment>
              ))}
            </h2>
            <h2 id="h2banner" className="text-center">
              {sloganBottom.map((value, index) => (
                <Fragment key={index}>
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={variantsAppear}
                    transition={transitionAppear}
                    key={index}
                  >{`${value} `}</motion.span>{" "}
                  {"\n"}
                </Fragment>
              ))}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex relative justify-between mt-[-160px] z-[1]">
        <div className="w-1/2 flex">
          <img
            className="w-[330px]"
            src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/home-leaf-right.png"
            alt="img"
          />
        </div>
        <div className="w-1/2 relative flex justify-end">
          <div className="absolute right-[-62px] bottom-[36px] mt-[-100px]">
            <img
              className="w-[380px] "
              src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/image-from-rawpixel-id-2343322-png.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
