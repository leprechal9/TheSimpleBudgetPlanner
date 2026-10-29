(function () {
  "use strict";

  const config = window.LANDING_CONFIG || {};
  const checkoutUrl = config.checkoutUrl || "";
  const price = config.displayPrice || "€9.90";

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("display-price").textContent = price;

  const validCheckout = checkoutUrl.startsWith("https://") &&
    !checkoutUrl.includes("COLE-SEU-LINK-AQUI");

  document.querySelectorAll(".checkout-link").forEach((link) => {
    if (validCheckout) {
      link.href = checkoutUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#buy";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Checkout not configured yet. Add your Kiwify checkout URL in config.js.");
      });
    }
  });

  // Meta Pixel: loads only when a real Pixel ID is configured.
  if (config.metaPixelId && /^\d+$/.test(config.metaPixelId)) {
    !function(f,b,e,v,n,t,s) {
      if(f.fbq)return;
      n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
      t=b.createElement(e);t.async=!0;t.src=v;
      s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', config.metaPixelId);
    window.fbq('track', 'PageView');
  }
})();
