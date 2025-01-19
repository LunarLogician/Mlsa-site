// src/lib/utils.js

export function cn(...classes) {
    return classes.filter(Boolean).join(' '); // Filter out any falsy values (like undefined, null, or false)
  }
  