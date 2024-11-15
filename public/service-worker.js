self.addEventListener('install', event => {
    console.log('Service worker installed.');
    // Optionally, add caching logic here
});

self.addEventListener('activate', event => {
    console.log('Service worker activated.');
});

self.addEventListener('fetch', event => {
    // Optional: Add custom fetch handling logic
});

self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "Default title";
    const options = {
        body: data.body || "Default body",
        icon: data.icon || "/icon.png",
        tag: data.tag || "default-tag"
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
