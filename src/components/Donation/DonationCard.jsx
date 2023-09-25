

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
            <div className="card card-compact w-96 bg-base-100 shadow-xl" style={cardBg}>
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 style={categoryColor} className="w-fit p-2 text-sm rounded-lg">{category}</h2>
                    <p className="card-title"  style={textButtonBg}>{title}</p>
                    
                </div>
            </div>
            
        </div>
    )
}

// DonationCard.prototype = {
//     donation.ProtoType =
// }

// {/* <div className={`bg-[${card_bg}] w-fit`}> */}
// <div className="" style={cardBg}>
// <div className="">
//     <img className="object-cover" src={picture} alt="" />
// </div>
// <div className="p-5">
//     {/* <h3 className={`bg-[${category_bg}] text-[${text_button_bg}]`}> */}
//     <h3 style={categoryColor} className="w-fit p-2 text-sm rounded-lg">
//         {category}
//         {/* {category_bg+''} */}
//     </h3>
//     {/* <h2 className={`text-[${text_button_bg}]`}> */}
//     <h2 style={textButtonBg} className="text-2xl">
//         {title}
//     </h2>
// </div>
// </div>