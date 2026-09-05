const state = {
    products: [],
    tasks: JSON.parse(localStorage.getItem("js-kampusu-tasks") || "[]"),
    taskFilter: "all",
    tags: new Set(["dom", "array"]),
    tagCounts: new Map([["dom", 1], ["array", 1]])
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const formatMoney = (value) => new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(value);
const normalize = (value) => value.trim().toLocaleLowerCase("tr-TR");

// Console metotlari ve scope/type konulari icin kucuk bir baslangic kaydi.
console.group("JS Kampusu basladi");
console.log("Urun, gorev ve laboratuvar modulleri hazir.");
console.table({ storage: "localStorage", collections: "Map + Set", async: "Fetch + XHR" });
console.groupEnd();

class Account {
    static currency = "TRY";

    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) return false;
        this.balance += amount;
        return true;
    }

    withdraw(amount) {
        if (amount <= 0 || amount > this.balance) return false;
        this.balance -= amount;
        return true;
    }

    summary() {
        return `${this.owner} - ${formatMoney(this.balance)}`;
    }
}

class SavingsAccount extends Account {
    constructor(owner, balance = 0, interest = 0.04) {
        super(owner, balance);
        this.interest = interest;
    }

    summary() {
        return `${super.summary()} | faiz: %${this.interest * 100}`;
    }
}

const wallet = new SavingsAccount("Ogrenci hesabi", Number(localStorage.getItem("js-kampusu-balance")) || 1250);

const topics = [
    ["01", "Temel JavaScript", "Scope, veri tipleri, operatorler, kosullar ve donguler."],
    ["02", "Veriyle dusun", "Array metotlari, string islemleri, Math ve Date."],
    ["03", "Tarayici ile iletisim", "DOM, klavye/input eventleri ve storage."],
    ["04", "Modern yapilar", "Arrow, destructuring, spread, Map, Set ve iterasyon."],
    ["05", "Nesne yonelimli", "Class, static, inheritance, this ve super."],
    ["06", "Asenkron dunya", "Callback, AJAX, Promise, Fetch ve async/await."],
    ["07", "Fonksiyonel akis", "map, filter, find, some, every ve reduce."],
    ["08", "Uygulama pratigi", "Arama, form, durum yonetimi ve kullanici geri bildirimi."]
];

const quotes = [
    ["Bir seyi anlamanin en iyi yolu onu biraz bozup yeniden kurmaktir.", "— Kod defteri"],
    ["Temiz kod, gelecekteki kendine yazdigin kisa bir mektuptur.", "— JS Kampusu"],
    ["Her event, kullanicidan gelen kucuk bir fikirdir.", "— Tarayici notu"],
    ["Hata mesaji, kodun sana verdigi yon tarifidir.", "— Debug gunlugu"]
];

function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    $("#toast-region").append(toast);
    setTimeout(() => toast.remove(), 3200);
}

function setView(viewName) {
    $$('[data-view-panel]').forEach((panel) => panel.classList.toggle("active-view", panel.id === viewName));
    $$(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.view === viewName));
    const activeLink = $(`[data-view="${viewName}"]`);
    $("#page-title").textContent = activeLink ? activeLink.textContent.trim().replace(/^\d+\s*/, "") : "Genel bakis";
    sessionStorage.setItem("js-kampusu-view", viewName);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTopics() {
    $("#topic-grid").innerHTML = topics.map(([number, title, description]) => `
        <article class="topic-card"><span class="topic-number">${number}</span><h3>${title}</h3><p>${description}</p></article>
    `).join("");
}

function renderStats() {
    const completed = state.tasks.filter((task) => task.done).length;
    $("#dashboard-stats").innerHTML = [
        [state.products.length || "–", "katalog urunu"],
        [state.tasks.length, "toplam gorev"],
        [completed, "tamamlanan gorev"],
        [state.tags.size, "benzersiz etiket"]
    ].map(([value, label]) => `<div class="stat-card"><strong>${value}</strong><span>${label}</span></div>`).join("");
}

function updateClock() {
    const now = new Date();
    $("#live-clock").textContent = now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
    $("#date-display").textContent = now.toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long" });
}

function updateWallet(message = "Hesap hazir.") {
    $("#balance-value").textContent = formatMoney(wallet.balance);
    $("#balance-message").textContent = message;
    localStorage.setItem("js-kampusu-balance", wallet.balance.toString());
}

function handleWallet(action) {
    const amount = Number($("#wallet-amount").value);
    if (!Number.isFinite(amount) || amount <= 0) {
        showToast("Once gecerli bir tutar gir.", "error");
        return;
    }
    const changed = action === "deposit" ? wallet.deposit(amount) : wallet.withdraw(amount);
    if (!changed) {
        showToast("Bu islem bakiye kurallarina uymuyor.", "error");
        return;
    }
    updateWallet(action === "deposit" ? `${formatMoney(amount)} yatirildi.` : `${formatMoney(amount)} cekildi.`);
    $("#wallet-amount").value = "";
    showToast("Cuzdan guncellendi.", "success");
}

