/* =====================================================================
   Rendering. You should not need to touch this file — the content lives
   in data.js (ME, WORKS, MINIS, JOBS, SKILLS, TRAINING, EDU), which is
   loaded before this one.
   ===================================================================== */
(function(){
"use strict";
var $ = function(id){ return document.getElementById(id); };
var blanks = 0;
var esc = function(s){
  return String(s).replace(/[&<>"']/g, function(c){
    return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c];
  });
};
var f = function(v, hint){
  if (v !== undefined && v !== null && String(v).trim() !== "") return esc(v);
  blanks++;
  return '<span class="tofill">' + esc(hint) + '</span>';
};
var has = function(v){ return v !== undefined && v !== null && String(v).trim() !== ""; };

/* ---------------- identity ---------------- */
var displayName = has(ME.name) ? ME.name : "Your name";
var initials = has(ME.initials) ? ME.initials
  : (has(ME.name) ? ME.name.split(/\s+/).map(function(w){ return w.charAt(0); }).join("").slice(0,2).toUpperCase() : "—");

$("nav-name").innerHTML = f(ME.name, "your name");
$("hero-name").innerHTML = f(ME.name, "your name");
$("hero-role").innerHTML = esc(ME.role);
$("hero-status").innerHTML = f(ME.status, "your status line");
$("loc").innerHTML = f(ME.location, "city, country");
document.title = has(ME.name) ? ME.name + " — Research Portfolio" : "Three Papers, One Bench";

var acts = [];
acts.push(has(ME.cv)
  ? '<a class="btn pri" href="' + esc(ME.cv) + '" target="_blank" rel="noopener">Download CV</a>'
  : '<span class="btn pri" style="opacity:.55">Download CV — ' + f("", "add CV link") + '</span>');
acts.push(has(ME.email)
  ? '<a class="btn" href="mailto:' + esc(ME.email) + '">Email me</a>'
  : '<span class="btn" style="opacity:.55">Email — ' + f("", "add address") + '</span>');
if (has(ME.github)) acts.push('<a class="btn" href="' + esc(ME.github) + '" target="_blank" rel="noopener">GitHub</a>');
if (has(ME.orcid)) acts.push('<a class="btn" href="' + esc(ME.orcid) + '" target="_blank" rel="noopener">ORCID</a>');
$("hero-acts").innerHTML = acts.join("");
if (has(ME.cv)) $("nav-cv").href = ME.cv;

$("portrait").innerHTML = has(ME.photo)
  ? '<img src="' + esc(ME.photo) + '" alt="' + esc(displayName) + '">'
  : '<span class="ini">' + esc(initials) + '</span><span class="cap">add a photo</span>';
if (!has(ME.photo)) blanks++;

/* ---------------- research ---------------- */
$("works").innerHTML = WORKS.map(function(w){
  var meta = '<span class="wnum">' + esc(w.num) + " · " + esc(w.tag) + "</span>"
    + '<span style="font-size:12.5px;color:var(--muted)">' + f(w.status, "status") + " · " + f(w.venue, "journal or conference") + "</span>"
    + '<span class="wdom">' + esc(w.domain) + "</span>";

  var methods = w.methods.map(function(m){
    return "<li>" + (typeof m === "string" ? esc(m) : f("", m.hint)) + "</li>";
  }).join("");

  var bench = w.bench ? '<div class="bench">' + w.bench.map(function(b){
      return "<div><b>" + f(b.v, b.hint) + "</b><span>" + esc(b.l) + "</span></div>";
    }).join("") + "</div>" : "";

  var links = '<div class="wlinks">' + w.links.map(function(l){
    return has(l.url)
      ? '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " ↗</a>"
      : "<span>" + f("", "link to " + l.label.toLowerCase()) + "</span>";
  }).join("") + "</div>";

  return '<article class="work" style="--wc:var(--p' + w.slot + ')">'
    + '<div class="wtop">' + meta + "</div>"
    + "<h3>" + f(w.title, "the paper's title") + "</h3>"
    + '<p class="wsum">' + esc(w.summary) + "</p>"
    + bench
    + '<div class="wgrid">'
      + "<div><h4>Methods</h4><ul>" + methods + "</ul></div>"
      + "<div><h4>My contribution</h4><p>" + f(w.contribution, "one or two sentences — what was yours, specifically") + "</p></div>"
      + "<div><h4>Why it fits a physics application</h4><p>" + esc(w.why) + "</p></div>"
    + "</div>" + links + "</article>";
}).join("");

$("minis").innerHTML = MINIS.map(function(m){
  return '<div class="mini"><b>' + esc(m.title) + "</b><p>" + esc(m.detail) + "</p></div>";
}).join("");

/* ---------------- experience ---------------- */
$("jobs").innerHTML = JOBS.map(function(j){
  return '<div class="ed"><div class="yr">' + esc(j.years) + "</div><div>"
    + '<p class="deg">' + esc(j.role) + "</p>"
    + '<p class="inst">' + esc(j.org) + "</p>"
    + '<p class="det">' + esc(j.detail) + "</p></div></div>";
}).join("");

/* ---------------- techniques ---------------- */
$("skills").innerHTML = SKILLS.map(function(s){
  var items = s.items.map(function(it){
    if (it.hint) return "<li>" + f("", it.hint) + "</li>";
    return "<li><b>" + esc(it.name) + "</b>" + (has(it.note) ? "<span>" + esc(it.note) + "</span>" : "") + "</li>";
  }).join("");
  return '<div class="skill"><h4>' + esc(s.group) + "</h4><ul>" + items + "</ul></div>";
}).join("");

$("training").innerHTML = TRAINING.map(function(t){
  return '<div class="tr"><b>' + esc(t.name) + "</b>"
    + (has(t.org) ? "<span>" + esc(t.org) + "</span>" : "")
    + '<span class="dur">' + esc(t.dur) + "</span></div>";
}).join("");

/* ---------------- education ---------------- */
$("edu").innerHTML = EDU.map(function(e){
  return '<div class="ed"><div class="yr">' + f(e.years, "years") + "</div><div>"
    + '<p class="deg">' + esc(e.degree) + "</p>"
    + '<p class="inst">' + f(e.institution, "institution") + "</p>"
    + '<p class="det">' + f(e.detail, "grade and course highlights") + "</p></div></div>";
}).join("");

/* ---------------- contact me ---------------- */
var ICONS = {
  github: '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0zM7.12 20.45H3.55V9h3.57v11.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28z"/></svg>',
  orcid: '<svg viewBox="0 0 256 256" aria-hidden="true" focusable="false"><path fill="currentColor" d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"/><g fill="var(--card)"><path d="M86.3 186.2H70.9V79.1h15.4v107.1z"/><path d="M108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7 0-21.5-13.7-39.7-43.7-39.7h-23.7v79.4z"/><path d="M88.7 56.8a10.1 10.1 0 1 1-20.2 0 10.1 10.1 0 0 1 20.2 0z"/></g></svg>'
};

/* Profile links. Each renders only if its URL is filled in above in data.js. */
var SOCIAL = [
  { net: "github",   label: "",   url: ME.github},
  { net: "linkedin", label: "", url: ME.linkedin},
  { net: "orcid",    label: "", url: ME.orcid}
].filter(function(x){ return has(x.url); });
function socialRow() {
  if (!SOCIAL.length) return "";

  return '<div class="cta-social">' + SOCIAL.map(function(x) {
    return '<a class="soc" data-net="' + x.net + '" href="' + esc(x.url) + '" ' +
      'target="_blank" rel="noopener" aria-label="' + x.net + '">' +
      '<span class="soc-i">' + ICONS[x.net] + '</span>' +
      '</a>';
  }).join("") + '</div>';
}
// function socialRow(){
//   if (!SOCIAL.length) return "";
//   return '<div class="cta-social">' + SOCIAL.map(function(x){
//     var shown = x.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
//     return '<a class="soc" data-net="' + x.net + '" href="' + esc(x.url) + '"'
//       + ' target="_blank" rel="noopener" title="' + esc(shown) + '">'
//       + '<span class="soc-i">' + ICONS[x.net] + '</span>'
//       + '<span class="soc-t"><b>' + esc(x.label) + '</b><span>' + esc(x.note) + '</span></span>'
//       + '<span class="soc-go" aria-hidden="true">↗</span></a>';
//   }).join("") + "</div>";
// }

var mailSubject = "Research enquiry — " + displayName;
var mailBody = "Hello " + displayName.split(/\s+/)[0] + ",\n\n";

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

  $("cta").innerHTML =
      '<div class="cta-card">'
    +   '<p class="cta-k">Contact me</p>'
    +   "<h3>Write to me directly &mdash; I answer every enquiry myself.</h3>"
    +   '<a class="cta-mail" href="' + esc(mailto) + '">' + esc(addr) + "</a>"
    +   '<div class="cta-acts">'
    +     '<a class="btn pri" href="' + esc(mailto) + '">Email me</a>'
    +     '<a class="btn" href="' + esc(gmail) + '" target="_blank" rel="noopener">Open in Gmail</a>'
    +     '<button class="btn cta-copy" type="button" data-mail="' + esc(addr) + '">Copy address</button>'
    +   "</div>"
    +   socialRow()
    +   '<p class="cta-note">' + esc(has(ME.location) ? ME.location : "Nepal")
    +     " &middot; UTC+5:45 &middot; transcripts, full CV, referee details and any paper on request.</p>"
    + "</div>";

  var copyBtn = $("cta").querySelector(".cta-copy");
  copyBtn.addEventListener("click", function(){
    var self = this, text = self.getAttribute("data-mail");
    var done = function(ok){
      self.textContent = ok ? "Copied" : "Copy failed";
      self.classList.toggle("is-done", ok);
      setTimeout(function(){
        self.textContent = "Copy address";
        self.classList.remove("is-done");
      }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){ done(true); }, function(){ done(false); });
      return;
    }
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", "");
    ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch(e){}
    document.body.removeChild(ta);
    done(ok);
  });
} else {
  $("cta").innerHTML =
      '<div class="cta-card">'
    +   '<p class="cta-k">Contact me</p>'
    +   "<h3>Write to me directly.</h3>"
    +   '<span class="cta-mail is-blank">' + f("", "your email address") + "</span>"
    +   socialRow()
    + "</div>";
}

