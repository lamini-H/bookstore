import React from 'react'
import {PiBookOpenTextLight} from 'react-icons/pi';
import {BiLogoChrome, BiUserCircle} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';


const BookModel = ({book, onClose}) => {
  return (

    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
    
      <div onClick={(event) =>event.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>
        <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose} />


    <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'> {book.publishYear}</h2>
    <h4 className='my-2 text-gray-500'>{book._id}</h4>
    <div className='flex justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-red-300 text-2xl' />
        <h2 className='m-1'>{book.title}</h2>
    </div>
    <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300 text-2xl' />
        <h2 className='my-1'>{book.author}</h2>
    </div>

    <p className='mt-4'> Anything can be here to show</p>
    <p className='my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus non atque deleniti dolor beatae aliquid laudantium quaerat tempora repellat veniam ut vero sequi praesentium exercitationem, labore mollitia aspernatur voluptatum cumque?</p>

    </div>
    </div>
  )
}

export default BookModel
