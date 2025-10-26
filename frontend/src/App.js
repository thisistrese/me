import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { Mail, Linkedin, Calendar, MapPin, Menu, X } from 'lucide-react';
import {
  heroData,
  storyData,
  workData,
  brandsData,
  inspirationData,
  eventsData,
  contactData
} from './mockData';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'story', 'work', 'brands', 'inspiration', 'connect'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-content">
          <div className="nav-logo">TR</div>
          <div className="nav-links">
            {['Home', 'Story', 'Work', 'Brands', 'Inspiration', 'Connect'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{heroData.title}</h1>
          <p className="hero-subtitle">{heroData.subtitle}</p>
          <Button 
            onClick={() => scrollToSection('work')} 
            className="hero-cta"
            size="lg"
          >
            {heroData.cta}
          </Button>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* Story Section */}
      <section id="story" className="story-section">
        <div className="section-container">
          <div className="story-quotes">
            {storyData.quotes.map((quote, index) => (
              <blockquote key={index} className="story-quote">
                <p>"{quote}"</p>
              </blockquote>
            ))}
          </div>
          <div className="story-anchor">
            <p className="anchor-line">{storyData.anchorLine}</p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work-section">
        <div className="section-container">
          <h2 className="section-title">Work</h2>
          <div className="work-grid">
            {workData.map((item) => (
              <Card key={item.id} className="work-card">
                <CardHeader>
                  <div className="work-header">
                    <div>
                      <CardTitle className="work-title">{item.title}</CardTitle>
                      <CardDescription className="work-role">{item.role}</CardDescription>
                    </div>
                    <Badge variant="outline" className="work-years">{item.years}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="work-summary">{item.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="brands-section">
        <div className="section-container">
          <h2 className="section-title">Brands</h2>
          <div className="brands-grid">
            {brandsData.map((brand) => (
              <Card key={brand.id} className="brand-card">
                <CardHeader>
                  <CardTitle className="brand-name">{brand.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="brand-tagline">{brand.tagline}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section id="inspiration" className="inspiration-section">
        <div className="section-container">
          <div className="inspiration-header">
            <h2 className="section-title">Inspiration</h2>
            <a 
              href="https://thisistrese.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="substack-link"
            >
              View All on Substack →
            </a>
          </div>
          <div className="inspiration-grid">
            {inspirationData.map((post) => (
              <Card key={post.id} className="inspiration-card">
                <CardHeader>
                  <div className="inspiration-meta">
                    <span className="inspiration-date">{post.date}</span>
                    <div className="inspiration-tags">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="tag">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="inspiration-title">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="inspiration-excerpt">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="connect-section">
        <div className="section-container">
          <h2 className="section-title">Connect</h2>
          <div className="connect-headline">
            <p className="headline-text">{contactData.headline}</p>
          </div>

          {/* Contact Links */}
          <div className="contact-links">
            <Button 
              asChild
              size="lg" 
              className="contact-button"
            >
              <a href={contactData.schedulerLink} target="_blank" rel="noopener noreferrer">
                <Calendar className="button-icon" />
                Schedule a Meeting
              </a>
            </Button>
            {contactData.links.map((link, index) => (
              <Button 
                key={index}
                asChild
                variant="outline" 
                size="lg"
                className="contact-button-outline"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon === 'mail' ? <Mail className="button-icon" /> : <Linkedin className="button-icon" />}
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          <Separator className="connect-separator" />

          {/* Events Section */}
          <div className="events-container">
            {/* Upcoming Events */}
            <div className="events-section">
              <h3 className="events-title">Upcoming Events</h3>
              <div className="events-list">
                {eventsData.upcoming.map((event) => (
                  <Card key={event.id} className="event-card">
                    <CardHeader>
                      <CardTitle className="event-title">{event.title}</CardTitle>
                      <div className="event-meta">
                        <span className="event-info">
                          <Calendar className="event-icon" />
                          {event.date}
                        </span>
                        <span className="event-info">
                          <MapPin className="event-icon" />
                          {event.location}
                        </span>
                        <Badge className="event-role">{event.role}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="event-description">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Past Events */}
            <div className="events-section">
              <h3 className="events-title">Past Events</h3>
              <div className="events-list">
                {eventsData.past.map((event) => (
                  <Card key={event.id} className="event-card past">
                    <CardHeader>
                      <CardTitle className="event-title">{event.title}</CardTitle>
                      <div className="event-meta">
                        <span className="event-info">
                          <Calendar className="event-icon" />
                          {event.date}
                        </span>
                        <span className="event-info">
                          <MapPin className="event-icon" />
                          {event.location}
                        </span>
                        <Badge variant="outline" className="event-role">{event.role}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="event-description">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Theresa Renee. Building solutions that connect people, purpose, and progress.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;