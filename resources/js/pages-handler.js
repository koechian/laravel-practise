var cart = null;
fetchCart($("#user-id").val());
jQuery(".card").click(function () {
  this.children[5].click();
});
$(".add-to-cart").on("click", function (e) {
  var data = {
    id: $("#user-id").val(),
    item: $(this).attr("data-id"),
    action: "insert",
  };
  $.ajax({
    type: "GET",
    url: "../components/cart-handler.php",
    data: data,
    success: function (response) {
      iziToast.success({
        title: "OK",
        message: "Item has been Added to Cart",
      });
      fetchCart(data["id"]);
    },
  });
});
$("#order").on("click", function (e) {
  var data = {
    id: $("#user-id").val(),
    orderitems: cart,
    action: "order",
  };
  $.ajax({
    type: "GET",
    url: "../components/cart-handler.php",
    data: data,
    success: function (response) {
      iziToast.show({
        theme: "light",
        icon: "icon-success",
        title: "Thank You",
        message: "Your order has been Placed",
        position: "topCenter", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: "#ff9900",
        buttons: [
          [
            "<button>Continue Shopping</button>",
            function (instance, toast) {
              window.location.replace("order-overview.php");
            },
            true,
          ], // true to focus
          [
            "<button>Logout</button>",
            function (instance, toast) {
              console.log("clicked");
            },
          ],
        ],
        onOpening: function (instance, toast) {
          console.info("callback abriu!");
        },
        onClosing: function (instance, toast, closedBy) {
          console.info("closedBy: " + closedBy); // tells if it was closed by 'drag' or 'button'
        },
      });
      fetchCart(data["id"]);
      populateCheckout(cart);
    },
  });
});

function populateCart(data) {
  $("#cart-body").html("");
  $(
    $.each(data, function (key, value) {
      $("#cart-body").append(
        "<div class='cart-item'><div id='cart-item-left'><div><span id='item-heading'>" +
          value.product_name +
          "</span><br><br><br><span>Price</span><br><br><span>Quantity</span></div><div><div><div><span>" +
          value.product_price +
          "</span></div><div><button onclick='$(this).next()[0].stepDown()' ><span class='iconify' data-icon='icon-park-solid:reduce-one' style='color: #f90;' data-width='16' data-height='16'></span></button><input value='1' type='number'><button onclick='$(this).prev()[0].stepUp()' ><span class='iconify' data-icon='fluent:add-circle-16-filled' style='color: #f90;'data-width='20' data-height='20'></span></button></div></div></div></div><div id='cart-item-right'><div><img class='cart-img' src='" +
          value.product_image +
          "'></div><div><button class='remove-btn' id='remove-button'><span class='iconify' onclick='remove(" +
          value.item_id +
          ")' data-icon='bi:trash'style='color: rgb(99, 48, 26);' data-width='20' data-height='20'></span></button><span>Remove</span></div></div></div>"
      );
    })
  );
}
function populateCheckout(data) {
  var price = 0;
  $("#order-items").html("");
  $(
    $.each(data, function (key, value) {
      $("#order-items").append(
        "<div class='cart-item'><div id='cart-item-left'><div><span id='item-heading'>" +
          value.product_name +
          "</span><br><br><br><span>Price</span><br><br><span>Quantity</span></div><div><div><div><span>" +
          value.product_price +
          "</span></div><div><button onclick='$(this).next()[0].stepDown()' ><span class='iconify' data-icon='icon-park-solid:reduce-one' style='color: #f90;' data-width='16' data-height='16'></span></button><input value='1' type='number'><button onclick='$(this).prev()[0].stepUp()' ><span class='iconify' data-icon='fluent:add-circle-16-filled' style='color: #f90;'data-width='20' data-height='20'></span></button></div></div></div></div><div id='cart-item-right'><div><img class='cart-img' src='" +
          value.product_image +
          "'></div><div><button class='remove-button' id='remove-button'><span class='iconify' onclick=remove(" +
          value.id +
          ") data-icon='bi:trash'style='color: rgb(99, 48, 26);' data-width='20' data-height='20'></span></button><span>Remove</span></div></div></div>"
      );
      price = parseInt(value.product_price) + price;
    })
  );
  $("#subtotal").html(price);
  $("#vat").html(price * 0.16);
  $("#total").html(price + 70 + price * 0.16);
}

function fetchCart(id) {
  var data = {
    id: id,
    action: "fetch",
  };
  $.ajax({
    type: "GET",
    url: "../components/cart-handler.php",
    data: data,
    success: function (response) {
      cart = JSON.parse(response);
      $("#cart").attr("data-after", cart.length);
      populateCart(cart);
      populateCheckout(cart);
    },
  });
}
function populateCart(data) {
  $("#cart-body").html("");
  $(
    $.each(data, function (key, value) {
      $("#cart-body").append(
        "<div class='cart-item'><div id='cart-item-left'><div><span id='item-heading'>" +
          value.product_name +
          "</span><br><br><br><span>Price</span><br><br><span>Quantity</span></div><div><div><div><span>" +
          value.product_price +
          "</span></div><div><button onclick='$(this).next()[0].stepDown()' ><span class='iconify' data-icon='icon-park-solid:reduce-one' style='color: #f90;' data-width='16' data-height='16'></span></button><input value='1' type='number'><button onclick='$(this).prev()[0].stepUp()' ><span class='iconify' data-icon='fluent:add-circle-16-filled' style='color: #f90;'data-width='20' data-height='20'></span></button></div></div></div></div><div id='cart-item-right'><div><img class='cart-img' src='" +
          value.product_image +
          "'></div><div><button class='remove-button' id='remove-button'><span class='iconify' data-icon='bi:trash'style='color: rgb(99, 48, 26);' data-width='20' data-height='20'></span></button><span>Remove</span></div></div></div>"
      );
    })
  );
}
function populateCheckout(data) {
  var price = 0;
  $("#order-items").html("");
  $(
    $.each(data, function (key, value) {
      $("#order-items").append(
        "<div class='cart-item'><div id='cart-item-left'><div><span id='item-heading'>" +
          value.product_name +
          "</span><br><br><br><span>Price</span><br><br><span>Quantity</span></div><div><div><div><span>" +
          value.product_price +
          "</span></div><div><button onclick='$(this).next()[0].stepDown()' ><span class='iconify' data-icon='icon-park-solid:reduce-one' style='color: #f90;' data-width='16' data-height='16'></span></button><input value='1' type='number'><button onclick='$(this).prev()[0].stepUp()' ><span class='iconify' data-icon='fluent:add-circle-16-filled' style='color: #f90;'data-width='20' data-height='20'></span></button></div></div></div></div><div id='cart-item-right'><div><img class='cart-img' src='" +
          value.product_image +
          "'></div><div><button class='remove-button' id='remove-button'><span class='iconify' data-icon='bi:trash'style='color: rgb(99, 48, 26);' data-width='20' data-height='20'></span></button><span>Remove</span></div></div></div>"
      );
      price = parseInt(value.product_price) + price;
    })
  );
  $("#subtotal").html(price);
  $("#vat").html(Math.round(price * 0.16).toFixed(2));
  $("#total").html(Math.round(price + 70 + price * 0.16).toFixed(2));
}
