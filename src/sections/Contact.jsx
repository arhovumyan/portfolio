import React from 'react'
import TitleHeader from '../components/TitleHeader'

{/*wip*/}
const Contact = () => {

        const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setFormData({ name: '', email: '', message: '' })
    }
    return (
        <section id="contact" className='flex-center section-padding'>
            <div className='w-full md:px-10 px-5'>
                <TitleHeader
                    title="Get In Touch With Me"
                    sub="Contact Information"
                />
                <div className='mt-16'>
                    <p className='text-center'>
                        Feel Free to reach out for collaborations, questions, or just to say hello.
                    </p>
                    <p className='text-center mt-4'>
                        Email:contact@example.com
                    </p>
                </div>
            </div>
      
    </section>
  )
}

export default Contact
