export default function Experience() {

    const experiences = [
        {
            title: 'Líder Técnico - Desarrollador FullStack',
            company: 'Rocketbot',
            duration: '2019 - Presente',
            description: 'Lidero la arquitectura y evolución de la plataforma de orquestación de Rocketbot. Coordino al equipo de desarrollo, defino estándares técnicos y construyo sistemas internos enfocados en escalabilidad, estabilidad y reducción de incidentes.'
        },
        {
            title: 'Desarrollador PHP - JS',
            company: 'R2da',
            duration: '2017 - 2019',
            description: 'Desarrollé y mantuve un sistema de mantención de activos para un contratista de mineras chilenas.'
        }
    ]

    return (
        <ol>
            {experiences.map(({company, title, description, duration}) => (
                <li key={company}>
                    <div
                        className="relative mx-12 pb-12 grid before:absolute before:-left-8.75 before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
                    >
                        <div className="relative pb-12 md:col-span-2">
                            <div className="sticky top-0">
                                <span className="text-primary -left-10.75 -top-3 absolute rounded-full text-5xl">&bull;</span>

                                <h3 className="text-xl font-bold text-primary">{title}</h3>
                                <h4 className="font-semibold text-xl">{company}</h4>
                                <time className="p-0 m-0 text-sm">{duration}</time>
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                            {description}
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    )
}