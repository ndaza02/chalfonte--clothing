
// --- Mock Data ---

const PRODUCTS = [
    {
        id: 1,
        name: 'Sherpa puffer jacket',
        price: 85.00,
        image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800',
        originalPrice: null,
        tag: null,
        category: 'Jackets',
        description: "Prepare to embrace the cold in style and warmth with our Premium Quality Sherpa Puffer Jacket. Crafted with the utmost attention to detail and featuring the finest materials, this jacket is designed to keep you cozy in even the harshest winter conditions.",
        features: ["High stand-up collar", "Full-length zipper", "Two slit pockets with buttons", "Adjustable cuffs"],
        colors: [{ name: 'Black', hex: '#1f2937' }, { name: 'Cream', hex: '#f3f4f6' }, { name: 'Brown', hex: '#92400e' }],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        gender: 'women'
    },
    {
        id: 2,
        name: 'Down jacket',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
        originalPrice: null,
        tag: null,
        category: 'Coats',
        description: "Prepare to embrace the cold in style and warmth with our Premium Quality Down Jacket. Crafted with the utmost attention to detail and featuring the finest materials, this jacket is designed to keep you cozy in even the harshest winter conditions.",
        features: ["High stand-up collar", "Metal zipper and hidden button fastening", "Two slit pockets with buttons", "Long sleeves with hidden elastic cuffs", "Lining inside"],
        colors: [{ name: 'Black', hex: '#1f2937' }, { name: 'Cream', hex: '#f3f4f6' }, { name: 'Brown', hex: '#92400e' }],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        gender: 'women'
    },
    {
        id: 3,
        name: 'Classic coat with wool blend',
        price: 100.00,
        image: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&q=80&w=800',
        originalPrice: null,
        tag: null,
        category: 'Coats',
        description: "A timeless piece. This classic coat, made from a premium wool blend, offers sophisticated warmth and structure for any occasion.",
        features: ["Wool blend fabric", "Notch lapels", "Button fastening", "Two side pockets"],
        colors: [{ name: 'Gray', hex: '#9ca3af' }, { name: 'Black', hex: '#1f2937' }],
        sizes: ['S', 'M', 'L', 'XL'],
        gender: 'men'
    },
    {
        id: 4,
        name: 'Sherpa jacket',
        price: 95.00,
        originalPrice: 120.00,
        image: 'https://images.unsplash.com/photo-1507746206087-9b2f65a1262d?auto=format&fit=crop&q=80&w=800',
        tag: '-20%',
        category: 'Jackets',
        description: "Cozy and stylish, this sherpa jacket is your perfect companion for chilly days. Features a smooth lining for easy layering.",
        features: ["Soft sherpa fleece", "Stand collar", "Zip-front closure", "Side seam pockets"],
        colors: [{ name: 'Black', hex: '#1f2937' }, { name: 'Cream', hex: '#f3f4f6' }, { name: 'Multicolor', hex: '#78716c' }],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        gender: 'men'
    },
    {
        id: 5,
        name: 'Hooded coat',
        price: 60.00,
        image: 'https://images.unsplash.com/photo-1535697690623-fa0061e89b22?auto=format&fit=crop&q=80&w=800',
        originalPrice: null,
        tag: null,
        category: 'Coats',
        description: "Stay dry and comfortable. This lightweight hooded coat is an essential for unpredictable weather, featuring a water-resistant finish.",
        features: ["Adjustable hood", "Water-resistant material", "Internal drawcord at waist", "Front flap pockets"],
        colors: [{ name: 'Olive Green', hex: '#65a30d' }, { name: 'Navy', hex: '#1e3a8a' }],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        gender: 'women'
    },
    {
        id: 6,
        name: 'Slim Fit Chinos',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800',
        originalPrice: 60.00,
        tag: '-25%',
        category: 'Pants',
        description: "Versatile and comfortable chinos perfect for office or casual wear.",
        features: ["Slim fit", "Stretch cotton", "Side pockets", "Button closure"],
        colors: [{ name: 'Beige', hex: '#d6d3d1' }, { name: 'Navy', hex: '#1e3a8a' }],
        sizes: ['30', '32', '34', '36'],
        gender: 'men'
    },
    {
        id: 7,
        name: 'Cotton T-Shirt',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
        originalPrice: null,
        tag: null,
        category: 'Shirts',
        description: "Essential premium cotton t-shirt. Soft, breathable, and durable.",
        features: ["100% Organic Cotton", "Crew neck", "Regular fit", "Pre-shrunk"],
        colors: [{ name: 'White', hex: '#ffffff' }, { name: 'Black', hex: '#000000' }, { name: 'Grey', hex: '#9ca3af' }],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        gender: 'men'
    },
    {
        id: 8,
        name: 'Leather Crossbody Bag',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
        originalPrice: null,
        tag: 'New',
        category: 'Accessories',
        description: "Elegant leather crossbody bag with minimalist design.",
        features: ["Genuine Leather", "Adjustable strap", "Magnetic closure", "Interior pocket"],
        colors: [{ name: 'Brown', hex: '#78350f' }, { name: 'Black', hex: '#000000' }],
        sizes: ['One Size'],
        gender: 'women'
    },
    {
        id: 9,
        name: 'Wool Scarf',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1600108605372-276cb09dfdb3?auto=format&fit=crop&q=80&w=800',
        originalPrice: null,
        tag: null,
        category: 'Accessories',
        description: "Warm wool scarf to keep you cozy in style.",
        features: ["100% Wool", "Fringed ends", "Soft texture"],
        colors: [{ name: 'Grey', hex: '#9ca3af' }, { name: 'Oatmeal', hex: '#e5e7eb' }],
        sizes: ['One Size'],
        gender: 'accessories'
    },
    {
        id: 10,
        name: 'Denim Jacket',
        price: 90.00,
        image: 'https://images.unsplash.com/photo-1523205565295-f8e91625443b?auto=format&fit=crop&q=80&w=800',
        originalPrice: null,
        tag: null,
        category: 'Jackets',
        description: "Classic denim jacket that gets better with age.",
        features: ["Durable denim", "Button front", "Chest pockets", "Adjustable waist tabs"],
        colors: [{ name: 'Blue', hex: '#2563eb' }],
        sizes: ['S', 'M', 'L', 'XL'],
        gender: 'men'
    },
    {
        id: 11,
        name: 'Pleated Midi Skirt',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=800',
        originalPrice: null,
        tag: null,
        category: 'Skirts',
        description: "Elegant pleated midi skirt suitable for any occasion.",
        features: ["Elastic waistband", "Midi length", "Flowy fabric"],
        colors: [{ name: 'Pink', hex: '#f9a8d4' }, { name: 'Black', hex: '#000000' }],
        sizes: ['XS', 'S', 'M', 'L'],
        gender: 'women'
    },
    {
        id: 12,
        name: 'Classic Sunglasses',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800',
        originalPrice: 150.00,
        tag: 'Sale',
        category: 'Accessories',
        description: "Timeless sunglasses with UV protection.",
        features: ["UV400 Protection", "Acetate frame", "Hard case included"],
        colors: [{ name: 'Black', hex: '#000000' }, { name: 'Tortoise', hex: '#78350f' }],
        sizes: ['One Size'],
        gender: 'accessories'
    },
    {
        id: 13,
        name: 'Striped Kids Sweater',
        price: 30.00,
        image: 'https://images.unsplash.com/photo-1621452773781-0f992ee03591?auto=format&fit=crop&q=80&w=800',
        originalPrice: null,
        tag: null,
        category: 'Sweaters',
        description: "Cute and cozy sweater for the little ones.",
        features: ["Soft cotton blend", "Crew neck", "Ribbed cuffs"],
        colors: [{ name: 'Red/White', hex: '#ef4444' }],
        sizes: ['2Y', '4Y', '6Y', '8Y'],
        gender: 'children'
    },
    {
        id: 14,
        name: 'Kids Denim Overalls',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1519238263496-63e827bdcc3f?auto=format&fit=crop&q=80&w=800',
        originalPrice: null,
        tag: null,
        category: 'Pants',
        description: "Durable and playful overalls for active kids.",
        features: ["Adjustable straps", "Multiple pockets", "Durable denim"],
        colors: [{ name: 'Blue', hex: '#2563eb' }],
        sizes: ['2Y', '4Y', '6Y', '8Y'],
        gender: 'children'
    }
];

