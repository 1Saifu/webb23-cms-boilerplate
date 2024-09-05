import { useState } from 'react';
import '../styles/contact.css';

export default function Contact({ blok }) {
  console.log('Contact blok:', blok);

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    setErrorMessage(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setErrorMessage('Please fill in both the email and message fields.');
    } else {
      window.location.reload(); 
    }
  };

  return (
    <section className="contact">
      <h1>{blok.title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button 
          type="submit"
        >
          {blok.link.sendLabel || 'Send'}
        </button>
      </form>
    </section>
  );
}
