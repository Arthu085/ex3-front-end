import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chat App';
  messages: { sender: string; text: string }[] = [];
  newMessage: string = '';

  sendMessage(message: string) {
    this.messages.push({ sender: 'Usuário', text: message });
    this.newMessage = ''; // Clear the input field
    // Simulate a bot response
    setTimeout(() => {
      this.messages.push({ sender: 'Bot', text: 'Olá! Como posso ajudar?' });
    }, 1000);
  }
}