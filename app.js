
// Hamburger menu functionality
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

// Header background change on scroll
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'rgba(26, 11, 46, 0.95)';
		header.style.boxShadow = '0 5px 20px rgba(0, 240, 255, 0.3)';
	} else {
		header.style.backgroundColor = 'rgba(26, 11, 46, 0.3)';
		header.style.boxShadow = 'none';
	}
});

// Close mobile menu when clicking on menu items
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Smooth scroll animation for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
	question.addEventListener('click', () => {
		const faqItem = question.parentElement;
		const isActive = faqItem.classList.contains('active');
		
		// Close all FAQ items
		document.querySelectorAll('.faq-item').forEach(item => {
			item.classList.remove('active');
		});
		
		// Open clicked item if it wasn't active
		if (!isActive) {
			faqItem.classList.add('active');
		}
	});
});
