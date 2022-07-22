
      <div id="carousel">
          <div class="carousel-item deals">Today's Deals</div>
          <div class="carousel-item bread">
              <img carousel-item-img src="../../assets/bread-deal.png" alt="">
          </div>
          <div class="carousel-item kfc" >
            <img class="carousel-item-img" src="../../assets/burger-deal.png" >
          </div>
      </div>
      <section class="bottom">
      <div class="filters-side">
        <h1>Filter</h1>
        <div class="options">
          <div>
          <input type="radio" name="group-1" id="most-popular"><label for="most-popular">Most Popular</label>
        </div>
        <div>
          <input type="radio" name="group-1" id=""><label for="">Delivery Speed</label>
        </div>
        <div>
          <input type="radio" name="group-1" id=""><label for="">Rating</label>
          <br><br><br>
        </div>
          <div>
          <input type="radio" name="group-2" id=""><label for="">Deals</label>
        </div>
        <div>
          <input type="radio" name="group-2" id=""><label for="">Free Delivery</label><br><br>
        </div>
          <label for="">Price Range</label>
          <input type="range" name="group-2" id="slider">
          <span>$&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;$$$$</span> 
      </div>
      </div>
      <div class="choices-side">
        <div id="top">
          <h1>Spots Near Me</h1>
          <div class="cards-container">
            @yield('spots-near-me')
          </div>
        </div>
        <div id="bottom">
          <h1>Love Chicken? You'll love these</h1>
          <div class="cards-container">
          @yield('chicken-cards')
          </div>
        </div>
      </div>
    </section>
    
</body>
</html>