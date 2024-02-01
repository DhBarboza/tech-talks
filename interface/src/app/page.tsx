import Image from "next/image";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { Input } from "@/components/Input";
import Button from "@/components/Button";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1 mx-auto  w-full h-full items-center justify-center">
                <Container>
                    <div className="">
                        <div className="flex items-center text-center">
                            <span className="bg-secondary w-1/2  p-4 rounded-t-lg">
                                Join
                            </span>
                            <span className="w-1/2">Nwe Meeting</span>
                        </div>
                        <div className="min-w-[600px] w-full bg-secondary py-4 rounded-b-lg space-y-6 px-10">
                            <Input type="text" placeholder="s" />
                            <Input type="text" placeholder="s" />
                            <Button title="Enter" type="submit"></Button>
                        </div>
                    </div>
                </Container>
            </div>
        </main>
    );
}
