import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  // Staggered reveal for grouped content (cards, case studies, list items)
  document.querySelectorAll('.reveal-group').forEach((group) => {
    const items = group.children;
    if (!items.length) return;
    gsap.from(items, {
      opacity: 0,
      y: 28,
      duration: 0.55,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: { trigger: group, start: 'top 85%' },
    });
  });

  // Single-element fade-up reveal
  document.querySelectorAll('.reveal').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
    });
  });
} else {
  document.body.classList.add('reduced-motion');
}
