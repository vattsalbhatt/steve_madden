function navbar2() {
  return `  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="./index.html">
      <span id="navbarName">STEVE MADDEN</span>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="./index.html"
            >Home<span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="cart.html">My Cart</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="women.html">WOMEN</a>
            <a class="dropdown-item" href="mens.html">MEN</a>
            <a class="dropdown-item" href="clothing.html">CLOTHING</a>
            <a class="dropdown-item" href="mens.html">SHOES</a>
            <a class="dropdown-item" href="handbags.html">HANDBAGS</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="products.html">WHAT'S NEW</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"
            >Login</a
          >
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          id = "searchQuery2"
          type="text"
          placeholder="handbags..."
          aria-label="Search"
        />
       
      </div>
    </div>
  </nav>
`;
}

// function navbar1() {
  
// }
export { navbar2 };
