const password = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?','A','S','D',
    'F','G','H','I','J','K','L','M','N','N','B','V','C','X','Z','P','O','I','U','Y','T','R','E','W','Q'
];
var pass = '';

function passwordfunc() {
    pass = '';
    for (let i = 0; i < 10; i++) {
      var index = Math.floor(Math.random() * password.length);
      pass += password[index];
    }
  }
  
  const passShow = document.querySelector(".pass");
  const button = document.querySelector(".gen");
  
  button.addEventListener('click', function () {
    passwordfunc();
    passShow.value = pass;
  });


  function copypass(){
    document.querySelector(".pass").select();
    document.execCommand('copy');
  }
