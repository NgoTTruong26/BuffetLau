import Banner from "./Banner/banner";
import OurMenus from "./OurMenus";
import SetBuffet from "./SetBuffet/setBuffet";

export default function Home() {
  return (
    <div className="relative">
      <Banner />
      <div className="max-w-[1170px] mx-auto mt-[-84px]">
        <SetBuffet />
        <OurMenus />
      </div>
    </div>
  );
}
