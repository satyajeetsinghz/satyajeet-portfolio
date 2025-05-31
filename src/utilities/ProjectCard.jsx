import cards from './ProjectCard.json';

const colorMap = {
    "emerald": "bg-emerald-400",
    "yellow": "bg-yellow-500",
    "red": "bg-red-400",
    "cyan": "bg-cyan-400"
};

const textColorMap = {
  emerald: "text-emerald-400",
  yellow: "text-yellow-600",
  red: "text-red-400",
  cyan: "text-cyan-400"
};



const ProjectCard = () => {
    return (
        <div className="flex flex-wrap gap-4">
            {cards.map((card) => (
                <a
                    key={card.id}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <div
                        className="relative h-52 w-52 overflow-hidden rounded-2xl bg-cover bg-center transition-transform hover:scale-105"
                        style={{ backgroundImage: `url(${card.image})` }}
                    >
                        <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                        <div className="absolute bottom-6 left-3">
                            <h2 className={`text-lg font-bold ${textColorMap[card.titleColor]}`}>{card.title}</h2>
                            <p className="text-xs font-medium text-white">{card.subtitle}</p>
                            <div className="inline-flex translate-y-1 gap-1 text-[10px] font-semibold text-white">
                                {card.buttons.map((btn, i) => (
                                    <button
                                        key={`${card.id}-${i}`}
                                        className={`rounded-xl ${colorMap[btn.bgColor]} px-2 py-0.5 text-center`}
                                    >
                                        {btn.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* <div className="absolute right-4 bottom-4">
                            <span className="text-lg font-bold text-white">
                                <img className='w-8' src="public/assets/arrow-forward-circle.svg" alt="" />
                            </span>
                        </div> */}
                    </div>
                </a>
            ))}
        </div>

    )
}

export default ProjectCard
