document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (event) {
    var target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

var filterButtons = document.querySelectorAll('.filter-button');
var directoryCards = document.querySelectorAll('.directory-card');
filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    filterButtons.forEach(function (item) { item.classList.remove('selected'); });
    button.classList.add('selected');
    var filter = button.dataset.filter;
    directoryCards.forEach(function (card) {
      card.hidden = filter !== 'all' && !card.dataset.category.includes(filter);
    });
  });
});

var paginationButtons = document.querySelectorAll('.pagination button');
paginationButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    if (!button.classList.contains('page-number')) return;
    paginationButtons.forEach(function (item) { item.classList.remove('active'); });
    button.classList.add('active');
  });
});

var passwordToggle = document.querySelector('.password-toggle');
var passwordInput = document.querySelector('#password');
if (passwordToggle && passwordInput) {
  passwordToggle.addEventListener('click', function () {
    var isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    passwordToggle.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
    passwordToggle.classList.toggle('is-visible', isHidden);
  });
}

var dashboardPage = document.querySelector('.dashboard-page');
if (dashboardPage) {
  var mobileActions = document.createElement('div');
  mobileActions.className = 'mobile-dashboard-actions';
  mobileActions.innerHTML = '<a href="#support">ⓘ &nbsp; Help &amp; Support</a><a href="index.html">→ &nbsp; Logout</a>';
  dashboardPage.querySelector('.dashboard-main').appendChild(mobileActions);

  var mobileNav = document.createElement('nav');
  mobileNav.className = 'mobile-dashboard-nav';
  mobileNav.innerHTML = '<a class="selected" href="dashboard.html"><b>⌂</b>Dashboard</a><a href="#courses"><b>▤</b>My Courses</a><a href="#certificates"><b>♙</b>Certificates</a><a href="#settings"><b>⚙</b>Settings</a>';
  dashboardPage.appendChild(mobileNav);
}

document.querySelectorAll('.site-header').forEach(function (header) {
  var navigation = header.querySelector('.main-nav');
  var actions = header.querySelector('.header-actions');
  if (!navigation || !actions) return;

  var menuButton = document.createElement('button');
  var mobileMenu = document.createElement('div');
  var mobileLinks = navigation.cloneNode(true);
  var mobileActions = actions.cloneNode(true);

  menuButton.className = 'site-menu-button';
  menuButton.type = 'button';
  menuButton.setAttribute('aria-label', 'Open navigation');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.innerHTML = '<span></span><span></span><span></span>';
  mobileMenu.className = 'mobile-site-menu';
  mobileLinks.className = 'mobile-main-nav';
  mobileActions.className = 'mobile-header-actions';
  mobileMenu.appendChild(mobileLinks);
  mobileMenu.appendChild(mobileActions);
  header.appendChild(menuButton);
  header.appendChild(mobileMenu);

  function setMenuOpen(isOpen) {
    header.classList.toggle('mobile-menu-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  }

  menuButton.addEventListener('click', function () {
    setMenuOpen(!header.classList.contains('mobile-menu-open'));
  });
  mobileMenu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenuOpen(false);
  });
});
