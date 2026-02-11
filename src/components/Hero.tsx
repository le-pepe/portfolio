import {Button} from "@/components/ui/button.tsx";
import {MailIcon} from "lucide-react";
import {Github} from "@/components/icons/Github.tsx";
import {X} from "@/components/icons/X.tsx";

export default function Hero() {
    return (
        <div className="max-w-xl">
            <div className="flex gap-4 mb-4">
                <img
                    className="rounded-full shadow-lg size-24"
                    src="//github.com/le-pepe.png"
                    alt="José González"
                />
            </div>
            <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
                Hey, soy LePepe
            </h1>
            <p
                className="mt-6 text-xl dark:[&>strong]:text-primary/80 [&>strong]:text-primary [&>strong]:font-semibold"
            >
                +10 años de experiencia. <strong>Programador FullStack</strong> de Santiago de Chile. Siempre creando y aprendiendo.
            </p>
            <nav className="flex gap-4 mt-8">
                <Button variant="outline" asChild>
                    <a href="mailto:hola@lepepe.dev">
                        <MailIcon className="size-5" />
                        Contacto
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="https://github.com/le-pepe" target="_blank" rel="noreferrer">
                        <Github className="size-5" />
                        GitHub
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="https://x.com/lepepedev" target="_blank" rel="noreferrer">
                        <X className="size-5" />
                        Sígueme
                    </a>
                </Button>
            </nav>
        </div>
    )
}