/* =====================================================================
   Rendering. You should not need to touch this file — the content lives
   in data.js (ME, PROFILE, FACTS, WORKS, MINIS, JOBS, SKILLS, TRAINING,
   EDU), which is loaded before this one.
   ===================================================================== */
(function(){
"use strict";
var $ = function(id){ return document.getElementById(id); };

var esc = function(s){
  return String(s).replace(/[&<>"']/g, function(c){
    return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c];
  });
};
var has = function(v){ return v !== undefined && v !== null && String(v).trim() !== ""; };

/* An amber marker for anything still blank in data.js. */
var mark = function(hint){ return '<span class="tofill">' + esc(hint) + "</span>"; };
var f = function(v, hint){
  return has(v) ? esc(v) : mark(hint);
};

/* data.js holds plain text only: *stars* become emphasis, **double** bold. */
var rich = function(s){
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
};

var ARROW = " ↗";

/* ---------------- identity ---------------- */
var displayName = has(ME.name) ? ME.name : "Your name";
var initials = has(ME.initials) ? ME.initials
  : displayName.split(/\s+/).map(function(w){ return w.charAt(0); }).join("").slice(0,2).toUpperCase();

document.title = displayName + " — " + (has(ME.field) ? ME.field : "Research Portfolio");
$("nav-name").innerHTML = esc(displayName) + "<span>.</span>";
$("hero-coord").innerHTML = f(ME.coords, "coordinates · city");
$("hero-status").innerHTML = f(ME.status, "your status line");
$("hero-name").innerHTML = esc(displayName).replace(/\s+/, "<br>");
$("hero-role").innerHTML = esc(ME.role);
$("hero-pitch").innerHTML = has(ME.pitch) ? rich(ME.pitch) : f("", "a one-sentence pitch");

var ICON = {
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18v12H3z"/><path d="M3 7l9 6 9-6"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58l-.01-2.02c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12 12 0 0012 .5z"/></svg>'
};

/* ---------------- hero actions ---------------- */
var acts = [];
acts.push(has(ME.cv)
  ? '<a class="btn btn-solid" href="' + esc(ME.cv) + '" target="_blank" rel="noopener">' + ICON.down + "Download CV</a>"
  : '<span class="btn btn-solid" aria-disabled="true">' + ICON.down + "CV — " + f("", "add CV link") + "</span>");
if (has(ME.github)) acts.push('<a class="btn btn-ghost" href="' + esc(ME.github) + '" target="_blank" rel="noopener">' + ICON.github + "GitHub</a>");
if (has(ME.email)) acts.push('<a class="btn btn-ghost" href="mailto:' + esc(ME.email) + '">Email me</a>');
$("hero-acts").innerHTML = acts.join("");

if (has(ME.cv)){ $("nav-cv").href = ME.cv; $("nav-cv").target = "_blank"; $("nav-cv").rel = "noopener"; }
if (has(ME.github)){
  var navGh = $("nav-gh");
  navGh.href = ME.github; navGh.target = "_blank"; navGh.rel = "noopener";
  navGh.textContent = "GitHub" + ARROW;
  navGh.hidden = false;
}

$("portrait").innerHTML = has(ME.photo)
  ? '<img src="' + esc(ME.photo) + '" alt="' + esc(displayName) + '" width="232" height="288" loading="lazy">'
  : '<span class="ini">' + esc(initials) + '</span><span class="cap">add a photo</span>';

/* ---------------- selected work ---------------- */
var highlights = WORKS.map(function(w){
  return { kicker: has(w.status) ? w.status : w.domain, title: w.title,
           hint: "the paper's title", text: w.summary };
});
highlights.push({ kicker: "Final-year thesis", title: THESIS.title,
                  text: "An alkaline electrolyser built as both a two- and a three-electrode cell, "
                      + "measured across spacing, concentration, voltage and alignment.", href: "#thesis" });
$("highlights").innerHTML = highlights.slice(0,4).map(function(h){
  return '<a class="hl-card reveal" href="' + (h.href || "#research") + '">'
    + '<p class="hl-kicker">' + esc(h.kicker) + "</p>"
    + "<h3>" + (has(h.title) ? esc(h.title) : mark(h.hint)) + "</h3>"
    + "<p>" + esc(h.text) + "</p>"
    + '<span class="hl-go">Read more ↓</span></a>';
}).join("");

/* ---------------- profile ---------------- */
$("about-lead").innerHTML = PROFILE.map(function(p){ return "<p>" + rich(p) + "</p>"; }).join("");
$("facts").innerHTML = FACTS.map(function(x){
  return '<div class="fact"><span class="k">' + esc(x.k) + '</span>'
    + '<span class="v">' + f(x.v, x.hint || "to fill") + "</span></div>";
}).join("");

/* ---------------- research ---------------- */
$("works").innerHTML = WORKS.map(function(w){
  var methods = w.methods.map(function(m){
    return "<li>" + (typeof m === "string" ? rich(m) : f("", m.hint)) + "</li>";
  }).join("");

  var bench = w.bench ? '<div class="bench">' + w.bench.map(function(b){
      return "<div><b>" + f(b.v, b.hint) + "</b><span>" + esc(b.l) + "</span></div>";
    }).join("") + "</div>" : "";

  var findings = (w.findings && w.findings.length)
    ? '<p class="method-label">What the data showed</p><ul class="method">'
      + w.findings.map(function(t){ return "<li>" + rich(t) + "</li>"; }).join("") + "</ul>"
    : "";

  var links = w.links.map(function(l){
    return has(l.url)
      ? '<a class="card-link" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " →</a>"
      : '<span class="card-link">' + esc(l.label) + ": " + f("", "add link") + "</span>";
  }).join("");

  return '<article class="card reveal" style="--wc:var(--p' + w.slot + ')">'
    + '<div class="card-top">'
      + '<span class="tag tag-live">' + esc(w.tag) + "</span>"
      + '<span class="tag tag-role">' + f(w.status, "status") + "</span>"
    + "</div>"
    + "<h3>" + f(w.title, "the paper's title") + "</h3>"
    + '<p class="venue">' + esc(w.domain) + " · " + f(w.venue, "journal or conference") + "</p>"
    + '<p class="summary">' + rich(w.summary) + "</p>"
    + bench
    + "<div>" + links + "</div>"
    
    + findings
    + ("contribution" in w
      ? '<div class="card-grid">'
        + '<div><p class="method-label">My contribution</p><p class="card-note">'
          + f(w.contribution, "one or two sentences — what was yours, specifically") + "</p></div>"
        + "</div>"
      : "")
    + "</article>";
}).join("");

$("minis").innerHTML = MINIS.map(function(m){
  return '<div class="hl-card reveal"><p class="hl-kicker">Project</p><h3>'
    + esc(m.title) + "</h3><p>" + esc(m.detail) + "</p></div>";
}).join("");

/* ---------------- final-year thesis ---------------- */
var thesisTitle = has(THESIS.pdf)
  ? '<a class="thesis-title-link" href="https://drive.google.com/file/d/1HNH_f_RrPr1ffM-MPnXlVKt5CVhBshIz/view?usp=sharing"' + esc(THESIS.pdf) + '" target="_blank" rel="noopener" '
    + 'title="Open the full report (PDF)">' + esc(THESIS.title)
    + '<span class="pdf-tag">Open PDF ' + "↗</span></a>"
  : esc(THESIS.title);

$("thesis-lead").innerHTML = '<h2 class="section-title" style="margin-bottom:18px">' + thesisTitle + "</h2>"
  + '<p class="thesis-meta">' + esc(THESIS.meta) + "</p>"
  + '<div class="about-lead"><p>' + rich(THESIS.lead) + "</p></div>"
  + (has(THESIS.pdf) ? "" : '<p class="thesis-meta">Full report — ' + f("", "add a link to the PDF") + "</p>");

$("thesis-facts").innerHTML = THESIS.facts.map(function(x){
  return '<div class="fact"><span class="k">' + esc(x.k) + '</span>'
    + '<span class="v">' + f(x.v, x.hint || "to fill") + "</span></div>";
}).join("");

$("thesis-findings").innerHTML ='<ul class="method reveal">' + THESIS.findings.map(function(t){
      return "<li>" + rich(t) + "</li>";
    }).join("") + "</ul>";

/* ---------------- experience ---------------- */
$("jobs").innerHTML = JOBS.map(function(j){
  return '<div class="edu reveal"><div class="when">' + esc(j.years) + "</div><div>"
    + "<h3>" + esc(j.role) + "</h3>"
    + '<p class="inst">' + esc(j.org) + "</p>"
    + '<p class="det">' + esc(j.detail) + "</p></div></div>";
}).join("");

/* ---------------- techniques ---------------- */
$("skills").innerHTML = SKILLS.map(function(s, i){
  var rows = s.items.map(function(it){
    var name = it.hint ? f("", it.hint) : esc(it.name);
    var desc = it.hint ? "" : esc(it.note || "");
    return '<div class="skill-row"><span class="name">' + name + "</span>"
      + '<span class="desc">' + desc + "</span></div>";
  }).join("");
  var num = ("0" + (i + 1)).slice(-2);
  return '<div class="skill-group reveal"><p class="grp"><span class="num">' + num + "</span>"
    + esc(s.group) + '</p><div class="skill-list">' + rows + "</div></div>";
}).join("");

$("training").innerHTML = '<div class="skill-list reveal">' + TRAINING.map(function(t){
  var desc = [t.org, t.dur].filter(has).join(" · ");
  return '<div class="skill-row"><span class="name">' + esc(t.name) + "</span>"
    + '<span class="desc">' + esc(desc) + "</span></div>";
}).join("") + "</div>";

/* ---------------- education ---------------- */
$("edu").innerHTML = EDU.map(function(e){
  var chips = (e.courses && e.courses.length)
    ? '<div class="coursework">' + e.courses.map(function(c){
        return '<span class="chip">' + esc(c) + "</span>";
      }).join("") + "</div>"
    : "";
  return '<div class="edu reveal"><div class="when">' + f(e.years, "years") + "</div><div>"
    + "<h3>" + esc(e.degree) + "</h3>"
    + '<p class="inst">' + f(e.institution, "institution") + "</p>"
    + '<p class="det">' + f(e.detail, "grade and course highlights") + "</p>"
    + chips + "</div></div>";
}).join("");

/* ---------------- contact ---------------- */
var mailSubject = "Research enquiry — " + displayName;
var mailBody = "Hello " + displayName.split(/\s+/)[0] + ",\n\n";
var meta = [];

if (has(ME.location)) meta.push("<div>" + esc(ME.location) + "</div>");
if (has(ME.phone)){
  meta.push('<div><a href="https://wa.me/' + esc(ME.phone.replace(/[^\d]/g, "")) + '" target="_blank" rel="noopener">'
    + "Phone / WhatsApp: " + esc(ME.phone) + "</a></div>");
}
[["LinkedIn", ME.linkedin], ["GitHub", ME.github], ["ORCID iD", ME.orcid]].forEach(function(p){
  if (has(p[1])) meta.push('<div><a href="' + esc(p[1]) + '" target="_blank" rel="noopener">' + p[0] + ARROW + "</a></div>");
});
meta.push(has(ME.cv)
  ? '<div><a href="' + esc(ME.cv) + '" target="_blank" rel="noopener">Academic CV (PDF) ↓</a></div>'
  : "");

var big, actions = "";
if (has(ME.email)){
  var addr = ME.email.trim();
  var mailto = "mailto:" + addr
    + "?subject=" + encodeURIComponent(mailSubject)
    + "&body=" + encodeURIComponent(mailBody);
  /* Gmail's own compose window, for anyone with no desktop mail client set up. */
  var gmail = "https://mail.google.com/mail/?view=cm&fs=1&tf=1"
    + "&to=" + encodeURIComponent(addr)
    + "&su=" + encodeURIComponent(mailSubject)
    + "&body=" + encodeURIComponent(mailBody);

  big = '<a class="contact-big" href="' + esc(mailto) + '">' + esc(addr) + "</a>";
  actions = '<div class="contact-actions">'
    + '<a class="btn btn-solid" href="' + esc(gmail) + '" target="_blank" rel="noopener">'
    + ICON.mail + "Open in Gmail</a>"
    + "</div>";
} else {
  big = '<span class="contact-big">' + f("", "your email address") + "</span>";
}

$("contact-block").innerHTML = '<div class="contact-flex"><div>' + big + actions + "</div>"
  + '<div class="contact-meta">' + meta.join("") + "</div></div>";

// $("foot").innerHTML = "© " + new Date().getFullYear() + " " + esc(displayName) + ".";

/* ---------------- theme toggle ---------------- */
var root = document.documentElement, btn = $("themeToggle");
function syncThemeLabel(){
  var dark = root.getAttribute("data-theme") === "dark";
  btn.textContent = dark ? "☀ Light" : "☾ Dark";
  btn.setAttribute("aria-pressed", dark ? "true" : "false");
}
syncThemeLabel();
btn.addEventListener("click", function(){
  var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("portfolio-theme", next); } catch(e){}
  syncThemeLabel();
});

/* ---------------- nav border on scroll ---------------- */
var nav = $("nav");
var onScroll = function(){ nav.classList.toggle("scrolled", window.scrollY > 8); };
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------------- scroll reveal ---------------- */
var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var reveals = document.querySelectorAll(".reveal");
if (reduce || !("IntersectionObserver" in window)){
  Array.prototype.forEach.call(reveals, function(el){ el.classList.add("in"); });
} else {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  Array.prototype.forEach.call(reveals, function(el){ io.observe(el); });
  Array.prototype.forEach.call(document.querySelectorAll(".hero .reveal"), function(el){ el.classList.add("in"); });
}
})();