function productCard(product) {
    const initials = product.name.split(" ").map((word) => word[0]).slice(0, 2).join("");
    return `<article class="product-card"><div class="product-art ${product.color}"><span>${initials}</span></div><div class="product-info"><h3>${product.name}</h3><p>${product.description}</p><div class="product-meta"><span class="product-price">${formatMoney(product.price)}</span><span class="product-rating">★ ${product.rating}</span></div></div></article>`;
}

function renderProducts() {
    const search = normalize($("#product-search").value);
    const category = $("#category-filter").value;
    const sort = $("#sort-products").value;
    let products = state.products.filter((product) => {
        const matchesSearch = [product.name, product.brand, product.category].some((field) => normalize(field).includes(search));
        return matchesSearch && (category === "all" || product.category === category);
    });

    if (sort === "price-low") products.sort((a, b) => a.price - b.price);
    if (sort === "price-high") products.sort((a, b) => b.price - a.price);
    if (sort === "rating") products.sort((a, b) => b.rating - a.rating);
    if (sort === "featured") products.sort((a, b) => Number(b.featured) - Number(a.featured));

    $("#product-count").textContent = `${products.length} urun`;
    $("#product-search-hint").textContent = search ? `“${search}” aramasi` : "Tum katalog";
    $("#product-grid").innerHTML = products.length ? products.map(productCard).join("") : '<div class="empty-state">Bu filtreyle eslesen urun yok.</div>';
}

