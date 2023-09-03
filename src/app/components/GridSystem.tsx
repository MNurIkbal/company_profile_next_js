export default function GridSystem({ data_grid_system }) {
    return (
        <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 " >
                {data_grid_system.map((item) => (
                    <div className="bg-blue-700 p-4  rounded-lg text-white ">
                        <h3 className="font-bold">{item.title}</h3>
                        <p>{item.deskripsi}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
