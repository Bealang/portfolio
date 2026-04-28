function copy(copytext, notif) {
    navigator.clipboard.writeText(copytext);
    alert(notif + ': ' + copytext);
  }