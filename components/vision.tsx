import Image from "next/image";

export default function Vision() {
    return (
        <div className="bg-primary-bg min-h-screen flex flex-col md:flex-row p-8">
            {/* Left Side: Vision and Mission */}
            <div className="flex-1 space-y-8">
                <div>
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                    <p className="text-gray-700">
                        To create a world where technology empowers everyone to achieve more.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                    <p className="text-gray-700">
                        To innovate and deliver solutions that drive progress and make a meaningful impact.
                    </p>
                </div>
            </div>

            {/* Right Side: Founder's Notes */}
            <div className="flex-1 mt-8 md:mt-0 md:ml-8">
                <h2 className="text-2xl font-bold mb-4">Founder's Notes</h2>
                <p className="text-gray-700 mb-8">
                    At Forgex, we believe in pushing boundaries and challenging the status quo. Our journey is fueled by passion, innovation, and a commitment to excellence.
                </p>
                <div className="flex items-center space-x-4">
                    <Image
                        src="/images/founder-avatar.jpg"
                        alt="Founder's Avatar"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full"
                    />
                    <div>
                        <h3 className="text-lg font-bold">John Doe</h3>
                        <p className="text-gray-500">Founder & CEO</p>
                        <a
                            href="https://founderwebsite.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            founderwebsite.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};