document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const submitBtn = document.getElementById('submitBtn');

  loginForm.addEventListener('submit', function (e){
    e.preventDefault();

    submitBtn.innerText = 'Verifying...';
    submitBtn.disabled = true

    const usere
    useremail = document.getElementById('useremail').value

    setTimeout(() => {
      alert(`Welcome back, ${useremail}!`)

      submitBtn.innerText = 'Sign In'
      submitBtn.disabled = false;

      loginForm.reset();
    }, 1200);

  });
});