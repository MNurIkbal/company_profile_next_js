import Image from 'next/image';

export default function ColTwo({ data_query }) {
    return (
        <div className=' pl-5 pr-5'>
            {data_query.map((item) => (
                <div className="grid md:grid-cols-1 mt-10 lg:grid-cols-2 gap-5 justify-items-center   " style={{ alignItems: 'center' }}>
                    <div>
                        <Image src={item.img} width={500} height={400} className='object-cover' alt='gambar' />
                    </div>
                    <div>
                        <h1 className='font-bold font-style text-blue-700'>{item.judul}</h1>
                        <br />
                        <p className='text-justify fon-sm '>
                            {item.deskripsi}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    )
}
