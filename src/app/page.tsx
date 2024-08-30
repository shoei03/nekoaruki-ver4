import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen">
    {/* 背景画像（背面） */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: "url('/backGround-0.png')" }}
    />

    {/* テキスト部分 */}
    <div className="relative z-10 flex items-center justify-center h-full">
      <h1 className="text-white text-5xl font-bold">Welcome to My Website</h1>
    </div>

    {/* オーバーレイ画像（前面） */}
    <div
      className="absolute inset-0 bg-cover bg-center z-10"
      style={{ backgroundImage: "url('/backGround-1.png')" }}
    />
  </div>
  );
}
