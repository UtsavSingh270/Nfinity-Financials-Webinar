<div id="nf-webinar-page">

  <!--
    REQUIRED WPForms SETTINGS
    1. Settings > General > Advanced > Enable AJAX form submission.
    2. Email field > Advanced > Require unique answer.
    3. Phone field > Advanced > Format: Smart.
    4. Place the WPForms Shortcode widget on this page and set its CSS ID to:
       nf-wpforms-source

    The page script blocks repeat submissions in the same browser and keeps the
    confirmation visible after refresh. The unique-answer setting is the
    server-side protection that stops the same email from creating another
    WPForms entry or another Google Sheets row on any browser or device.
  -->

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --navy: #0b2a4a;
      --navy-2: #123a63;
      --navy-3: #1a4d80;
      --gold: #f2a93b;
      --gold-dark: #d98d1f;
      --gold-light: #ffd17a;
      --paper: #ffffff;
      --ink: #16233a;
      --muted: #5b6b82;
      --line: #e6ecf3;
      --soft: #f4f8fc;
      --success: #16a34a;
      --danger: #c0392b;
      --radius: 18px;
      --radius-lg: 24px;
      --radius-xl: 32px;
      --font-body: "Plus Jakarta Sans", "Segoe UI", Arial, sans-serif;
      --font-head: "Space Grotesk", "Plus Jakarta Sans", sans-serif;
      --shadow-sm: 0 2px 12px rgba(11, 42, 74, 0.06);
      --shadow-md: 0 16px 40px -12px rgba(11, 42, 74, 0.14);
      --shadow-lg: 0 30px 80px -24px rgba(11, 42, 74, 0.22);
      --shadow-gold: 0 12px 32px -8px rgba(242, 169, 59, 0.45);
      --ease: cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    #nf-webinar-page .wpforms-confirmation-container-full {
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  border: none !important;
}

#nf-webinar-page .nf-webinar-confirmation {
  padding: 28px 24px;
  background: linear-gradient(145deg, #f4f8fc, #eaf2fa);
  border: 1px solid #dce7f2;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(11, 42, 74, 0.10);
}

#nf-webinar-page .nf-confirmation-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  margin: 0 auto 16px;
  color: #ffffff;
  background: #16a34a;
  border-radius: 50%;
  font-size: 28px;
  font-weight: 700;
}

#nf-webinar-page .nf-webinar-confirmation h3 {
  margin: 0 0 10px;
  color: #0b2a4a;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.35rem;
  line-height: 1.3;
}

#nf-webinar-page .nf-webinar-confirmation p {
  margin: 0;
  color: #5b6b82;
  font-size: 0.92rem;
  line-height: 1.7;
}

#nf-webinar-page .nf-webinar-confirmation p + p {
  margin-top: 8px;
}

