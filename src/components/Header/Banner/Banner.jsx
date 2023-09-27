

export default function Banner({ setSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target[0].value;

        console.log(searchValue);
        setSearch(searchValue);
    }
    return (
        <div>
            <div className="hero min-h-[50vh] mb-14 " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-screen-xl">
                        <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>

                        <div className="flex justify-center gap-2">
                            <div >
                                <form action="" onSubmit={handleSubmit} className="form-control w-72 flex flex-row gap-1">
                                    <input type="text" placeholder="Search By Category" className="input input-bordered w-full md:w-auto rounded-l-lg text-black font-bold" />
                                    <button type="submit" onClick={() => setSearch()} className="btn bg-[#FF444A] text-white hover:bg-black hover:text-white">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
