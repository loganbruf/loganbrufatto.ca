import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className ="items-center justify-center min-h-screen p-24">
      <Profile />
      <Options />
    </div>
  );
}

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-5 p-10">
      <Image
        src={"/images/profile.jpg"}
        alt="Profile Picture"
        width={300}
        height={300}
        className="rounded-full shadow-[0px_0px_40px_2px_rgba(255,255,255,.75)]" />
      <h1 className="text-2xl font-bold mt-5">Logan Brufatto</h1>
      <h2 className="text-m text-gray-400">QA Analyst and Software Developer</h2>
    </div>
  );
}

function Options() {
  return (
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-2 gap-10">
        <Link href="https://www.linkedin.com/in/loganbrufatto/">
          <Image
            src={"/images/linkedin.png"}
            alt="LinkedIn"
            width={100}
            height={100}
          />
        </Link>
        <Link href="https://github.com/loganbruf">
          <Image
            src={"/images/github.png"}
            alt="GitHub"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
}