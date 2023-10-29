import { Image } from "primereact/image";

export default function Banner() {
  return (
    <>
      <div
        className="bg-auto bg-no-repeat"
        style={{
          backgroundImage: 'url("src/images/stock_8.jpg")',
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <Image
          src="src/images/stock_7_profile.jpg"
          width="240"
          imageClassName="border-circle p-3"
        />
      </div>
    </>
  );
}
