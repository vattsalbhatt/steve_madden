function body(){
    return`
    <div id="filters">
            <p>CATEGORY <span id="catplus">+</span></p>
            <div id="catdiv"></div>

            <p>DISCOUNT <span id="dplus">+</span></p>
            <div id="disdiv"></div>
            
            <p>COLOR <span id="colplus">+</span></p>
            
            <p>SIZE <span id="splus">+</span></p>
            
            <button id="btn">CLEAR  ALL  FILTERS</button>
        </div>
        <div id="products">
            <div id="selectdiv">
                <label>Sort by :</label>
                <select id="sort" onchange="sortproducts()">
                    <option value="discount">Discount</option>
                    <option value="lowtohigh">Price (Low to High)</option>
                    <option value="hightolow">Price (High to Low)</option>
                </select>
            </div>

            <div id="cont"></div>
        </div>
    `
}

export default body