import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";

export default function LivingRoom({ params }: { params: { id: string } }) {
    return (
        <div className="h-screen">
            <Header />
            <div className="flex h-[76%]">
                <div className="md:w-[80%] w-full m-3">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="bg-gray-600 w-full rounded-md h-full p-2 relative">
                            <video src="" className="h-full w-full"></video>
                            <span className="absolute bottom-3">
                                Douglas Henrique
                            </span>
                        </div>

                        <div className="bg-gray-600 w-full rounded-md h-full p-2 relative">
                            <video src="" className="h-full w-full"></video>
                            <span className="absolute bottom-3">
                                Douglas Henrique
                            </span>
                        </div>
                    </div>
                </div>
                <Chat />
            </div>
            <Footer />
        </div>
    );
}
