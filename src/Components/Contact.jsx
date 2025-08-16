import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {
    let [formData, setformData] = useState(
        {
            Uname: '',
            Uemail: '',
            Umsg: '',
            Uphone: ''
        }
    )

    let setdata = (evt) => {

        let Uvalue = evt.target.value
        let Uname = evt.target.name

        let dataobj = { ...formData, [Uname]: Uvalue }
        setformData(dataobj)

    }

    let notify=(evt)=>{
        evt.preventDefault();
        toast.success("Submit Succesfully",{position:'top-left',autoClose:1500})
        
    }
    return (
        <>
            
            <div className='flex items-center justify-center py-4'>
                <ToastContainer />
                <form onSubmit={notify} className='w-[400px] '>
                    <input type='text' placeholder='Username' name='Uname' value={formData.Uname} className='w-[95%] p-1 mb-2 ' onChange={setdata} />
                    <input type='text' placeholder='Email' name='Uemail' value={formData.Uemail} className='w-[95%] p-1 mb-2 ' onChange={setdata} />
                    <input type='text' placeholder='Phone' name='Uphone' value={formData.Uphone} className='w-[95%] p-1 mb-2 ' onChange={setdata} />
                    <textarea placeholder="Enter your address..." name='Umsg' value={formData.Umsg} rows="3" className='w-[95%] p-1 mb-2' onChange={setdata} />
                    <button className='w-[95%] bg-yellow-400 p-2 text-white'>Submit</button>
                </form>
            </div>

            {/* footer  */}


            <footer className='grid grid-cols-1 gap-4 md:grid-cols-3 border-b-2 border-yellow-400 md:bg-[#374151] py-3 mt-3'>
                <div className='p-2 flex flex-col items-center justify-center'>
                    <FontAwesomeIcon icon={faLocationDot} className='text-yellow-400' />
                    <p className='font-bold text-white text-[20px]'>Address</p>
                    <p className=' text-white'>National Textile Unversity faisalabad</p>

                </div>
                <div className='p-2 flex flex-col items-center justify-center'>
                    <FontAwesomeIcon icon={faPhone} className='text-yellow-400' />
                    <p className='font-bold text-white text-[20px]'>Phone</p>
                    <p className=' text-white'>0325-3248696</p>

                </div>

                <div className='p-2 flex flex-col items-center justify-center '>
                    <FontAwesomeIcon icon={faEnvelope} className='text-yellow-400' />
                    <p className='font-bold text-white text-[20px]'>Email</p>
                    <p className=' text-white'>shoaibiqbal2547@gmail.com</p>

                </div>

            </footer>
            

        </>
    )
}
