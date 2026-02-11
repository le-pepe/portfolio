import Hero from "@/components/Hero.tsx";
import Projects from "@/components/Projects.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";
import {Briefcase, CodeXml, UserCheck} from "lucide-react";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import Experience from "@/components/Experience.tsx";
import About from "@/components/About.tsx";


function App() {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            const scrollY = window.scrollY;

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop - 100;
                const sectionHeight = (section as HTMLElement).offsetHeight;
                const sectionId = section.getAttribute("id") || "";

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });

            // Si estamos en la parte superior, no hay sección activa
            if (scrollY < 100) {
                setActiveSection("");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Ejecutar al montar

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <ThemeProvider defaultTheme="dark" storageKey="theme">
            <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-center mt-2 px-8 md:px-0">
                <nav
                    className="flex px-3 py-2 text-sm font-medium rounded-full justify-center items-center bg-background">
                    <ul className="flex text-sm gap-4">
                        <li>
                            <Button variant="ghost" size="sm"
                                    onClick={() => scrollToSection("experience")}
                                    className={`px-2 md:px-4 text-xs md:text-sm ${activeSection === "experience" ? "text-primary" : ""}`}
                            >
                                Experiencia
                            </Button>
                        </li>
                        <li>
                            <Button variant="ghost" size="sm"
                                    onClick={() => scrollToSection("projects")}
                                    className={`px-2 md:px-4 text-xs md:text-sm ${activeSection === "projects" ? "text-primary" : ""}`}
                            >
                                Proyectos
                            </Button>
                        </li>
                        <li>
                            <Button variant="ghost" size="sm"
                                    onClick={() => scrollToSection("about")}
                                    className={`px-2 md:px-4 text-xs md:text-sm ${activeSection === "about" ? "text-primary" : ""}`}
                            >
                                Sobre mí
                            </Button>
                        </li>
                        <li>
                            <ModeToggle/>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="container lg:max-w-5xl md:max-w-4xl mx-auto">
                <section className="py-16 md:py-36">
                    <Hero/>
                </section>
                <div className="space-y-24">
                    <section id="experience" className="scroll-m-20">
                        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3">
                            <Briefcase/>
                            Experiencia Laboral
                        </h2>
                        <Experience/>
                    </section>
                    <section id="projects" className="scroll-m-20">
                        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3">
                            <CodeXml/>
                            Proyectos
                        </h2>
                        <Projects/>
                    </section>
                    <section id="about" className="scroll-m-20">
                        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3">
                            <UserCheck/>
                            Sobre mí
                        </h2>
                        <About/>
                    </section>
                </div>
            </main>
            <footer className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-5xl md:max-w-4xl mb-10 flex justify-center">
                <div className="rounded-lg w-full max-w-7xl mx-auto md:flex md:items-center md:justify-between py-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
                            &copy; {new Date().getFullYear()}{" "}
                            <a href="https://lepepe.dev/" className="hover:underline">
                                LePepe
                            </a>
                            . Casi todos los derechos reservados
                        </span>
                        <span className="text-xs text-zinc-600 dark:text-zinc-400">
                            Plantilla basada en la de{" "}
                            <a
                                href="https://porfolio.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                midudev
                            </a>
                        </span>
                    </div>

                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
                        <li>
                            <a href="/#sobre-mi" className="hover:underline me-4 md:me-6">
                                Sobre mí
                            </a>
                        </li>

                        <li>
                            <a
                                id="contacto"
                                href="mailto:hola@lepepe.dev"
                                className="hover:underline"
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

        </ThemeProvider>
    )
}

export default App
