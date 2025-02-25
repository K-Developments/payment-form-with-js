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

    if(visa.checked) {
      out2.textContent = "Your payment proceed with visa"
    }else if(master.checked) {
      out2.textContent = "Your payment proceed with master"
    }else if(paypal.checked){
      out2.textContent = "Payment with paypal"
    }else{
      out2.textContent = "Select your payment method"
    }
    
  }else 
    out.textContent = "Please read terms and conditions"
}