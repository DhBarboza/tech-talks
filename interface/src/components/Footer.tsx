"use client";
import {
    Microphone,
    Monitor,
    Phone,
    Video,
    MicrophoneOff,
    MonitorOff,
    VideoOff,
} from "@/Icons";
import { useState } from "react";

export default function Footer() {
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, "0") + ":";
    const minute = date.getMinutes().toString().padStart(2, "0");

    const [isMuted, setIsMuted] = useState(false);
    const [isCameraOff, setIsCameraOff] = useState(false);
    const [isScreenSharing, setIsScreenSharing] = useState(false);

    return (
        <div className="fixed bottom-0 bg-black py-6 w-full">
            <div className="grid grid-cols-3 items-center">
                <span className="text-xl px-10">{hour + minute}</span>
                <div className="flex space-x-6 justify-center">
                    {/* Microphone Settings: */}
                    {isMuted ? (
                        <MicrophoneOff
                            className="h-12 w-16 text-white p-2 bg-background-comp rounded-md cursor-pointer"
                            onClick={() => setIsMuted(!isMuted)}
                        />
                    ) : (
                        <Microphone
                            className="h-12 w-16 text-white p-2 bg-background-comp rounded-md cursor-pointer"
                            onClick={() => setIsMuted(!isMuted)}
                        />
                    )}

                    {/* Camera settings: */}
                    {isCameraOff ? (
                        <VideoOff
                            className="h-12 w-16 text-white p-1 bg-background-comp rounded-md cursor-pointer"
                            onClick={() => setIsCameraOff(!isCameraOff)}
                        />
                    ) : (
                        <Video
                            className="h-12 w-16 text-white p-1 bg-background-comp rounded-md cursor-pointer"
                            onClick={() => setIsCameraOff(!isCameraOff)}
                        />
                    )}

                    {/* Video settings: */}
                    {isScreenSharing ? (
                        <MonitorOff
                            className="h-12 w-16 text-white p-2 bg-background-comp rounded-md cursor-pointer"
                            onClick={() => setIsScreenSharing(!isScreenSharing)}
                        />
                    ) : (
                        <Monitor
                            className="h-12 w-16 text-white p-2 bg-background-comp rounded-md cursor-pointer"
                            onClick={() => setIsScreenSharing(!isScreenSharing)}
                        />
                    )}

                    <Phone className="h-12 w-16 text-white p-2 hover:bg-red-700 bg-primary rounded-md cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
