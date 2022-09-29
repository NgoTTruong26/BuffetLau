import clsx from "clsx";

export default function OurMenus() {
  const menus = [
    {
      set: "159K",
      dishes: [
        {
          name: "Salted Fried Chicken",
          price: "$20.0",
          new: false,
        },
        {
          name: "Crab With Curry Sources",
          price: "$24.5",
          new: false,
        },
        {
          name: "Baked Potato Pizza",
          price: "$12.0",
          new: true,
        },
        {
          name: "Crab With Curry Sources",
          price: "$24.5",
          new: false,
        },
        {
          name: "Crab With Curry Sources",
          price: "$24.5",
          new: false,
        },
        {
          name: "Crab With Curry Sources",
          price: "$24.5",
          new: false,
        },
      ],
    },
    {
      set: "159K",
      dishes: [
        {
          name: "Salted Fried Chicken",
          price: "$20.0",
          new: false,
        },
        {
          name: "Crab With Curry Sources",
          price: "$24.5",
          new: false,
        },
        {
          name: "Baked Potato Pizza",
          price: "$12.0",
          new: true,
        },
        {
          name: "Crab With Curry Sources",
          price: "$24.5",
          new: false,
        },
        {
          name: "Crab With Curry Sources",
          price: "$24.5",
          new: false,
        },
        {
          name: "Crab With Curry Sources",
          price: "$24.5",
          new: false,
        },
      ],
    },
  ];

  return (
    <div className="font-Lobster border-2 px-[40px] py-[20px] mt-[100px]">
      <h2 className="text-center text-7xl text-slate-100 w-fit mx-auto mt-[-65px] px-[20px] bg-[#0b1517]">
        Our Menus
      </h2>
      {menus.map((menu, index) => (
        <div
          key={index}
          className={clsx("flex flex-wrap justify-between", {
            "mt-[30px]": index >= 1,
          })}
        >
          <h3 className="w-full text-6xl text-slate-100">{menu.set}</h3>
          {menu.dishes.map((dish, index) => (
            <div
              key={index}
              className="flex w-[45%] justify-between text-3xl text-[#ca9c5e] pt-[25px]"
            >
              <div>{dish.name}</div>
              <div>{dish.price}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
