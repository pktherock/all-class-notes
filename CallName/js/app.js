let name = [
  'Hemant Raj',
  'Rahul Raj Meghwal',
  'Prity Kumari',
  'Rajeev Kumar',
  'Sanjana Kumari',
  'Suman Shradha',
  'Vishal Kumar',
  'Wasim Akram',
  'Yash Raj Choudhary',
  'Anushka Arya',
  'Ekta Kumari',
  'Manish Kumar',
];
// let buttonAudio = new Audio('../audio/ting.mp3');
let msg = new SpeechSynthesisUtterance();
let name1 = document.getElementById('name');

function showName() {
  // buttonAudio.play();
  let randomNameIndex = Math.floor(Math.random() * name.length);
  name1.textContent = name[randomNameIndex];
  msg.text = name[randomNameIndex];
  window.speechSynthesis.speak(msg);
}
