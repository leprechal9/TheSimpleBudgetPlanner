# The Simple Budget Planner — Mobile Landing Page

A premium, responsive landing page built with plain HTML, CSS and JavaScript. It is designed mobile-first and can be edited in Visual Studio Code.

## Files
- `index.html` — page content and structure
- `styles.css` — layout, colours, typography and responsive mobile styles
- `config.js` — Kiwify checkout URL, displayed price and optional Meta Pixel ID
- `script.js` — checkout button wiring, year and optional Meta Pixel setup

## 1. Open in VS Code
1. Extract the ZIP file.
2. Open VS Code.
3. Select **File → Open Folder**.
4. Choose the extracted `simple-budget-planner-landing` folder.
5. Open `index.html` in a browser. You can use the VS Code Live Server extension for local preview.

## 2. Connect Kiwify
1. Create/publish your product and checkout in Kiwify.
2. Copy the actual checkout URL.
3. Open `config.js`.
4. Replace `https://pay.kiwify.com.br/COLE-SEU-LINK-AQUI` with your real URL.
5. Change `displayPrice` so it exactly matches the amount and currency shown at checkout.
6. Save and test every CTA button on desktop and mobile.

**Important:** The displayed price is only text on the page. It does not set the Kiwify price. Set the actual price inside Kiwify and make both match. Confirm that your Kiwify checkout supports the currency, payment methods, language and countries you intend to sell to before running ads.

## 3. Meta Pixel (optional)
1. Create or select your Meta Pixel in Events Manager.
2. Copy the Pixel ID (digits only).
3. Paste it into `metaPixelId` in `config.js`.
4. Publish the page and verify PageView with Meta Pixel Helper / Events Manager.
5. Configure and test purchase events through your checkout integration. This starter page only sends PageView; it does not pretend to track purchases.

## 4. Before publishing
- Replace the sample product mockup/content if your actual ebook differs.
- Verify every feature listed is genuinely included in your ebook.
- Add your business/contact details, privacy policy, terms, refund/cancellation policy and any legally required disclosures.
- Do not add made-up testimonials, fake scarcity or unsupported income/savings promises.
- Test the checkout end-to-end, including the delivery email and mobile experience.
- Optimise and compress any real product images you add.

## 5. Publish
You can host the static files on a service such as Netlify, Cloudflare Pages or your own hosting. Upload the contents of this folder (not the ZIP itself, unless the host requests a ZIP).

## Notes
This is a front-end starter project, not a payment processor. Kiwify handles payment and product delivery. The page sends buyers to the checkout URL you configure.