const ALL_PRODUCTS_MAP = PRODUCTS.reduce((map, product) => {
    map[product.id] = product;
    return map;
}, {});

const INITIAL_CART_ITEMS = [
    {
        productId: 2, // Down jacket
        name: 'Down jacket',
        color: 'Cream',
        size: 'M',
        price: 120.00,
        quantity: 1
    },
    {
        productId: 99, // Oversize sweatshirt
        name: 'Oversize sweatshirt',
        color: 'Blue',
        size: 'M',
        price: 25.00,
        quantity: 1
    },
    {
        productId: 100, // Artificial leather boots
        name: 'Artificial leather boots',
        color: 'Black',
        size: '42',
        price: 65.00,
        quantity: 1
    }
];

// --- State Management ---
let cartItems = JSON.parse(localStorage.getItem('dh_cart')) || INITIAL_CART_ITEMS;
let currentView = 'home';
let currentCategoryFilter = null;
let currentTypeFilter = null;

// --- Configuration ---
const CATEGORY_HERO_VIDEOS = {
    'jackets': 'assets/jackets.mp4',
    'shirts': 'assets/hero-video.mp4',
    'pants': 'assets/hero-video.mp4',
    'accessories': 'assets/accessories.mp4',
    'coats': 'assets/coats.mp4',
    'sweaters': 'assets/sweaters.mp4',
    'men': 'assets/hero-video.mp4',
    'women': 'assets/hero-video.mp4'
    // Add real paths here: 'jackets': 'assets/jackets-hero.mp4', etc.
};

