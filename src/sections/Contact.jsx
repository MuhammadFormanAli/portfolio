import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_82lwxhf', 'template_mwloibq', form.current, '90cgRIVexXYwaEWEq')
      .then((result) => {
        e.target.reset();
        console.log(result.text);
        alert(result.text);
        
      }, (error) => {
        console.log(error.text);
        alert(error.text);
      });
  };
  return (


    <div id="contact" className='my-5 bg-base-200 p-5'>
      <h2 className="text-3xl font-bold text-center my-4">Contact With Me</h2>


      <div className='flex flex-col md:flex-row gap-2'>
        <div className='w-full md:w-1/2 flex flex-col gap-2'>

          <div className='bg-base-100 text-center p-4 card'>

            <h1 className='font-bold text-xl'>Location</h1>
            <p className='font-bold text-lg'>Sirajganj, Bangladesh</p>

          </div>


          <div className='bg-base-100 text-center p-4 card'>


            <h1 className='font-bold text-xl'>Call Me</h1>
            <p className='font-bold text-lg'>+8801703082805</p>

          </div>


          <div className='bg-base-100 text-center p-4 card'>

            <h1 className='font-bold text-xl'>Email</h1>
            <p className='font-bold text-lg'>muhammadformaanali@gmail.com</p>

          </div>



        </div>



        <div className="bg-base-100 py-2 w-full md:w-1/2 rounded-md">
          <div className="container mx-auto py-8">
            <div className="max-w-lg mx-auto">


              <form ref={form} onSubmit={sendEmail}>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 my-1 leading-tight focus:outline-none focus:shadow-outline"
                  name="from_name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />

                <input
                  className="appearance-none border rounded w-full py-2 px-3 my-1 leading-tight focus:outline-none focus:shadow-outline"
                  name="from_email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />

                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 my-1 leading-tight focus:outline-none focus:shadow-outline"
                  name="message"
                  rows="2"
                  placeholder="Enter your message"
                  required
                ></textarea>

                <input className='btn btn-outline bg-slate-500 w-full' type="submit" value="Send" />
              </form>


            </div>

          </div>

        </div>
        </div>
        </div>
        );
};

        export default Contact;