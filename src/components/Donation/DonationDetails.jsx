import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { DonationContext } from '../../Layout/MainLayout'

// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';

import Swal from 'sweetalert2'

import 'react-toastify/dist/ReactToastify.css';



export default function DonationDetails() {

    // Tost
    // const notify = () => toast("Wow so easy !");

    const [donation, setDonation] = useState();
    // const [btnBg, setBtnBg] = useState();
    const [allDonations, setAllDonations] = useContext(DonationContext)

    const [isActive, setIsActive] = useState(true);

    const { id } = useParams()
    // console.log(id);

    const donations = useLoaderData();
    // const {picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donations;
    // console.log("donations From Details", donations );

    useEffect(() => {
        const findDonation = donations.find((donation1) => donation1.id == id);
        // console.log(findDonation);

        setDonation(findDonation);

        setAllDonations(JSON.parse(localStorage.getItem("Donated")))
        console.log(allDonations);

    }, [id, donation, isActive])


    // const btnBgStyle = {
    //     backgroundColor: btnBg,
    // }

    const handleDonateBtn = () => {

        // setIsActive(!isActive)
        // setAllDonations(...allDonations + donation)

        const addToDonateArray = [];

        const getDonated = JSON.parse(localStorage.getItem("Donated"));

        if (!getDonated) {
            addToDonateArray.push(donation)
            console.log(addToDonateArray);
            localStorage.setItem("Donated", JSON.stringify(addToDonateArray))
            // localStorage.setItem(JSON.stringify(donation.id), JSON.stringify(addToDonateArray))
            // alert("Succesfully Donated")
            let timerInterval
            Swal.fire({
                title: 'Succesfully Donated',
                html: 'Close in <b></b> ms.',
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        }
        else {
            // addToDonateArray.push(...getDonated)
            // alert("Else")
            console.log("donation.id", donation.id);
            // console.log(addToDonateArray);
            // const listDonatedArray = 
            addToDonateArray.map(donatedAlready => console.log(donatedAlready.id))
            // console.log(listDonatedArray);
            const isExist = getDonated.find(donatedAlready => donatedAlready.id === donation.id)
            console.log("Is ex", isExist);
            if (!isExist) {
                addToDonateArray.push(...getDonated, donation);
                localStorage.setItem("Donated", JSON.stringify(addToDonateArray));
                // alert("Succesfully Donated");

                let timerInterval
                Swal.fire({
                    title: 'Succesfully Donated',
                    html: 'Close in <b></b> ms.',
                    // html: 'I will close in <b></b> milliseconds.',
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })
            }
            else {
                // alert("You Have Donated To " + isExist.title);
                let timerInterval
                Swal.fire({
                    title: 'Error! You Have Already Donated',
                    html: 'Close in <b></b> ms.',
                    // html: 'I will close in <b></b> milliseconds.',
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })

            }

        }

        
    }

    return (
        <div>
            <div>
                <div className="relative">
                    <img className="h-[85vh] w-full" src={donation?.picture} alt="" />
                    <div className="bg-[rgba(11,11,11,0.50)] h-32 absolute w-full bottom-0">A</div>
                    <button onClick={handleDonateBtn} className="bg-[rgba(11,11,11,0.50)] absolute bottom-10 left-10 btn text-white border-none" style={{ backgroundColor: donation?.text_button_bg, }} >
                        Donate {donation?.price}
                    </button>
                </div>
                <div className="my-10">
                    <h1 className="text-6xl pb-10 font-bold">
                        {donation?.title}
                    </h1>
                    <p className="text-xl text-[#0b0b0bb2]">
                        {donation?.description}

                    </p>
                </div>
            </div>

        </div>

    )
}
