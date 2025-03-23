import Image from "next/image";
import Link from "next/link";
import { Home as HomeIcon, Settings, Menu } from "lucide-react";

export default function Home() {
    return (
        <div className="bg-black text-white h-screen w-screen flex flex-col relative">
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                    <p className="text-2xl font-bold">ARctic</p>
                </div>

                <button className="md:hidden">
                    <Menu className="w-6 h-6 text-white" />
                </button>

                <Link href="/" className="hidden md:block">
                    <HomeIcon className="text-white w-6 h-6" />
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-10 max-w-2xl mx-auto">
                <Image src="/ar-icon.png" alt="AR Icon" width={200} height={200} className="mb-8" />

                <p className="text-xl font-medium leading-relaxed">
                    Experience the world of Augmented Reality!<br />
                    Explore, interact, and enjoy.
                </p>

                <Link
                    href="/definition"
                    className="mt-2 text-sm text-blue-400 underline hover:text-blue-300 transition"
                >
                    Learn more about AR
                </Link>

                <div className="mt-10 flex flex-col gap-4 w-full max-w-xs">
                    <Link href="/ar.html">
                        <div className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 rounded-lg transition">
                            Start
                        </div>
                    </Link>

                    <Link href="/how-to-play">
                        <div className="bg-white text-black text-sm font-semibold py-2 rounded">
                            How to Play?
                        </div>
                    </Link>

                    <button className="bg-white text-black py-2 rounded text-sm">
                        Terms of Use
                    </button>
                </div>
            </main>

            {/* Settings Icon  */}
            <div className="absolute bottom-6 right-6">
                <Link href="/settings">
                    <Settings className="text-white w-6 h-6" />
                </Link>
            </div>
        </div>
    );
}

