import cardsData from './CertificateCard.json'
import { MdOpenInNew } from "react-icons/md";


const CertificateCard = () => {
    return (
        <div className="relative">
            {/* Horizontal Scrollable Card Container */}
            <div className="flex flex-nowrap gap-4 overflow-x-auto scrollbar-hide px-2">
                {cardsData.map((card, index) => (
                    <a
                        key={index}
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 no-underline"
                    >
                        <div className="relative h-52 w-52 rounded-xl bg-neutral-100 px-4 py-2 shadow-lg cursor-pointer">
                            {/* Logo */}
                            <div className="flex size-6 mt-2 items-center justify-center rounded-lg bg-blac overflow-hidden">
                                <img
                                    className="h-full w-full object-contain"
                                    src={card.image}
                                    alt={card.title}
                                />
                            </div>


                            {/* Title & Subtitle */}
                            <div className="mt-2">
                                <h2
                                    className="text-sm font-bold text-[#292929] truncate max-w-[12rem] cursor-pointer"
                                    title={card.title}
                                >
                                    {card.title}
                                </h2>
                                <p className="inline-flex items-center gap-1 -translate-y-1 text-[10px] font-bold text-neutral-500">
                                    <MdOpenInNew size={12} />
                                    {card.linkDetails}</p>
                            </div>

                            {/* Description */}
                            <div className="mt-1">
                                <p className="text-[10px] leading-snug font-medium break-words text-gray-500">
                                    {card.description}
                                </p>
                            </div>

                            {/* Badge */}
                            <div className="absolute bottom-4">
                                <div className="inline-flex items-center bg-emerald-400 px-1 py-0.5 rounded-sm">
                                    <span className="text-[10px] font-semibold text-white">{card.badgeText}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Blur Gradient Overlay on Right */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-2 bg-gradient-to-l from-emerald-400/80 to-transparent"></div>
        </div>



    )
}

export default CertificateCard
