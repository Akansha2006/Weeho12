// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from 'react';
import './About.css';
import artistImage from '@/assets/artist-guitar.jpg';
import heroImage from '@/assets/hero-drummer.jpg';
import contactImage from '@/assets/contact-artist.jpg';
import weehoLogo from '@/assets/weeho-logo.png';

const About = () => {
  const teamMembers = [
    {
      name: "Tailor Lachiri",
      role: "Lead Vocalist & Guitarist",
      bio: "With over 15 years of experience in the music industry, Tailor brings powerful vocals and electrifying guitar skills to every performance.",
      image: artistImage
    },
    {
      name: "Alex Martinez",
      role: "Drummer & Producer",
      bio: "Alex's rhythmic expertise and production skills have shaped our unique sound, bringing together traditional and modern elements.",
      image: heroImage
    },
    {
      name: "Sam Rodriguez",
      role: "Bass & Backing Vocals",
      bio: "Sam's deep bass lines and harmonious backing vocals provide the foundation that makes our music resonate with audiences worldwide.",
      image: contactImage
    }
  ];

  const achievements = [
    { number: "500K+", label: "Monthly Listeners" },
    { number: "50+", label: "Live Concerts" },
    { number: "10", label: "Chart-Topping Singles" },
    { number: "5", label: "Years of Experience" }
  ];

  const whyChooseUs = [
    {
      title: "Authentic Sound",
      description: "We create original music that blends electronic vibes with traditional instruments, delivering a unique experience you won't find anywhere else.",
      icon: "🎵"
    },
    {
      title: "Live Performance Excellence",
      description: "Our high-energy live performances create unforgettable experiences. We don't just play music; we create moments that last a lifetime.",
      icon: "🎤"
    },
    {
      title: "Professional Quality",
      description: "Every track is professionally produced in our state-of-the-art studio, ensuring crystal-clear sound quality and perfect mixing.",
      icon: "🎧"
    },
    {
      title: "Fan-Centered Approach",
      description: "We prioritize our fans' experience, from intimate acoustic sessions to large venue concerts, always staying connected with our community.",
      icon: "❤️"
    },
    {
      title: "Innovative Music Production",
      description: "We constantly push boundaries by incorporating new technologies and experimental sounds while maintaining our signature style.",
      icon: "⚡"
    },
    {
      title: "Global Reach",
      description: "Our music transcends borders, connecting with audiences worldwide through universal themes of love, passion, and human experience.",
      icon: "🌍"
    }
  ];
  // Scroll to top whenever Blog page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="about-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={weehoLogo} alt="Weeho" className="logo-image" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about" className="active">ABOUT</Link></li>
          {/* <li><a href="/#programs">PROGRAMS</a></li> */}
          {/* <li><a href="/#performance">PERFORMANCE</a></li> */}
          <li><a href="/#book-event">BOOK AN EVENT</a></li>
          <li><Link to="/blog">BLOG</Link></li>
        <li><Link smooth to="/#contact">CONTACT</Link></li>

        </ul>
        <a href="#book-event" className="btn-primary">BOOK AN EVENT</a>
        <button className="menu-toggle">☰</button>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">ABOUT WEEHO</h1>
          <p className="about-hero-subtitle">The Euphoric Art Experience</p>
          <p className="about-hero-description">
           Discover the story behind the performances, the passion that inspires us, and the vision that drives Weeho to celebrate creativity and connect artists through the power of expression.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
               Weeho – Euphoric Moments was created with one belief — every artist deserves to be seen and celebrated. Many talented individuals lack a genuine space to share their art, especially beginners, students, or those from smaller towns.
              </p>
              <p>
                Born from the idea that “Talent exists everywhere, but platforms don’t,” Weeho offers an inclusive digital stage for artists to perform, grow, and gain recognition.
              </p>
              <p>
               Weeho is more than just a platform — it’s a movement dedicated to nurturing creativity, building confidence, and fostering a strong artistic community. It encourages artists to express themselves freely, connect with others, and grow in an inclusive digital space. Through every performance, Weeho aims to inspire and empower individuals, giving each artist the chance to experience their own euphoric moment.
              </p>
            </div>
            <div className="story-image">
              <img src={artistImage} alt="Band performing" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <h3 className="achievement-number">{achievement.number}</h3>
                <p className="achievement-label">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Weeho</h2>
            <p>Discover what makes us different from the rest</p>
          </div>
          <div className="features-grid">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="team">
        <div className="container">
          <div className="section-header">
            <h2>Meet The Band</h2>
            <p>The talented individuals behind the music</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                To provide an open and inclusive platform for budding artists to perform, gain digital recognition, collaborate with others, and promote appreciation for diverse and authentic art forms.

              </p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                To create an accessible and supportive platform where creativity thrives, talent is celebrated, and artistic expression is encouraged without boundaries. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Vibe?</h2>
            {/* <p>Join thousands of fans who have already discovered the Hnband experience.</p> */}
            <div className="cta-buttons">
              <Link to="/#contact" className="btn-primary">Get In Touch</Link>
              {/* <a href="#tickets" className="btn-secondary">Buy Tickets</a> */}
            </div>
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
            <a href="/#programs">Programs</a>
            <a href="/#performance">Performance</a>
            <a href="/#book-event">Book an Event</a>
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

export default About;