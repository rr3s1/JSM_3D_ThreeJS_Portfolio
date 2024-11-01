import React, {useRef, useState} from 'react'
import * as emailjs from "@emailjs/browser";

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            await emailjs.send(
                'EmailjsService_ID',
                'EmailjsTemplate_ID',
                {
                    from_name: form.name,
                    to_name: 'SR',
                    from_email: form.email,
                    to_email: 'raressilviulazar@example.com',
                    message: form.message
                }, '__EmailjsPUBLICKEY__')
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible');
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong. Please try again later')

        }


    }

    return (
        <section className="c-space mt-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Lets talk</h3>
                    <p className="text-lg text-white-600 mt-3">Whether you are looking to build a new website, improve
                        an
                        existing platform, or bring a unique project to life, I am her to help</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="haveFun@example.com"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea

                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I am interested in..."
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field_btn-arrow"/>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
