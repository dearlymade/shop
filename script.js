// =============================
// CONSTANTS & DATA
// =============================
const WRAP_PRICE = 49;

// 👉 UPI details
const UPI_ID = 'subashree1912@okaxis';
const MERCHANT_NAME = 'Dearly Made';

// 👉 EmailJS details
const EMAILJS_PUBLIC_KEY = 'ocCtzdGjItQ6ZcPY_';
const EMAILJS_SERVICE_ID = 'service_zazd6c9';
const EMAILJS_TEMPLATE_ID = 'template_yde4v8o';

// OPTIONAL: your own store email for template {{email}}
const STORE_EMAIL = 'mydearlymade@gmail.com';

/* --- PRODUCT DATA (30 ITEMS) --- */
const products = [
  // Keychainss
  {
    id: 1,
    slug: 'paper-tulip',
    title: 'Paper Tulip',
    price: 25,
    category: 'bouquets',
    img: 'img/products/1.png',
    short: 'A beautifully crafted single paper tulip, perfect for gifting or décor. Lightweight, customizable, and made with high-quality pastel paper for a charming, lasting bloom.',
    customizable: true
  },
  {
    id: 2,
    slug: 'single-paper-tulip-bouquet',
    title: 'Single Paper Tulip Bouquet',
    price: 40,
    category: 'bouquets',
    img: 'img/products/2.png',
    short: 'A cute single-stem tulip bouquet wrapped neatly for a minimal and elegant look. Perfect for small surprises, notes, or thoughtful gifting on any occasion.',
    customizable: false
  },
  {
    id: 3,
    slug: 'paper-tulip-bouquet',
    title: 'Paper Tulip Bouquet',
    price: 120,
    category: 'bouquets',
    img: 'img/products/3.png',
    short: 'A charming bouquet of handcrafted paper tulips, arranged beautifully with soft wrapping. Ideal for birthdays, anniversaries, and décor—long-lasting and fully customizable.',
    customizable: true
  },

  // Albums / Photo Books
  {
    id: 4,
    slug: 'photo-album-8-page',
    title: 'Photo Album',
    price: 120,
    category: 'albums',
    img: 'img/products/4.png',
    short: 'A compact 8-page handmade photo album crafted with premium sheets. Perfect for preserving memories with photos and short messages. Fully customizable for any occasion.',
    customizable: true
  },
  {
    id: 5,
    slug: 'photo-album-6-page',
    title: 'Photo Album',
    price: 160,
    category: 'albums',
    img: 'img/products/5.png',
    short: 'A beautifully crafted 6-page mini photo album designed for special memories. Comes with decorated pages and space for photos and messages. Customizable for any theme or occasion.',
    customizable: true
  },

  // Wall Cards / Room Decor
  {
    id: 6,
    slug: 'aesthetic-wall-card',
    title: 'Aesthetic Wall Card',
    price: 40,
    category: 'wall-cards',
    img: 'img/products/6.png',
    short: 'A cute pastel-themed wall card perfect for adding charm to room décor.',
    customizable: false
  },
  {
    id: 7,
    slug: 'minimal-wall-card',
    title: 'Minimal Wall Card',
    price: 40,
    category: 'wall-cards',
    img: 'img/products/7.png',
    short: 'A clean and simple wall card ideal for study corners and workspace décor.',
    customizable: false
  },
  {
    id: 8,
    slug: 'vibrant-quote-wall-card',
    title: 'Vibrant Quote Wall Card',
    price: 40,
    category: 'wall-cards',
    img: 'img/products/8.png',
    short: 'A bright and colorful card with hand-drawn elements, perfect for mood boards.',
    customizable: false
  },
  {
    id: 9,
    slug: 'personalized-wall-card',
    title: 'Personalized Wall Card',
    price: 40,
    category: 'wall-cards',
    img: 'img/products/9.png',
    short: 'A customizable wall card made with premium sheets for room makeover setups.',
    customizable: true
  },
  {
    id: 10,
    slug: 'cute-mini-wall-card',
    title: 'Cute Mini Wall Card',
    price: 40,
    category: 'wall-cards',
    img: 'img/products/10.png',
    short: 'A small, expressive wall card that adds personality to any wall or shelf.',
    customizable: false
  },
  {
    id: 11,
    slug: 'handcrafted-art-wall-card',
    title: 'Handcrafted Art Wall Card',
    price: 40,
    category: 'wall-cards',
    img: 'img/products/11.png',
    short: 'A neatly crafted art card perfect for photo walls and themed décor.',
    customizable: false
  },
  {
    id: 12,
    slug: 'positive-vibes-wall-card',
    title: 'Positive Vibes Wall Card',
    price: 40,
    category: 'wall-cards',
    img: 'img/products/12.png',
    short: 'A modern, uplifting wall card designed to bring positivity and style to your space.',
    customizable: false
  },

  // Hampers
  {
    id: 13,
    slug: 'mini-gift-hamper',
    title: 'Mini Gift Hamper',
    price: 100,
    category: 'hampers',
    img: 'img/products/13.png',
    short: 'A cute mini hamper featuring a clip greeting card, a handmade flower, and a personalized photo card—perfect for small surprises and thoughtful gifting.',
    customizable: true
  },
  {
    id: 14,
    slug: 'cute-combo-hamper',
    title: 'Cute Combo Hamper',
    price: 100,
    category: 'hampers',
    img: 'img/products/14.png',
    short: 'A budget-friendly hamper with a decorative clip card, handcrafted flower, and a custom photo card. Ideal for birthdays, anniversaries, and sweet gestures.',
    customizable: true
  },
  {
    id: 15,
    slug: 'classic-mini-hamper',
    title: 'Classic Mini Hamper',
    price: 100,
    category: 'hampers',
    img: 'img/products/15.png',
    short: 'A sweet mini hamper featuring a custom photo card, a decorative clip, and a single handmade flower bouquet—perfect for thoughtful and budget-friendly gifting.',
    customizable: true
  },
  {
    id: 16,
    slug: 'handcrafted-gift-hamper',
    title: 'Handcrafted Gift Hamper',
    price: 150,
    category: 'hampers',
    img: 'img/products/16.png',
    short: 'A beautifully curated hamper featuring a paper tulip bouquet, a handwritten letter, and a mini greeting card—perfect for heartfelt and memorable gifting.',
    customizable: true
  },
  {
    id: 17,
    slug: 'precious-moments-hamper',
    title: 'Precious Moments Hamper',
    price: 150,
    category: 'hampers',
    img: 'img/products/17.png',
    short: 'A thoughtful hamper that includes a handmade photo album, a personalized photo card, and a cute mini greeting card—perfect for cherishing special moments.',
    customizable: true
  },
  {
    id: 18,
    slug: 'sweet-surprise-hamper',
    title: 'Sweet Surprise Hamper',
    price: 150,
    category: 'hampers',
    img: 'img/products/18.png',
    short: 'A charming hamper featuring a single paper tulip bouquet, a personalized photo card, and a cute paper bouquet—perfect for gifting with love and care.',
    customizable: true
  },
  {
    id: 19,
    slug: 'heartfelt-gift-hamper',
    title: 'Heartfelt Gift Hamper',
    price: 150,
    category: 'hampers',
    img: 'img/products/19.png',
    short: 'A lovely hamper including a mini paper bouquet, a handwritten letter, a mini greeting card, and a personalized photo card—perfect for expressing love and thoughtful gestures.',
    customizable: true
  },
  {
    id: 20,
    slug: 'charming-surprise-hamper',
    title: 'Charming Surprise Hamper',
    price: 150,
    category: 'hampers',
    img: 'img/products/20.png',
    short: 'A delightful hamper featuring a paper tulip, a personalized photo card, a mini greeting card, a greeting card, and a handwritten letter—perfect for thoughtful gifting and special moments.',
    customizable: true
  },
  {
    id: 21,
    slug: 'elegant-gift-hamper',
    title: 'Elegant Gift Hamper',
    price: 200,
    category: 'hampers',
    img: 'img/products/21.png',
    short: 'A beautifully curated hamper featuring a handmade photo album and a single paper tulip bouquet—perfect for preserving memories and gifting with love.',
    customizable: true
  },
  {
    id: 22,
    slug: 'ultimate-gift-hamper',
    title: 'Ultimate Gift Hamper',
    price: 200,
    category: 'hampers',
    img: 'img/products/22.png',
    short: 'A generous hamper including a photo card, photo bouquet, greeting card, mini greeting card, and a handwritten letter—perfect for heartfelt gifting and making special moments memorable.',
    customizable: true
  },

  // Special Handmade Gifts / Keepsakes
  {
    id: 23,
    slug: 'handmade-explosion-box',
    title: 'Handmade Explosion Box',
    price: 300,
    category: 'handmade-gifts',
    img: 'img/products/23.png',
    short: 'A beautifully crafted explosion box filled with surprises, notes, and decorations. Perfect for birthdays, anniversaries, and special occasions to delight your loved ones.',
    customizable: true
  },

  // Premium Bouquets
  {
    id: 24,
    slug: 'premium-paper-tulip-bouquet',
    title: 'Premium Paper Tulip Bouquet',
    price: 350,
    category: 'bouquets',
    img: 'img/products/24.png',
    short: 'A stunning handcrafted tulip bouquet made with high-quality paper. Perfect for gifting on special occasions or adding a lasting decorative touch to any space.',
    customizable: false
  },

  // Canvas Art
  {
    id: 25,
    slug: 'hand-painted-scenery-canvas',
    title: 'Hand-Painted Scenery Canvas',
    price: 120,
    category: 'canvas-art',
    img: 'img/products/25.png',
    short: 'Beautifully hand-painted scenery on canvas, perfect for home décor or gifting. Customizable in size and design to suit your personal style.',
    customizable: true
  },
  {
    id: 26,
    slug: 'hand-painted-portrait-canvas',
    title: 'Hand-Painted Portrait Canvas',
    price: 150,
    category: 'canvas-art',
    img: 'img/products/26.png',
    short: 'A custom hand-painted portrait on canvas, perfect for gifting or personal décor. Captures memories and expressions beautifully with a personal touch.',
    customizable: true
  },

  // Keychains
  {
    id: 27,
    slug: 'single-keychain',
    title: 'Single Keychain',
    price: 50,
    category: 'keychains',
    img: 'img/products/27.png',
    short: 'A cute, handmade keychain perfect for gifting or personal use. Lightweight, durable, and charmingly crafted.',
    customizable: false
  },
  {
    id: 28,
    slug: 'pair-keychains',
    title: 'Pair Keychains',
    price: 100,
    category: 'keychains',
    img: 'img/products/28.png',
    short: 'A matching pair of handmade keychains—ideal for couples, best friends, or gifting. Stylish, durable, and thoughtfully crafted.',
    customizable: false
  },

  // Handmade Art / Decorative Piece
  {
    id: 29,
    slug: 'handmade-stone-painting',
    title: 'Handmade Stone Painting',
    price: 150,
    category: 'handmade-art',
    img: 'img/products/29.png',
    short: 'A beautifully painted stone, perfect for décor or gifting. Each piece is unique, handcrafted with care and artistic detailing.',
    customizable: false
  }
];

