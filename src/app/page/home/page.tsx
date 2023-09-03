import { Carausel } from "@/app/components/Carausel"
import Navbar from "../../components/Navbar"
import TextCenter from "@/app/components/TextCenter"
import GridSystem from "@/app/components/GridSystem"
import ColTwo from "@/app/components/ColTwo"


const data_carausel = [
    {
        src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    },
    {
        src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    },
    {
        src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    }
]

const data_grid_system = [
    {
        title : "Biografi",
        deskripsi : "Biograsi hidup saya ketika saya meniti karir sebagai programmer hebat"
    },
    {
        title : "Pendidikan",
        deskripsi : "Pendidikan penting bagi saya untuk membuat peluang lebih besar di masa depan"
    },
    {
        title : "Organisasi",
        deskripsi : "Organiasi yang saya ikuti sekarang menjadi asisten lab di universitas budi luhur"
    },
    {
        title : "Karir",
        deskripsi : "Programmer adalah cita-cita saya sejak dulu waktu kelas 10 smk"
    },
]

const imgdata = [
    {
            img : "/assets/img/img_1.jpg",
            judul : "Berinovasi lebih banyak agar bisa menjadi peluang di masa depan",
            deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae, odio quam fugit similique optio, tempore possimus blanditiis nobis consectetur totam reiciendis adipisci saepe provident, accusantium soluta velit dignissimos pariatur? Maxime quae sequi, optio voluptatum officia laboriosam nostrum animi tempora quo dignissimos deleniti nobis cupiditate minus minima neque voluptas dolor eligendi iusto numquam? Iusto voluptatum ad laborum sit aperiam unde numquam itaque iste nam sint fugit, voluptatibus ullam consequatur non soluta."
    }
]

export default function page() {
    return (
        <div>
            <Navbar />
            <Carausel query_data={data_carausel} />
            <TextCenter data={"Tentang Kami"} />
            <div className="ml-5 mt-10 mr-5">
                <GridSystem data_grid_system={data_grid_system} />
                <ColTwo data_query={imgdata} />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
