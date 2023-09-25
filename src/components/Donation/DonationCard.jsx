

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
            <div className={` w-fit`} style={cardBg}>
                <div className="">
                    <img src={picture} alt="" />
                </div>
                <div>
                    {/* <h3 className={`bg-[${category_bg}] text-[${text_button_bg}]`}> */}
                    <h3 style={categoryColor}>
                        {category}
                        {/* {category_bg+''} */}
                    </h3>
                    {/* <h2 className={`text-[${text_button_bg}]`}> */}
                    <h2 style={textButtonBg}>
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