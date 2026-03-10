// ========================================
// Internationalization (i18n) - Korean/English Toggle
// ========================================

class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('ax-lang') || 'ko';
        this.langToggle = document.getElementById('langToggle');
        this.langText = document.getElementById('langText');

        this.init();
    }

    init() {
        // Set initial language display
        this.updateToggleButton();
        this.applyLanguage();

        // Bind toggle event
        if (this.langToggle) {
            this.langToggle.addEventListener('click', () => this.toggle());
        }
    }

    toggle() {
        this.currentLang = this.currentLang === 'ko' ? 'en' : 'ko';
        localStorage.setItem('ax-lang', this.currentLang);
        this.updateToggleButton();
        this.applyLanguage();
    }

    updateToggleButton() {
        if (this.langText) {
            this.langText.textContent = this.currentLang === 'ko' ? 'EN' : '한국어';
        }
        // Update html lang attribute
        document.documentElement.lang = this.currentLang;
    }

    applyLanguage() {
        const lang = this.currentLang;

        // Update all elements with data-ko and data-en attributes
        document.querySelectorAll('[data-ko][data-en]').forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                // For elements with child nodes (like hero-subtitle with <br>)
                if (el.classList.contains('hero-subtitle')) {
                    el.innerHTML = text.replace(/\n/g, '<br>');
                } else {
                    el.textContent = text;
                }
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});