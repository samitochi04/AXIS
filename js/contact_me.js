function whatsapp () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var messsage = document.getElementById("message").value;

  console.log("POINT OF ENTRY");
  
  var url = "https://wa.me/237657419734?text="
  +"Name : "+name+"%0a"
  +"Email : "+email+"%0a"
  +"Phone : "+phone+"%0a"
  +"Message : "+message;

  window.open(url,'_blank').focus();
}

console.log(message);