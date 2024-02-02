// import Image from "next/image";
import Header from "@/components/Header";
import Container from "@/components/Container";
import FormWrapper from "@/components/FormWrapper";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1 mx-auto  w-full h-full items-center justify-center">
                <Container>
                    <FormWrapper />
                </Container>
            </div>
        </main>
    );
}
