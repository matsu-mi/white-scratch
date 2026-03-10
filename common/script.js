	function toggleFaq(el) {
		const item = el.closest('.faq-item');
		const isOpen = item.classList.contains('open');
		// Close all
		document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
		// Toggle clicked
		if (!isOpen) item.classList.add('open');
	}

	function openMobileNav() {
		document.getElementById('mobileNav').classList.add('open');
		document.body.style.overflow = 'hidden';
	}
	function closeMobileNav() {
		document.getElementById('mobileNav').classList.remove('open');
		document.body.style.overflow = '';
	}

	// Scroll reveal (simple)
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(e => {
			if (e.isIntersecting) {
				e.target.style.opacity = '1';
				e.target.style.transform = 'translateY(0)';
			}
		});
	}, { threshold: 0.1 });

	document.querySelectorAll('.scene-card, .flow-step, .faq-item').forEach(el => {
		el.style.opacity = '0';
		el.style.transform = 'translateY(20px)';
		el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
		observer.observe(el);
	});


		// ページの読み込みが終わってから実行
		window.addEventListener('DOMContentLoaded', () => {
		const paths = document.querySelectorAll('.scratch-path');
		const speed = 5000; // 削るスピード

		paths.forEach(path => {
				const length = path.getTotalLength();
				
				path.style.setProperty('--path-length', length);
				path.style.strokeDasharray = length;
				path.style.strokeDashoffset = length;
				
				const duration = length / speed;
				path.style.animationDuration = `${duration}s`;

				// --- ここを追加：表示（読み込み）から2秒後に開始 ---
				path.style.animationDelay = '1s'; 
				// ----------------------------------------------

				console.log("計算完了！1秒後に開始します。");
		});
});