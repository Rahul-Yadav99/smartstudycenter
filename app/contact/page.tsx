import NavBar from '@/components/shared/NavBar'
import Footer from '@/components/shared/Footer'
import { Building, Mail, MessagesSquare, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Contact = () => {
    const data = [
        {
            icon: <Mail />,
            title: 'Email Us',
            description: 'For general inquiries and academic support.',
            value: 'rahul352sj@gmail.com',
            href: 'mailto:rahul352sj@gmail.com'
        },
        {
            icon: <Phone />,
            title: 'Call Us',
            description: 'Available Monday - Friday, 9am to 6pm.',
            value: '+91 8178522930',
            href: 'tel:+918178522930'
        },
        {
            icon: <MessagesSquare />,
            title: 'WhatsApp',
            description: 'Instant messaging for quick student support.',
            value: 'Chat with an Advisor',
            href: 'https://wa.me/8178522930'
        },
        {
            icon: <Building />,
            title: 'Address',
            description: 'Our Coaching Center',
            value: 'Karawal Nagar, Delhi',
            // href: 'https://wa.me/8178522930'
        },
    ]
    return (
        <>
            <NavBar lable="Contact" />
            <div className='md:max-w-7xl md:mx-auto w-full md:py-20 py-5 md:px-0 px-4 flex flex-col items-center justify-center space-y-3'>
                <h1 className='md:text-5xl text-2xl font-semibold text-primaryFontColor md:leading-15 leading-8 tracking-wide text-center'>Get in Touch</h1>
                <p className='text-secondaryFontColor md:text-base text-sm leading-relaxed text-center max-w-3xl'>Have questions about our curriculum or enrollment? Our academic advisors are here to guide you toward your educational goals.</p>
            </div>
            <div className='md:max-w-7xl md:mx-auto w-full md:py-20 py-5 md:px-0 px-4 grid md:grid-cols-4 gap-6'>
                {data.map((item, idx) => (
                    <div key={idx} className="border border-neutral/20 rounded-xl p-4 flex flex-col gap-2 justify-center items-center">
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                            <Button size='icon' className='rounded-full h-10 w-10 bg-primaryColor hover:bg-primaryColor/90 text-white cursor-pointer'>
                                {item?.icon}
                            </Button>
                        </a>
                        <h3 className='text-lg font-semibold text-primaryFontColor'>{item?.title}</h3>
                        <p className='text-secondaryFontColor md:text-sm text-xs text-center leading-relaxed'>{item?.description}</p>
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
                            <Button variant='link' className='text-primaryColor md:text-sm text-xs leading-relaxed hover:underline hover:cursor-pointer pl-0'>{item?.value}</Button>
                        </a>
                    </div>
                ))}
            </div>
            <Footer lable="Contact" />
        </>
    )
}

export default Contact