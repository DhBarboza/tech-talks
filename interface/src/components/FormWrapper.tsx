"use client";
import { Input } from "./Input";
import Button from "./Button";
import { useState } from "react";
import Join from "./Join";
import Create from "./Create";

export default function FormWrapper() {
    const [joinRoom, setJoinRoom] = useState<"join" | "create">("join");
    const hundleSelectRoom = (room: "join" | "create") => {
        setJoinRoom(room);
    };

    return (
        <div className="">
            <div className="flex items-center text-center">
                <span
                    className={` w-1/2 px-10 ${
                        joinRoom == "join" && "bg-secondary p-4 rounded-t-lg"
                    }  cursor-pointer`}
                    onClick={() => hundleSelectRoom("join")}
                >
                    Join
                </span>
                <span
                    className={` w-1/2 px-10 ${
                        joinRoom == "create" && "bg-secondary p-4 rounded-t-lg"
                    }  cursor-pointer`}
                    onClick={() => hundleSelectRoom("create")}
                >
                    New Meeting
                </span>
            </div>
            <div className="min-w-[600px] w-full bg-secondary rounded-b-lg space-y-8 p-10">
                <Option joinRoom={joinRoom} />
            </div>
        </div>
    );
}

const Option = ({ joinRoom }: { joinRoom: "join" | "create" }) => {
    switch (joinRoom) {
        case "join":
            return <Join />;
        case "create":
            return <Create />;
        default:
            <Join />;
    }
};
