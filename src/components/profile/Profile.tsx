import Banner from "./banner/Banner";
import ExtraDetails from "./extra-details/ExtraDetails";

export default function Profile() {
  return (
    <>
      <Banner
        backgroundUrl="src/images/Stock_8.jpg"
        profileUrl="src/images/Stock_7_profile.jpg"
      />
      <ExtraDetails />
    </>
  );
}
