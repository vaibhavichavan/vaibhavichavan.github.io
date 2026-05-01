  
    /* ── Typing animation ── */
    const phrases = [
      'Python · SQL · Power BI',
      'Turning Data into Decisions',
      'Building Dashboards & Insights',
      'EDA · Preprocessing · Visualisation'
    ];
    let pIdx = 0, cIdx = 0, deleting = false;
    const el = document.getElementById('typing-text');
    function type() {
      const phrase = phrases[pIdx];
      if (!deleting && cIdx <= phrase.length) {
        el.innerHTML = phrase.slice(0, cIdx) + '<span class="cursor"></span>';
        cIdx++;
        setTimeout(type, cIdx === phrase.length + 1 ? 1800 : 60);
      } else {
        deleting = true;
        if (cIdx > 0) {
          el.innerHTML = phrase.slice(0, cIdx - 1) + '<span class="cursor"></span>';
          cIdx--;
          setTimeout(type, 35);
        } else {
          deleting = false;
          pIdx = (pIdx + 1) % phrases.length;
          setTimeout(type, 300);
        }
      }
    }
    setTimeout(type, 800);

    /* ── Scroll reveal ── */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          /* Animate skill bars */
          e.target.querySelectorAll('.skill-fill').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
          });
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* ── Also trigger skill bars inside already-visible cards ── */
    document.querySelectorAll('.skill-card.visible .skill-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });

    /* ── Sticky nav ── */
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
    });

    /* ── Mobile menu ── */
    function toggleMenu() {
      document.getElementById('hamburger').classList.toggle('open');
      document.getElementById('mobileMenu').classList.toggle('open');
      document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
    }
    function closeMenu() {
      document.getElementById('hamburger').classList.remove('open');
      document.getElementById('mobileMenu').classList.remove('open');
      document.body.style.overflow = '';
    }
