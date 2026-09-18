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

/* ---------------- contact ---------------- */
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
$("contact").innerHTML = C.join("");

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