const ARTICLES = {
    'style-guide': {
        title: 'Style Guide 2025',
        subtitle: 'Cyber-Minimalism & The New Neon',
        date: 'December 15, 2024',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200',
        content: `
            <p class="text-xl font-medium leading-relaxed mb-8">The future of fashion is here, and it’s bolder than ever. As we look towards 2025, a new aesthetic is emerging from the intersection of digital culture and high-end tailoring: Cyber-Minimalism.</p>
            
            <h3 class="text-2xl font-bold mb-4 mt-8">The Neon Renaissance</h3>
            <p class="mb-6 text-gray-700 leading-relaxed">Gone are the muted earth tones of the early 20s. We are seeing a resurgence of electric hues—acid green, cyber blue, and hyper-violet—used not as accents, but as statement blocks. These colors represent our digital lives bleeding into our physical reality.</p>
            
            <h3 class="text-2xl font-bold mb-4 mt-8">Silhouette Shift</h3>
            <p class="mb-6 text-gray-700 leading-relaxed">Oversized is still in, but it’s becoming more structured. Think architectural shoulders on trench coats, wide-leg trousers that hold their shape, and technical fabrics that create volume without weight. It is armor for the modern world.</p>
            
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200" class="w-full rounded-2xl my-8" alt="Fashion Future">

            <p class="mb-6 text-gray-700 leading-relaxed">Key items to invest in this season include the structured bomber jacket, the technical cargo pant, and anything with a reflective finish. The goal is to look ready for anything—whether it’s a boardroom meeting or a rave in a dystopian future.</p>
        `
    },
    'sustainable-fabrics': {
        title: 'Sustainable Fabrics',
        subtitle: 'Redefining Luxury with Conscience',
        date: 'December 12, 2024',
        image: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?auto=format&fit=crop&q=80&w=1200',
        content: `
            <p class="text-xl font-medium leading-relaxed mb-8">True luxury is no longer defined by rarity, but by responsibility. At DH Global, we are pioneering the use of materials that respect our planet without compromising on the touch, drape, or durability you expect.</p>
            
            <h3 class="text-2xl font-bold mb-4 mt-8">Lab-Grown Leather</h3>
            <p class="mb-6 text-gray-700 leading-relaxed">Traditional leather production is resource-intensive. We are shifting towards mycelium-based alternatives—grown from mushroom roots in a carbon-neutral lab environment. The result is a material that feels indistinguishable from calfskin but carries zero environmental guilt.</p>
            
            <h3 class="text-2xl font-bold mb-4 mt-8">Ocean Plastic Knitwear</h3>
            <p class="mb-6 text-gray-700 leading-relaxed">Our new sweater collection utilizes yarn spun from 100% recycled ocean plastics. Each garment removes approximately 1kg of waste from our waterways. Advanced spinning techniques ensure that these fibers are soft, breathable, and warm.</p>
            
            <img src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80&w=1200" class="w-full rounded-2xl my-8" alt="Textile Tech">

            <p class="mb-6 text-gray-700 leading-relaxed">Sustainability is a journey, not a destination. By choosing these fabrics, you are voting for a future where fashion and nature exist in harmony. Join us in wearing the change.</p>
        `
    }
};

let selectedProduct = PRODUCTS[0];
let selectedDetailSize = PRODUCTS[0].sizes[2];
let selectedDetailColor = PRODUCTS[0].colors[1];

// --- Utility Functions (Icons) ---
const getIconSVG = (name, classes = 'w-5 h-5') => {
    const icons = {
        ShoppingCart: `<svg class="icon ${classes}" viewBox="0 0 24 24"><use href="#ShoppingCartIcon"></use></svg>`,
        ArrowLeft: `<svg class="icon ${classes}" viewBox="0 0 24 24"><use href="#ArrowLeftIcon"></use></svg>`,
        Check: `<svg class="icon ${classes}" viewBox="0 0 24 24"><use href="#CheckIcon"></use></svg>`,
        Minus: `<svg class="icon ${classes}" viewBox="0 0 24 24"><use href="#MinusIcon"></use></svg>`,
        Plus: `<svg class="icon ${classes}" viewBox="0 0 24 24"><use href="#PlusIcon"></use></svg>`,
        ShieldCheck: `<svg class="icon ${classes}" viewBox="0 0 24 24"><use href="#ShieldCheckIcon"></use></svg>`,
        RefreshCw: `<svg class="icon ${classes}" viewBox="0 0 24 24"><use href="#RefreshCwIcon"></use></svg>`,
    };
    return icons[name] || '';
};

// --- Notification System ---
const showNotification = (message) => {
    const container = document.getElementById('notification-container');
    const toast = document.createElement('div');
    toast.className = 'toast-enter bg-black text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 max-w-sm pointer-events-auto';
    toast.innerHTML = `
        ${getIconSVG('Check', 'w-4 h-4 text-green-300')}
        <span class="text-sm font-medium">${message}</span>
    `;

    container.appendChild(toast);

    // Start transition in
    setTimeout(() => {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-enter-active');
    }, 10);

    // Start transition out and remove
    setTimeout(() => {
        toast.classList.remove('toast-enter-active');
        toast.classList.add('toast-exit-active');

        setTimeout(() => {
            container.removeChild(toast);
        }, 300); // Match exit transition duration
    }, 3000);
};


// --- Cart Functions ---

const calculateCartCount = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);

const updateCartBadge = () => {
    const count = calculateCartCount();
    const badge = document.getElementById('cart-count-badge');
    if (badge) {
        badge.textContent = count;
        badge.classList.toggle('hidden', count === 0);
    }
    localStorage.setItem('dh_cart', JSON.stringify(cartItems));
};

const handleAddToCart = (newItem, showToast = true) => {
    const itemIdentifier = `${newItem.productId}-${newItem.color}-${newItem.size}`;

    const existingItemIndex = cartItems.findIndex(item =>
        `${item.productId}-${item.color}-${item.size}` === itemIdentifier
    );

    if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += newItem.quantity;
    } else {
        cartItems.push(newItem);
    }

    updateCartBadge();
    if (showToast) {
        showNotification(`Added ${newItem.quantity}x ${newItem.name} to cart.`);
    }
    renderCartView(); // Re-render cart if on cart view
};

