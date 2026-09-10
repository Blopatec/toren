(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });

  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));

  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
    reveal.forEach(el => io.observe(el));
  } else {
    reveal.forEach(el => el.classList.add('visible'));
  }

  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const required = [...form.querySelectorAll('[required]')];
    let valid = true;

    required.forEach(field => {
      const empty = field.type === 'checkbox' ? !field.checked : !field.value.trim();
      const badEmail = field.type === 'email' && field.value && !/^\S+@\S+\.\S+$/.test(field.value);
      field.classList.toggle('invalid', empty || badEmail);
      if (empty || badEmail) valid = false;
    });

    if (!valid) {
      note.textContent = 'Revise los campos obligatorios antes de enviar.';
      note.style.color = '#b42f42';
      form.querySelector('.invalid')?.focus();
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(`Solicitud web Toren · ${data.get('empresa')} · ${data.get('interes')}`);
    const body = encodeURIComponent(
`Nombre: ${data.get('nombre')}
Empresa: ${data.get('empresa')}
Correo: ${data.get('correo')}
Teléfono: ${data.get('telefono') || 'No informado'}
Área de interés: ${data.get('interes')}

Necesidad:
${data.get('mensaje')}`
    );

    note.textContent = 'Abriendo su aplicación de correo…';
    note.style.color = '#247086';
    window.location.href = `mailto:contacto@toren.cl?subject=${subject}&body=${body}`;
  });

  form?.querySelectorAll('input,select,textarea').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('invalid'));
    field.addEventListener('change', () => field.classList.remove('invalid'));
  });
})();
