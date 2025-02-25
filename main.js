const check = document.getElementById("check");
const visa = document.getElementById("visa");
const master = document.getElementById("master")
const paypal = document.getElementById("paypal");
const btn = document.getElementById("submit");
const out = document.getElementById("demo");
const out2 = document.getElementById("demo2");

btn.onclick = function() {
  if(check.checked) {
    out.textContent = ("Thanks for read terms & conditions");

    switch(check.checked){
      case visa.checked:
        out2.textContent = "Your payment proceed with visa";
        break;
      case master.checked:
        out2.textContent = "Your payment proceed with master";
        break;
      case paypal.checked:
        out2.textContent = "Payment with paypal";
        break;
      default:
        out2.textContent = "Select your payment method"; 
    };
  }else{
    out.textContent = "Please read terms and conditions";
  }
}