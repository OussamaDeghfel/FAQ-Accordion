import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'

const Faq = ({question = "", answer = ""}) => {
    const [show, setShow] = useState(true)
  return (
    <div className="hover:shadow-md p-3 rounded-md">
          <div className="flex text-purple-950 justify-between">
            <h2 className="text-md font-bold flex-wrap">
              {question}
            </h2>
            <button>
              {show ? (
                <FaPlusCircle onClick={() => setShow(!show)} />
              ) : (
                <FaMinusCircle onClick={() => setShow(!show)} />
              )}
            </button>
          </div>
          {!show && (
            <p className="my-3 opacity-60">
              {answer}
            </p>
          )}
        </div>
  )
}

export default Faq