import { Link } from "react-router-dom"

export default function DonateCard({donate}) {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donate
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-md bg-clip-border text-gray-700 shadow-md" style={{backgroundColor: card_bg}}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-md rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="w-fit py-1 px-2 rounded-md mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased" style={{backgroundColor: card_bg, color:text_button_bg}}>
                        {category}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased" >
                    {title}
                    </h4>
                    <p className="mb-8 block font-sans text-lg leading-relaxed font-bold antialiased" style={{color: text_button_bg}}>
                        {price}
                    </p>
                    <Link className="inline-block" href="">
                        <button
                            className=" btn flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            style={{backgroundColor: text_button_bg}}
                        >
                            View Details
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg> */}
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
