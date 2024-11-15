import React from 'react';

const NotificationComponent = () => {
    const showNotification = () => {
        if ("serviceWorker" in navigator && "Notification" in window) {
            Notification.requestPermission().then(function(permission) {
                if (permission === "granted") {
                    navigator.serviceWorker.ready.then(function(registration) {
                        registration.showNotification("Hello!", {
                            body: "This is a notification example using ServiceWorker.",
                            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // Replace with your icon URL
                        });
                    });
                } else {
                    console.log("Notification permission denied.");
                }
            });
        } else {
            console.log("Service Worker or Notifications are not supported by this browser.");
        }
    };

    return (
        <div>
            <h1>React Notification Example</h1>
            <button onClick={showNotification}>Show Notification</button>
        </div>
    );
};

export default NotificationComponent;
