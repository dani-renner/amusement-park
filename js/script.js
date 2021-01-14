$(document).ready(function() {
  const height = parseInt(prompt("How tall are you in inches?"));

  if (height >= 66 && height <= 80) {
    $('#tall').show();
  } else if (height <= 65 && height >= 54) {
    $('#short').show();
  } else if (height <= 53 && height >= 36) {
    $('#kid').show();
  } else if (height < 36) {
    $('#baby').show();
  } else {
    $('#supertall').show();
  }
});