window.quickAddToCart = (productId) => {
    const product = ALL_PRODUCTS_MAP[productId];
    if (!product) return;

    const newItem = {
        productId: product.id,
        name: product.name,
        color: product.colors[0].name, // Default color
        size: product.sizes[0],        // Default size
        price: product.price,
        quantity: 1
    };
    handleAddToCart(newItem, true);
};

window.updateQuantity = (itemIndex, newQuantity) => {
    if (newQuantity < 1) return;
    cartItems[itemIndex].quantity = newQuantity;
    updateCartBadge();
    renderCartView();
};

window.removeItem = (itemIndex) => {
    const itemElement = document.getElementById(`cart-item-${itemIndex}`);
    if (itemElement) {
        // Apply removal class for CSS transition
        itemElement.classList.add('cart-item-removing');

        // Wait for the transition to finish before removing from state and DOM
        setTimeout(() => {
            cartItems.splice(itemIndex, 1);
            updateCartBadge();
            renderCartView();
        }, 400); // Must match CSS transition duration
    } else {
        // Fallback if element not found (shouldn't happen)
        cartItems.splice(itemIndex, 1);
        updateCartBadge();
        renderCartView();
    }
};

// --- Navigation ---

window.navigateTo = (view, param = null) => {
    currentView = view;

    // Reset category filter if not explicitly set
    if (view !== 'listing' || (view === 'listing' && typeof param === 'string')) {
        // If param is string, it's a category filter. If param is null (from Shop link), clear filter.
        currentCategoryFilter = typeof param === 'string' ? param : null;
        currentTypeFilter = null; // Reset type filter on main category change
    }

    // Handle product selection for details view
    if (view === 'details' && typeof param === 'number') {
        selectedProduct = ALL_PRODUCTS_MAP[param];
        // Reset detail selections for the new product to the first options
        selectedDetailSize = selectedProduct.sizes[0] || '';
        selectedDetailColor = selectedProduct.colors[0] || {};
    }

    // Hide all views
    document.querySelectorAll('.app-view').forEach(el => el.classList.add('hidden'));

    // Show the target view
    const targetView = document.getElementById(`${view}-view`);
    if (targetView) {
        targetView.classList.remove('hidden');

        // Render specific view content
        if (view === 'home') renderHomeView();
        if (view === 'listing') renderListingView();
        if (view === 'details') renderDetailsView();
        if (view === 'cart') renderCartView();
        if (view === 'article') renderArticleView(param);
    }
    window.scrollTo(0, 0); // Scroll to top on view change
};

window.updateTypeFilter = (type) => {
    // Toggle: if clicking same type, remove filter. Else set it.
    currentTypeFilter = (currentTypeFilter === type) ? null : type;
    renderListingView();
};

window.toggleFilters = () => {
    const sidebar = document.getElementById('filter-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('hidden');
    }
};

window.toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    }
};

// --- Rendering Functions ---

