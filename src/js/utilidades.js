const qs = (v) => document.querySelector(v);
const qsA = (v) => document.querySelectorAll(v);

qs("form").addEventListener("submit", (e) => e.preventDefault());

export const importModule = {qs, qsA}