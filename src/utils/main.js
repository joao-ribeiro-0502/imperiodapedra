/**
 * G.R.B.C. Império da Pedra — JavaScript Principal
 * 
 * Responsável por:
 * - Menu mobile
 * - Scroll suave
 * - Animações de entrada
 * - Header scroll effect
 * - Renderização dinâmica de conteúdo
 * - Formulário de contato
 */

(function() {
    'use strict';

    // ---------- Elementos DOM ----------
    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav__link');
    const galeriaGrid = document.getElementById('galeriaGrid');
    const agendaList = document.getElementById('agendaList');
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    const currentYear = document.getElementById('currentYear');

    // ---------- Inicialização ----------
    function init() {
        renderGallery();
        renderAgenda();
        initLightbox();
        initMobileMenu();
        initScrollEffects();
        initSmoothScroll();
        initForm();
        setCurrentYear();
        initAnimations();
    }

    // ---------- Renderizar Galeria ----------
    function renderGallery() {
        if (!galeriaGrid || !SITE_CONTENT.gallery) return;

        const fragment = document.createDocumentFragment();

        SITE_CONTENT.gallery.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'galeria__item fade-in';
            div.innerHTML = `
                <img src="${item.src}" alt="${item.alt}" loading="lazy" width="600" height="600">
                <div class="galeria__item-overlay">
                    <span>${item.caption}</span>
                </div>
            `;
            fragment.appendChild(div);
        });

        galeriaGrid.appendChild(fragment);
    }

    // ---------- Renderizar Agenda ----------
    function renderAgenda() {
        if (!agendaList || !SITE_CONTENT.events) return;

        const fragment = document.createDocumentFragment();

        SITE_CONTENT.events.forEach(event => {
            const div = document.createElement('div');
            div.className = 'agenda__item fade-in';
            div.innerHTML = `
                <div class="agenda__date">
                    <span class="agenda__date-day">${event.day}</span>
                    <span class="agenda__date-month">${event.month}</span>
                </div>
                <div class="agenda__info">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    <div class="agenda__location">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>${event.location} • ${event.time}</span>
                    </div>
                </div>
            `;
            fragment.appendChild(div);
        });

        agendaList.appendChild(fragment);
    }

    // ---------- Lightbox ----------
    let currentLightboxIndex = 0;

    function initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxCaption = document.getElementById('lightboxCaption');
        const lightboxCounter = document.getElementById('lightboxCounter');
        const lightboxClose = document.getElementById('lightboxClose');
        const lightboxPrev = document.getElementById('lightboxPrev');
        const lightboxNext = document.getElementById('lightboxNext');

        if (!lightbox) return;

        // Abrir ao clicar numa imagem da galeria
        galeriaGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.galeria__item');
            if (!item) return;
            const items = galeriaGrid.querySelectorAll('.galeria__item');
            const index = Array.from(items).indexOf(item);
            openLightbox(index);
        });

        function openLightbox(index) {
            currentLightboxIndex = index;
            updateLightboxContent();
            lightbox.classList.add('lightbox--active');
            document.body.style.overflow = 'hidden';
            lightboxClose.focus();
        }

        function closeLightbox() {
            lightbox.classList.remove('lightbox--active');
            document.body.style.overflow = '';
        }

        function updateLightboxContent() {
            const gallery = SITE_CONTENT.gallery;
            const item = gallery[currentLightboxIndex];
            lightboxImg.src = item.src;
            lightboxImg.alt = item.alt;
            lightboxCaption.textContent = item.caption;
            lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${gallery.length}`;
        }

        function prevImage() {
            currentLightboxIndex = (currentLightboxIndex - 1 + SITE_CONTENT.gallery.length) % SITE_CONTENT.gallery.length;
            updateLightboxContent();
        }

        function nextImage() {
            currentLightboxIndex = (currentLightboxIndex + 1) % SITE_CONTENT.gallery.length;
            updateLightboxContent();
        }

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', prevImage);
        lightboxNext.addEventListener('click', nextImage);

        // Clicar fora da imagem fecha
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Teclado
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('lightbox--active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        });
    }

    // ---------- Menu Mobile ----------
    function initMobileMenu() {
        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('nav__menu--open');
            
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('nav__menu--open')) {
                    closeMenu();
                }
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('nav__menu--open') && 
                !navMenu.contains(e.target) && 
                !navToggle.contains(e.target)) {
                closeMenu();
            }
        });

        // Fechar menu com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('nav__menu--open')) {
                closeMenu();
            }
        });
    }

    function openMenu() {
        navMenu.classList.add('nav__menu--open');
        navToggle.classList.add('nav__toggle--active');
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Fechar menu');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navMenu.classList.remove('nav__menu--open');
        navToggle.classList.remove('nav__toggle--active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menu');
        document.body.style.overflow = '';
    }

    // ---------- Efeitos de Scroll ----------
    function initScrollEffects() {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Header background
            if (currentScroll > 50) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }

            // Ativar link de navegação atual
            updateActiveNavLink();

            lastScroll = currentScroll;
        }, { passive: true });
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('nav__link--active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('nav__link--active');
                    }
                });
            }
        });
    }

    // ---------- Scroll Suave ----------
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ---------- Formulário de Contato ----------
    function initForm() {
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Validação básica
            if (!data.name || !data.email || !data.message) {
                showFormFeedback('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }

            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showFormFeedback('Por favor, insira um e-mail válido.', 'error');
                return;
            }

            // Simular envio (aqui seria integrado com backend ou serviço de email)
            console.log('Dados do formulário:', data);
            
            showFormFeedback('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            this.reset();
        });
    }

    function showFormFeedback(message, type) {
        if (!formFeedback) return;
        
        formFeedback.textContent = message;
        formFeedback.className = `form__feedback form__feedback--${type}`;
        
        // Limpar mensagem após 5 segundos
        setTimeout(() => {
            formFeedback.className = 'form__feedback';
            formFeedback.textContent = '';
        }, 5000);
    }

    // ---------- Animações de Entrada ----------
    function initAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in');
        
        if (!('IntersectionObserver' in window)) {
            // Fallback para navegadores sem suporte
            animatedElements.forEach(el => el.classList.add('fade-in--visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in--visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    // ---------- Ano Atual ----------
    function setCurrentYear() {
        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        }
    }

    // ---------- Iniciar ----------
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
