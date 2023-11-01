import { Image } from "primereact/image";

interface BannerProps {
  backgroundUrl: string;
  profileUrl: string;
}

export default function Banner({ backgroundUrl, profileUrl }: BannerProps) {
  return (
    <>
      <div
        className="bg-auto bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <Image
          src={`${profileUrl}`}
          width="240"
          imageClassName="border-circle p-3"
        />
      </div>
    </>
  );
}
