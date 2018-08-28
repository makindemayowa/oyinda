let response = prompt('Tell me you love me before you can view this');

while (response.toLowerCase() !== "i love you") {
  response = prompt('Tell me you love me before you can view this');
}

if (response.toLowerCase() == "i love you") {
  alert('Love ya too :)')
}