const renderHomeView = () => {
    const homeView = document.getElementById('home-view');
    if (!homeView) return;

    // Use specific images for categories
    // Use specific images for categories
    const categories = [
        { name: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800', id: 'women' },
        { name: 'Men', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&q=80&w=800', id: 'men' },
        { name: 'Accessories', image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800', id: 'accessories' }
    ];

    homeView.innerHTML = `
        <div class="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-16 group hero-container opacity-0">
            <video 
                autoplay 
                muted 
                playsinline
                class="hero-img w-full h-full object-cover object-center scale-110"
            >
                <source src="assets/hero-video.mp4" type="video/mp4">
            </video>
            <div class="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center p-6">
                <div class="overflow-hidden">
                    <h1 class="hero-text text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-md translate-y-full">
                        Define Your Style
                    </h1>
                </div>
                <div class="overflow-hidden">
                    <p class="hero-subtext text-white text-lg md:text-xl font-medium mb-8 max-w-xl drop-shadow-sm translate-y-full">
                        Discover the latest trends and premium quality essentials for the season.
                    </p>
                </div>
                <div class="hero-btn opacity-0 translate-y-4">
                    <button 
                        onclick="navigateTo('listing')" 
                        class="bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm md:text-base hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Shop New Arrivals
                    </button>
                </div>
            </div>
        </div>

        <!-- Featured Categories -->
        <div class="mb-20">
            <h2 class="text-2xl font-bold mb-8 flex items-center gap-3">
                Shop by Category
                <div class="h-0.5 bg-gray-200 flex-1"></div>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${categories.map((cat, index) => `
                    <div class="category-card opacity-0 translate-y-8 group relative h-80 rounded-2xl overflow-hidden cursor-pointer" onclick="navigateTo('listing', '${cat.id}')">
                        <img 
                            src="${cat.image}" 
                            alt="${cat.name}" 
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <h3 class="text-white text-2xl font-bold flex items-center justify-between w-full">
                                ${cat.name}
                                <span class="bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                                    <svg class="icon w-4 h-4 rotate-180" viewBox="0 0 24 24"><use href="#ArrowLeftIcon"></use></svg>
                                </span>
                            </h3>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Trending Now -->
        <div class="mb-10">
            <div class="flex justify-between items-end mb-8">
                <h2 class="text-2xl font-bold">Trending Now</h2>
                <button onclick="navigateTo('listing')" class="text-sm font-semibold border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                    View all
                </button>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Limit to first 4 available products -->
                ${PRODUCTS.slice(0, 4).map((p, i) => createProductCard(p, i, true)).join('')}
            </div>
        </div>

        <!-- Editorial Section -->
        <div class="mb-20">
            <div class="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
                <img 
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000" 
                    alt="Editorial" 
                    class="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div class="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-6">
                    <span class="text-white text-sm uppercase tracking-[0.2em] mb-4">The Editorial</span>
                    <h2 class="text-3xl md:text-5xl font-black text-white mb-6 max-w-2xl">
                        "Elegance is not standing out, but being remembered."
                    </h2>
                    <button onclick="navigateTo('listing')" class="text-white border-b border-white pb-1 hover:text-gray-200 hover:border-gray-200 transition-colors">
                        Read the Story
                    </button>
                </div>
            </div>
        </div>

        <!-- Latest Stories -->
        <div class="mb-20">
            <h3 class="text-2xl font-bold mb-8">Latest Stories</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Story 1 -->
                <div class="group cursor-pointer" onclick="navigateTo('article', 'style-guide')">
                    <div class="overflow-hidden rounded-2xl mb-4">
                        <img 
                            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800" 
                            alt="Style Guide 2025" 
                            class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div class="space-y-2">
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Trend Report</span>
                        <h4 class="text-xl font-bold group-hover:underline decoration-1 underline-offset-4">Style Guide 2025</h4>
                        <p class="text-gray-500 text-sm leading-relaxed">
                            Discover the bold silhouettes and neon accents defining the new era of futuristic fashion.
                        </p>
                    </div>
                </div>

                <!-- Story 2 -->
                <div class="group cursor-pointer" onclick="navigateTo('article', 'sustainable-fabrics')">
                    <div class="overflow-hidden rounded-2xl mb-4">
                        <img 
                            src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?auto=format&fit=crop&q=80&w=800" 
                            alt="Sustainable Fabrics" 
                            class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div class="space-y-2">
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Sustainability</span>
                        <h4 class="text-xl font-bold group-hover:underline decoration-1 underline-offset-4">Sustainable Fabrics</h4>
                        <p class="text-gray-500 text-sm leading-relaxed">
                            How we are redefining luxury by sourcing biodegradable materials without compromising on quality.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Newsletter Section -->
        <div class="bg-gray-900 rounded-3xl p-8 md:p-16 text-center mb-20">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Join our list</h2>
            <p class="text-gray-400 mb-8 max-w-md mx-auto">Sign up for exclusive access to new drops and special offers.</p>
            <div class="max-w-md mx-auto flex gap-4">
                <input type="email" placeholder="Your email address" class="flex-1 bg-gray-800 border-none rounded-full px-6 py-3 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-white/20 outline-none" />
                <button class="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                    Sign Up
                </button>
            </div>
        </div>

    `;

    // --- GSAP Animations ---
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(".hero-container", { opacity: 1, duration: 0.5 })
        .to(".hero-img", { scale: 1, duration: 1.5, ease: "power2.out" }, "<")
        .to(".hero-text", { y: 0, duration: 1 }, "-=1.2")
        .to(".hero-subtext", { y: 0, duration: 1 }, "-=0.8")
        .to(".hero-btn", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .to(".category-card", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1
        }, "-=0.4")
        .to(".trending-item", { // Note: ensure createProductCard adds this class if 'isHome' is true or generally
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05
        }, "-=0.6");
};

const createProductCard = (product, index = 0, isHome = false) => {
    const priceHtml = product.originalPrice
        ? `<div class="flex items-center gap-2"><p class="font-bold text-sm text-gray-900">$${product.price.toFixed(2)}</p><p class="text-xs text-gray-400 line-through">$${product.originalPrice.toFixed(2)}</p></div>`
        : `<p class="font-bold text-sm text-gray-900">$${product.price.toFixed(2)}</p>`;

    const animationClasses = isHome ? 'trending-item opacity-0 translate-y-4' : '';

    return `
        <div 
            class="group flex flex-col gap-3 transform hover:-translate-y-1 transition-transform duration-300 ease-out ${animationClasses}"
        >
            <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#F2F2F2] cursor-pointer" onclick="navigateTo('details', ${product.id})">
                <img 
                    src="${product.image}" 
                    alt="${product.name}" 
                    class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    onerror="this.onerror=null; this.src='https://placehold.co/800x1066/D1D5DB/111827?text=${product.name.split(' ')[0]}'"
                />
                ${product.tag ? `<span class="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-md shadow-sm">${product.tag}</span>` : ''}
                
                <!-- Quick Add Button -->
                <button 
                    onclick="event.stopPropagation(); quickAddToCart(${product.id});"
                    title="Quick Add to Cart (Default Size/Color)"
                    class="absolute bottom-3 right-3 p-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 active:scale-95 pointer-events-none group-hover:pointer-events-auto"
                >
                    ${getIconSVG('ShoppingCart', 'w-5 h-5 text-black')}
                </button>
            </div>
            <div class="space-y-1 cursor-pointer" onclick="navigateTo('details', ${product.id})">
                <h3 class="font-semibold text-sm text-gray-900 leading-tight group-hover:underline">${product.name}</h3>
                ${priceHtml}
            </div>
        </div>
    `;
};

const renderListingView = () => {
    const grid = document.getElementById('product-grid');
    const title = document.querySelector('#listing-view h1');
    const sidebarContainer = document.getElementById('filter-sidebar');
    const heroContainer = document.getElementById('shop-hero-container');

    if (grid) {
        // 1. Initial filtered set based on IDs (exclude mock cart items)
        let baseProducts = PRODUCTS.filter(p => p.id < 99);

        // --- 0. Dynamic Hero Logic ---
        if (heroContainer) {
            // Check Type filter first (more specific), then Category filter
            const activeFilter = (currentTypeFilter || currentCategoryFilter || '').toLowerCase();
            const videoSrc = CATEGORY_HERO_VIDEOS[activeFilter];

            if (videoSrc) {
                const displayName = currentTypeFilter || currentCategoryFilter;
                heroContainer.innerHTML = `
                    <div class="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden group">
                        <video autoplay loop muted playsinline class="w-full h-full object-cover">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                        <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <h2 class="text-3xl md:text-5xl font-black text-white uppercase tracking-tight drop-shadow-lg">
                                ${displayName}
                            </h2>
                        </div>
                    </div>
                `;
                heroContainer.classList.remove('hidden');
            } else {
                heroContainer.classList.add('hidden');
            }
        }

        // 2. Filter by Gender (Category)
        if (currentCategoryFilter) {
            baseProducts = baseProducts.filter(p => p.gender === currentCategoryFilter);
        }

        // 3. Generate Sidebar Counts based on Gender Filtered Data
        // Calculate counts for available types within the current gender selection
        const typeCounts = baseProducts.reduce((acc, product) => {
            const type = product.category; // e.g., 'Jackets', 'Pants'
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});

        // Render Sidebar
        if (sidebarContainer) {
            sidebarContainer.innerHTML = `
                <h2 class="text-xl font-bold mb-6">Filter</h2>
                
                <!-- Dynamic Category Filter -->
                <div class="border-b border-gray-200 py-4">
                    <button class="flex justify-between w-full items-center font-semibold text-sm text-gray-800">
                        Categories
                        <svg class="icon w-4 h-4 text-gray-500" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
                    </button>
                    <ul class="text-sm text-gray-600 mt-3 space-y-2">
                        ${Object.keys(typeCounts).map(type => `
                            <li>
                                <button onclick="updateTypeFilter('${type}')" class="flex justify-between w-full text-left hover:text-black transition-colors ${currentTypeFilter === type ? 'font-bold text-black' : ''}">
                                    ${type}
                                    <span class="${currentTypeFilter === type ? 'text-black' : 'text-gray-400'}">(${typeCounts[type]})</span>
                                </button>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Static Sizes Filter (Visual Only) -->
                 <div class="border-b border-gray-200 py-4">
                    <button class="flex justify-between w-full items-center font-semibold text-sm text-gray-800">
                        Sizes
                        <svg class="icon w-4 h-4 text-gray-500" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
                    </button>
                    <div class="grid grid-cols-4 gap-2 mt-4">
                        <button class="p-2 text-xs font-medium rounded-lg border bg-black text-white border-black">M</button>
                        <button class="p-2 text-xs font-medium rounded-lg border border-gray-200 hover:border-black">S</button>
                        <button class="p-2 text-xs font-medium rounded-lg border border-gray-200 hover:border-black">L</button>
                         <button class="p-2 text-xs font-medium rounded-lg border border-gray-200 hover:border-black">XL</button>
                    </div>
                </div>
            `;
        }

        // 4. Apply Type Filter for Grid Display
        let finalProducts = baseProducts;
        if (currentTypeFilter) {
            finalProducts = baseProducts.filter(p => p.category === currentTypeFilter);
        }

        // 5. Update Title
        if (title) {
            const titleMap = {
                'men': "Men's Collection",
                'women': "Women's Collection",
                'children': "Children's Collection",
                'accessories': "Accessories"
            };
            let displayTitle = titleMap[currentCategoryFilter] || 'Shop';
            if (currentTypeFilter) {
                displayTitle += ` - ${currentTypeFilter}`;
            }
            title.textContent = displayTitle;
        }

        // 6. Render Grid
        if (finalProducts.length > 0) {
            grid.innerHTML = finalProducts.map(p => createProductCard(p)).join('');
        } else {
            grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-20">No products found for this filter.</p>`;
        }
    }
};

const renderArticleView = (articleId) => {
    const container = document.getElementById('article-view');
    const article = ARTICLES[articleId];

    if (!container || !article) return;

    container.innerHTML = `
        <div class="pb-20 pt-8">
            <button onclick="navigateTo('home')" class="flex items-center text-sm font-semibold text-gray-500 hover:text-black mb-12 group transition-colors">
                <svg class="icon w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24"><use href="#ArrowLeftIcon"></use></svg>
                Back to Home
            </button>

            <header class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">${article.date}</span>
                <h1 class="text-4xl md:text-5xl font-black mb-6 leading-tight">${article.title}</h1>
                <p class="text-xl text-gray-500 font-medium">${article.subtitle}</p>
            </header>

            <div class="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16">
                <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover">
            </div>

            <article class="prose prose-lg max-w-2xl mx-auto text-gray-800">
                ${article.content}
            </article>

             <div class="max-w-2xl mx-auto mt-16 pt-16 border-t border-gray-100 text-center">
                <p class="text-2xl font-bold mb-6">Inspired?</p>
                <button onclick="navigateTo('listing')" class="bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                    Shop the Collection
                </button>
            </div>
        </div>
    `;
};

// Detail View helpers
window.selectDetailSize = (size) => {
    selectedDetailSize = size;
    renderDetailsView();
};

window.selectDetailColor = (colorName) => {
    selectedDetailColor = selectedProduct.colors.find(c => c.name === colorName);
    renderDetailsView();
};

window.addToCartFromDetails = () => {
    if (!selectedDetailSize || !selectedDetailColor.name) {
        showNotification('Please select a size and color.', false);
        return;
    }
    const newItem = {
        productId: selectedProduct.id,
        name: selectedProduct.name,
        color: selectedDetailColor.name,
        size: selectedDetailSize,
        price: selectedProduct.price,
        quantity: 1
    };
    handleAddToCart(newItem, true); // Show toast notification
};

const renderDetailsView = () => {
    if (!selectedProduct) return;

    const sizeButtons = selectedProduct.sizes.map(size => `
        <button
            onclick="selectDetailSize('${size}')"
            class="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 
                    ${selectedDetailSize === size
            ? 'bg-black text-white shadow-md ring-2 ring-offset-1 ring-black'
            : 'bg-white text-gray-700 border border-gray-200 hover:border-black'}"
        >
            ${size}
        </button>
    `).join('');

    const colorButtons = selectedProduct.colors.map(color => {
        const isSelected = selectedDetailColor.name === color.name;
        return `
            <button
                onclick="selectDetailColor('${color.name}')"
                class="w-8 h-8 rounded-full border-2 transition-all duration-200 flex items-center justify-center 
                        ${isSelected ? 'border-black ring-2 ring-offset-2 ring-gray-300' : 'border-gray-200 hover:ring-2 hover:ring-offset-1 hover:ring-gray-300'}"
                style="background-color: ${color.hex};"
                title="${color.name}"
            >
                ${isSelected ? getIconSVG('Check', `w-4 h-4 ${color.hex === '#1f2937' ? 'text-white' : 'text-black'}`) : ''}
            </button>
        `;
    }).join('');

    const featuresList = selectedProduct.features.map(f => `
        <li class="flex items-start">
            ${getIconSVG('Check', 'w-4 h-4 text-gray-700 mr-3 mt-1 flex-shrink-0')}
            <span>${f}</span>
        </li>
    `).join('');

    const detailHtml = `
        <button onclick="navigateTo('listing')" class="flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8 active:scale-[0.98]">
            ${getIconSVG('ArrowLeft', 'w-4 h-4 mr-2')}
            Back to products
        </button>

        <div class="lg:grid lg:grid-cols-12 lg:gap-16">
            <!-- Image Gallery (Col 1-7) -->
            <div class="lg:col-span-7">
                <div class="aspect-[4/5] bg-[#F2F2F2] rounded-2xl overflow-hidden mb-6 shadow-xl">
                    <img 
                        src="${selectedProduct.image}" 
                        alt="${selectedProduct.name}" 
                        class="w-full h-full object-cover object-center"
                        onerror="this.onerror=null; this.src='https://placehold.co/800x1000/D1D5DB/111827?text=${selectedProduct.name}'"
                    />
                </div>
            </div>

            <!-- Details (Col 8-12) -->
            <div class="lg:col-span-5 mt-10 lg:mt-0">
                <p class="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">Premium Quality</p>
                <h1 class="text-4xl font-bold mb-4">${selectedProduct.name}</h1>
                <p class="text-gray-600 mb-6 leading-relaxed">${selectedProduct.description}</p>
                
                <div class="flex items-center gap-2 mb-8">
                    <p class="text-2xl font-bold text-red-600">$${selectedProduct.price.toFixed(2)}</p>
                    ${selectedProduct.originalPrice ? `<p class="text-lg text-gray-400 line-through">$${selectedProduct.originalPrice.toFixed(2)}</p>` : ''}
                </div>

                <!-- Size Selection -->
                <div class="mb-8">
                    <h3 class="font-semibold text-sm mb-3">Select size</h3>
                    <div class="flex flex-wrap gap-2">
                        ${sizeButtons}
                        <a href="#" onclick="event.preventDefault();" class="text-sm font-medium text-gray-500 self-center hover:text-black transition-colors ml-4">Size Guide</a>
                    </div>
                </div>

                <!-- Color Selection -->
                <div class="mb-8">
                    <h3 class="font-semibold text-sm mb-3">Color | ${selectedDetailColor.name}</h3>
                    <div class="flex gap-3">
                        ${colorButtons}
                    </div>
                </div>

                <!-- Add to Cart Button -->
                <button 
                    onclick="addToCartFromDetails()"
                    class="w-full bg-black text-white py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                    ${getIconSVG('ShoppingCart', 'w-5 h-5')}
                    Add to cart
                </button>
                <p class="text-center text-sm text-gray-500 mt-3 flex items-center justify-center gap-2">
                    ${getIconSVG('Check', 'w-4 h-4 text-green-500')}
                    Free delivery on orders over $30.00
                </p>

                <!-- Key Features Section -->
                <div class="mt-12">
                    <h3 class="flex items-center justify-between font-semibold text-lg border-b border-gray-200 pb-2 mb-4 cursor-pointer">
                        KEY FEATURES
                        <svg class="icon w-5 h-5" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
                    </h3>
                    <ul class="space-y-3 text-sm text-gray-700">
                        ${featuresList}
                    </ul>
                </div>
            </div>
        </div>
    `;
    document.getElementById('details-view').innerHTML = detailHtml;
};

const createCartItem = (item, index) => {
    const productData = ALL_PRODUCTS_MAP[item.productId] || {};
    const imageUrl = productData.image || `https://placehold.co/100x133/F2F2F2/9CA3AF?text=${item.name}`;

    return `
        <div 
            id="cart-item-${index}"
            class="cart-item-remove-transition flex justify-between items-start py-4 border-b border-gray-100"
        >
            <div class="flex gap-4 w-full">
                <div class="w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-[#F2F2F2]">
                    <img src="${imageUrl}" alt="${item.name}" class="w-full h-full object-cover object-center" />
                </div>
                <div class="flex flex-col justify-between py-1 w-full">
                    <div>
                        <h3 class="font-semibold text-gray-900 leading-tight">${item.name}</h3>
                        <p class="text-xs text-gray-500 mt-0.5">Color: ${item.color}</p>
                        <p class="text-xs text-gray-500">Size: ${item.size}</p>
                    </div>
                    
                    <div class="flex items-center mt-3">
                        <div class="flex items-center border border-gray-300 rounded-full text-sm">
                            <button 
                                onclick="updateQuantity(${index}, ${item.quantity - 1})"
                                ${item.quantity <= 1 ? 'disabled' : ''}
                                class="p-2 rounded-l-full transition-colors ${item.quantity <= 1 ? 'text-gray-400' : 'hover:bg-gray-100'}"
                            >
                                ${getIconSVG('Minus', 'w-3 h-3')}
                            </button>
                            <span class="px-3 font-medium w-6 text-center">${item.quantity}</span>
                            <button 
                                onclick="updateQuantity(${index}, ${item.quantity + 1})"
                                class="p-2 rounded-r-full hover:bg-gray-100 transition-colors"
                            >
                                ${getIconSVG('Plus', 'w-3 h-3')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col items-end flex-shrink-0 ml-4 py-1">
                <button onclick="removeItem(${index})" class="text-xs text-red-500 hover:text-red-700 transition-colors mb-8 active:scale-[0.95]">
                    Delete
                </button>
                <p class="font-bold text-sm text-gray-900">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>
    `;
};

const renderCartView = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 30 ? 0.00 : 5.00;
    const total = subtotal + shipping;
    const itemTotalCount = calculateCartCount();

    const cartItemsHtml = cartItems.length === 0
        ? '<p class="text-center text-gray-500 py-10">Your cart is empty.</p>'
        : cartItems.map(createCartItem).join('');

    const cartContentHtml = `
        <div class="grid lg:grid-cols-3 gap-12">
            <!-- Shopping Cart Items (Col 1-2) -->
            <div class="lg:col-span-2">
                <h1 class="text-3xl font-bold mb-6">Shopping cart 
                    <span class="ml-3 px-3 py-1 text-sm font-medium bg-gray-100 rounded-full text-gray-700">
                        ${itemTotalCount} products
                    </span>
                </h1>
                <div class="divide-y divide-gray-100">
                    ${cartItemsHtml}
                </div>
            </div>

            <!-- Cart Summary (Col 3) -->
            <div class="lg:col-span-1 bg-gray-50 p-8 rounded-2xl sticky top-28 h-fit shadow-inner border border-gray-100">
                <h2 class="text-xl font-bold mb-6">Cart summary</h2>

                <div class="flex items-center gap-3 mb-6">
                    <input 
                        type="text" 
                        placeholder="Discount code" 
                        class="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-black focus:border-black outline-none"
                    />
                    <button class="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-orange-600 transition-colors active:scale-95">
                        Apply
                    </button>
                </div>
                
                <div class="space-y-3 mb-6 border-b border-gray-200 pb-4 text-sm">
                    <div class="flex justify-between text-gray-600">
                        <span>Product's price</span>
                        <span class='text-gray-800'>$${subtotal.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span class="font-medium ${shipping === 0 ? 'text-green-600' : 'text-gray-800'}">
                            ${shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                        </span>
                    </div>
                </div>

                <div class="flex justify-between items-center text-xl font-bold mb-8">
                    <span>Total</span>
                    <span>$${total.toFixed(2)}</span>
                </div>

                <button class="w-full bg-black text-white py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-800 transition-colors active:scale-95">
                    Checkout
                </button>
                
                <div class="mt-8 pt-4 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                    <p class="flex items-center gap-2">
                        ${getIconSVG('ShieldCheck', 'w-4 h-4 text-green-500')}
                        Safe shopping at DressHome
                    </p>
                    <p class="flex items-center gap-2">
                        ${getIconSVG('Check', 'w-4 h-4 text-green-500')}
                        Free delivery on orders over $30.00
                    </p>
                    <p class="flex items-center gap-2">
                        ${getIconSVG('RefreshCw', 'w-4 h-4 text-gray-500')}
                        365 days for return
                    </p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('cart-content').innerHTML = cartContentHtml;
};


// --- Initialization ---
window.onload = () => {
    updateCartBadge(); // Initialize cart count on load
    // Determine initial view based on hash for better "session" feel
    const initialView = window.location.hash.replace('#', '') || 'home';
    if (['home', 'listing', 'cart'].includes(initialView)) {
        navigateTo(initialView);
    } else {
        navigateTo('home');
    }
};
