import { useState } from 'react';
import emailjs from '@emailjs/browser';

type FormState = {
   name: string;
   email: string;
   message: string;
};

const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: form.name,
          to_name: 'Max',
          from_email: form.email,
          to_email: 'maxsurnin3@gmail.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setLoading(false);
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden sm:pb-4 pb-16'>
      <div className='flex-[1] bg-black-100 p-8 rounded-2xl'>
        <p className="sm:text-[18px] text-[14px] text-primary uppercase tracking-wider">Get in touch</p>
        <h3 className="text-secondary font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

        <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-secondary font-medium mb-2'>Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name} 
              onChange={handleChange} 
              placeholder="What's your name?"
              className='bg-slate-200 py-4 px-6 placeholder:text-tertiary 
              text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-secondary font-medium mb-2'>Your Email</span>
            <input 
              type="email"
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="What's your email?"
              className='bg-slate-200 py-4 px-6 placeholder:text-tertiary 
              text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-secondary font-medium mb-2'>Your Message</span>
            <textarea 
              rows={6}
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              placeholder="What do you want to say?"
              className='bg-slate-200 py-4 px-6 placeholder:text-tertiary
              text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type="submit"
            className='bg-primary py-3 px-8 outline-none w-fit text-white font-bold 
            shadow-md shadow-tertiary rounded-xl'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;