var C = [];
C.push(has(ME.email)
  ? '<a href="mailto:' + esc(ME.email) + '"><span class="k">Email</span><span class="v">' + esc(ME.email) + "</span></a>"
  : '<span class="cv"><span class="k">Email</span><span class="v">' + f("", "your address") + "</span></span>");
C.push(has(ME.phone)
  ? '<a href="tel:' + esc(ME.phone.replace(/[^\d+]/g, "")) + '"><span class="k">Phone &amp; WhatsApp</span><span class="v">' + esc(ME.phone) + "</span></a>"
  : '<span class="cv"><span class="k">Phone &amp; WhatsApp</span><span class="v">' + f("", "your number") + "</span></span>");
[["LinkedIn", ME.linkedin], ["GitHub", ME.github], ["ORCID", ME.orcid], ["CV", ME.cv]].forEach(function(p){
  C.push(has(p[1])
    ? '<a href="' + esc(p[1]) + '" target="_blank" rel="noopener"><span class="k">' + p[0] + '</span><span class="v">' + esc(p[1].replace(/^https?:\/\//, "")) + "</span></a>"
    : '<span class="cv"><span class="k">' + p[0] + '</span><span class="v">' + f("", "add link") + "</span></span>");
});
C.push('<span class="cv"><span class="k">References</span><span class="v">Two academic referees available on request.</span></span>');
$("contact-grid").innerHTML = C.join("");

$("foot").innerHTML = "© " + new Date().getFullYear() + " " + f(ME.name, "your name")
  + ". Built as a single page — no tracking, no analytics, nothing loaded from anywhere you did not ask for.";

/* ---------------- draft banner ---------------- */
if (blanks > 0){ $("draftn").textContent = blanks; $("draft").hidden = false; }

/* ---------------- theme toggle ---------------- */
var root = document.documentElement, btn = $("theme");
function currentlyDark(){
  var stamp = root.getAttribute("data-theme");
  if (stamp) return stamp === "dark";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function paintBtn(){
  var d = currentlyDark();
  btn.textContent = d ? "Light" : "Dark";
  btn.setAttribute("aria-pressed", d ? "true" : "false");
}
try {
  var saved = localStorage.getItem("portfolio-theme");
  if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
} catch(e){}
paintBtn();
btn.addEventListener("click", function(){
  var next = currentlyDark() ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("portfolio-theme", next); } catch(e){}
  paintBtn();
});
if (window.matchMedia){
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  if (mq.addEventListener) mq.addEventListener("change", paintBtn);
}
})();
