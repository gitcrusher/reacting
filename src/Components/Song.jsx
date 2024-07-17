import React from 'react'

function song() {

    const data =[
        {
            name: "Mahiya Ve",
            discription: "Sung by arijit singh"
        },
        {
            name: "bheegi bheegi si hai raten",
            discription: "Sung by James"
        },
        {
            name: "Mat Azma Re",
            discription: "Sung by KK"
        },
        {
            name: "jaadui",
            discription: "Sung by Jublin Nautyal"
        }
        ];

    return (
        <div  className="w-full h-screen bg-zinc-300 flex flex-col gap-10 items-center justify-center">
            {data.map((elem,index) =>(
                <div className="w-90 px-3 py-2 bg-zinc-100 rounded">
                <h3 className='font-semibold text-xl'>{elem.name}</h3>
                <p className='text-xs mt-2'>{elem.discription}</p>
                <button className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'>Download Now</button>
            </div>
            ))}
        </div>
    )
}

export default song