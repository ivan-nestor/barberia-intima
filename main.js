// =============================================
// BARBERÍA ÍNTIMA — MAIN JS
// =============================================

// ── WhatsApp link builder ──────────────────
function buildWaLink() {
  const url = `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(NEGOCIO.whatsappMensaje)}`;
  document.getElementById('waFloat').href = url;
  document.getElementById('ctaWhatsapp').href = url;
}

// ── Render Servicios ──────────────────────
function renderServicios() {
  const grid = document.getElementById('serviciosGrid');
  if (!grid) return;
  grid.innerHTML = SERVICIOS.map(s => `
    <div class="servicio-card reveal">
      <div class="servicio-cat">${s.categoria}</div>
      <ul class="servicio-items">
        ${s.items.map(item => `
          <li class="servicio-item">
            <span>${item.nombre}</span>
            ${item.precio ? `<span class="servicio-precio">$${item.precio.toLocaleString('es-AR')}</span>` : ''}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// ── Render Packs ──────────────────────────
function renderPacks() {
  const grid = document.getElementById('packsGrid');
  if (!grid) return;
  grid.innerHTML = PACKS.map(p => `
    <div class="pack-card ${p.destacado ? 'destacado' : ''} reveal">
      <span class="pack-badge">${p.badge}</span>
      <div class="pack-nombre">${p.nombre}</div>
      <p class="pack-desc">${p.descripcion}</p>
      <ul class="pack-incluye">
        ${p.incluye.map(i => `<li>${i}</li>`).join('')}
      </ul>
      <div class="pack-precio">${p.precio}</div>
      <a href="https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent('Hola, me interesa el ' + p.nombre)}" 
         class="pack-cta" target="_blank" rel="noopener">
        Quiero mi Pack
      </a>
    </div>
  `).join('');
}

// ── Render Testimonios ────────────────────
function renderTestimonios() {
  const grid = document.getElementById('testimoniosGrid');
  if (!grid) return;
  grid.innerHTML = TESTIMONIOS.map(t => `
    <div class="testimonio-card reveal">
      <div class="testimonio-quote">"</div>
      <p class="testimonio-texto">${t.texto}</p>
      <div class="testimonio-autor">
        <span class="testimonio-nombre">${t.nombre}</span>
        <span class="testimonio-servicio">${t.servicio}</span>
      </div>
    </div>
  `).join('');
}

// ── Scroll reveal ─────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on siblings
        const siblings = entry.target.parentElement?.querySelectorAll('.reveal');
        let delay = 0;
        if (siblings) {
          siblings.forEach((el, idx) => { if (el === entry.target) delay = idx * 80; });
        }
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Navbar scroll behavior ────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── Hamburger menu ────────────────────────
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('navMobile');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });
  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

// ── Smooth anchor scroll ──────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── Button hover ripple ───────────────────
function initRipple() {
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      ripple.style.cssText = `
        position:absolute; border-radius:50%; background:rgba(255,255,255,0.2);
        width:${rect.width}px; height:${rect.width}px;
        left:${e.clientX - rect.left - rect.width/2}px;
        top:${e.clientY - rect.top - rect.width/2}px;
        transform:scale(0); animation:rippleAnim 0.5s ease-out forwards;
        pointer-events:none;
      `;
      if (getComputedStyle(this).position === 'static') this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  const style = document.createElement('style');
  style.textContent = `@keyframes rippleAnim { to { transform: scale(2.5); opacity: 0; } }`;
  document.head.appendChild(style);
}

// ── Init ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildWaLink();
  renderServicios();
  renderPacks();
  renderTestimonios();
  initNavbar();
  initHamburger();
  initSmoothScroll();
  // Slight delay to allow dynamic content to be in DOM
  setTimeout(() => {
    initReveal();
    initRipple();
  }, 50);
});
