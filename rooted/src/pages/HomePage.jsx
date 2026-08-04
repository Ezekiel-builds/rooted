import { Link } from 'react-router-dom';
import Header from '../components/Header';
import mockupImg from '../assets/Rooted-Mockup.png';
import logoImg from '../assets/logo.png';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home__page-container">
            <Header />

            <main className="home__page">
                <div className="home__page-heading">
                    <span className="heading__eyebrow">
                        A DISCIPLESHIP PLATFORM
                    </span>

                 <div className="heading__content">
                        <h1 className="heading__title">
                            Grow deeper, together.
                        </h1>
                        
                        <p className="heading__description">
                            Rooted and built up in Christ. A calm, intentional space for your church to
                            cultivate daily rhythms of Word, prayer, and life together.
                        </p>
                  </div>  

                  <div className="heading__buttons">
                        <Link to="/request-early-access"
                        onClick={((e) => e.preventDefault())}
                        className="heading__button heading__button--primary">
                            Request Early Access
                        </Link>

                        <Link to="/explore-the-rythms"
                        onClick={((e) => e.preventDefault())}
                        className="heading__button heading__button--secondary">
                            Explore the Rhythms
                        </Link>
                  </div>
                </div>
            </main>

            <section className="how__it-works">
                <div className="how__it-works-heading">
                    <i className="fi fi-rs-plant-growth heading__icon"></i>

                    <h3 className="how__it-works-title">
                        Three Rhythms of Growth
                    </h3>

                    <p className="how__it-works-description">
                        Depth requires intentionality. Rooted is structured around three core practices
                        to anchor your congregation in truth.
                    </p>
                </div>

                <div className="how__it-works-cards">
                    <div className="how__it-works-card">
                        <i class="fi fi-rs-book how__it-works-icon how__it-works-icon--primary"></i>

                        <div className="how__it-works-card-content">
                            <p className="how__it-works-header">
                                Word Inward
                            </p>

                            <p className="how__it-works-description">
                                A meditative, distraction-free daily
                                reading experience. Slow down and let
                                the Scripture take root before the
                                noise of the day begins.
                            </p>
                        </div>
                    </div>

                    <div className="how__it-works-card">
                       <i class="fi fi-ss-heart how__it-works-icon how__it-works-icon--secondary"></i>

                        <div className="how__it-works-card-content">
                            <p className="how__it-works-header">
                                Word Outward
                            </p>

                            <p className="how__it-works-description">
                                Carry the Word with you. Gentle
                                memory verse tracking that
                                encourages deep reflection rather
                                than rote memorization.
                            </p>
                        </div>
                    </div>

                    <div className="how__it-works-card">
                       <i class="fi fi-sr-users-alt how__it-works-icon how__it-works-icon--tertiary"></i>

                        <div className="how__it-works-card-content">
                            <p className="how__it-works-header">
                                Life Together
                            </p>

                            <p className="how__it-works-description">
                                See how your church is growing. Share
                                reflections, prayer requests, and
                                encourage one another in a private,
                                focused community space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="features__left">
                    <h3 classNmae="feature__title">
                        Digital spaces that feel like <span className="feature__titlw--highlight">Physical journals.</span>
                    </h3>

                    <div className="feature__meta">
                        <div className="feature__meta-item">
                            <p className="feature__meta-head">
                                Daily Check-in
                            </p>

                            <p className="feature__meta-text">
                                Start your day anchored. A unified dashboard that guides you
                                through your reading, memory verse, and community updates
                                without the overwhelming noise of typical social feeds.
                            </p>
                        </div>
                    </div>

                    <div className="feature__meta">
                        <div className="feature__meta-item">
                            <p className="feature__meta-head">
                                Spiritual Health Tracking
                            </p>

                            <p className="feature__meta-text">
                                Visualize your consistency. Using the metaphor of tree rings and
                                growing leaves, Rooted offers a calm, non-judgmental way to see
                                your spiritual rhythms develop over seasons.
                            </p>
                        </div>
                    </div>
                        
                </div>

                <div className="features__right">
                    <img src={mockupImg} alt="Rooted mockup" className="features__image"/>

                    <img src={logoImg} alt="Rooted logo" className="features__sub-image"/>
                </div>
            </section>

            <section className="focus">
                <div className="focus__heading">
                    <h2 className="focus__heading-text">
                        A Handcrafted Experience For Your Congregation
                    </h2>
                </div>

                <div className="focus__text">
                    <p className="focus__text-desc">
                        Step away from generic church bulletins and noisy communication apps. Rooted
                        provides a dedicated, quiet space tailored for spiritual formation. Cultivate a unified
                        culture of daily devotion across your entire church body.
                    </p>
                </div>

                <div className="focus__benfits">
                    <div className="focus__benefit">
                        <h4 className="focus__benefit-value">
                            75%
                        </h4>

                        <p className="focus__vaue-meta">
                            HIGHER ENGAGEMENT
                        </p>
                    </div>

                    <div className="focus__benefit">
                        <h4 className="focus__benefit-value">
                            3x
                        </h4>

                        <p className="focus__vaue-meta">
                           MORE SCRIPTURE READ
                        </p>
                    </div>

                    <div className="focus__benefit">
                        <h4 className="focus__benefit-value">
                            Daily
                        </h4>

                        <p className="focus__vaue-meta">
                           SHARED RHYTHMS
                        </p>
                    </div>

                    <div className="focus__benefit">
                        <h4 className="focus__benefit-value">
                            1
                        </h4>

                        <p className="focus__vaue-meta">
                            QUIET FOCUS
                        </p>
                    </div>
                </div>
            </section>

            <section className="final__cta">
                <i class="fi fi-rs-rose-alt final__cta-icon"></i>

                <h3 className="final__cta-heading">
                    Invite your church to start growing.
                </h3>

                <p className="final__cta-text">
                    Join a community of local churches pursuing depth over distraction.
                </p>

                <form className="final__cta-form">
                    <label htmlFor="email" className="final__cta-label">
                        Church Leader Email
                    </label>

                    <input type="email" placeholder="pastor@gracechurch.org" className="final__cta-input" />
                </form>
            </section>

            <footer className='footer__container'>
                <p className="footer__logo-text">Rooted</p>

                <div className="footer__links">
                    <Link className="footer__link">PRIVACY</Link>
                    <Link className="footer__link">TERMS</Link>
                    <Link className="footer__link">SUPPORT</Link>
                </div>

                <p className="footer__text">&copy; 2026 Rooted Discipleship. Sown in faith.</p>
            </footer>
        </div>
    )
}

export default HomePage;