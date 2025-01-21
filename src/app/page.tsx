import Image from "next/image";
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <main className="h-screen w-screen flex flex-col items-center">
                <div className="flex flex-col w-full max-w-4xl h-full justify-between">
                    <div className="w-full flex justify-center items-center gap-3 mt-10">
                        <Image src="/logo.svg" alt="logo" width={48} height={48}/>
                        <p className="text-4xl text-white">ARctic</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <div>
                            <p className="text-white">
                                Description
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mb-20">
                        <Link href='/ar.html'>
                        <div className="text-white text-3xl px-16 py-2 bg-primary rounded-lg w-fit">

                            Start
                        </div>
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    );
}
