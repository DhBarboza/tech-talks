import Image from "next/image";
import Container from "./Container";

export default function Header() {
    return (
        <>
            <div className="bg-background-comp px-4 py-5">
                <Container>
                    <div className="flex justify-between">
                        <Image
                            alt="Tech Talk"
                            src="/logo-tech-talks.jpeg"
                            width={60}
                            height={60}
                        />
                        <Image
                            alt="DG Book"
                            src="/logo-dg-book.jpeg"
                            width={60}
                            height={60}
                        />
                    </div>
                </Container>
            </div>
        </>
    );
}
