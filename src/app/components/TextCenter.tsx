

export default function TextCenter({data}) {
  return (
    <div className="mt-10">
        <h1 className='text-center font-extrabold fon-20'>{data}</h1>
        <div className="flex justify-center">
        <hr className="garis" />
        </div>
    </div>
  )
}
