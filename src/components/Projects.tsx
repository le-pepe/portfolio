import {React} from "@/components/icons/React.tsx";
import {Github} from "@/components/icons/Github.tsx";
import { LinkIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import type {JSX} from "react";
import {Badge} from "@/components/ui/badge.tsx";
import {Tailwind} from "@/components/icons/Tailwind.tsx";
import {Astro} from "@/components/icons/Astro.tsx";
import {NextJS} from "@/components/icons/NextJS.tsx";
import {PostgreSQL} from "@/components/icons/PostgreSQL.tsx";
import {Clerk} from "@/components/icons/Clerk.tsx";
import {Vue} from "@/components/icons/Vue.tsx";
import {Shadcn} from "@/components/icons/Shadcn.tsx";

interface Project {
    name: string;
    url?: string;
    screenshot?: string;
    tech: { name: string, icon: JSX.Element }[];
    description: string;
    repo?: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            name: "Timezone Map - Simple mapa interactivo de zonas horarias",
            url: "//timezonemap.lepepe.dev",
            screenshot: "/img/timezonemap.png",
            tech: [
                {name: "React", icon: <React className={"size-4"}/>},
                {name: "Tailwind CSS", icon: <Tailwind className={"size-4"}/>}
            ],
            description: "Este sistema permite visualizar y explorar las zonas horarias del mundo mediante un mapa interactivo. Al seleccionar una región o ciudad, muestra la hora actual y su huso horario, permite comparar con la hora local y UTC, y convertir horarios entre distintas zonas. Incluye soporte multilenguaje (español e inglés) y modos claro/oscuro para adaptarse a la preferencia del usuario.",
            repo: 'https://github.com/le-pepe/timezonemap'
        },
        {
            name: "My IP - Sistema para mostrar información de la IP pública",
            url: "//ip.lepepe.dev",
            screenshot: "/img/myip.png",
            tech: [
                {name: "Astro", icon: <Astro className={"size-4"}/>}
            ],
            description: "Este sistema muestra en tiempo real la dirección IP pública del usuario junto con información básica de la solicitud, como el User-Agent, idioma del navegador, método HTTP, codificaciones soportadas y tipos MIME aceptados.",
            repo: 'https://github.com/le-pepe/ipconfig'
        },
        {
            name: "DungeonTap - Juego de RPG web",
            url: "//dungeontap.cc",
            screenshot: "/img/dungeontap.png",
            tech: [
                {name: 'Next.js', icon: <NextJS className={"size-4"}/>},
                {name: 'PostgreSQL', icon: <PostgreSQL className={"size-4"}/>},
                {name: 'Tailwind CSS', icon: <Tailwind className={"size-4"}/>},
                {name: 'Clerk', icon: <Clerk className={"size-4"}/>},
                {name: 'Shadcn UI', icon: <Shadcn className={"size-4"}/>}
            ],
            description: "DungeonTap es un juego web RPG, donde puedes explorar mazmorras y cazar monstruos, está en fase beta."
        },
        {
            name: "Wz Next Season",
            url: '//wznextseason.com',
            screenshot: "/img/wznextseason.png",
            tech: [
                {name: 'Vue.js', icon: <Vue className={"size-4"}/>},
                {name: 'Tailwind CSS', icon: <Tailwind className={"size-4"}/>}
            ],
            description: "Contador de tiempo de duración de la temporada actual de Call of Duty: Warzone y Call of Duty: Black Ops 7."
        }
    ]
    return (
        <div className="flex flex-col gap-y-16">
            {
                projects.map(({name, url, description, tech, repo, screenshot}) => (
                    <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0" key={name}>
                        {screenshot && (
                            <div className="w-full md:w-1/2">
                                <div
                                    className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                                    <img alt={name}
                                         className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                                         loading="lazy" src={screenshot || "//via.placeholder.com/640x360"}/>
                                </div>
                            </div>
                        )}

                        <div className="w-full md:w-1/2 md:max-w-lg">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                {name}
                            </h3>
                            <div className="flex flex-col mt-2">
                                <ul className="flex flex-row flex-wrap mb-2 gap-2 items-center">
                                    {tech.map((tag) => (
                                        <li key={tag.name}>
                                            <Badge className="flex items-center gap-1">
                                                {tag.icon}
                                                {tag.name}
                                            </Badge>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-2">{description}</div>
                                <footer className="flex items-end justify-start mt-4 gap-x-4">

                                    {url && (
                                        <Button variant="link" asChild>
                                            <a href={url}>
                                                <LinkIcon className="size-4"/>
                                                Preview
                                            </a>
                                        </Button>
                                    )}
                                    {repo && (
                                    <Button asChild>
                                        <a href={repo}>
                                            <Github className="size-4"/>
                                            Repo
                                        </a>
                                    </Button>
                                )}
                                </footer>
                            </div>
                        </div>
                    </article>
                ))
            }
        </div>
    )
}