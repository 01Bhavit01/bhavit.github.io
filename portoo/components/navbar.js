class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: rgba(18, 18, 18, 0.9);
                    backdrop-filter: blur(8px);
                }
                .nav-link {
                    transition: color 0.2s ease;
                }
                .nav-link:hover {
                    color: #3E96F4;
                }
            </style>
            <nav class="fixed w-full z-50 border-b border-border">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16 items-center">
                        <a href="#" class="text-xl font-bold">
                            Fit<span class="text-accent">Words</span>
                        </a>
                        <div class="hidden md:flex space-x-8">
                            <a href="#portfolio" class="nav-link">Portfolio</a>
                            <a href="#about" class="nav-link">About</a>
                            <a href="#contact" class="nav-link">Contact</a>
                        </div>
                        <button class="md:hidden focus:outline-none">
                            <i data-feather="menu" class="w-6 h-6"></i>
                        </button>
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);