async function fetchProducts() {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error(`Veri yuklenemedi: ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error("Urun verisi dizi olmali.");
    return data;
}

function loadProductsWithXHR() {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.onload = () => request.status >= 200 && request.status < 300 ? resolve(JSON.parse(request.responseText)) : reject(new Error(`XHR hatasi: ${request.status}`));
        request.onerror = () => reject(new Error("Ag istegi basarisiz."));
        request.send();
    });
}

async function loadProducts(mode = "fetch") {
    $("#api-status").textContent = "Yukleniyor";
    $("#async-result").textContent = `${mode === "xhr" ? "XMLHttpRequest" : "Fetch + async/await"} ile istek gonderiliyor...`;
    try {
        const data = mode === "xhr" ? await loadProductsWithXHR() : await fetchProducts();
        state.products = data;
        const categories = [...new Set(data.map((product) => product.category))];
        $("#category-filter").innerHTML = '<option value="all">Tum kategoriler</option>' + categories.map((category) => `<option value="${category}">${category}</option>`).join("");
        renderProducts();
        renderStats();
        $("#api-status").textContent = "Hazir";
        $("#async-result").textContent = `${data.length} urun geldi. JSON basariyla parse edildi.`;
    } catch (error) {
        $("#api-status").textContent = "Hata";
        $("#async-result").textContent = error.message;
        showToast(error.message, "error");
    }
}

function saveTasks() {
    localStorage.setItem("js-kampusu-tasks", JSON.stringify(state.tasks));
    renderTasks();
    renderStats();
}

function renderTasks() {
    const visibleTasks = state.tasks.filter((task) => state.taskFilter === "all" || (state.taskFilter === "done" ? task.done : !task.done));
    $("#task-list").innerHTML = visibleTasks.length ? visibleTasks.map((task) => `<div class="task-item ${task.done ? "done" : ""}" data-task-id="${task.id}"><input class="task-check" type="checkbox" ${task.done ? "checked" : ""} aria-label="Gorevi tamamla"><span class="task-text">${task.title}</span><button class="delete-task" type="button" aria-label="Gorevi sil">×</button></div>`).join("") : '<div class="empty-state">Bu filtrede gorev bulunmuyor.</div>';
    const total = state.tasks.length;
    const done = state.tasks.filter((task) => task.done).length;
    $("#task-progress-value").textContent = `${total ? Math.round(done / total * 100) : 0}%`;
}

function addTask(title) {
    state.tasks.unshift({ id: Date.now(), title: title.trim(), done: false });
    saveTasks();
    showToast("Yeni gorev eklendi.", "success");
}

function runCallbackDemo() {
    const timeline = $("#callback-timeline");
    timeline.innerHTML = "";
    const addStep = (label, delay, callback) => setTimeout(() => { timeline.insertAdjacentHTML("beforeend", `<span class="timeline-step">${label}</span>`); callback?.(); }, delay);
    addStep("1. callback", 150, () => addStep("2. timeout", 350, () => addStep("3. tamamlandi", 550, () => showToast("Asenkron akis tamamlandi.", "success"))));
}

function updateTextLab() {
    const raw = $("#text-input").value;
    const text = raw.trim();
    $("#text-meter").style.width = `${Math.min(text.length * 4, 100)}%`;
    $("#text-output").textContent = text ? `${text.toUpperCase()} | ${text.split(" ").filter(Boolean).length} kelime | ${text.includes("js") || text.toLowerCase().includes("javascript") ? "JS bulundu" : "JS bekleniyor"}` : "Yazmaya basla.";
}

function addTag() {
    const input = $("#tag-input");
    const tag = normalize(input.value);
    if (!tag) return;
    state.tags.add(tag);
    state.tagCounts.set(tag, (state.tagCounts.get(tag) || 0) + 1);
    input.value = "";
    $("#tag-list").innerHTML = [...state.tags].map((item) => `<span class="tag">#${item}</span>`).join("");
    $("#map-output").textContent = `Map kaydi: ${tag} → ${state.tagCounts.get(tag)} | Set boyutu: ${state.tags.size}`;
    renderStats();
}

function createObjectDemo() {
    const demoAccount = new SavingsAccount("Demo ogrenci", 4200, .08);
    $("#object-output").textContent = `${demoAccount.summary()} | instanceof Account: ${demoAccount instanceof Account ? "evet" : "hayir"} | static currency: ${Account.currency}`;
}

function bindEvents() {
    $$("[data-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
    $$("[data-view-target]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.viewTarget)));
    $("#theme-toggle").addEventListener("click", () => { document.body.classList.toggle("dark"); localStorage.setItem("js-kampusu-theme", document.body.classList.contains("dark") ? "dark" : "light"); });
    $("#new-quote").addEventListener("click", () => { const [text, author] = quotes[Math.floor(Math.random() * quotes.length)]; $("#daily-quote").textContent = text; $("#quote-author").textContent = author; });
    $("#deposit-button").addEventListener("click", () => handleWallet("deposit"));
    $("#withdraw-button").addEventListener("click", () => handleWallet("withdraw"));
    $("#load-async").addEventListener("click", () => loadProducts("fetch"));
    $("#load-xhr").addEventListener("click", () => loadProducts("xhr"));
    $("#refresh-products").addEventListener("click", () => loadProducts("fetch"));
    $("#product-search").addEventListener("input", renderProducts);
    $("#category-filter").addEventListener("change", renderProducts);
    $("#sort-products").addEventListener("change", renderProducts);
    $("#task-form").addEventListener("submit", (event) => { event.preventDefault(); const input = $("#task-input"); if (input.value.trim()) { addTask(input.value); input.value = ""; } });
    $$("[data-task-filter]").forEach((button) => button.addEventListener("click", () => { state.taskFilter = button.dataset.taskFilter; $$("[data-task-filter]").forEach((item) => item.classList.toggle("active", item === button)); renderTasks(); }));
    $("#clear-done").addEventListener("click", () => { state.tasks = state.tasks.filter((task) => !task.done); saveTasks(); showToast("Tamamlanan gorevler temizlendi."); });
    $("#task-list").addEventListener("click", (event) => { const item = event.target.closest("[data-task-id]"); if (!item) return; const task = state.tasks.find((entry) => entry.id === Number(item.dataset.taskId)); if (event.target.matches(".task-check")) task.done = event.target.checked; if (event.target.matches(".delete-task")) state.tasks = state.tasks.filter((entry) => entry.id !== task.id); saveTasks(); });
    $("#score-check").addEventListener("click", () => { const score = Number($("#score-input").value); $("#score-output").textContent = !Number.isFinite(score) || score < 0 || score > 100 ? "0 ile 100 arasinda bir not gir." : score >= 50 ? `Gecti · ${score >= 85 ? "Harika" : "Iyi"}` : "Tekrar calisabilirsin."; });
    $("#text-input").addEventListener("input", updateTextLab);
    $("#tag-add").addEventListener("click", addTag);
    $("#tag-input").addEventListener("keydown", (event) => { if (event.key === "Enter") addTag(); });
    $("#random-number").addEventListener("click", () => { const number = Math.floor(Math.random() * 100) + 1; $("#random-output").textContent = `Sansli sayin: ${number} · Yuvarlanmis karekok: ${Math.round(Math.sqrt(number))}`; });
    $("#run-callback").addEventListener("click", runCallbackDemo);
    $("#create-object").addEventListener("click", createObjectDemo);
    document.addEventListener("keydown", (event) => { if (event.key === "/" && document.activeElement.tagName !== "INPUT") { event.preventDefault(); setView("urunler"); $("#product-search").focus(); } });
}

function init() {
    if (localStorage.getItem("js-kampusu-theme") === "dark") document.body.classList.add("dark");
    renderTopics();
    renderTasks();
    renderStats();
    updateWallet();
    updateClock();
    setInterval(updateClock, 1000);
    $("#tag-list").innerHTML = [...state.tags].map((tag) => `<span class="tag">#${tag}</span>`).join("");
    const savedView = sessionStorage.getItem("js-kampusu-view");
    if (savedView && $(`[data-view="${savedView}"]`)) setView(savedView);
    bindEvents();
    loadProducts("fetch");
}

init();
