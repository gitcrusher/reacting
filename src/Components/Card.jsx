import React from 'react'

function Card() {

    const data = [
        {image: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww",
            name: "Amazon Basics", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel, explicabo pariatur iusto voluptates possimus inventore nemo quisquam ut aut adipisci autem maxime corporis ullam quidem numquam! Nemo, inventore magnam.",instock:true},
        {image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9sYSUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D", name:'Ola', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel, explicabo pariatur iusto voluptates possimus inventore nemo quisquam ut aut adipisci autem ',instock:false},
        {image: "https://images.unsplash.com/photo-1565531152238-5f20a0f4a3f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VWJlciUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D", name:'Uber', description:'Lorem ipsum dolor sit amet consectetur adipisicing elitFacilis vel, explicabo pariatur iusto voluptates possimus inventore nemo quisquam',instock:false},
    ]

    return (
        <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
            {data.map((elem, index)=>(
                <div key={index} className='w-52 bg-zinc-100  rounded-md overflow-hidden'>
                <div className='w-full h-32 bg-zinc-300'>
                    <img 
                        className='w-full h-full object-cover'
                        src={elem.image} 
                        alt='' 
                    />
                </div>
                <div className='w-full px-3 py-4'>
                    <h2 className='font-semibold'>{elem.name}</h2>
                    <p className='text-xs mt-3'>
                        {elem.description}
                    </p>
                    <button className={`px-4 py-2 ${elem.instock ? 'bg-blue-600 border-cyan-200':'bg-red-600 border-red-400' } text-xs rounded-lg font-semibold   border-x-4 border-y-4 text-zinc-100 mt-3`}>
                        {elem.instock ?"In stock":"Out of stock"}
                    </button>
                </div>
            </div>
            ))}
                
        </div>
    )
}

export default Card