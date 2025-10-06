import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Index.css';
import heroImage from '@/assets/hero-drummer.jpg';
import artistImage from '@/assets/artist-guitar.jpg';
import album1 from '@/assets/album1.jpg';
import album2 from '@/assets/album2.jpg';
import album3 from '@/assets/album3.jpg';
import album4 from '@/assets/album4.jpg';
import contactImage from '@/assets/contact-artist.jpg';
import weehoLogo from '@/assets/weeho-logo.png';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const albums = [
    { id: 1, title: "I'm a mess", artist: "Bebe Rexha", image: album1 },
    { id: 2, title: "Natural", artist: "Imagine Dragons", image: album2 },
    { id: 3, title: "Sweet But Psycho", artist: "Ava Max", image: album3 },
    { id: 4, title: "Waiting For Love", artist: "Avicii", image: album4 }
  ];

  return (
    <div className="hnband-site">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={weehoLogo} alt="Weeho" className="logo-image" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li><a href="#home" className="active">HOME</a></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><a href="#programs">PROGRAMS</a></li>
          <li><a href="#performance">PERFORMANCE</a></li>
          <li><a href="#book-event">BOOK AN EVENT</a></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <a href="#book-event" className="btn-primary">BOOK AN EVENT</a>
        <button className="menu-toggle">☰</button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Your dream event organize online</h1>
          <div className="hero-button-wrapper">
            <a href="#book-event" className="btn-primary">BOOK AN EVENT</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-container">
          <div>
            <img src={artistImage} alt="Artist" className="about-image" />
          </div>
          <div className="about-content">
            <h3>About us</h3>
            <h2>THE ELECTRO VIBE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra 
              maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit.
            </p>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
              lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
              do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel 
              facilisis. Phasellus magna placerat sed facilisis dignissim.
            </p>
            <a href="#contact" className="btn-primary">CONTACT US</a>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      {/* <section id="albums" className="discography">
        <div className="section-header">
          <p className="section-subtitle">Our Discography</p>
          <h2 className="section-title">NEWEST ALBUMS & SINGLES.</h2>
        </div>
        <div className="albums-grid">
          {albums.map(album => (
            <div key={album.id} className="album-card">
              <img src={album.image} alt={album.title} className="album-image" />
              <h3 className="album-title">{album.title}</h3>
              <p className="album-artist">{album.artist}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="#itunes" className="btn-primary itunes-btn">
            🎵 BUY ON ITUNES
          </a>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <h3>Contact us</h3>
            <h2>GOT A QUESTION?</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <div>
                <button type="submit" className="btn-primary">SEND EMAIL</button>
              </div>
            </form>
          </div>
          <div>
            <img src={contactImage} alt="Contact" className="contact-image" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>CONTACT INFO</h4>
            <p>📍 Simtrak Solutions,</p>
            <p>JBS Haldane Avenue, Kolkata 700046</p>
            <p>📞 (+91) 988 358 5647</p>
            <p>✉️ contact@weeho.in</p>
          </div>
          <div className="footer-section">
            <h4>QUICK LINKS</h4>
            <Link to="/about">About Us</Link>
            <a href="#programs">Programs</a>
            <a href="#performance">Performance</a>
            <a href="#book-event">Book an Event</a>
            <a href="#blog">Blog</a>
          </div>
          <div className="footer-section">
            <h4>FOLLOW US</h4>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook">f</a>
              <a href="#twitter" aria-label="Twitter">𝕏</a>
              <a href="#youtube" aria-label="YouTube">▶</a>
              <a href="#instagram" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 All rights reserved | This template is made with ❤️ by Colorlib</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
