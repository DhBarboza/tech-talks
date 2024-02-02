"use client";
import { useRef } from "react";
import Button from "./Button";
import { Input } from "./Input";

export default function Create() {
    const name = useRef<HTMLInputElement>(null);

    return (
        <>
            <Input type="text" placeholder="Your Name" ref={name}/>
            <Button title="Enter" type="submit"></Button>
        </>
    );
}
