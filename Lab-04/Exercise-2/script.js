
const PRODUCTS_DATABASE = [
    {"name": "iPhone 15 Pro", "price": 999, "category": "Smartphones"},
    {"name": "iPhone 15 Pro Max", "price": 1199, "category": "Smartphones"},
    {"name": "MacBook Pro 16", "price": 2499, "category": "Laptops"},
    {"name": "MacBook Air M3", "price": 1299, "category": "Laptops"},
    {"name": "AirPods Pro 2", "price": 249, "category": "Headphones"},
    {"name": "AirPods Max", "price": 549, "category": "Headphones"},
    {"name": "iPad Air 5th Gen", "price": 599, "category": "Tablets"},
    {"name": "Apple Watch Ultra", "price": 799, "category": "Smartwatches"},
    {"name": "Dell XPS 13", "price": 1299, "category": "Laptops"},
    {"name": "Sony WH-1000XM5", "price": 399, "category": "Headphones"},
    {"name": "Samsung Galaxy Book", "price": 1499, "category": "Laptops"},
    {"name": "Python Programming Book", "price": 29, "category": "Books"},
    {"name": "JavaScript Guide", "price": 39, "category": "Books"},
    {"name": "Coffee Mug", "price": 15, "category": "Home"},
    {"name": "Gaming Mouse", "price": 89, "category": "Accessories"}
];

class ProductSearch {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.resultsContainer = document.getElementById('resultsContainer');
        this.debounceTimer = null;
        
        this.init();
    }
    
    init() {
        this.searchInput.addEventListener('input', () => {
            this.debounceSearch();
        });
    }
    
    debounceSearch() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.performSearch();
        }, 300); // 300ms debounce delay
    }
    
    async performSearch() {
        const query = this.searchInput.value.trim().toLowerCase();
        
        // Clear previous results
        this.clearResults();
        
        if (query.length === 0) {
            return;
        }
        
        // Show loading state
        this.searchInput.classList.add('loading');
        
        try {
            // Simulate AJAX delay (realistic network timing)
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Simulate server-side search (case-insensitive)
            const results = PRODUCTS_DATABASE.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
            
            // Simulate JSON response processing
            this.displayResults(results);
            
        } catch (error) {
            console.error('Search error:', error);
            this.showError('❌ Search service unavailable. Please try again.');
        } finally {
            this.searchInput.classList.remove('loading');
        }
    }
    
    displayResults(products) {
        if (products.length === 0) {
            this.showNoResults('No results found for your search');
            return;
        }
        
        const fragment = document.createDocumentFragment();
        products.forEach((product, index) => {
            const card = this.createProductCard(product, index);
            fragment.appendChild(card);
        });
        
        this.resultsContainer.appendChild(fragment);
    }
    
    createProductCard(product, index) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="product-meta">
                <span class="price">$${product.price.toLocaleString()}</span>
                <span class="category">${product.category}</span>
            </div>
        `;
        
        return card;
    }
    
    showNoResults(message) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `🔍 ${message}`;
        this.resultsContainer.appendChild(noResults);
    }
    
    showError(message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = message;
        this.resultsContainer.appendChild(error);
    }
    
    clearResults() {
        this.resultsContainer.innerHTML = '';
    }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    new ProductSearch();
});