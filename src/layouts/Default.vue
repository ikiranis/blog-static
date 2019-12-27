<template>
  <div class="container-fluid">
    <div class="col-xl-6 col-12 mx-auto">
      <header class="header">
        <nav class="nav mt-3 ml-auto">
          <g-link class="nav__link" to="/contact/">Επικοινωνία</g-link>
        </nav>
      </header>

      <div class="row mb-3">
        <g-link to="/" class="mx-auto">
          <img src="../images/error_logo.jpg" alt="logo">
        </g-link>
      </div>

      <slot />
    </div>
  </div>
</template>

<style>

  body, html {
    font-family: "Comfortaa", cursive;
    font-size: 20px;
  }

  img {
    max-width: 100%;
  }

  nav[role="navigation"] {
    text-align: center;
  }
  nav[role="navigation"] a {
    display: inline-block;
    margin: 1.0em 0.75em 2.0em;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .nav__link {
    margin-left: 20px;
  }
  .post-list {
    list-style: none;
    padding-left: 0;
  }
  .post-list li {
    padding: 1em 0;
  }
</style>
