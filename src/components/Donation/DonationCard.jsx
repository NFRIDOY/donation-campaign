// import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

export default function DonationCard({ donation }) {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, } = donation;

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
            <Link to={`/donationDetails/${id}`}>
                <div className="card card-compact rounded-lg" style={cardBg}>
                    <figure className=""><img src={picture} alt="Shoes" className="h-52 w-full" /></figure>
                    <div className="card-body">
                        <h2 style={categoryColor} className="w-fit p-2 text-sm rounded-lg">{category}</h2>
                        <p className="card-title" style={textButtonBg}>{title}</p>

                    </div>
                </div>
            </Link>

        </div>
    )
}

DonationCard.propTypes = {
    donation: PropTypes.object
}