import { Send } from "@/Icons";

export default function Chat() {
    return (
        <div className="relative h-full bg-background-comp px-4 pt-4 w-[20%] hidden md:flex rounded-md m-3">
            <div className="relative h-full w-full">
                <div className="bg-gray-700 rounded p-2 ">
                    <div className="flex items-center space-x-2 text-cyan-400">
                        <span>Douglas Henrique</span>
                        <span>19:52</span>
                    </div>
                    <div className="pt-4 text-sm">
                        <span>Text</span>
                    </div>
                </div>

                <form action="" className="absolute bottom-2 w-full">
                    <div className="flex relative items-center">
                        <input
                            type="text"
                            title="message"
                            className="px-3 py-2 bg-terciary rounded-md w-full"
                        />
                        <Send
                            width={25}
                            height={25}
                            className="text-white absolute right-2 cursor-pointer rotate-20"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
