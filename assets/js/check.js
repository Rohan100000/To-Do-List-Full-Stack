(function checkbox_check(){
  let checkbox_list = document.getElementsByClassName("custom-checkbox");
  for(let i = 0; i < checkbox_list.length; i++){
      if (checkbox_list[i].dataset.check == "true") {
        checkbox_list[i].checked = true;
      } else {
        checkbox_list[i].checked = false;
      }
  }
})();