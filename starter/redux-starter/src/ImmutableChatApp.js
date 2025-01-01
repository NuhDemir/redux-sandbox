// Immutable Kullanım
class ChatApp {
  constructor() {
    this.messages = []; // Mesaj listesi
    this.users = Object.freeze([{ id: 1, name: "Alice", status: "online" }]); // Immutable yapı
  }

  // Mesaj Ekleme (Immutable)
  addMessage(newMessage) {
    this.messages = [...this.messages, newMessage]; // Yeni bir array oluşturulur
    console.log("Immutable Messages:", this.messages);
  }

  // Kullanıcı Durumunu Güncelleme (Immutable)
  updateUserStatus(userId, newStatus) {
    this.users = this.users.map((user) =>
      user.id === userId ? { ...user, status: newStatus } : user
    );
    console.log("Immutable Users:", this.users);
  }
}

// Mutable Kullanım
class ChatRoom {
  constructor() {
    this.messages = []; // Mesaj listesi
    this.users = [{ id: 1, name: "Alice", status: "online" }]; // Mutable yapı
  }

  // Mesaj Ekleme (Mutable)
  addMessage(newMessage) {
    this.messages.push(newMessage); // Orijinal array'e ekleme yapılır
    console.log("Mutable Messages:", this.messages);
  }

  // Kullanıcı Durumunu Güncelleme (Mutable)
  updateUserStatus(userId, newStatus) {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      user.status = newStatus; // Orijinal objeyi değiştirir
    }
    console.log("Mutable Users:", this.users);
  }
}

// Örnek Kullanım
const immutableChatApp = new ChatApp();
immutableChatApp.addMessage({ id: 1, text: "Hello!", sender: "Alice" });
immutableChatApp.updateUserStatus(1, "offline");

const mutableChatRoom = new ChatRoom();
mutableChatRoom.addMessage({ id: 1, text: "Hi there!", sender: "Alice" });
mutableChatRoom.updateUserStatus(1, "busy");
