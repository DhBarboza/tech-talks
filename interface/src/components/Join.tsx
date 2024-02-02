"use client";
import { useRef } from "react";
import Button from "./Button";
import { Input } from "./Input";

export default function Join() {
    const name = useRef<HTMLInputElement>(null)
    const id = useRef<HTMLInputElement>(null)

    return (
        <>
            <Input type="text" placeholder="Your name" ref={name} />
            <Input type="text" placeholder="The meeting id" ref={id}/>
            <Button title="Enter" type="submit"></Button>
        </>
    );
}
