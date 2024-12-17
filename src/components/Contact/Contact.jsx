import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_rf8armb',
        'template_fu5cyzj',
        refForm.current,
        'V4MYtg1cMFh26kKuv'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
