let response = prompt('Tell me you love me before you can view this');
console.log(response)


while (!response || response.toLowerCase() !== "i love you") {
  response = prompt('Tell me you love me before you can view this');
}
if (response.toLowerCase() == "i love you") {
  alert('Love ya too :)')
}
