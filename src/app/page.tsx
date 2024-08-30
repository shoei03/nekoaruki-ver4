import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-[500px] h-[300px]">
      <Image
        src="/backGround-0.png"
        layout="fill"
        objectFit="cover"
        alt="background"
        className="absolute"
      />
      <Image
        src="/backGround-1.png" // 重ねる画像のパスを指定
        layout="fill"
        objectFit="contain"
        alt="overlay"
        className="absolute"
      />
    </div>
  );
}
