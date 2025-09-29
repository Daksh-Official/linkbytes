import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid md:grid-cols-2 h-[70vh] ">
        <div className="flex justify-center gap-6 p-6 items-center flex-col">
          <h2 className="font-bold text-xl flex items-center">Your Own Link Shortner... <div className='font-bold text-2xl'>Link<span className='text-blue-400'>Bytes</span></div></h2>
          <p className="text-center">LinkBytes is an easy to use url shortner that doesn&apos;t require any of your details. Just paste the Link and have a short version ready to use.</p>
          <Link href='/shorten'><button className='bg-gray-800 px-4 py-2 cursor-pointer hover:bg-gray-700 rounded-full text-white font-bold'>Try Now</button></Link>
        </div>
        <div className="relative hidden md:block">
          <Image src='/vector.jpg' className="mix-blend-darken" alt="image" fill={true} />
        </div>
      </section>
    </main>
  );
}
