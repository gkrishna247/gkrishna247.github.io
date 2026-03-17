/* Portfolio — Minimal JS for mobile navigation and active link tracking */
(function () {
    'use strict';

    // Mobile nav toggle
    var toggle = document.querySelector('.nav-toggle');
    var navMenu = document.getElementById('nav-menu');

    if (toggle && navMenu) {
        toggle.addEventListener('click', function () {
            var expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
            navMenu.classList.toggle('is-open');
        });

        // Close menu when a nav link is clicked
        navMenu.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                toggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('is-open');
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
                toggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('is-open');
                toggle.focus();
            }
        });
    }

    // Highlight active nav link on scroll
    var sections = document.querySelectorAll('section[id], footer[id]');
    var navLinks = document.querySelectorAll('.nav-list a');

    if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.getAttribute('id');
                    navLinks.forEach(function (link) {
                        if (link.getAttribute('href') === '#' + id) {
                            link.style.color = 'var(--color-primary)';
                            link.style.background = 'var(--color-primary-bg)';
                        } else {
                            link.style.color = '';
                            link.style.background = '';
                        }
                    });
                }
            });
        }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }
})();
