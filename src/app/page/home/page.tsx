import { Carausel } from "@/app/components/Carausel"
import Navbar from "../../components/Navbar"
import TextCenter from "@/app/components/TextCenter"
import GridSystem from "@/app/components/GridSystem"
import ColTwo from "@/app/components/ColTwo"
import Swipper from "@/app/components/Swipper"


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
        title: "Biografi",
        deskripsi: "Biograsi hidup saya ketika saya meniti karir sebagai programmer hebat"
    },
    {
        title: "Pendidikan",
        deskripsi: "Pendidikan penting bagi saya untuk membuat peluang lebih besar di masa depan"
    },
    {
        title: "Organisasi",
        deskripsi: "Organiasi yang saya ikuti sekarang menjadi asisten lab di universitas budi luhur"
    },
    {
        title: "Karir",
        deskripsi: "Programmer adalah cita-cita saya sejak dulu waktu kelas 10 smk"
    },
]

const imgdata = [
    {
        img: "/assets/img/web-1.png",
        judul: "Produk Hebat dibangun oleh tim yang hebat",
        deskripsi: "Kami membantu membangun dan mengelola tim pengembang kelas dunia untuk mewujudkan visi Anda"
    }
]

const welcome_data = [
    {
        img: "/assets/img/icon.png",
        judul: "welcome message",
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]

export default function page() {
    return (
        <div>
            <Navbar />
            <Carausel query_data={data_carausel} />
            <TextCenter data={"Tentang Kami"} />
            <div className="ml-20 mr-20">
                <div className="mt-10">
                    <GridSystem data_grid_system={data_grid_system} />
                </div>
                <div className="mt-10">
                    <ColTwo data_query={imgdata} />
                </div>
                <div className="background_before"></div>
                <div className="welcome">
                    <ColTwo data_query={welcome_data} />
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}