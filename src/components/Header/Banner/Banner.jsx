

export default function Banner() {
    return (
        <div>
            <div className="hero min-h-[50vh] mb-14 " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-screen-xl">
                        <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>

                        <div className="flex justify-center">
                            <div className="form-control w-72 flex flex-row">
                                <input type="text" placeholder="Search" className="input input-bordered w-full md:w-auto rounded-l-lg" />
                                <button className="btn bg-[#FF444A] text-white hover:bg-black hover:text-white">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
