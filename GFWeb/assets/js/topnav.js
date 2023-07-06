var navbarContent = `
  <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">GF Scout</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html">首頁</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="train.html">考驗</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html" tabindex="-1">關於我</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `;
  
  document.addEventListener('DOMContentLoaded', function() {
    var navbarContainer = document.getElementById('topnav-placeholder');
    navbarContainer.innerHTML = navbarContent;
  });
  