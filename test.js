document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    if (!isPassValid(password)) {
        alert('Пароль не содержить спецсимволы');
        return;
    }

  });
  
  function isPassValid(password) {
    var passRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    return passRegex.test(password);
  }
  
  document.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("form");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var loginButton = document.getElementById("submit-button");

    if (!localStorage.users) {
  
        localStorage.users = JSON.stringify([]);
    }

    form.addEventListener("input", function () {
        loginButton.disabled = !(emailInput.value && passwordInput.value);
    });

    loginButton.addEventListener("click", function () {

        var users = JSON.parse(localStorage.users);

        var currentUser = users.find(user => user.email === emailInput.value && user.password === passwordInput.value);

        if (currentUser) {
            window.location.href = "description.html";
        } else {
            if (!users.find(user => user.email === emailInput.value)) {
                var newUser = {
                    email: emailInput.value,
                    password: passwordInput.value
                };

                users.push(newUser);
                localStorage.users = JSON.stringify(users);
                window.location.href = "description.html";
            } else {
                alert("Пользователь с таким email уже зарегистрирован.");
            }
        }
    });
});
