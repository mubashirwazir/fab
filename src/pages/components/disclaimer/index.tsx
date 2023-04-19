export const Disclaimer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return (
        <>
            <div className="w-[80%] mx-auto grid grid-cols-2 gap-8 p-4 ">
                <div>
                    <p className="py-4">
                    IT Comrade Inc. All Right Reserved.
                    </p>
                </div>
                <div className="flex justify-end ">
                <button className="p-4 bg-black text-white rounded" onClick={scrollToTop}>Top </button>
                </div>
            </div>

        </>

    )
}