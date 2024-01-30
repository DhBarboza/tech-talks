import Image from "next/image";
import Header from "@/components/Header";
import Container from "@/components/Container";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
                <div className="flex flex-1 mx-auto max-w-[600px] w-full h-full items-center justify-center">
            <Container>
                    <div>
                        <span>Join</span>
                        <span>Nwe Meeting</span>
                    </div>
                    <div>
                        <input type="text" name="" id="" placeholder="s" />
                        <input type="text" name="" id="" placeholder="s" />
                        <button>Enter</button>
                    </div>
            </Container>
                </div>
        </main>
    );
}