// Stored state (shared across pages)
const cart = JSON.parse(localStorage.getItem('dm_cart') || '[]');
const wishlist = JSON.parse(localStorage.getItem('dm_wish') || '[]');


// =============================
// HELPERS
// =============================

function calculateCartTotal() {
  let total = 0;
  cart.forEach(item => {
    const qty = item.qty || 1;
    const baseAmount = item.price * qty;
    const wrapAmount = item.wrap ? WRAP_PRICE * qty : 0;
    total += baseAmount + wrapAmount;
  });
  return total;
}

function renderProducts(list = products){
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = '';
  list.forEach(p => {
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.title} - handmade, personalised"
           onerror="this.src='https://via.placeholder.com/300?text=Product'"
           onclick="openModal(${p.id})" />
      <div class="meta">
        <h4>${p.title}</h4>
        <p class="small">${p.short}</p>
        <div class="price-row">
          <div class="price">₹${p.price}</div>
          <div class="icon-actions">
            <button class="heart" title="Add to wishlist" onclick="toggleWish(${p.id})">♡</button>
            <button class="btn btn-outline" onclick="openModal(${p.id})">View</button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
}

/* Mobile menu */
function openMobileMenu(){
  const el = document.getElementById('mobileNavDrawer');
  if(!el) return;
  el.classList.add('open');
  el.setAttribute('aria-hidden','false');
}
function closeMobileMenu(){
  const el = document.getElementById('mobileNavDrawer');
  if(!el) return;
  el.classList.remove('open');
  el.setAttribute('aria-hidden','true');
}

/* Navigation */
function goToShopPage(){
  window.location.href = 'shop.html';
}

/* Product modal */
function openModal(id){
  const p = products.find(x => x.id === id);
  if(!p) return;

  const titleEl = document.getElementById('modalTitle');
  const priceEl = document.getElementById('modalPrice');
  const descEl = document.getElementById('modalDesc');
  const imgEl = document.getElementById('modalImg');
  const modal = document.getElementById('productModal');
  const addBtn = document.getElementById('addToCartBtn');

  if (titleEl) titleEl.textContent = p.title;
  if (priceEl) priceEl.textContent = '₹' + p.price;
  if (descEl) descEl.textContent = p.short + ' — This piece is crafted with care, personalised for your loved one.';
  if (imgEl) imgEl.src = p.img;

  if (modal){
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  }

  if (addBtn){
    addBtn.onclick = () => addToCart(p.id);
  }
}

function closeModal(){
  const modal = document.getElementById('productModal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

/* Cart logic */
function addToCart(id){
  const name = document.getElementById('custName')?.value || '';
  const msg = document.getElementById('custMsg')?.value || '';
  const color = document.getElementById('custColor')?.value || '';
  const wrap = document.getElementById('wrapOpt')?.checked || false;

  const photoInput = document.getElementById('custPhoto');
  const photoFile = photoInput && photoInput.files && photoInput.files[0] ? photoInput.files[0] : null;
  const photoName = photoFile ? photoFile.name : '';
  const hasPhoto = !!photoFile;

  const p = products.find(x => x.id === id);
  if(!p) return;

  const item = {
    id: p.id,
    title: p.title,
    price: p.price,
    qty: 1,
    name,
    msg,
    color,
    wrap,
    photoName,
    hasPhoto
  };

  cart.push(item);
  localStorage.setItem('dm_cart', JSON.stringify(cart));
  updateCartCount();
  closeModal();
  alert('Added to cart!');
}

function updateCartCount(){
  const el = document.getElementById('cartCount');
  if(el) el.textContent = cart.length;
}

/* Wishlist logic */
function toggleWish(id){
  const idx = wishlist.indexOf(id);
  if(idx > -1) {
    wishlist.splice(idx, 1);
  } else {
    wishlist.push(id);
  }
  localStorage.setItem('dm_wish', JSON.stringify(wishlist));
  updateWishCountInUI();
  alert('Wishlist updated');
}

function updateWishCountInUI(){
  const wishCounter = document.getElementById('wishTotalCount');
  if(wishCounter) wishCounter.textContent = wishlist.length;
}

/* Checkout modal */
function openCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (!modal) return;

  const nameEl = document.getElementById('custFullName');
  const addrEl = document.getElementById('custAddress');
  const pinEl = document.getElementById('custPincode');
  const waEl = document.getElementById('custWhatsapp');

  if (nameEl) nameEl.value = '';
  if (addrEl) addrEl.value = '';
  if (pinEl) pinEl.value = '';
  if (waEl) waEl.value = '';

  const qrBox = document.getElementById('upiQrContainer');
  if (qrBox) {
    qrBox.innerHTML = '<span class="muted">QR will appear here after you click “Generate QR”</span>';
  }

  const amountEl = document.getElementById('upiAmountText');
  if (amountEl) {
    amountEl.textContent = 'Order Total (incl. gift wrap): ₹' + calculateCartTotal();
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

/* Cart & wishlist drawers */
function openCart(){
  const modal = document.getElementById('cartModal');
  if(!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  renderCart();
}
function closeCart(){
  const modal = document.getElementById('cartModal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

function openWish(){
  const modal = document.getElementById('wishModal');
  if(!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  renderWish();
}
function closeWish(){
  const modal = document.getElementById('wishModal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

function renderCart(){
  const listEl = document.getElementById('cartList');
  const summaryEl = document.getElementById('cartSummary');
  const totalCountEl = document.getElementById('cartTotalCount');
  if(!listEl || !summaryEl || !totalCountEl) return;

  listEl.innerHTML = '';
  if(!cart.length){
    listEl.innerHTML = '<div class="muted" style="padding:12px; text-align:center; margin-top:20px;">Your cart is empty.</div>';
    summaryEl.textContent = 'Total: ₹0';
    totalCountEl.textContent = '0';
    return;
  }

  let total = 0;

  cart.forEach((item, idx) => {
    const p = products.find(prod => prod.id === item.id);
    const imgSrc = p?.img || 'https://via.placeholder.com/120';
    const qty = item.qty || 1;

    const baseAmount = item.price * qty;
    const wrapAmount = item.wrap ? WRAP_PRICE * qty : 0;
    const lineTotal = baseAmount + wrapAmount;

    total += lineTotal;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${imgSrc}" alt="${item.title}">
      <div style="flex:1">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-weight:700">${item.title}</div>
            <div class="small-muted">₹${item.price} ${item.wrap ? `( + ₹${WRAP_PRICE} wrap )` : ''}</div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:800">₹${lineTotal}</div>
            <button class="btn btn-outline" style="margin-top:6px; font-size:11px; padding:4px 8px;" onclick="removeCartItem(${idx})">Remove</button>
          </div>
        </div>
        <div style="margin-top:8px;display:flex;justify-content:flex-start;align-items:center;gap:8px">
          <div class="qty-control">
            <button onclick="changeQty(${idx}, -1)">−</button>
            <div style="padding:6px 10px;border-radius:8px;border:1px solid #E8DCE9">${qty}</div>
            <button onclick="changeQty(${idx}, +1)">+</button>
          </div>
        </div>
      </div>
    `;
    listEl.appendChild(row);
  });

  summaryEl.textContent = 'Total: ₹' + total;
  totalCountEl.textContent = cart.length;
  updateCartCount();
  localStorage.setItem('dm_cart', JSON.stringify(cart));
}

function removeCartItem(index){
  if(index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  localStorage.setItem('dm_cart', JSON.stringify(cart));
  renderCart();
}

function changeQty(index, delta){
  if(index < 0 || index >= cart.length) return;
  cart[index].qty = Math.max(1, (cart[index].qty || 1) + delta);
  localStorage.setItem('dm_cart', JSON.stringify(cart));
  renderCart();
}

/* Wishlist rendering */
function renderWish(){
  const listEl = document.getElementById('wishList');
  const totalEl = document.getElementById('wishTotalCount');
  if(!listEl || !totalEl) return;

  listEl.innerHTML = '';
  if(!wishlist.length){
    listEl.innerHTML = '<div class="muted" style="padding:12px">Your wishlist is empty.</div>';
    totalEl.textContent = '0';
    return;
  }

  wishlist.forEach((id, idx) => {
    const p = products.find(x => x.id === id) || {title:'Unknown', price:0, img:'https://via.placeholder.com/120'};
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div style="flex:1;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-weight:700">${p.title}</div>
          <div class="small-muted">₹${p.price}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
          <button class="btn btn-primary" onclick="addWishToCart(${id})" style="font-size:11px; padding:4px 8px;">Add</button>
          <button class="btn btn-outline" onclick="removeWish(${idx})" style="font-size:11px; padding:4px 8px;">Remove</button>
        </div>
      </div>
    `;
    listEl.appendChild(row);
  });
  totalEl.textContent = wishlist.length;
}

function removeWish(index){
  if(index < 0 || index >= wishlist.length) return;
  wishlist.splice(index, 1);
  localStorage.setItem('dm_wish', JSON.stringify(wishlist));
  renderWish();
}

function addWishToCart(id){
  const p = products.find(x => x.id === id);
  if(!p) return;
  cart.push({id:p.id, title:p.title, price:p.price, qty:1, name:'', msg:'', color:'', wrap:false});
  const idx = wishlist.indexOf(id);
  if(idx > -1) wishlist.splice(idx, 1);
  localStorage.setItem('dm_wish', JSON.stringify(wishlist));
  localStorage.setItem('dm_cart', JSON.stringify(cart));
  updateCartCount();
  renderWish();
  alert('Added to cart');
}

/* Header offset */
function setHeaderOffset() {
  const header = document.querySelector('header');
  const root = document.documentElement;
  if(!header || !root) return;
  const headerRect = header.getBoundingClientRect();
  const offset = Math.ceil(headerRect.height + 12);
  root.style.setProperty('--header-offset', offset + 'px');
}


// =============================
// UPI + WHATSAPP + EMAILJS
// =============================

function handleGenerateQrClick() {
  if (!cart.length) {
    alert('Cart is empty');
    return;
  }

  const amount = calculateCartTotal();
  if (!amount || amount <= 0) {
    alert('Cart total is invalid.');
    return;
  }

  const upiUrl =
    'upi://pay?pa=' + encodeURIComponent(UPI_ID) +
    '&pn=' + encodeURIComponent(MERCHANT_NAME) +
    '&am=' + encodeURIComponent(amount) +
    '&cu=INR' +
    '&tn=' + encodeURIComponent('Dearly Made Order');

  const qrBox = document.getElementById('upiQrContainer');
  if (!qrBox) return;

  qrBox.innerHTML = '';
  if (typeof QRCode === 'undefined') {
    qrBox.innerHTML = '<span class="muted">QR library not loaded. Please check your script tag.</span>';
    return;
  }

  new QRCode(qrBox, {
    text: upiUrl,
    width: 220,
    height: 220
  });
}

function buildOrderText(fullName, address, pincode, customerWhatsapp) {
  const grandTotal = calculateCartTotal();
  let message = '🛍️ *New Dearly Made Order*\n\n';

  message += '*Customer Details*\n';
  message += `*Name:* ${fullName}\n`;
  message += `*Address:* ${address}\n`;
  message += `*Pincode:* ${pincode}\n`;
  message += `*Customer WhatsApp:* ${customerWhatsapp}\n\n`;

  message += '*Order Items* 📦\n\n';

  cart.forEach((item, index) => {
    const p = products.find(x => x.id === item.id) || item;
    const qty = item.qty || 1;

    const baseAmount = item.price * qty;
    const wrapAmount = item.wrap ? WRAP_PRICE * qty : 0;
    const lineTotal = baseAmount + wrapAmount;

    message += '----------------------------\n';
    message += `🧾 *_Item ${index + 1}_*: *${p.title}*\n`;
    message += `*Qty:* ${qty}\n`;
    message += `*Price:* ₹${item.price}\n`;
    message += `*Base Total:* ₹${baseAmount}\n`;

    if (item.wrap) {
      message += `*Gift Wrap:* Yes *(₹${WRAP_PRICE} x ${qty} = ₹${wrapAmount})*\n`;
    } else {
      message += `*Gift Wrap:* No\n`;
    }

    if (item.color) message += `*Color:* _${item.color}_\n`;
    if (item.name)  message += `*Name on product:* ${item.name}\n`;
    if (item.msg)   message += `*Message on product:* ${item.msg}\n`;

    message += `*Line Total:* *₹${lineTotal}*\n`;

    if (item.hasPhoto) {
      message += `*Photo:* Yes (file: ${item.photoName || 'to be sent by customer'})\n`;
    } else {
      message += '*Photo:* No\n';
    }

    message += '\n';
  });

  message += '----------------------------\n';
  message += `*Grand Total (incl. gift wrap):* *₹${grandTotal}*\n\n`;
  message += '_Customer says payment is completed via UPI QR. Please verify in your UPI app._';

  return message;
}

function sendOrderEmail(fullName, address, pincode, customerWhatsapp, orderText) {
  if (!window.emailjs) {
    console.warn('EmailJS SDK not loaded');
    return;
  }

  try {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  } catch (e) {}

  const templateParams = {
    email: STORE_EMAIL,
    to_name: 'Dearly Made',
    from_site: 'Dearly Made Website',
    customer_name: fullName,
    customer_address: address,
    customer_pincode: pincode,
    customer_whatsapp: customerWhatsapp,
    order_text: orderText
  };

  emailjs
    .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(() => console.log('EmailJS: order email sent'))
    .catch(err => console.error('EmailJS error', err));
}

function handleConfirmOrderClick() {
  if (!cart.length) {
    alert('Cart is empty');
    return;
  }

  const fullName = document.getElementById('custFullName')?.value.trim() || '';
  const address = document.getElementById('custAddress')?.value.trim() || '';
  const pincode = document.getElementById('custPincode')?.value.trim() || '';
  const customerWhatsapp = document.getElementById('custWhatsapp')?.value.trim() || '';

  if (!fullName || !address || !pincode || !customerWhatsapp) {
    alert('Please fill all the customer details.');
    return;
  }

  const orderText = buildOrderText(fullName, address, pincode, customerWhatsapp);

  // WhatsApp
  const whatsappNumber = '917550301838';
  const encoded = encodeURIComponent(orderText);
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;
  window.open(waUrl, '_blank');

  // Hidden Email
  sendOrderEmail(fullName, address, pincode, customerWhatsapp, orderText);

  // Clear cart
  cart.splice(0, cart.length);
  localStorage.setItem('dm_cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
  closeCheckoutModal();
}


// =============================
// PAGE INIT
// =============================
document.addEventListener('DOMContentLoaded', () => {
  const searchEl = document.getElementById('searchInput');

  // 🔥 Reliable page type from <body data-page="...">
  const pageType = document.body.dataset.page || '';
  const isShopPage = pageType === 'shop';

  let initialQuery = '';

  if (isShopPage) {
    const params = new URLSearchParams(window.location.search);
    initialQuery = params.get('search') || params.get('q') || '';
  }

  // Initial product render
  if (isShopPage) {
    if (initialQuery) {
      if (searchEl) searchEl.value = initialQuery;
      const qLower = initialQuery.toLowerCase();
      const res = products.filter(p =>
        (p.title + p.short + p.category).toLowerCase().includes(qLower)
      );
      renderProducts(res);
    } else {
      renderProducts(products); // all 30
    }
  } else {
    // home page: show only 6 bestsellers
    renderProducts(products.slice(0, 6));
  }

  // Search behaviour
  if (searchEl){
    if (isShopPage) {
      searchEl.addEventListener('input', function(e){
        const q = e.target.value.trim().toLowerCase();
        if(!q){
          renderProducts(products);
          return;
        }
        const res = products.filter(p =>
          (p.title + p.short + p.category).toLowerCase().includes(q)
        );
        renderProducts(res);
      });
    } else {
      searchEl.addEventListener('keydown', function(e){
        if (e.key === 'Enter') {
          const q = e.target.value.trim();
          if (!q) return;
          window.location.href = 'shop.html?search=' + encodeURIComponent(q);
        }
      });
    }
  }

  // Email join
  window.joinEmail = function(){
    const emailInput = document.getElementById('emailJoin');
    const email = emailInput?.value.trim();
    if(!email || !email.includes('@')){
      alert('Please enter a valid email.');
      return;
    }
    alert('Thanks! We will send cute ideas to ' + email);
    if(emailInput) emailInput.value = '';
  };

  // Pack builder placeholder
  window.openBuilder = function(){
    alert('Gift Pack Builder coming soon');
  };

  // Modal overlay close & ESC
  const productModal = document.getElementById('productModal');
  if(productModal){
    productModal.addEventListener('click', function(e){
      if(e.target === this) closeModal();
    });
  }
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
      closeModal();
      closeCheckoutModal();
    }
  });

  // Lazy-load images
  window.addEventListener('load', () => {
    document.querySelectorAll('img').forEach(img => {
      img.loading = 'lazy';
    });
  });

  // Header offset
  setHeaderOffset();
  window.addEventListener('resize', setHeaderOffset);

  // Init counts
  updateCartCount();
  updateWishCountInUI();

  // Icon handlers
  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('wishlistBtn')?.addEventListener('click', openWish);

  // Clear & checkout
  document.getElementById('clearCartBtn')?.addEventListener('click', () => {
    if(!cart.length) return;
    if(!confirm('Clear entire cart?')) return;
    cart.splice(0, cart.length);
    localStorage.setItem('dm_cart', JSON.stringify(cart));
    renderCart();
  });

  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (!cart.length) {
      alert('Cart is empty');
      return;
    }
    openCheckoutModal();
  });

  // QR + Confirm
  document.getElementById('generateQrBtn')?.addEventListener('click', handleGenerateQrClick);
  document.getElementById('confirmOrderBtn')?.addEventListener('click', handleConfirmOrderClick);
});
