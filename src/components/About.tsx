export default function About() {
    return (
        <article className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <div
                className="[&>p]:mb-4
               [&>p>strong]:text-primary
               dark:[&>p>strong]:text-primary/80
               [&>p>strong]:font-normal
               [&>p>strong]:font-mono
               text-pretty
               order-2
               md:order-1"
            >
                <p>
                    Me llamo José González aunque en las redes me hago llamar{" "}
                    <strong>LePepe</strong>. Comencé a programar cuando monté mi primer servidor
                    de Mu Online. Actualmente estoy{" "}
                    <strong>liderando un equipo de desarrollo en Rocketbot</strong>.
                </p>

                <p>
                    Mi gran logro es la capacidad de{" "}
                    <strong>
                        aprender programación de manera autodidacta
                    </strong>
                    . Aunque como líder programo menos, siempre busco algo que hacer en mis tiempos libres.
                </p>

                <p>
                    Soy un apasionado por los videojuegos y la animación japonesa, tambien disfruto de ver películas o series.
                    Actualmente me encuentro desarrollando unas cuantas cosas, espero poder compartirlas con ustedes.
                </p>
            </div>

            <img
                width="200"
                height="200"
                src="//github.com/le-pepe.png"
                alt="José González"
                className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
                style={{ objectPosition: "50% 50%" }}
            />
        </article>

    )
}