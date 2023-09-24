

export default function DonationCard({ donation }) {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation;

    
    return (
        <div>
            <div className={`bg-[${card_bg}] w-fit`}>
                <div className="">
                    <img src={picture} alt="" />
                </div>
                <div>
                    <h3 className={`bg-[${category_bg}] text-[${text_button_bg}]`}>
                        {category}
                        {/* {category_bg+''} */}
                    </h3>
                    <h2 className={`text-[${text_button_bg}]`}>
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