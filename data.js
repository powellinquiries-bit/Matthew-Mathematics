/* Shared data for ALL pages (English and Afrikaans). Edit it here once.
   Upload this file together with the rest of the site. */

/* ------------------------------------------------------------------
   LOGINS. add-client.html prints the line to paste here. Passwords are stored hashed.
   NOTE: "demo" is a test account (password demo1234). Delete that line before publishing.
------------------------------------------------------------------ */
var ACCOUNTS = {
  "demo": "7b11eed5c273f2597834a2106bd4f354d4526e5a1245669e0771634f5d0ca17b"
};

/* ------------------------------------------------------------------
   CLIENT PROFILES. add-client.html prints the line to paste here.
     photo: optional, e.g. "resources/photos/jane.jpg". Leave "" to show initials.
   The sample below matches the "demo" test login.
------------------------------------------------------------------ */
var CLIENTS = {
  "demo": { name: "Demo Learner", school: "Sample High School", grade: 10, photo: "" }
};

/* ------------------------------------------------------------------
   RESOURCES. Add one line per item to the list below. Empty for now.
     category: "dashboard"  (past papers come from papers.js, built with build-papers.html)
     grade:    8, 9, 10, 11 or 12
     topic:    short label, e.g. "Algebra"
     type:     "file" for something you uploaded, or "link" for a web link / video
     url:      for files, the path inside the resources folder, e.g. "resources/grade10-algebra.pdf"
               for links, the full web address
     Optional Afrikaans versions (the Afrikaans page falls back to English if left out):
               title_af, desc_af, topic_af
   Example:
     { category: "dashboard", grade: 10, topic: "Algebra", topic_af: "Algebra", type: "file", title: "Algebra homework 1", title_af: "Algebra-huiswerk 1", desc: "Short description.", desc_af: "Kort beskrywing.", url: "resources/grade10-algebra.pdf" }
------------------------------------------------------------------ */
var RESOURCES = [
];
