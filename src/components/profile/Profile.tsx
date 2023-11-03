import Banner from "./banner/Banner";
import ExtraDetails from "./extra-details/ExtraDetails";
import OtherDetails from "./extra-details/OtherDetails";

export default function Profile() {
  return (
    <>
      <Banner
        backgroundUrl="src/images/Stock_8.jpg"
        profileUrl="src/images/Stock_7_profile.jpg"
      />
      <ExtraDetails />
      <OtherDetails/>
    </>
  );
}
