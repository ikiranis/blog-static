<template>
  <div class="layout">
    <header class="header">
      <nav class="nav mt-3 ml-auto">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/contact/">Επικοινωνία</g-link>
      </nav>
    </header>

    <g-link to="/" >
      <img src="../images/error_logo.jpg" alt="logo" class="mb-3">
    </g-link>

    <slot />
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
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

.layout {
  max-width: 600px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
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
