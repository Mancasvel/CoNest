self.addEventListener('push', function(event) {
  const data = event.data.json()
  
  const options = {
    body: data.message,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    data: {
      url: data.url
    }
  }

  event.waitUntil(
    self.registration.showNotification('CoNest', options)
  )
})

self.addEventListener('notificationclick', function(event) {
  event.notification.close()
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  )
}) 