import { Link } from 'react-router-dom';
import './Blog.css';
import weehoLogo from '@/assets/weeho-logo.png';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "A Night to Remember: Weeho's Magical Music Event",
      date: "November 19, 2024",
      performer: "Ms. Anushka Sharma",
      excerpt: "Music is not merely a sound; it is an emotion's language—a bridge that connects hearts across cultures, beliefs, and geographies.",
      category: "Music Event",
      content: `Music is not merely a sound; it is an emotion's language—a bridge that connects hearts across cultures, beliefs, and geographies. It tells things that words can't, connecting with every soul without any barrier of age or background. On Tuesday, November 19, 2024, Weeho once again brought this magic alive with an unforgettable musical evening. Who shone under the limelight of this event? A growing talent and rising star by birth, Ms Anushka Sharma-a college-going student with whom ambition is already musically churning waves. Not just that; the event begins with a new star born.

When the show finally opened, the buzz of excitement was inescapable. Nervously looking all over the place, but visibly encouraged by the warm words of our anchor, was Anushka who was actually experiencing her first live online performance. Virtual audiences trickled in and filled the space to let anticipation and enthusiasm fill the space for what would undeniably be a memorable night.

Our host-the divine one-was ever charming. He introduced Anushka with such genuine admiration that it struck a chord at once. The connection was instantaneous, and the stage was set for a magical evening.

Anushka opened with "Kaun Tujhe" by Shreya Ghoshal, and with the very first note, this was definitely not an ordinary performance. Her soulful voice lingered deep within, silencing the viewers in awe. As the final note still lingers, the virtual space erupted in applause and calls for more; the eyes of those viewing were flooded with emojis, cheers, and appreciation poured in the chat.

Between the songs, the audience wants to know more about her. Questions poured in:

"Did you have formal training?"
Anushka smiled and said that from the early age of 8, she learned classical music. She further revealed that though she was self-taught, her guitar skills were not leaving everyone even more inspired.

"What inspired you to sing?"
With a nostalgic sparkle in her eyes, she recals how even at the age of 4-5 years, singing was quite instinctive to her. Supportive parents encouraged her, paving way for her to chase her musical dreams.

Anushka's second song, "Hasi", brought even more joy. The audience immersed themselves in the melody, singing along and feeling an integral part of the event. Her performance of "Rozana" only heightened the energy in the virtual room, with attendees demanding "One more!"

When an audience member suggested Ed Sheeran's "Perfect," Anushka delivered a flawless rendition that left everyone in awe. The chat lit up with clapping emojis and words of admiration. Her versatility as a singer was undeniable, effortlessly transitioning between genres and languages.

The surprises didn't stop there! On demand, Anushka sang Shreya Ghoshal's "Thodi Der" a cappella! Everyone listened spellbound to her unaccompanied voice. Then came another surprise: writing songs. Anushka sang an original she composed that left the audience amazed at her creativity and talent.

As questions continued, she revealed another simply astounding fact: along with her pursuit of music, she's studying B. Tech. Balancing such diversified pursuits left the audience even more impressed by her inbuilt dedication and talent.

The Grand Finale: A Moment of Magic

She ended the night with "Raabta," which could do justice to the original. It was aptly given as a climax to the evening infused with talent, passion, and the power of music. As she sang out into the last of the notes, people were left in applause, knowing that they had seen something special happen.

A Night That United Us All

It was less of a talent show and more of celebrating the common bond that music shares between all people. The rapt attention of the audience to Anushka's unbelievable performances marked the night as one of interconnection joy and timeless melodies.
We believe at Weeho that talent nurtures creativity in spaces where art lives. And the testament to that vision has been Anushka's first venture. Here's hoping that such magical evenings keep coming and bring us all together with the universal language of music.
Let's see this inspiration travel forward and celebrate the boundless power of music! Well, until next time, tune into more incredible moments with Weeho.`
    },
    {
      id: 2,
      title: "Harmony & Melody: Weeho Online Poetry Event",
      date: "September 28, 2024",
      performer: "Ms. Tanisha Srivastava",
      excerpt: "Poetry, a conversation from heart-to-heart where word tells the feeling of oneself, but it connects with all the listener's.",
      category: "Poetry Event",
      content: `Weeho organized the poetic event on 28th September, 2024 where "Ms. Tanisha Srivastava", the poet of the event performed with their soothing voice and words. She is a 4th year BA LLB (Hons), specialized in energy law, Advocate for social causes. With a great education background she has excellent poetic skills as well as.

Good conversation mixes opinions, feelings, facts and ideas in an improvisational exchange with one or more individuals in an atmosphere of goodwill. It inspires mutual insight, respect and, most of all, joy. It is a way of relaxing the mind, opening the heart and connecting, authentically, with others. To converse well is surprising, humanizing and fun.

Poetry, a conversation from heart-to-heart where word tells the feeling of oneself, but it connects with all the listener's. The set of rhyming words which conveys the feeling of Genre. Based upon the genre it give the essence of love, revenge, spirituality and many more.

The Online Poetry Event at Weeho is one such events of poetry where the star of the event Ms. Tanisha Sirvastava performs, with the soothing performance of poetry there we talk about various other topics like love. Love is something we all experience in one form or another since our childhood. As humans and social beings, we are connected to all other beings and things through the concept of love. Love, in its purest form, is an expression that can be felt. A parent does not have to tell a child each day that they love them; it is always shown in gestures and the things parents do to keep their children safe, comfortable, and happy.

After the conversation we played a game Guessing words which was a very exciting experience for all of us to join out there. It created a memorable experience.

Beyond these all these moments we also have a conversation about the Women sexual assault happening in our society what are reason behind these cruel act. Recently it feels like nearly every day there is news on TV about sexual assault. I've heard people quietly question why victims are coming forward now, often months or even years after the violent act (be it sexual assault, domestic violence or rape) took place.`
    },
    {
      id: 3,
      title: "Rhythmic Night: Weeho Online Music Event",
      date: "October 5, 2024",
      performer: "Mr. Aryan",
      excerpt: "Music is the universal language of human emotion, connecting people across cultures and generations.",
      category: "Music Event",
      content: `Weeho organized the musical event on 5th October, 2024 where "Mr. Aryan", the performer of the event performed with their melodious voice. He is a singer-songwriter. He has been making music for the past three years and has successfully released several original songs and collaborations. Aside from writing songs for himself and other artists, producers, and composers, He also produces music, mixes tracks, and masters them. In addition to song-making and songwriting, He has some knowledge of cinematography and a strong interest in writing music video scripts.

Music is the universal language of human emotion, connecting people across cultures and generations. It's an art form combining pitch, rhythm, harmony, and timbre to evoke feelings, inspire creativity, and bring people together. With diverse genres (classical, jazz, rock, pop, hip-hop, and more), music is created through various instruments and voices, providing a unique medium for self-expression, comfort, and celebration.

On Saturday, 5th Oct. 2024, There was a highly-anticipated concert at Weeho online platform. The energy was palpable as fans gathered to witness the magic of music. Let's relive the highlights of an unforgettable evening

Weeho proved to be the perfect setting, with its top-notch acoustics. The crowd's excitement was evident, packing the platform with an exciting expression. Aryan Singh took the digital stage, delivering a performance. The setlist spanned hits like Sahiba, Paas Aao Na, and Khud se, showcasing their signature sound. The chemistry and passion with music and voice, connecting with the audience.

The audience also requested Aryan to sing their favorite cover song, and been humble Aryan sang all the requested song covers. He tells about his journey of his musical career from being a normal Meerut boy , how from Basketball player in 10th standard he became attracted towards music and bought his first second hand guitar, and started writing songs and producing music.

He also tells about his journey and mindset of making his viral youtube cover song 'Sahiba', that how his crew coordinated very well to shoot the video (he praises his crew members) this shows that as a lead singer in his group he is humble towards the members of crew, because music video is not a one man job it take time and effort of the behind the scenes artist.`
    },
    {
      id: 4,
      title: "Vocal Vibes: Weeho Online Music Event",
      date: "October 19, 2024",
      performer: "Mr. Jaivardhan Verma",
      excerpt: "Music is a great uniter. An incredible force. Something that people who differ on everything and anything else can have in common.",
      category: "Music Event",
      content: `Weeho organised the musical event on 19th October, 2024 where "Mr. Jaivardhan Verma", the performer of the event performed with his rhythmic voice. He has a band and they go by the name 'The Staircase Ban(ne)d'. The band covers various genres from Bollywood to Hindustani Semi classical and Western music too. Also, they got featured on 92.7 Big FM for Jingles' Mashup. Jaivardhan has just released his first single - Ab Jo Jaala Hoon, which is available on all audio streaming platforms.

Music is a great uniter. An incredible force. Something that people who differ on everything and anything else can have in common. Music will help dissolve your perplexities and purify your character and sensibilities, and in time of care and sorrow, will keep a fountain of joy alive in you.

On Saturday, 19th Oct. 2024, at Weeho Online platform, as the audience stepped into the vibrant, They could feel the musical vibe in the air at their place. The crowd was buzzing with anticipation, all united by our shared love for music. They were about to experience Mr. Jaivardhan live online event, and the audience couldn't wait. The host has to request patience, as others are still joining.

Upon the arrival, of Mr. Jaivardhan Verma (The performer) the host greeted warmly and welcomed him. Further we introduce the performer of the night to the audience and also Jaivardhan gives his introduction to the gathering.

The opening acts, Mashup of old bollywood songs of legendary Kishore Kumar and Moh. Rafi sahab, delivered impressive sets that warmed up the crowd. Their energetic performances hinted at the excitement to come. After the first performance we have interaction with the audience, if they want to ask something to Jaivardhan, with the humble gesture Jaivardhan answers all the questions asked by the audience, related about his musical career and how he prepares himself before any performance.

The second act is also the Mashup but it involved many new generation songs because the audience requested their favourite cover songs, so he accomplished their request in his Mashup act which involved various cover songs from the great Arijit Singh's songs, many of the late legend KK songs.

After the second act one person from the audience said that he feels that the Mashup songs do not feel good to listen to, but the way Jaivardhan presents it is really the right way to do it. Then Jaivardhan also gives advice on how to make or perform mashup songs to sound good.

At last he tells , after being a corporate employee for 11 years he shifted his passion towards music and made it a full time career, he said if you love something then just give all your life to it without any distraction from the bottom of your soul.`
    },
    {
      id: 5,
      title: "Weeho's Musical Night with Sudipta Ganguly: A Night to Remember",
      date: "October 26, 2024",
      performer: "Mr. Sudipta Ganguly",
      excerpt: "Music is a magical force that can connect people, cross boundaries, and stir emotions.",
      category: "Music Event",
      content: `Music is a magical force that can connect people, cross boundaries, and stir emotions. On Saturday, October 26, 2024, Weeho was the venue for an unforgettable online music event, and the star was bound to be the immensely talented singer-songwriter Mr. Sudipta Ganguly. With over fifteen years of experience in the music industry, Sudipta is a skilled singer, songwriter, producer, and sound mixer. This is special in his performances.

The excitement in the air started with the starting of the event. Fans gathered to fill the virtual space, which creates expectation and enthusiasm. The host welled up the audience warmly and welcomed everybody before mentioning Sudipta to the audience. With his genuinely amiable introduction, Sudipta started connecting himself with the audience straight away for a memorable evening.

Sudipta began the night with Tauba Tumhare from the movie Chalte Chalte, originally sung by Abhijeet Bhattacharya and Alka Yagnik. His soulful rendition had the audience spellbound in no time, and everyone in the virtual world knew they were in for a treat. The energy was in the air, and with the final words of the song, applause echoed through the virtual atmosphere as fans cheered and asked for more.

We opened the floor after the first song to relate to the audience. The fans shared what inspires them in music, and Sudipta shared his journey as well. the recommendation of audience He sang *Kahin Door Jab Din Dhal Jaye,* originally sung by Mukesh, made popular by Rajesh Khanna. he sang a heartbreaking version, so the whole audience became perfectly silent and relished each note - letting the audience respect and honor her by letting silence be the honor. The next song, *Hum Bewafa,* was a fresh remix version, originally sung by Shaan. Sudipta's distinct style breathed new life into the track, getting everyone tapping their feet. The energy was very vibrant; indeed, in a lively Q&A afterwards, someone asked about dream collaborations. Sudipta shared that he would love to work with Shreya Ghoshal, Jubin Nautiyal, and Sonu Nigam, and that Kishore Kumar has always been his timeless inspiration.

Going ahead with the events of the show, Sudipta presented another masterpiece, *Chala Jata Hoon Kisi Ki Dhoon Mein,* from the great Kishore Kumar. This one was instantly recognized as one of those extremely dear and nostalgic songs due to the pride- and joy-making essence. There were no countermoves from the listeners as they continued to savor every note that Sudipta let loose into the virtual auditorium.

At the request of the audience, Sudipta sang *Abhi Na Jao Chhod Kar.* His voice sounded so natural for that evergreen number, almost like the original singer was singing. The crowd was riveted, and many said his rendition had them believing they were hearing a live legend.

At the tail end of the evening, Sudipta spoke a few words on the power of music and how it weaves across humanity, bringing happiness to peoples' lives and connectedness. Though every person there looked a little disappointed that the night was finally drawing to an end, they all left smiling with this night of pure awesome music being just the first of many more.

It was an event carrying a lot of magic to it, moments that will never be forgotten. Indeed, to treat talent well, be it by Weeho or even all of us, nights like this would characterize the best example how music can only unite us all. May such nights come and come again, filled with joy, with interconnection and timeless melodies!`
    }
  ];

  return (
    <div className="blog-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={weehoLogo} alt="Weeho" className="logo-image" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><a href="/#programs">PROGRAMS</a></li>
          <li><a href="/#performance">PERFORMANCE</a></li>
          <li><a href="/#book-event">BOOK AN EVENT</a></li>
          <li><Link to="/blog" className="active">BLOG</Link></li>
          <li><a href="/#contact">CONTACT</a></li>
        </ul>
        <a href="#book-event" className="btn-primary">BOOK AN EVENT</a>
        <button className="menu-toggle">☰</button>
      </nav>

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">Our Blog</h1>
          <p className="blog-hero-subtitle">Stories, Events & Musical Journeys</p>
          <p className="blog-hero-description">
            Discover the magic behind our events, meet our talented performers, and dive into the world of music and poetry.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <div className="blog-image-placeholder">
                    🎵
                  </div>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-author">by Admin</span>
                    <span className="blog-separator">|</span>
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-separator">|</span>
                    <span className="blog-comments">20 Comment</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="blog-cta">
        <div className="container">
          <div className="blog-cta-content">
            <h2>Want to be Featured in Our Next Event?</h2>
            <p>Join our community of talented artists and share your passion with the world.</p>
            <div className="blog-cta-buttons">
              <Link to="/#book-event" className="btn-primary">Book An Event</Link>
              <Link to="/#contact" className="btn-secondary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>CONTACT INFO</h4>
            <p>📍 333 Middle Winchendon Rd,</p>
            <p>Rindge, NH 03461</p>
            <p>📞 125-711-811 | 125-668-886</p>
            <p>✉️ Support.music@gmail.com</p>
          </div>
          <div className="footer-section">
            <h4>QUICK LINKS</h4>
            <Link to="/about">About Us</Link>
            <a href="/#programs">Programs</a>
            <a href="/#performance">Performance</a>
            <a href="/#book-event">Book an Event</a>
            <Link to="/blog">Blog</Link>
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

export default Blog;