import React from 'react'

const RightCardContent = (props) => {
    // console.log(props.id)
  return (
  <div className="h-full w-full absolute top-0 left-0  p-6 flex flex-col justify-between">
        <h2 className="flex justify-center items-center bg-white h-6 w-6 rounded-full text-1xl font-bold border-red-100">
          {props.id+1}
        </h2>
        <div>
          <p className="text-sm leading-relaxed text-rose-50 mb-6">
            {props.intro}
          </p>
          <button className="bg-blue-600 text-white font-semibold px-7 py-1.5 rounded-full text-sm">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-semibold px-4 py-1.5 ml-2.5 rounded-full text-sm ">
            <i className="ri-arrow-right-line bg-blue-600"></i>
          </button>
        </div>
      </div>
  )
}

export default RightCardContent