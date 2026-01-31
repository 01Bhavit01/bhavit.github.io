class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #1E1E1E;
                }
                .social-link {
                    transition: all 0.2s ease;
                }
                .social-link:hover {
                    color: #3E96F4;
                    transform: translateY(-2px);
                }
            </style>
            <footer class="border-t border-border">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div class="md:flex md:items-center md:justify-between">
                        <div class="flex justify-center md:order-2 space-x-6">
                            <a href="#" class="social-link">
                                <i data-feather="twitter" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="linkedin" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="mail" class="w-5 h-5"></i>
                            </a>
                        </div>
                        <div class="mt-8 md:mt-0 md:order-1 text-center md:text-left">
                            <p class="text-sm text-gray-400">
                                &copy; ${new Date().getFullYear()} FitWords. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);