'use client'
import { Navbar } from '@/app/components/Includes'
import { React, useState } from 'react'

export default function page() {
    const [navbar, setnavbar] = useState();
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container">
                <form action="" method='post' >
                    <div className="mb-3">
                        <label htmlFor="">Nama </label>
                        <input type="text" name='nama' className='form-control' style={{ width: 100, background: 'red' }} />
                    </div>
                </form>
            </div>
        </div>
    )
}
