import { Image } from "primereact/image";

interface LogoProps {
  logo_path: string;
  width: string;
}

export default function Logo({ logo_path, width }: LogoProps) {
  return <Image src={logo_path} width={width} />;
}