#nf-webinar-page .nf-webinar-confirmation .nf-confirmation-note {
  color: #0b2a4a;
  font-size: 0.82rem;
  font-weight: 600;
}

    #nf-webinar-page {
      width: 100%;
      overflow: hidden;
      color: var(--ink);
      background: var(--paper);
      font-family: var(--font-body);
      line-height: 1.6;
    }

    #nf-webinar-page,
    #nf-webinar-page *,
    #nf-webinar-page *::before,
    #nf-webinar-page *::after {
      box-sizing: border-box;
    }

    #nf-webinar-page h1,
    #nf-webinar-page h2,
    #nf-webinar-page h3,
    #nf-webinar-page h4,
    #nf-webinar-page p,
    #nf-webinar-page ul,
    #nf-webinar-page ol {
      margin: 0;
    }

    #nf-webinar-page img {
      display: block;
      width: 100%;
      max-width: 100%;
    }

    #nf-webinar-page a {
      color: inherit;
      text-decoration: none;
    }

    #nf-webinar-page .nf-wrap {
      width: min(1120px, calc(100% - 48px));
      margin: 0 auto;
    }

    #nf-webinar-page .nf-section {
      padding: clamp(40px, 5vw, 62px) 0;
    }

    #nf-webinar-page .nf-section-soft {
      background-color: var(--soft);
      background-image: radial-gradient(circle at 1px 1px, rgba(11, 42, 74, 0.035) 1px, transparent 0);
      background-size: 28px 28px;
    }

    /* Reveal Animation */
    #nf-webinar-page .nf-reveal {
      opacity: 0;
      transform: translateY(34px);
      transition: opacity 0.75s var(--ease), transform 0.75s var(--ease);
      transition-delay: var(--d, 0s);
    }

    #nf-webinar-page .nf-reveal.nf-in {
      opacity: 1;
      transform: translateY(0);
    }

    /* Typography */
    #nf-webinar-page .nf-kicker {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--gold-dark);
      font-family: var(--font-head);
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    #nf-webinar-page .nf-kicker::before {
      content: "";
      width: 28px;
      height: 2px;
      background: linear-gradient(90deg, var(--gold), transparent);
      border-radius: 2px;
    }

    #nf-webinar-page .nf-section-title {
      max-width: 100%;
      margin-top: 12px;
      color: var(--navy);
      font-family: var(--font-head);
      font-size: clamp(1.85rem, 3.4vw, 2.7rem);
      font-weight: 700;
      line-height: 1.15;
      letter-spacing: -0.02em;
    }

    #nf-webinar-page .nf-section-intro {
      max-width: 100%;
      margin-top: 16px;
      color: var(--muted);
      font-size: 1.02rem;
      line-height: 1.7;
    }

    #nf-webinar-page .nf-section-intro-narrow {
      max-width: 78ch;
    }

    /* Buttons */
    #nf-webinar-page .nf-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 52px;
      padding: 14px 30px;
      color: #2a1a03;
      background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
      border: 1px solid transparent;
      border-radius: 999px;
      font-family: var(--font-body);
      font-size: 0.92rem;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);
      box-shadow: var(--shadow-gold);
      overflow: hidden;
    }

    #nf-webinar-page .nf-btn-arrow {
      display: inline-flex;
      transition: transform 0.3s var(--ease);
    }

    #nf-webinar-page .nf-btn:hover .nf-btn-arrow {
      transform: translateX(4px);
    }

    #nf-webinar-page .nf-btn::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    #nf-webinar-page .nf-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 40px -8px rgba(242, 169, 59, 0.6);
    }

    #nf-webinar-page .nf-btn:hover::after {
      transform: translateX(100%);
    }

    #nf-webinar-page .nf-btn-outline {
      color: var(--navy);
      background: transparent;
      border-color: var(--navy);
      box-shadow: none;
    }

    #nf-webinar-page .nf-btn-outline:hover {
      color: #fff;
      background: var(--navy);
      box-shadow: 0 12px 32px -8px rgba(11, 42, 74, 0.3);
    }

    /* ============ HERO (Compact Size) ============ */
    #nf-webinar-page .nf-hero {
      position: relative;
      padding: clamp(24px, 3vw, 36px) 0 clamp(30px, 4vw, 44px);
      background:
        radial-gradient(ellipse 80% 50% at 20% 0%, rgba(242, 169, 59, 0.09), transparent),
        radial-gradient(ellipse 60% 50% at 85% 90%, rgba(18, 58, 99, 0.07), transparent),
        linear-gradient(160deg, #f8fbff 0%, #edf3fa 100%);
      overflow: visible;
    }

    #nf-webinar-page .nf-hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(11, 42, 74, 0.022) 1px, transparent 1px),
        linear-gradient(90deg, rgba(11, 42, 74, 0.022) 1px, transparent 1px);
      background-size: 48px 48px;
      pointer-events: none;
      mask-image: radial-gradient(ellipse 90% 70% at 50% 35%, #000 20%, transparent 80%);
      -webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 35%, #000 20%, transparent 80%);
    }

    #nf-webinar-page .nf-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(50px);
      pointer-events: none;
      animation: nfFloat 9s ease-in-out infinite;
    }

    #nf-webinar-page .nf-orb-1 {
      top: -80px;
      right: -40px;
      width: 320px;
      height: 320px;
      background: radial-gradient(circle, rgba(242, 169, 59, 0.22), transparent 65%);
    }

    #nf-webinar-page .nf-orb-2 {
      bottom: -100px;
      left: -60px;
      width: 280px;
      height: 280px;
      background: radial-gradient(circle, rgba(26, 77, 128, 0.18), transparent 65%);
      animation-delay: -4s;
    }

    @keyframes nfFloat {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(24px, -32px) scale(1.06); }
    }

    @keyframes nfFadeUp {
      from { opacity: 0; transform: translateY(36px); }
      to { opacity: 1; transform: translateY(0); }
    }

    #nf-webinar-page .nf-hero-grid {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: minmax(0, 1.2fr) minmax(360px, 0.8fr);
      gap: clamp(32px, 4vw, 48px);
      align-items: center;
    }

    #nf-webinar-page .nf-pill {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 8px 16px;
      color: var(--navy);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(214, 229, 245, 0.8);
      border-radius: 999px;
      font-family: var(--font-head);
      font-size: 0.76rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      animation: nfFadeUp 0.7s var(--ease) 0.1s both;
    }

    #nf-webinar-page .nf-pill::before {
      content: "";
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--gold);
      box-shadow: 0 0 0 3px rgba(242, 169, 59, 0.3);
      animation: nfPulse 2s ease-in-out infinite;
    }

    @keyframes nfPulse {
      0%, 100% { box-shadow: 0 0 0 3px rgba(242, 169, 59, 0.3); }
      50% { box-shadow: 0 0 0 6px rgba(242, 169, 59, 0.12); }
    }

    #nf-webinar-page .nf-hero h1 {
      max-width: 18ch;
      margin-top: 14px;
      color: var(--navy);
      font-family: var(--font-head);
      font-size: clamp(2rem, 4.2vw, 3.2rem);
      font-weight: 700;
      line-height: 1.04;
      letter-spacing: -0.03em;
      animation: nfFadeUp 0.7s var(--ease) 0.2s both;
    }

    #nf-webinar-page .nf-hero h1 span {
      background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }

    #nf-webinar-page .nf-hero-copy {
      max-width: 58ch;
      margin-top: 14px;
      color: var(--muted);
      font-size: clamp(0.95rem, 1.2vw, 1.05rem);
      line-height: 1.6;
      animation: nfFadeUp 0.7s var(--ease) 0.3s both;
    }

    #nf-webinar-page .nf-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 9px 18px;
      margin-top: 18px;
      color: var(--navy-2);
      font-size: 0.86rem;
      font-weight: 600;
      animation: nfFadeUp 0.7s var(--ease) 0.4s both;
    }

    #nf-webinar-page .nf-meta span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    #nf-webinar-page .nf-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 22px;
      animation: nfFadeUp 0.7s var(--ease) 0.5s both;
    }

    #nf-webinar-page .nf-hero-stats {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: clamp(18px, 3vw, 36px);
      row-gap: 7px;
      width: min(100%, 460px);
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(11, 42, 74, 0.1);
      animation: nfFadeUp 0.7s var(--ease) 0.6s both;
    }

    #nf-webinar-page .nf-hero-stat-item {
      display: contents;
    }

    #nf-webinar-page .nf-hero-stat-item strong {
      grid-row: 1;
      display: block;
      font-family: var(--font-head);
      font-size: clamp(1.45rem, 2.5vw, 1.9rem);
      font-weight: 700;
      color: var(--gold-dark);
      line-height: 1;
      margin: 0;
      font-variant-numeric: tabular-nums;
    }

    #nf-webinar-page .nf-hero-stat-item span {
      grid-row: 2;
      display: block;
      max-width: none;
      color: var(--muted);
      font-size: clamp(0.76rem, 1vw, 0.85rem);
      line-height: 1.35;
      white-space: nowrap;
    }

    /* Hero Form Card (Right Column) */
    #nf-webinar-page .nf-hero-form-card {
      position: relative;
      padding: 28px;
      background: #ffffff;
      border: 1px solid var(--line);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      animation: nfFadeUp 0.7s var(--ease) 0.4s both;
    }

    #nf-webinar-page .nf-hero-form-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 24px;
      right: 24px;
      height: 4px;
      background: linear-gradient(90deg, var(--gold), var(--gold-dark));
      border-radius: 0 0 4px 4px;
    }

    #nf-webinar-page .nf-hero-form-title {
      color: var(--navy);
      font-family: var(--font-head);
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 6px;
      text-align: center;
    }

    #nf-webinar-page .nf-hero-form-subtitle {
      color: var(--muted);
      font-size: 0.85rem;
      text-align: center;
      margin-bottom: 20px;
    }

    #nf-webinar-page .nf-fixed-australia .iti__country-list,
    #nf-webinar-page .nf-fixed-australia .iti__dropdown-content,
    #nf-webinar-page .nf-fixed-australia .iti__arrow,
    #nf-webinar-page .nf-fixed-australia .iti__arrow--up {
      display: none !important;
    }

    #nf-webinar-page .nf-fixed-australia .iti__flag-container,
    #nf-webinar-page .nf-fixed-australia .iti__selected-country,
    #nf-webinar-page .nf-fixed-australia .iti__selected-flag {
      pointer-events: none !important;
      cursor: default !important;
    }

    #nf-webinar-page .nf-fixed-australia input[type="tel"] {
      padding-left: 62px !important;
    }

    #nf-webinar-page .nf-hero-form-card .nf-form-mount,
    #nf-webinar-page .nf-hero-form-card .wpforms-container,
    #nf-webinar-page .nf-hero-form-card .wpforms-form,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-container,
    #nf-webinar-page .nf-hero-form-card .wpforms-field,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-row,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-row-block,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-medium,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-large,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-small {
      width: 100% !important;
      max-width: 100% !important;
      float: none !important;
      clear: both !important;
      box-sizing: border-box !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-container,
    #nf-webinar-page .nf-hero-form-card .wpforms-form,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-container {
      padding: 0 !important;
      margin: 0 !important;
      background: transparent !important;
      border: none !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field {
      padding: 0 !important;
      margin: 0 0 12px !important;
      background: transparent !important;
      border: none !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-row {
      display: block !important;
      margin: 0 !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-row-block {
      display: block !important;
      padding: 0 !important;
      margin: 0 0 10px !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-row-block:last-child {
      margin-bottom: 0 !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-label,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-sublabel {
      color: var(--navy) !important;
      font-family: var(--font-body) !important;
      font-weight: 600 !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-label {
      margin-bottom: 6px !important;
      font-size: 0.85rem !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-sublabel {
      margin-top: 5px !important;
      font-size: 0.72rem !important;
      color: var(--muted) !important;
    }

    #nf-webinar-page .nf-hero-form-card input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]):not([type="file"]),
    #nf-webinar-page .nf-hero-form-card select,
    #nf-webinar-page .nf-hero-form-card textarea {
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      min-height: 48px !important;
      padding: 12px 16px !important;
      border: 1px solid var(--line) !important;
      border-radius: 10px !important;
      font-family: var(--font-body) !important;
      font-size: 0.95rem !important;
      line-height: 1.35 !important;
      color: var(--ink) !important;
      background: #f9fbfd !important;
      box-shadow: none !important;
      box-sizing: border-box !important;
      transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
    }

    #nf-webinar-page .nf-hero-form-card textarea {
      min-height: 96px !important;
      resize: vertical;
    }

    #nf-webinar-page .nf-hero-form-card .iti,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-phone .iti,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-phone .wpforms-smart-phone-field {
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-phone input[type="tel"],
    #nf-webinar-page .nf-hero-form-card input.wpforms-smart-phone-field,
    #nf-webinar-page .nf-hero-form-card .iti input[type="tel"] {
      width: 100% !important;
      max-width: 100% !important;
      padding-left: 62px !important;
    }

    #nf-webinar-page .nf-hero-form-card .iti--separate-dial-code input[type="tel"],
    #nf-webinar-page .nf-hero-form-card .iti--show-selected-dial-code input[type="tel"] {
      padding-left: 118px !important;
    }

    #nf-webinar-page .nf-hero-form-card .iti__selected-dial-code {
      color: var(--navy) !important;
      font-family: var(--font-body) !important;
      font-size: 0.9rem !important;
      font-weight: 600 !important;
    }

    /* Keep the Australian flag and +61 in their own area so they never
       overlap the placeholder or the number entered by the visitor. */
    #nf-webinar-page .nf-hero-form-card form.wpforms-form .wpforms-field-phone .iti > input.wpforms-smart-phone-field[type="tel"],
    #nf-webinar-page .nf-hero-form-card form.wpforms-form .wpforms-field-phone .iti > input[type="tel"] {
      padding: 12px 18px 12px 118px !important;
      color: #16233a !important;
      -webkit-text-fill-color: #16233a !important;
      font-size: 1rem !important;
      font-weight: 500 !important;
      line-height: 1.4 !important;
      letter-spacing: 0.01em !important;
      text-indent: 0 !important;
      opacity: 1 !important;
    }

    #nf-webinar-page .nf-hero-form-card form.wpforms-form .wpforms-field-phone .iti > input.wpforms-smart-phone-field[type="tel"]::placeholder,
    #nf-webinar-page .nf-hero-form-card form.wpforms-form .wpforms-field-phone .iti > input[type="tel"]::placeholder {
      color: #708097 !important;
      -webkit-text-fill-color: #708097 !important;
      font-size: 0.95rem !important;
      font-weight: 400 !important;
      opacity: 1 !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-phone .iti__country-container,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-phone .iti__flag-container {
      position: absolute !important;
      top: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
      width: 102px !important;
      height: 100% !important;
      z-index: 3 !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-phone .iti__selected-country,
    #nf-webinar-page .nf-hero-form-card .wpforms-field-phone .iti__selected-flag {
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 8px !important;
      width: 102px !important;
      height: 100% !important;
      padding: 0 12px !important;
      background: #eef4fb !important;
      border-right: 1px solid #d6e1ed !important;
      border-radius: 10px 0 0 10px !important;
      overflow: hidden !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-phone .iti__selected-country-primary {
      display: flex !important;
      align-items: center !important;
      flex: 0 0 auto !important;
      gap: 0 !important;
      width: auto !important;
      height: 100% !important;
      padding: 0 !important;
      background: transparent !important;
      border: 0 !important;
      border-radius: 0 !important;
      overflow: visible !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-phone .iti__flag {
      flex: 0 0 auto !important;
    }

    #nf-webinar-page .nf-hero-form-card .wpforms-field-phone .iti__selected-dial-code {
      display: inline-block !important;
      min-width: 30px !important;
      margin: 0 !important;
      white-space: nowrap !important;
    }

    #nf-webinar-page .nf-hero-form-card .iti {
      position: relative !important;
      display: block !important;
      width: 100% !important;
    }

    #nf-webinar-page .nf-hero-form-card .iti__flag-container,
    #nf-webinar-page .nf-hero-form-card .iti__country-container,
    #nf-webinar-page .nf-hero-form-card .iti__selected-flag,
    #nf-webinar-page .nf-hero-form-card .iti__selected-country,
    #nf-webinar-page .nf-hero-form-card .iti__selected-country-primary {
      height: 100% !important;
      pointer-events: none !important;
      cursor: default !important;
      border: 0 !important;
      outline: 0 !important;
      box-shadow: none !important;
      background: transparent !important;
    }

    #nf-webinar-page .nf-hero-form-card .iti__selected-flag,
    #nf-webinar-page .nf-hero-form-card .iti__selected-country,
    #nf-webinar-page .nf-hero-form-card .iti__selected-country-primary {
      padding-left: 14px !important;
      padding-right: 8px !important;
    }

    #nf-webinar-page .nf-hero-form-card .iti__arrow,
    #nf-webinar-page .nf-hero-form-card .iti__arrow--up,
    #nf-webinar-page .nf-hero-form-card .iti__country-list,
    #nf-webinar-page .nf-hero-form-card .iti__dropdown-content {
      display: none !important;
    }

    #nf-webinar-page .nf-hero-form-card input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]):not([type="file"]):focus,
    #nf-webinar-page .nf-hero-form-card select:focus,
    #nf-webinar-page .nf-hero-form-card textarea:focus {
      border-color: var(--gold) !important;
      box-shadow: 0 0 0 3px rgba(242, 169, 59, 0.15) !important;
      outline: none !important;
    }

    #nf-webinar-page .nf-hero-form-card button[type="submit"],
    #nf-webinar-page .nf-hero-form-card .wpforms-submit {
      width: 100% !important;
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%) !important;
      color: #fff !important;
      border: none !important;
      padding: 14px 24px !important;
      border-radius: 999px !important;
      font-family: var(--font-body) !important;
      font-weight: 700 !important;
      font-size: 0.95rem !important;
      cursor: pointer !important;
      transition: transform 0.2s ease, box-shadow 0.2s ease !important;
      box-shadow: 0 8px 20px -6px rgba(11, 42, 74, 0.4) !important;
      text-transform: none !important;
      letter-spacing: 0 !important;
    }

    #nf-webinar-page .nf-hero-form-card button[type="submit"]:hover,
    #nf-webinar-page .nf-hero-form-card .wpforms-submit:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 12px 28px -8px rgba(11, 42, 74, 0.5) !important;
    }

    /* ============ PROBLEM SECTION (Split Columns) ============ */
    #nf-webinar-page .nf-full-width-head {
      width: 100%;
      margin-bottom: 28px;
    }

    #nf-webinar-page .nf-problem-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(32px, 5vw, 64px);
      align-items: stretch;
    }

    #nf-webinar-page .nf-problem-left {
      display: flex;
      flex-direction: column;
      gap: 24px;
      height: 100%;
    }

    #nf-webinar-page .nf-check-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 0;
      list-style: none;
      justify-content: center;
      height: 100%;
    }

    #nf-webinar-page .nf-check-list li {
      position: relative;
      padding: 18px 18px 18px 52px;
      background: #fff;
      border: 1px solid var(--line);
      border-radius: 14px;
      color: var(--ink);
      line-height: 1.5;
      transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease), border-color 0.25s var(--ease);
    }

    #nf-webinar-page .nf-check-list li:hover {
      transform: translateX(5px);
      border-color: var(--gold);
      box-shadow: var(--shadow-sm);
    }

    #nf-webinar-page .nf-check-list li::before {
      position: absolute;
      top: 17px;
      left: 18px;
      display: flex;
      width: 24px;
      height: 24px;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: var(--success);
      border-radius: 50%;
      font-size: 0.72rem;
      font-weight: 800;
      content: "✓";
    }

    #nf-webinar-page .nf-problem-grid .nf-check-list {
      gap: 10px;
      justify-content: flex-start;
      padding-top: 0;
      height: auto;
    }

    #nf-webinar-page .nf-problem-grid .nf-check-list li {
      padding: 12px 14px 12px 44px;
      font-size: 0.88rem;
      line-height: 1.4;
    }

    #nf-webinar-page .nf-problem-grid .nf-check-list li::before {
      top: 11px;
      left: 12px;
      width: 20px;
      height: 20px;
      font-size: 0.65rem;
    }

    #nf-webinar-page .nf-problem-image-wrap {
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      min-height: 320px;
      height: 100%;
      position: relative;
    }

    #nf-webinar-page .nf-problem-image-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s var(--ease);
    }

    #nf-webinar-page .nf-problem-image-wrap:hover img {
      transform: scale(1.05);
    }

    #nf-webinar-page .nf-callout {
      position: relative;
      overflow: hidden;
      margin-top: 0;
      padding: 26px;
      color: #fff;
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%);
      border-radius: var(--radius-lg);
    }

    #nf-webinar-page .nf-callout::before {
      content: "";
      position: absolute;
      top: -60px;
      right: -30px;
      width: 220px;
      height: 220px;
      background: radial-gradient(circle, rgba(242, 169, 59, 0.18), transparent 65%);
      pointer-events: none;
    }

    #nf-webinar-page .nf-callout h3 {
      position: relative;
      font-family: var(--font-head);
      font-size: 1.15rem;
      font-weight: 600;
      line-height: 1.3;
    }

    #nf-webinar-page .nf-callout p {
      position: relative;
      margin-top: 12px;
      font-size: 0.88rem;
      color: #c4d4e8;
      line-height: 1.55;
    }

    /* ============ REALITY / CASE STUDY SECTION ============ */
    #nf-webinar-page .nf-case-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
      margin-top: 26px;
    }

    #nf-webinar-page .nf-case-card {
      padding: 26px;
      background: #fff;
      border: 1px solid var(--line);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
    }

    #nf-webinar-page .nf-case-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
    }

    #nf-webinar-page .nf-case-card h4 {
      font-family: var(--font-head);
      color: var(--navy);
      font-size: 1.1rem;
      font-weight: 700;
    }

    #nf-webinar-page .nf-case-card p {
      margin-top: 10px;
      color: var(--muted);
      font-size: 0.92rem;
      line-height: 1.6;
    }

    #nf-webinar-page .nf-case-growth {
      display: inline-flex;
      margin-top: 16px;
      padding: 8px 16px;
      border-radius: 999px;
      font-family: var(--font-head);
      font-weight: 700;
      font-size: 0.85rem;
      color: #fff;
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%);
    }

    #nf-webinar-page .nf-case-card.nf-case-win .nf-case-growth {
      background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
      color: #2a1a03;
    }

    #nf-webinar-page .nf-case-card.nf-case-win {
      border-color: rgba(242, 169, 59, 0.5);
    }

    #nf-webinar-page .nf-case-lesson {
      margin-top: 22px;
      padding: 22px 24px;
      border-radius: var(--radius-lg);
      background: #fff;
      border: 1px solid var(--line);
      color: var(--ink);
      font-size: 0.94rem;
      line-height: 1.75;
    }

    /* ============ RELATE CHECKLIST SECTION (left content / right image) ============ */
    #nf-webinar-page .nf-relate-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: clamp(32px, 5vw, 64px);
      align-items: stretch;
    }

    #nf-webinar-page .nf-relate-copy {
      display: flex;
      flex-direction: column;
      gap: 18px;
      height: 100%;
      justify-content: flex-start; /* Aligned to top to remove extra space */
    }

    #nf-webinar-page .nf-relate-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    #nf-webinar-page .nf-relate-list li {
      position: relative;
      padding: 13px 16px 13px 46px;
      background: #fff;
      border: 1px solid var(--line);
      border-radius: 14px;
      color: var(--ink);
      font-size: 0.89rem;
      line-height: 1.45;
      transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease), border-color 0.25s var(--ease);
    }

    #nf-webinar-page .nf-relate-list li:hover {
      transform: translateX(5px);
      border-color: var(--gold);
      box-shadow: var(--shadow-sm);
    }

    #nf-webinar-page .nf-relate-list li::before {
      position: absolute;
      top: 12px;
      left: 12px;
      display: flex;
      width: 20px;
      height: 20px;
      align-items: center;
      justify-content: center;
      color: var(--gold-dark);
      background: rgba(242, 169, 59, 0.16);
      border-radius: 50%;
      font-size: 0.7rem;
      font-weight: 800;
      content: "☐";
    }

    #nf-webinar-page .nf-relate-closing {
      margin: 0;
      color: var(--navy);
      font-size: 0.98rem;
      font-weight: 600;
      line-height: 1.55;
    }

    #nf-webinar-page .nf-relate-callout {
      margin-top: 0;
    }

    #nf-webinar-page .nf-relate-action {
      margin-top: auto;
    }

    /* ENFORCE EXACT MATCH WITH LEFT CONTENT HEIGHT */
    #nf-webinar-page .nf-relate-image-wrap {
      min-height: 0 !important; /* Override the 320px from problem section and prevent row expansion */
      height: 100%;
      position: relative;
      overflow: hidden;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
    }

    #nf-webinar-page .nf-relate-image-wrap img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s var(--ease);
    }

    #nf-webinar-page .nf-relate-image-wrap:hover img {
      transform: scale(1.05);
    }

    /* Learning Cards */
    #nf-webinar-page .nf-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 18px;
      margin-top: 28px;
    }

    #nf-webinar-page .nf-learn-card {
      position: relative;
      padding: 28px 24px;
      background: #fff;
      border: 1px solid var(--line);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease), border-color 0.35s var(--ease);
      overflow: hidden;
    }

    #nf-webinar-page .nf-learn-card::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 24px;
      right: 24px;
      height: 3px;
      background: linear-gradient(90deg, var(--gold), var(--gold-dark));
      border-radius: 3px 3px 0 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s var(--ease);
    }

    #nf-webinar-page .nf-learn-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
      border-color: rgba(242, 169, 59, 0.4);
    }

    #nf-webinar-page .nf-learn-card:hover::after {
      transform: scaleX(1);
    }

    #nf-webinar-page .nf-learn-card.nf-learn-card-featured {
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%);
      border-color: var(--navy-2);
    }
    #nf-webinar-page .nf-learn-card.nf-learn-card-featured h3 { color: #fff; }
    #nf-webinar-page .nf-learn-card.nf-learn-card-featured p { color: #c4d4e8; }
    #nf-webinar-page .nf-learn-card.nf-learn-card-featured .nf-card-number {
      color: #fff;
      background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
    }

    #nf-webinar-page .nf-card-number {
      display: flex;
      width: 44px;
      height: 44px;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%);
      border-radius: 13px;
      font-family: var(--font-head);
      font-size: 0.88rem;
      font-weight: 700;
      box-shadow: 0 6px 16px -4px rgba(11, 42, 74, 0.25);
    }

    #nf-webinar-page .nf-learn-card h3 {
      margin-top: 18px;
      color: var(--navy);
      font-family: var(--font-head);
      font-size: 1.08rem;
      font-weight: 600;
      line-height: 1.35;
    }

    #nf-webinar-page .nf-learn-card p {
      margin-top: 8px;
      color: var(--muted);
      font-size: 0.9rem;
      line-height: 1.65;
    }

    #nf-webinar-page .nf-centered-action {
      margin-top: 28px;
      text-align: center;
    }

    /* ============ TRANSFORM (BEFORE / AFTER) SECTION ============ */
    #nf-webinar-page .nf-transform-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 22px;
      margin-top: 28px;
    }

    #nf-webinar-page .nf-transform-card {
      padding: 30px 26px;
      border-radius: var(--radius-lg);
    }

    #nf-webinar-page .nf-transform-card.nf-transform-before {
      background: #fff;
      border: 1px solid var(--line);
      box-shadow: var(--shadow-sm);
    }

    #nf-webinar-page .nf-transform-card.nf-transform-after {
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%);
      box-shadow: var(--shadow-md);
    }

    #nf-webinar-page .nf-transform-card h4 {
      font-family: var(--font-head);
      font-size: 1.12rem;
      font-weight: 700;
      color: var(--navy);
      margin-bottom: 16px;
    }

    #nf-webinar-page .nf-transform-card.nf-transform-after h4 {
      color: var(--gold-light);
    }

    #nf-webinar-page .nf-transform-card ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    #nf-webinar-page .nf-transform-card li {
      position: relative;
      padding-left: 26px;
      font-size: 0.92rem;
      line-height: 1.55;
      color: var(--ink);
    }

    #nf-webinar-page .nf-transform-card.nf-transform-after li {
      color: #dce8f5;
    }

    #nf-webinar-page .nf-transform-card.nf-transform-before li::before {
      content: "✕";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--danger);
      font-weight: 700;
    }

    #nf-webinar-page .nf-transform-card.nf-transform-after li::before {
      content: "✓";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--gold-light);
      font-weight: 700;
    }

    #nf-webinar-page .nf-transform-closing {
      max-width: 760px;
      margin: 26px auto 0;
      text-align: center;
      color: var(--navy);
      font-size: 1.02rem;
      font-weight: 600;
      line-height: 1.6;
    }

    /* ============ HOSTS (Clean Zigzag Layout) ============ */
    #nf-webinar-page .nf-host-grid {
      display: flex;
      flex-direction: column;
      gap: 26px;
      margin-top: 28px;
    }

    #nf-webinar-page .nf-host {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      gap: 36px;
      padding: 32px;
      background: #fff;
      border: 1px solid var(--line);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-sm);
      transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease);
      overflow: hidden;
    }

    #nf-webinar-page .nf-host.nf-host-reverse {
      flex-direction: row-reverse;
    }

    #nf-webinar-page .nf-host::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(to bottom, var(--gold), var(--gold-dark));
    }

    #nf-webinar-page .nf-host.nf-host-reverse::before {
      left: auto;
      right: 0;
    }

    #nf-webinar-page .nf-host:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
    }

    #nf-webinar-page .nf-host-photo {
      position: relative;
      flex: 0 0 240px;
      display: flex;
      overflow: hidden;
      min-height: 280px;
      align-items: center;
      justify-content: center;
      color: #fff;
      border-radius: 18px;
      font-family: var(--font-head);
      font-size: 2.2rem;
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    #nf-webinar-page .nf-host-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s var(--ease);
    }

    #nf-webinar-page .nf-host:hover .nf-host-photo img {
      transform: scale(1.06);
    }

    #nf-webinar-page .nf-host-photo::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(11, 42, 74, 0.25), transparent 55%);
      pointer-events: none;
    }

    #nf-webinar-page .nf-host-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    #nf-webinar-page .nf-host h3 {
      color: var(--navy);
      font-family: var(--font-head);
      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: -0.01em;
    }

    #nf-webinar-page .nf-host-role {
      margin-top: 6px;
      color: var(--gold-dark);
      font-size: 0.82rem;
      font-weight: 600;
    }

    #nf-webinar-page .nf-host-bio {
      margin-top: 14px;
      color: var(--muted);
      font-size: 0.92rem;
      line-height: 1.7;
    }

    #nf-webinar-page .nf-host-bio p {
      margin: 0;
    }

    #nf-webinar-page .nf-host-bio p + p {
      margin-top: 14px;
    }

    /* Contact */
    #nf-webinar-page .nf-contact-box {
      position: relative;
      overflow: hidden;
      display: block;
      padding: clamp(36px, 5vw, 56px);
      color: #fff;
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 50%, var(--navy) 100%);
      border-radius: var(--radius-xl);
    }

    #nf-webinar-page .nf-contact-box::before {
      content: "";
      position: absolute;
      top: -120px;
      right: -60px;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(242, 169, 59, 0.16), transparent 65%);
      border-radius: 50%;
      pointer-events: none;
    }

    #nf-webinar-page .nf-contact-box::after {
      content: "";
      position: absolute;
      bottom: -120px;
      left: -60px;
      width: 320px;
      height: 320px;
      background: radial-gradient(circle, rgba(26, 77, 128, 0.35), transparent 65%);
      border-radius: 50%;
      pointer-events: none;
    }

    #nf-webinar-page .nf-contact-head,
    #nf-webinar-page .nf-contact-brands,
    #nf-webinar-page .nf-contact-action {
      position: relative;
      z-index: 1;
    }

    #nf-webinar-page .nf-contact-box h2 {
      font-family: var(--font-head);
      font-size: clamp(1.7rem, 3vw, 2.4rem);
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    #nf-webinar-page .nf-contact-box > .nf-contact-head > p {
      margin-top: 10px;
      color: #c4d4e8;
    }

    #nf-webinar-page .nf-contact-brands {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
      margin-top: 28px;
    }

    #nf-webinar-page .nf-contact-brand {
      min-width: 0;
      padding: 24px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 18px;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    #nf-webinar-page .nf-contact-brand h3 {
      color: #fff;
      font-family: var(--font-head);
      font-size: 1.18rem;
      font-weight: 700;
    }

    #nf-webinar-page .nf-contact-details {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 16px;
    }

    #nf-webinar-page .nf-contact-detail {
      display: inline-flex;
      width: fit-content;
      max-width: 100%;
      align-items: center;
      gap: 10px;
      color: #e7eff8;
      font-size: 0.9rem;
      line-height: 1.45;
      overflow-wrap: anywhere;
      transition: color 0.2s ease;
    }

    #nf-webinar-page .nf-contact-detail:hover {
      color: var(--gold-light);
    }

    #nf-webinar-page .nf-contact-detail svg {
      flex: 0 0 auto;
      width: 18px;
      height: 18px;
    }

    #nf-webinar-page .nf-contact-socials {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;
    }

    #nf-webinar-page .nf-social-icon {
      display: inline-flex;
      width: 42px;
      height: 42px;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 50%;
      transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    }

    #nf-webinar-page .nf-social-icon svg {
      width: 19px;
      height: 19px;
    }

    #nf-webinar-page .nf-social-icon:hover {
      color: var(--navy);
      background: var(--gold);
      border-color: var(--gold);
      transform: translateY(-3px);
    }

    #nf-webinar-page .nf-contact-action {
      margin-top: 26px;
      text-align: center;
    }

    /* Responsive */
    @media (max-width: 980px) {
      #nf-webinar-page .nf-hero-grid {
        grid-template-columns: 1fr;
      }

      #nf-webinar-page .nf-hero-form-card {
        width: 100%;
        max-width: 580px;
        margin: 0 auto;
      }

      #nf-webinar-page .nf-card-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      #nf-webinar-page .nf-case-grid,
      #nf-webinar-page .nf-transform-grid {
        grid-template-columns: 1fr;
      }

      #nf-webinar-page .nf-host-photo {
        flex: 0 0 200px;
        min-height: 240px;
      }
    }

    @media (max-width: 760px) {
      #nf-webinar-page .nf-wrap {
        width: min(1120px, calc(100% - 36px));
      }

      #nf-webinar-page .nf-card-grid {
        grid-template-columns: 1fr;
      }

      #nf-webinar-page .nf-contact-brands {
        grid-template-columns: 1fr;
      }

      #nf-webinar-page .nf-problem-grid {
        grid-template-columns: 1fr;
      }

      #nf-webinar-page .nf-problem-image-wrap,
      #nf-webinar-page .nf-relate-image-wrap {
        min-height: 280px !important;
        height: auto !important;
      }

      #nf-webinar-page .nf-hero-stats {
        column-gap: 18px;
      }
    }

    @media (max-width: 640px) {
      #nf-webinar-page .nf-relate-grid {
        grid-template-columns: 1fr;
      }

      #nf-webinar-page .nf-host,
      #nf-webinar-page .nf-host.nf-host-reverse {
        flex-direction: column;
        padding: 24px;
      }

      #nf-webinar-page .nf-host-photo {
        flex: 1;
        width: 100%;
        min-height: 260px;
      }
    }

    @media (max-width: 580px) {
      #nf-webinar-page .nf-actions {
        align-items: stretch;
        flex-direction: column;
      }

      #nf-webinar-page .nf-btn {
        width: 100%;
      }

      #nf-webinar-page .nf-section {
        padding: 36px 0;
      }

      #nf-webinar-page .nf-hero h1 {
        font-size: clamp(2rem, 10vw, 2.7rem);
      }

      #nf-webinar-page .nf-hero-stats {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 12px;
      }

      #nf-webinar-page .nf-hero-stat-item span {
        white-space: normal;
        overflow-wrap: anywhere;
        font-size: 0.68rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #nf-webinar-page *,
      #nf-webinar-page *::before,
      #nf-webinar-page *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      #nf-webinar-page .nf-reveal {
        opacity: 1 !important;
        transform: none !important;
      }
    }

    #nf-webinar-page .nf-hero-grid > *,
    #nf-webinar-page .nf-problem-grid > *,
    #nf-webinar-page .nf-host > *,
    #nf-webinar-page .nf-contact-box > *,
    #nf-webinar-page .wpforms-container,
    #nf-webinar-page .wpforms-form,
    #nf-webinar-page .wpforms-field-container {
      min-width: 0 !important;
      max-width: 100%;
    }

    @media (max-width: 580px) {
      #nf-webinar-page .nf-hero-form-card {
        padding: 20px;
      }

      #nf-webinar-page .nf-hero-stat-item span {
        white-space: normal;
        overflow-wrap: anywhere;
      }

      #nf-webinar-page .nf-contact-links a {
        max-width: 100%;
        white-space: normal;
        overflow-wrap: anywhere;
      }
    }

    /* Top question banner */
    #nf-webinar-page .nf-top-question {
      padding: 14px 20px;
      color: #fff;
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%);
      text-align: center;
    }

    #nf-webinar-page .nf-top-question p {
      margin: 0;
      font-family: var(--font-head);
      font-size: clamp(1.05rem, 2.2vw, 1.45rem);
      font-weight: 700;
      line-height: 1.35;
      letter-spacing: -0.01em;
    }

    #nf-webinar-page .nf-top-question strong {
      color: var(--gold-light);
    }

    #nf-webinar-page .nf-top-date {
      margin: 8px 0 0;
      font-family: var(--font-body);
      font-size: 0.82rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--gold-light);
      opacity: 0.95;
    }

    #nf-webinar-page .nf-footer-rights {
      padding: 18px 0;
      color: var(--muted);
      background: var(--paper);
      text-align: center;
      font-size: 0.8rem;
    }

    #nf-webinar-page .nf-footer-rights p {
      margin: 0;
    }
  </style>

  <div class="nf-top-question">
    <div class="nf-wrap">
      <p>How to Find <strong>High-Growth Investment Properties</strong> Under $500k</p>
    </div>
  </div>

  <!-- Decorative orbs in hero -->
  <section class="nf-hero">
    <div class="nf-orb nf-orb-1"></div>
    <div class="nf-orb nf-orb-2"></div>
    <div class="nf-wrap nf-hero-grid" id="nf-hero-root"></div>
  </section>

  <section class="nf-section"><div class="nf-wrap" id="nf-problem-root"></div></section>
  <section class="nf-section nf-section-soft"><div class="nf-wrap" id="nf-reality-root"></div></section>
  <section class="nf-section"><div class="nf-wrap" id="nf-relate-root"></div></section>
  <section class="nf-section nf-section-soft"><div class="nf-wrap" id="nf-learning-root"></div></section>
  <section class="nf-section"><div class="nf-wrap" id="nf-transform-root"></div></section>
  <section class="nf-section nf-section-soft"><div class="nf-wrap" id="nf-hosts-root"></div></section>
  <section class="nf-section"><div class="nf-wrap" id="nf-contact-root"></div></section>
  <footer class="nf-footer-rights">
    <div class="nf-wrap">
      <p>&copy; <span id="nf-current-year">2026</span> Nfinity Financials &amp; PropWealth. All rights reserved.</p>
    </div>
  </footer>

  <!-- Edit all page copy, links, images and lists in this JSON only. -->
  <script type="application/json" id="nf-page-data">
  {
    "hero": {
      "eyebrow": "60 Minutes Interactive Webinar",
      "titleBefore": "Learn How to Find",
      "highlight": "High-Growth Investment Properties",
      "titleAfter": "Under $500k",
      "description": "Join Australia’s leading experts to learn how investors are still finding strong-growth property opportunities under $500,000 and how to identify the suburbs, data signals, and finance structures that make it possible",
      "meta": ["Live online webinar", "Interactive Q&A", "Practical Investment strategy"],
      "stats": [
        {"value": "100+", "label": "Live Webinars Hosted"},
        {"value": "5,000+", "label": "People Attended"}
      ]
    },
    "problem": {
      "eyebrow": "Sound familiar?",
      "title": "The $500k Property Research Loop You’re Probably Stuck In",
      "description": "If you’re looking to invest wisely with a realistic budget, you’ve likely faced:",
      "imageUrl": "https://nfinityfinancials.com.au/wp-content/uploads/2026/01/Untitled-design-18.png",
      "imageAlt": "Investor reviewing suburb research and property data",
      "items": [
        "Endless “top suburb” lists that don’t fit a $500k budget",
        "Overwhelming data without a clear strategy to interpret it",
        "Fear that all “good opportunities” are already out of reach",
        "Uncertainty about where and how to start building a portfolio"
      ],
      "calloutTitle": "Cut Through The Noise",
      "calloutText": "This webinar is designed to cut through the noise and give you a straightforward, actionable process to identify value and growth potential within your budget."
    },
    "reality": {
      "eyebrow": "Why $500k isn’t just $500k",
      "title": "The Reality Most Investors Are Facing Right Now",
      "description": "In Australia’s property market, $500,000 isn’t just a number, it’s a psychological and practical barrier that’s reshaping investment strategy. Here’s what most investors don’t realise:",
      "cases": [
        {
          "label": "Investor A",
          "text": "Found a property in Suburb X for $485,000 in 2019. Today it’s worth $530,000.",
          "growth": "+$45,000 over 7 years (1.5% p.a.)",
          "win": false
        },
        {
          "label": "Investor B",
          "text": "Found a property in Suburb Y for $480,000 in 2019. Today it’s worth $770,000.",
          "growth": "+$290,000 over 7 years (8.4% p.a.)",
          "win": true
        }
      ],
      "lesson": "Both were bought for under $500k. But one built significant wealth, while the other barely kept pace with inflation. Investor B knew how to identify the right affordable suburbs, the infrastructure, demographics, and supply dynamics that drive sustained growth even at lower price points. Finding properties under $500k with genuine growth potential requires a specific framework. Without it, you’re not buying affordable, you’re buying cheap. And there’s a massive difference."
    },
    "relate": {
      "eyebrow": "A quick check",
      "title": "Do Any of These Sound Like You?",
      "items": [
        "You have a budget under $500k but feel priced out of any “good” areas",
        "You’re overwhelmed by conflicting advice about where affordable growth markets actually are",
        "You can’t tell the difference between genuinely affordable growth suburbs and areas that are cheap for a reason",
        "You’ve seen properties under $500k but have no confidence they’ll actually appreciate",
        "You want to build wealth through property but your budget feels limiting"
      ],
      "closing": "If you ticked any of the above boxes, then this webinar is for you.",
      "imageUrl": "https://nfinityfinancials.com.au/wp-content/uploads/2026/08/B-1.png",
      "imageAlt": "Do any of these sound like you"
    },
    "learning": {
      "eyebrow": "What you’ll learn",
      "title": "What You’ll Learn In This Insightful Webinar",
      "description": "A practical, strategy-led session covering the framework, growth drivers and finance strategies for building a property portfolio under $500k.",
      "items": [
        {"title": "Suburb Selection Framework for Under $500k Opportunities", "text": "A step-by-step method to evaluate suburbs with strong growth indicators that still offer entry points under $500k."},
        {"title": "Key Growth Drivers for 2026 & Beyond", "text": "Understand the specific infrastructure, demographic, and supply-demand metrics that signal opportunity in affordable areas."},
        {"title": "Finance Strategies to Maximise Investment ROI", "text": "Mudit Khandelwal will explain loan structures, affordability modelling, and ownership options to make the most of your investment."},
        {"title": "Real-World Case Studies", "text": "See real examples of suburbs that met growth and affordability criteria and learn how to spot similar opportunities under $500k."}
      ]
    },
    "transform": {
      "eyebrow": "Not sure if it’s worth your time?",
      "title": "Here’s the Shift in Thinking It’s Designed to Create",
      "beforeTitle": "Before Attending This Webinar",
      "beforeItems": [
        "You believe finding a good property under $500k is nearly impossible",
        "You’re consuming endless “affordable suburbs” lists but feeling less confident",
        "You’re making decisions based solely on price, hoping for the best"
      ],
      "afterTitle": "After Attending This Webinar",
      "afterItems": [
        "You’ll have a clear framework for objectively evaluating affordable properties",
        "You’ll know exactly where sub-$500k growth opportunities exist",
        "You’ll distinguish genuine value from properties that are cheap for a reason, and move forward with confidence"
      ],
      "closing": "That transformation, from overwhelmed to clear, from hesitant to confident, is exactly what this webinar delivers.",
      "buttonLabel": "Reserve Your Spot",
      "buttonUrl": "#top"
    },
    "hosts": {
      "eyebrow": "Meet your hosts",
      "title": "Experienced finance and property professionals",
      "description": "Learn from specialists who combine mortgage strategy, property analysis and real-world client experience.",
      "people": [
        {
          "name": "Parag Dixit",
          "role": "Founder at PropWealth & Nfinity Financials",
          "imageUrl": "https://propwealth.com.au/wp-content/uploads/Parag-sir-1-1536x1920.png",
         "bio": "Parag Dixit is the Founder at Nfinity Financials and PropWealth, bringing more than 20 years of experience in the financial industry to every strategy he creates for his clients.\n\nHe has consistently ranked among Australia’s top mortgage professionals, being recognised as a Top 20 Broker nationally for three consecutive years (2022–2024) and an Elite Broker in the 2024 Residential Rankings. His mission is to help Australian families move away from traditional 30-year debt cycles by using smarter mortgage structuring and interest-saving frameworks. With a huge number of satisfied clients and top-tier industry awards, he is dedicated to turning home loans into powerful wealth-building instruments."
        },
        {
          "name": "Julius Dabre",
          "role": "Founder at PropWealth",
          "imageUrl": "https://propwealth.com.au/wp-content/uploads/Julius-1-1536x1920.png",
          "bio": "Julius Dabre is the Founder of PropWealth with over 15 years of experience in the industry and exceptional expertise in proptech and market analysis.\n\nHe has successfully facilitated over $300M in transactions and assisted in the acquisition of more than 300 properties, offering a seamless investment experience for his clients. His mission is to help everyday investors turn smart suburb choices into real results by spotting high-growth opportunities early. By leveraging innovative data and a deep understanding of market trends, he has guided over 1000+ investors toward building high-yield portfolios with confidence."
        },
        {
          "name": "Mudit Khandelwal",
          "role": "Director at Nfinity Financials",
          "imageUrl": "https://propwealth.com.au/wp-content/uploads/Mudit-sir-1-1536x1920.png",
          "bio": "Mudit Khandelwal is An alumnus of IIT-Kanpur and IIM-Ahmedabad, Mudit has been a serial entrepreneur with 20+ years of experience. He brings a vast knowledge of finance, technology, strategy and building processes.\n\nMudit focuses on continuous learning for the team and building tech for them. “In this highly competitive environment, there’s only one way to scale—robust processes enabled by the right technology.His ability to break down complex concepts into easy-to-understand advice has earned him over 200 5-star reviews a true testament to his commitment to his clients. Since the industry is dynamic, updating oneself with the latest changes is important, and doing it at an organisational level is critical for success."
        }
      ]
    },
    "contact": {
      "title": "Ready to take the next step?",
      "description": "Reserve your webinar place or speak with the Nfinity Financials and PropWealth teams.",
      "brands": [
        {
          "name": "Nfinity Financials",
          "email": "info@nfinityfinancials.com",
          "phone": "0456 456 267",
          "socials": {
            "facebook": "https://www.facebook.com/bestmortgagebrokers",
            "instagram": "https://www.instagram.com/nfinity_financials",
            "linkedin": "https://www.linkedin.com/company/nfinityfinancials",
            "youtube": "https://www.youtube.com/@nfinityfinancials",
            "website": "https://nfinityfinancials.com"
          }
        },
        {
          "name": "PropWealth",
          "email": "info@propwealth.com.au",
          "phone": "0409 016 393",
          "socials": {
            "facebook": "https://www.facebook.com/PropWealthau",
            "instagram": "https://www.instagram.com/propwealthau",
            "linkedin": "https://www.linkedin.com/company/propwealth",
            "youtube": "https://www.youtube.com/@PropWealth",
            "website": "https://propwealth.com.au"
          }
        }
      ]
    }
  }
  </script>

  <script>
    (function () {
      "use strict";
      var page = document.getElementById("nf-webinar-page");
      var source = document.getElementById("nf-page-data");
      if (!page || !source) return;

      var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /* ---------- Helpers ---------- */
      function el(tag, className, text) {
        var node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
      }

      function reveal(node, delay) {
        if (prefersReducedMotion) return node;
        node.classList.add("nf-reveal");
        if (delay) node.style.setProperty("--d", delay + "s");
        return node;
      }

      function linkButton(config, outline) {
        var link = el("a", "nf-btn" + (outline ? " nf-btn-outline" : ""));
        link.append(document.createTextNode(config.label));

        if (!outline) {
          var arrow = el("span", "nf-btn-arrow", "→");
          link.append(arrow);
        }

        link.href = config.url;
        return link;
      }

      try {
        var data = JSON.parse(source.textContent);

        /* ========== HERO (Compact with Form) — unchanged ========== */
        var heroRoot = document.getElementById("nf-hero-root");
        var heroCopy = el("div");
        heroCopy.append(el("div", "nf-pill", data.hero.eyebrow));
        var h1 = el("h1");
        h1.append(document.createTextNode(data.hero.titleBefore + " "));
        h1.append(el("span", "", data.hero.highlight));
        h1.append(document.createTextNode(" " + data.hero.titleAfter));
        heroCopy.append(h1, el("p", "nf-hero-copy", data.hero.description));

        var meta = el("div", "nf-meta");
        data.hero.meta.forEach(function (item) { meta.append(el("span", "", "✓ " + item)); });
        heroCopy.append(meta);

        var heroStats = el("div", "nf-hero-stats");
        data.hero.stats.forEach(function (stat) {
          var item = el("div", "nf-hero-stat-item");
          var match = String(stat.value).match(/^([^0-9]*)([0-9,]+)(.*)$/);
          var number = el("strong", "nf-count", prefersReducedMotion ? stat.value : "0");

          if (match) {
            number.dataset.prefix = match[1] || "";
            number.dataset.target = match[2].replace(/,/g, "");
            number.dataset.suffix = match[3] || "";
          } else {
            number.textContent = stat.value;
          }

          item.append(number, el("span", "", stat.label));
          heroStats.append(item);
        });
        heroCopy.append(heroStats);

        var formCard = el("aside", "nf-hero-form-card");
        formCard.append(el("h3", "nf-hero-form-title", "Reserve Your Spot"));

        var formMount = el("div", "nf-form-mount");
        formMount.id = "nf-form-mount";
        formCard.append(formMount);

        heroRoot.append(heroCopy, formCard);

        /* ========== PROBLEM ========== */
        var problemRoot = document.getElementById("nf-problem-root");

        var problemHead = el("div", "nf-full-width-head");
        problemHead.append(el("div", "nf-kicker", data.problem.eyebrow));
        problemHead.append(el("h2", "nf-section-title", data.problem.title));
        problemHead.append(el("p", "nf-section-intro", data.problem.description));
        reveal(problemHead);
        problemRoot.append(problemHead);

        var problemGrid = el("div", "nf-problem-grid");

        var problemLeft = el("div", "nf-problem-left");

        var checklist = el("ul", "nf-check-list");
        data.problem.items.forEach(function (item, index) {
          var li = el("li", "", item);
          reveal(li, index * 0.05);
          checklist.append(li);
        });
        problemLeft.append(checklist);

        var problemCallout = el("div", "nf-callout nf-problem-callout");
        problemCallout.append(el("h3", "", data.problem.calloutTitle), el("p", "", data.problem.calloutText));
        reveal(problemCallout, 0.2);
        problemLeft.append(problemCallout);

        problemGrid.append(problemLeft);

        var imageWrap = el("div", "nf-problem-image-wrap");
        var problemImage = document.createElement("img");
        problemImage.src = data.problem.imageUrl;
        problemImage.alt = data.problem.imageAlt;
        problemImage.loading = "lazy";
        problemImage.decoding = "async";
        imageWrap.append(problemImage);
        reveal(imageWrap, 0.1);
        problemGrid.append(imageWrap);

        problemRoot.append(problemGrid);

        /* ========== REALITY / CASE STUDY ========== */
        var realityRoot = document.getElementById("nf-reality-root");

        var realityHead = el("div", "nf-full-width-head");
        realityHead.append(el("div", "nf-kicker", data.reality.eyebrow));
        realityHead.append(el("h2", "nf-section-title", data.reality.title));
        realityHead.append(el("p", "nf-section-intro nf-section-intro-narrow", data.reality.description));
        reveal(realityHead);
        realityRoot.append(realityHead);

        var caseGrid = el("div", "nf-case-grid");
        data.reality.cases.forEach(function (item, index) {
          var card = el("article", "nf-case-card" + (item.win ? " nf-case-win" : ""));
          reveal(card, index * 0.1);
          card.append(el("h4", "", item.label));
          card.append(el("p", "", item.text));
          card.append(el("span", "nf-case-growth", item.growth));
          caseGrid.append(card);
        });
        realityRoot.append(caseGrid);

        var caseLesson = el("div", "nf-case-lesson", data.reality.lesson);
        reveal(caseLesson, 0.2);
        realityRoot.append(caseLesson);

        /* ========== RELATE CHECKLIST (left content / right image) ========== */
        var relateRoot = document.getElementById("nf-relate-root");

        var relateHead = el("div", "nf-full-width-head");
        relateHead.append(el("div", "nf-kicker", data.relate.eyebrow));
        relateHead.append(el("h2", "nf-section-title", data.relate.title));
        reveal(relateHead);
        relateRoot.append(relateHead);

        var relateGrid = el("div", "nf-relate-grid");

        var relateCopy = el("div", "nf-relate-copy");

        var relateList = el("ul", "nf-relate-list");
        data.relate.items.forEach(function (item, index) {
          var li = el("li", "", item);
          reveal(li, index * 0.05);
          relateList.append(li);
        });
        relateCopy.append(relateList);

        var relateClosing = el("p", "nf-relate-closing", data.relate.closing);
        reveal(relateClosing, 0.15);
        relateCopy.append(relateClosing);

        relateGrid.append(relateCopy);

        var relateImageWrap = el("div", "nf-problem-image-wrap nf-relate-image-wrap");
        var relateImage = document.createElement("img");
        relateImage.src = data.relate.imageUrl;
        relateImage.alt = data.relate.imageAlt;
        relateImage.loading = "lazy";
        relateImage.decoding = "async";
        relateImageWrap.append(relateImage);
        reveal(relateImageWrap, 0.1);
        relateGrid.append(relateImageWrap);

        relateRoot.append(relateGrid);

        /* ========== LEARNING ========== */
        var learningRoot = document.getElementById("nf-learning-root");
        learningRoot.id = "nf-learning";

        var learningHead = el("div", "nf-full-width-head");
        learningHead.append(el("div", "nf-kicker", data.learning.eyebrow));
        learningHead.append(el("h2", "nf-section-title", data.learning.title));
        learningHead.append(el("p", "nf-section-intro", data.learning.description));
        reveal(learningHead);
        learningRoot.append(learningHead);

        var cards = el("div", "nf-card-grid");
        data.learning.items.forEach(function (item, index) {
          var card = el("article", "nf-learn-card");

          if (item.title.toLowerCase().includes("live q&a")) {
            card.classList.add("nf-learn-card-featured");
          }

          card.append(el("div", "nf-card-number", String(index + 1).padStart(2, "0")));
          card.append(el("h3", "", item.title), el("p", "", item.text));
          reveal(card, (index % 3) * 0.1);
          cards.append(card);
        });
        learningRoot.append(cards);

        /* ========== TRANSFORM (BEFORE / AFTER) ========== */
        var transformRoot = document.getElementById("nf-transform-root");

        var transformHead = el("div", "nf-full-width-head");
        transformHead.append(el("div", "nf-kicker", data.transform.eyebrow));
        transformHead.append(el("h2", "nf-section-title", data.transform.title));
        reveal(transformHead);
        transformRoot.append(transformHead);

        var transformGrid = el("div", "nf-transform-grid");

        var beforeCard = el("article", "nf-transform-card nf-transform-before");
        beforeCard.append(el("h4", "", data.transform.beforeTitle));
        var beforeList = el("ul");
        data.transform.beforeItems.forEach(function (item) { beforeList.append(el("li", "", item)); });
        beforeCard.append(beforeList);
        reveal(beforeCard);
        transformGrid.append(beforeCard);

        var afterCard = el("article", "nf-transform-card nf-transform-after");
        afterCard.append(el("h4", "", data.transform.afterTitle));
        var afterList = el("ul");
        data.transform.afterItems.forEach(function (item) { afterList.append(el("li", "", item)); });
        afterCard.append(afterList);
        reveal(afterCard, 0.1);
        transformGrid.append(afterCard);

        transformRoot.append(transformGrid);

        var transformClosing = el("p", "nf-transform-closing", data.transform.closing);
        reveal(transformClosing, 0.2);
        transformRoot.append(transformClosing);

        var transformAction = el("div", "nf-centered-action");
        reveal(transformAction, 0.3);
        transformAction.append(linkButton({ label: data.transform.buttonLabel, url: data.transform.buttonUrl }));
        transformRoot.append(transformAction);

        /* ========== HOSTS — unchanged ========== */
        var hostsRoot = document.getElementById("nf-hosts-root");

        var hostsHead = el("div", "nf-full-width-head");
        hostsHead.append(el("div", "nf-kicker", data.hosts.eyebrow));
        hostsHead.append(el("h2", "nf-section-title", data.hosts.title));
        hostsHead.append(el("p", "nf-section-intro", data.hosts.description));
        reveal(hostsHead);
        hostsRoot.append(hostsHead);

        var hostGrid = el("div", "nf-host-grid");
        data.hosts.people.forEach(function (person, index) {
          var host = el("article", "nf-host");

          if (index % 2 === 1) {
            host.classList.add("nf-host-reverse");
          }

          reveal(host, index * 0.12);

          var photo = el("div", "nf-host-photo");
          if (person.imageUrl) {
            var image = document.createElement("img");
            image.src = person.imageUrl;
            image.alt = person.name;
            image.loading = "lazy";
            image.decoding = "async";
            photo.append(image);
          } else {
            photo.textContent = person.name.split(" ").map(function (word) { return word.charAt(0); }).join("");
          }

          var bioWrap = el("div", "nf-host-content");
          bioWrap.append(
            el("h3", "", person.name),
            el("div", "nf-host-role", person.role)
          );

          var bioContainer = el("div", "nf-host-bio");

          person.bio.split(/\n\s*\n/).forEach(function (paragraph) {
            if (paragraph.trim()) {
              bioContainer.append(el("p", "", paragraph.trim()));
            }
          });

          bioWrap.append(bioContainer);
          host.append(photo, bioWrap);
          hostGrid.append(host);
        });
        hostsRoot.append(hostGrid);

        /* ========== CONTACT — unchanged ========== */
        function contactIcon(name) {
          var icons = {
            email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 10 7.7 8.2 9.5c1.2 2.5 3.8 5.1 6.3 6.3l1.8-1.8 4.2 2.8c.4.3.6.8.4 1.3-.5 1.4-1.8 2.4-3.3 2.4C10 20.5 3.5 14 3.5 6.4c0-1.5 1-2.8 2.4-3.3.5-.2 1 .1 1.3.4Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.4Z" fill="currentColor"/></svg>',
            instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.4" cy="6.7" r="1" fill="currentColor"/></svg>',
            linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.3H2.5V21h2.7V8.3ZM3.8 3A1.7 1.7 0 1 0 3.8 6.4 1.7 1.7 0 0 0 3.8 3ZM21 13.7c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2V8.3H9.9V21h2.7v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21H21v-7.3Z" fill="currentColor"/></svg>',
            youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.2 7.2a2.8 2.8 0 0 0-2-2C17.5 4.7 12 4.7 12 4.7s-5.5 0-7.2.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.3 12a29 29 0 0 0 .5 4.8 2.8 2.8 0 0 0 2 2c1.7.5 7.2.5 7.2.5s5.5 0 7.2-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8Z" fill="currentColor"/><path d="m10 15.5 5-3.5-5-3.5v7Z" fill="var(--navy)"/></svg>',
            website: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 12h17M12 3c2.2 2.5 3.4 5.6 3.4 9S14.2 18.5 12 21c-2.2-2.5-3.4-5.6-3.4-9S9.8 5.5 12 3Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
          };

          return icons[name] || "";
        }

        var socialLabels = {
          facebook: "Facebook",
          instagram: "Instagram",
          linkedin: "LinkedIn",
          youtube: "YouTube",
          website: "Website"
        };

        var contactRoot = document.getElementById("nf-contact-root");
        var contactBox = el("div", "nf-contact-box");
        reveal(contactBox);

        var contactHead = el("div", "nf-contact-head");
        contactHead.append(
          el("h2", "", data.contact.title),
          el("p", "", data.contact.description)
        );
        contactBox.append(contactHead);

        var contactBrands = el("div", "nf-contact-brands");

        data.contact.brands.forEach(function (brand, brandIndex) {
          var brandCard = el("article", "nf-contact-brand");
          reveal(brandCard, brandIndex * 0.1);
          brandCard.append(el("h3", "", brand.name));

          var details = el("div", "nf-contact-details");

          var email = el("a", "nf-contact-detail");
          email.href = "mailto:" + brand.email;
          email.setAttribute("aria-label", "Email " + brand.name);
          email.innerHTML = contactIcon("email") + "<span>" + brand.email + "</span>";

          var phone = el("a", "nf-contact-detail");
          phone.href = "tel:" + brand.phone.replace(/\s+/g, "");
          phone.setAttribute("aria-label", "Call " + brand.name);
          phone.innerHTML = contactIcon("phone") + "<span>" + brand.phone + "</span>";

          details.append(email, phone);
          brandCard.append(details);

          var socialIcons = el("div", "nf-contact-socials");

          Object.keys(brand.socials).forEach(function (platform) {
            var social = el("a", "nf-social-icon");
            var socialUrl = brand.socials[platform];
            var socialLabel = socialLabels[platform] || platform;

            social.href = socialUrl || "#";
            social.title = brand.name + " " + socialLabel;
            social.setAttribute("aria-label", brand.name + " " + socialLabel);
            social.innerHTML = contactIcon(platform);

            if (socialUrl && socialUrl !== "#") {
              social.target = "_blank";
              social.rel = "noopener noreferrer";
            } else {
              social.addEventListener("click", function (event) {
                event.preventDefault();
              });
            }

            socialIcons.append(social);
          });

          brandCard.append(socialIcons);
          contactBrands.append(brandCard);
        });

        contactBox.append(contactBrands);
        contactRoot.append(contactBox);

        /* ========== COUNTING ANIMATION ========== */
        function animateCounter(node) {
          if (!node || node.dataset.counted === "true") return;

          var target = Number(node.dataset.target || 0);
          var prefix = node.dataset.prefix || "";
          var suffix = node.dataset.suffix || "";

          if (!target) return;
          node.dataset.counted = "true";

          if (prefersReducedMotion) {
            node.textContent = prefix + target.toLocaleString("en-AU") + suffix;
            return;
          }

          var duration = 1500;
          var startTime = null;

          function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.round(target * eased);
            node.textContent = prefix + current.toLocaleString("en-AU") + suffix;

            if (progress < 1) {
              window.requestAnimationFrame(updateCounter);
            }
          }

          window.requestAnimationFrame(updateCounter);
        }

        var countNodes = page.querySelectorAll(".nf-count[data-target]");
        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
          countNodes.forEach(animateCounter);
        } else {
          var countObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                animateCounter(entry.target);
                countObserver.unobserve(entry.target);
              }
            });
          }, { threshold: 0.45 });

          countNodes.forEach(function (node) {
            countObserver.observe(node);
          });
        }

        /* ========== ANIMATIONS ========== */
        if (prefersReducedMotion) {
          page.querySelectorAll(".nf-reveal").forEach(function (node) {
            node.classList.add("nf-in");
          });
        } else {
          var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("nf-in");
                revealObserver.unobserve(entry.target);
              }
            });
          }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });

          page.querySelectorAll(".nf-reveal").forEach(function (node) {
            revealObserver.observe(node);
          });
        }

      } catch (error) {
        console.error("Unable to render webinar page JSON:", error);
      }
    }());
  </script>
  <script>
  (function () {
    "use strict";

    var AUSTRALIAN_COUNTRY_CODE = "au";
    var REGISTRATION_STORAGE_PREFIX = "nf_webinar_registered_";
    var PENDING_STORAGE_KEY = "nf_webinar_pending_form";
    var SUBMIT_LOCK_MS = 12000;

    function safelyReadStorage(key) {
      try {
        return window.localStorage.getItem(key);
      } catch (error) {
        return null;
      }
    }

    function safelyWriteStorage(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        /* Cookies below provide a fallback when localStorage is unavailable. */
      }
    }

    function readCookie(name) {
      var prefix = encodeURIComponent(name) + "=";
      var cookies = document.cookie ? document.cookie.split(";") : [];

      for (var index = 0; index < cookies.length; index++) {
        var cookie = cookies[index].trim();
        if (cookie.indexOf(prefix) === 0) {
          return decodeURIComponent(cookie.slice(prefix.length));
        }
      }

      return null;
    }

    function writeCookie(name, value) {
      var tenYears = 60 * 60 * 24 * 365 * 10;
      document.cookie =
        encodeURIComponent(name) +
        "=" +
        encodeURIComponent(value) +
        "; Max-Age=" +
        tenYears +
        "; Path=/; SameSite=Lax" +
        (window.location.protocol === "https:" ? "; Secure" : "");
    }

    function getFormId(element) {
      if (!element) return "";

      var form = element.matches && element.matches("form")
        ? element
        : element.querySelector
          ? element.querySelector("form.wpforms-form")
          : null;

      if (form) {
        var hiddenId = form.querySelector('input[name="wpforms[id]"]');
        if (hiddenId && hiddenId.value) return String(hiddenId.value);

        var dataId = form.getAttribute("data-formid");
        if (dataId) return String(dataId);

        var formIdMatch = String(form.id || "").match(/wpforms-form-(\d+)/);
        if (formIdMatch) return formIdMatch[1];
      }

      var elementIdMatch = String(element.id || "").match(/wpforms(?:-confirmation)?-(\d+)/);
      return elementIdMatch ? elementIdMatch[1] : "";
    }

    function registrationKey(formId) {
      return REGISTRATION_STORAGE_PREFIX + String(formId || "webinar");
    }

    function hasRegistered(formId) {
      var key = registrationKey(formId);
      return safelyReadStorage(key) === "1" || readCookie(key) === "1";
    }

    function rememberRegistration(formId) {
      if (!formId) return;

      var key = registrationKey(formId);
      safelyWriteStorage(key, "1");
      writeCookie(key, "1");

      try {
        window.sessionStorage.removeItem(PENDING_STORAGE_KEY);
      } catch (error) {
        /* Nothing else is required. */
      }
    }

    function rememberPendingForm(formId) {
      if (!formId) return;

      try {
        window.sessionStorage.setItem(PENDING_STORAGE_KEY, String(formId));
      } catch (error) {
        /* The permanent marker is written only after a successful submission. */
      }
    }

    function getPendingFormId() {
      try {
        return window.sessionStorage.getItem(PENDING_STORAGE_KEY) || "";
      } catch (error) {
        return "";
      }
    }

    function confirmationMarkup(alreadyRegistered) {
      var heading = alreadyRegistered
        ? "You’re Already Registered"
        : "Thank You for Registering!";
      var message = alreadyRegistered
        ? "Your registration has already been received. You’ll receive the webinar details by email shortly."
        : "Your spot is confirmed. You’ll receive the webinar details by email shortly.";

      return (
        '<div class="nf-webinar-confirmation" role="status" aria-live="polite">' +
          '<div class="nf-confirmation-icon" aria-hidden="true">&#10003;</div>' +
          "<h3>" + heading + "</h3>" +
          "<p>" + message + "</p>" +
          '<p class="nf-confirmation-note">Please also check your spam or junk folder.</p>' +
        "</div>"
      );
    }

    function showRegistrationState(mount, alreadyRegistered) {
      if (!mount) return;

      var card = mount.closest ? mount.closest(".nf-hero-form-card") : null;
      var title = card ? card.querySelector(".nf-hero-form-title") : null;

      if (title) title.textContent = "Registration Confirmed";
      mount.innerHTML = confirmationMarkup(alreadyRegistered);
    }

    function moveWPForm() {
      var mount = document.getElementById("nf-form-mount");
      var sourceWidget = document.getElementById("nf-wpforms-source");

      if (!mount || !sourceWidget) return null;

      var container = sourceWidget.querySelector(".wpforms-container");

      if (!container && sourceWidget.classList.contains("wpforms-container")) {
        container = sourceWidget;
      }

      if (!container) return null;

      mount.appendChild(container);

      if (sourceWidget !== container && sourceWidget.parentNode) {
        sourceWidget.parentNode.removeChild(sourceWidget);
      }

      var form = container.querySelector("form.wpforms-form");
      var formId = getFormId(form || container) || getPendingFormId();
      var hasConfirmation = !!container.querySelector(
        ".wpforms-confirmation-container-full, .wpforms-confirmation-container"
      );

      if (hasConfirmation && formId) {
        rememberRegistration(formId);
        showRegistrationState(mount, false);
        return { mount: mount, form: null, formId: formId };
      }

      if (formId && hasRegistered(formId)) {
        showRegistrationState(mount, true);
        return { mount: mount, form: null, formId: formId };
      }

      return { mount: mount, form: form, formId: formId };
    }

    function paintAustralianFlag(wrapper) {
      if (!wrapper) return;

      wrapper.classList.add("nf-fixed-australia");

      var selected = wrapper.querySelector(
        ".iti__selected-country, .iti__selected-flag"
      );

      if (selected) {
        if (selected.getAttribute("data-country-code") !== "au") {
          selected.setAttribute("data-country-code", "au");
        }
        if (selected.getAttribute("title") !== "Australia: +61") {
          selected.setAttribute("title", "Australia: +61");
        }

        if (selected.getAttribute("aria-label") !== "Australia, country code +61") {
          selected.setAttribute(
            "aria-label",
            "Australia, country code +61"
          );
        }
      }

      var flag = wrapper.querySelector(".iti__flag");

      if (flag) {
        Array.prototype.slice.call(flag.classList).forEach(function (className) {
          if (/^iti__[a-z]{2}$/i.test(className) && className !== "iti__au") {
            flag.classList.remove(className);
          }
        });

        if (!flag.classList.contains("iti__au")) {
          flag.classList.add("iti__au");
        }
      }
    }

    function forceAustralianPhone(input) {
      if (!input) return false;

      input.setAttribute("inputmode", "tel");
      input.setAttribute("autocomplete", "tel-national");
      input.setAttribute("placeholder", "0412 345 678");
      input.setAttribute(
        "title",
        "Enter a valid Australian phone number, for example 0412 345 678."
      );
      input.removeAttribute("pattern");
      input.removeAttribute("maxlength");
      input.style.setProperty("padding", "12px 18px 12px 118px", "important");
      input.style.setProperty("color", "#16233a", "important");
      input.style.setProperty("-webkit-text-fill-color", "#16233a", "important");
      input.style.setProperty("font-size", "16px", "important");
      input.style.setProperty("text-indent", "0", "important");
      input.style.setProperty("opacity", "1", "important");

      var configured = false;

      if (window.jQuery) {
        var $input = window.jQuery(input);
        var plugin = $input.data("plugin_intlTelInput");
        var options = null;

        if (plugin && plugin.d) {
          options = Object.assign({}, plugin.d);
        } else if (plugin && plugin.options) {
          options = Object.assign({}, plugin.options);
        }

        if (options && typeof $input.intlTelInput === "function") {
          try {
            $input.intlTelInput("destroy");
            $input.off("validate");

            options.initialCountry = AUSTRALIAN_COUNTRY_CODE;
            options.onlyCountries = [AUSTRALIAN_COUNTRY_CODE];
            options.preferredCountries = [AUSTRALIAN_COUNTRY_CODE];
            options.separateDialCode = true;

            $input.intlTelInput(options);
            $input.intlTelInput("setCountry", AUSTRALIAN_COUNTRY_CODE);

            $input.siblings('input[type="hidden"]').each(function () {
              var hidden = window.jQuery(this);
              var name = hidden.attr("name");
              if (name) hidden.attr("name", name.replace("wpf-temp-", ""));
            });

            configured = true;
          } catch (error) {
            configured = false;
          }
        }
      }

      if (!configured && window.intlTelInputGlobals) {
        var globals = window.intlTelInputGlobals;
        var instance = typeof globals.getInstance === "function"
          ? globals.getInstance(input)
          : null;

        if (instance && typeof instance.setCountry === "function") {
          instance.setCountry(AUSTRALIAN_COUNTRY_CODE);
          configured = true;
        }
      }

      var wrapper = input.closest ? input.closest(".iti") : null;

      if (configured && wrapper) {
        paintAustralianFlag(wrapper);
        input.dataset.nfAustralianPhoneConfigured = "true";
      }

      return configured;
    }

    function setAustralianPhoneDefault() {
      var phoneInputs = document.querySelectorAll(
        '#nf-webinar-page .wpforms-field-phone input[type="tel"], ' +
        '#nf-webinar-page input.wpforms-smart-phone-field'
      );

      if (!phoneInputs.length) return false;

      var configuredCount = 0;

      phoneInputs.forEach(function (input) {
        if (input.dataset.nfAustralianPhoneConfigured === "true") {
          configuredCount++;
        } else if (forceAustralianPhone(input)) {
          configuredCount++;
        }
      });

      return configuredCount === phoneInputs.length;
    }

    function initialiseAustralianPhone() {
      var attempts = 0;

      if (setAustralianPhoneDefault()) return;

      var phoneInterval = window.setInterval(function () {
        attempts++;

        if (setAustralianPhoneDefault() || attempts >= 30) {
          window.clearInterval(phoneInterval);
        }
      }, 200);
    }

    function bindSubmissionProtection(result) {
      if (!result || !result.form || !result.formId) return;

      var form = result.form;
      var formId = result.formId;
      var mount = result.mount;

      if (form.dataset.nfSubmissionProtectionBound === "true") return;
      form.dataset.nfSubmissionProtectionBound = "true";

      form.addEventListener(
        "submit",
        function (event) {
          if (hasRegistered(formId)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            showRegistrationState(mount, true);
            return false;
          }

          var now = Date.now();
          var previousAttempt = Number(form.dataset.nfSubmitAttempt || 0);

          if (previousAttempt && now - previousAttempt < SUBMIT_LOCK_MS) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
          }

          form.dataset.nfSubmitAttempt = String(now);
          rememberPendingForm(formId);

          window.setTimeout(function () {
            form.dataset.nfSubmitAttempt = "0";
          }, SUBMIT_LOCK_MS);

          return true;
        },
        true
      );

      if (window.jQuery) {
        var $form = window.jQuery(form);

        $form.on("wpformsAjaxSubmitSuccess.nfWebinar", function () {
          rememberRegistration(formId);

          window.setTimeout(function () {
            showRegistrationState(mount, false);
          }, 50);
        });

        $form.on(
          "wpformsAjaxSubmitError.nfWebinar wpformsAjaxSubmitFailed.nfWebinar",
          function () {
            form.dataset.nfSubmitAttempt = "0";
          }
        );
      }

      if (window.MutationObserver) {
        var observer = new MutationObserver(function () {
          var confirmation = mount.querySelector(
            ".wpforms-confirmation-container-full, .wpforms-confirmation-container"
          );

          if (confirmation) {
            observer.disconnect();
            rememberRegistration(formId);
            showRegistrationState(mount, false);
          }
        });

        observer.observe(mount, { childList: true, subtree: true });
      }
    }

    function finishInitialisation(result) {
      if (!result) return;
      bindSubmissionProtection(result);
      initialiseAustralianPhone();
    }

    function initialiseFormMove() {
      var movedForm = moveWPForm();

      if (movedForm) {
        finishInitialisation(movedForm);
        return;
      }

      var attempts = 0;
      var formInterval = setInterval(function () {
        attempts++;

        var result = moveWPForm();

        if (result) {
          clearInterval(formInterval);
          finishInitialisation(result);
        } else if (attempts >= 30) {
          clearInterval(formInterval);
        }
      }, 200);
    }

    if (window.jQuery) {
      window.jQuery(document).on("wpformsReady.nfWebinar", function () {
        initialiseAustralianPhone();
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initialiseFormMove);
    } else {
      initialiseFormMove();
    }
  })();
  </script>

  <script>
    (function () {
      var yearEl = document.getElementById("nf-current-year");
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    })();
  </script>

</div>