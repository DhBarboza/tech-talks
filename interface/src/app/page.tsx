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
                    <div className="max-w-[600px] w-full bg-secondary p-4 rounded-lg">
                        <div>
                            <span>Join</span>
                            <span>Nwe Meeting</span>
                        </div>
                        <div className="space-y-4">
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
