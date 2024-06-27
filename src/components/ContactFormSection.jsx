import React, { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacyPolicyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
  
    const requestData = { name, email, message };
  
    console.log('Request Data:', requestData);
  
    try {
      const response = await fetch('https://cegom-api.vercel.app/api/example-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(requestData),
      });
  
      const data = await response.json();
  
      console.log('Response Data:', data);
  
      if (response.ok) {
        alert('Success: ' + data.message);
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }
  };
  
  return (
    <section id="contact-form" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl md:leading-normal font-bold mb-10 text-center">Contact Us</h2>
        <p className="mb-8 font-light text-center">Do you have any questions?</p>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary placeholder-gray-dark" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="E-mail" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary placeholder-gray-dark" 
            />
          </div>
          <div className="mb-4">
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              placeholder="Please ask your questions here" 
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary placeholder-gray-dark"
            ></textarea>
          </div>
          <div className="mb-4 flex items-center">
            <input 
              type="checkbox" 
              id="privacyPolicyAccepted" 
              name="privacyPolicyAccepted" 
              checked={formData.privacyPolicyAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="privacyPolicyAccepted" className="text-gray-txt">
              I have read and accept the privacy policy.
            </label>
          </div>
          <button 
            type="submit" 
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition duration-300"
            disabled={!formData.privacyPolicyAccepted}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
