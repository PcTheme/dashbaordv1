import React from 'react'

function cards() {
  return (
       <div className="gridscols">
          {["Net income", "Taxes", "Commission", "Withdrawn money", "Total sales","Total Service","Total users","Total messages", "Total categories" , "Total subcategories"].map(
            (item, index) => (
              <div
                key={index}
                className="w-[15rem] h-[5em] border-[1px] mb-5  border-gray-300 text-black hover:text-white hover:border-[0px] transition-all hover:bg-black rounded-md flex items-center justify-center flex-col"
              >
                <div className="w-full flex items-center h-full justify-between text-black hover:text-white px-3">
                  <div className="w-full flex flex-col">
                    <span className="text-[15px]">{item}</span>
                    <span>₹1,845.00</span>
                  </div>
                  <div className="w-[50%] items-center justify-end">
                    <div className="Showpresetnetsj border-[2px] border-emerald-500 text-black">
                      14%
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div> 
  )
}

export default cards
