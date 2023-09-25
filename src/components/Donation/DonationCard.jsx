

export default function DonationCard({ donation }) {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation;

    const cardBg = {
        backgroundColor: card_bg
    }

    const categoryColor = {
        backgroundColor: category_bg,
        color: text_button_bg
    }

    const textButtonBg = {
        color: text_button_bg
    }
    
    return (
        <div>
            {/* <div className={`bg-[${card_bg}] w-fit`}> */}
            <div className="w-[500]" style={cardBg}>
                <div className="">
                    <img className="object-cover" src={picture} alt="" />
                </div>
                <div className="p-5">
                    {/* <h3 className={`bg-[${category_bg}] text-[${text_button_bg}]`}> */}
                    <h3 style={categoryColor} className="w-fit p-2 text-sm rounded-lg">
                        {category}
                        {/* {category_bg+''} */}
                    </h3>
                    {/* <h2 className={`text-[${text_button_bg}]`}> */}
                    <h2 style={textButtonBg} className="text-2xl">
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    )
}

// DonationCard.prototype = {
//     donation.ProtoType =
// }