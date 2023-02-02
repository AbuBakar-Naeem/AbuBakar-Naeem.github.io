const error = document.getElementById("error");
const form = document.getElementById("form");
const bigContainer = document.getElementById("bigContainer");
const inputMain = document.getElementById("inputMain").value;


form.addEventListener('submit', function(e) {
       e.preventDefault();
       let inputMain = document.getElementById("inputMain").value;
       if(inputMain == ""){
        error.innerHTML = "Please Enter Data Above !!" + "<img src=\"thumbsDown.png\" width=\"41sdpx\" height=\"41px\">";
        error.style.color = "red";
       }
       else {
        error.innerHTML = "Looks's Good !!" + "<img src=\"thumbsUp.png\" width=\"48sdpx\" height=\"42px\">";
        error.style.color = "yellow";
        dataIn();
      }
}); 

      function dataIn() {
        let divMain = document.querySelector("#divMain");
        divMain.classList.add("myDiv")
        const inputMain = document.getElementById("inputMain").value;

        let content = document.createElement("input");
        content.classList.add("content");
        content.type = "text";
        content.value = inputMain;
        content.setAttribute("readonly","readonly")

        divMain.appendChild(content); 

        bigContainer.appendChild(divMain)

        let actionButtons = document.createElement("div");
        actionButtons.classList.add("actionButtons");

        let editButton = document.createElement("button");
        editButton.classList.add("editButton");
        editButton.innerHTML = "<img src=\"editIconn.png\" width=\"48sdpx\" height=\"48px\">";

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.innerHTML = "<img src=\"DeleteIcon.png\" width=\"41px\" height=\"50px\">";

        inputMain.value = "";

        actionButtons.appendChild(editButton);
        
        actionButtons.appendChild(deleteButton);

        divMain.appendChild(actionButtons);

        editButton.addEventListener('click', (e) => {
            if (editButton.innerHTML == "<img src=\"editIconn.png\" width=\"48sdpx\" height=\"48px\">") {
              editButton.innerHTML = "<img src=\"thumbsUp.png\" width=\"48sdpx\" height=\"48px\">";
              content.removeAttribute("readonly");
              content.focus();
            } else {
              editButton.innerHTML = "<img src=\"editIconn.png\" width=\"48sdpx\" height=\"48px\">";
              content.setAttribute("readonly", "readonly");
            }
            });

            deleteButton.addEventListener('click', () => {
            divMain.removeChild(actionButtons);
            divMain.removeChild(content);
            });
            

      const arr =[];

      if(sessionStorage.getItem('data')){
        let st = sessionStorage.getItem('data');
        let stt = st.split(",");

        arr.push(stt,inputMain);
        sessionStorage.setItem('data',arr);
      }
      else{
        arr.push(inputMain);
        sessionStorage.setItem('data',arr);        
      }  

      document.getElementById("inputMain").value = "";

      printer()
};

printer()

function printer(){
 
  let divMain = document.querySelector("#divMain")
     divMain.innerHTML = "";
     divMain.classList.add("myDiv")
        
       if(sessionStorage.getItem('data')){

        let st = sessionStorage.getItem('data');
        let stt = st.split(",");

        for( x = 0 ; x < stt.length ; x++){
           let newDiv = document.createElement("input");
           newDiv.classList.add("content");
           newDiv.type = "text"
           newDiv.value = stt[x];
           newDiv.setAttribute("readonly","readonly");
        
           let divMain = document.querySelector("#divMain");
           divMain.classList.add("myDiv")
           const inputMain = document.getElementById("inputMain").value;
   
           let content = document.createElement("input");
           content.classList.add("content");
           content.type = "text";
           content.value = stt[x];
           content.setAttribute("readonly","readonly")
   
           divMain.appendChild(content); 
   
           bigContainer.appendChild(divMain)
   
           let actionButtons = document.createElement("div");
           actionButtons.classList.add("actionButtons");
   
           let editButton = document.createElement("button");
           editButton.classList.add("editButton");
           editButton.innerHTML = "<img src=\"editIconn.png\" width=\"48sdpx\" height=\"48px\">";
   
           let deleteButton = document.createElement("button");
           deleteButton.classList.add("deleteButton");
           deleteButton.innerHTML = "<img src=\"DeleteIcon.png\" width=\"41px\" height=\"50px\">";
   
           inputMain.value = "";
   
           actionButtons.appendChild(editButton);
           
           actionButtons.appendChild(deleteButton);
   
           divMain.appendChild(actionButtons);
   
           editButton.addEventListener('click', (e) => {
               if (editButton.innerHTML == "<img src=\"editIconn.png\" width=\"48sdpx\" height=\"48px\">") {
                 editButton.innerHTML = "<img src=\"thumbsUp.png\" width=\"48sdpx\" height=\"48px\">";
                 content.removeAttribute("readonly");
                 content.focus();
               } else {
                 editButton.innerHTML = "<img src=\"editIconn.png\" width=\"48sdpx\" height=\"48px\">";
                 content.setAttribute("readonly", "readonly");
               }
               });
   
                 deleteButton.addEventListener('click', () => {
                 divMain.removeChild(actionButtons);
                 divMain.removeChild(content);
                 removeContentNow(this.innerHTML,stt);
               });
           };
      };
};



function removeContentNow(data,stt){
  
  for( let m = 0 ; m < stt.length ; m++){
    if(data == stt[m]){

      console.log(this.stt[m])
                 stt.splice(a, 1);
             }
            }
            sessionStorage.setItem('data',arr);       
}





          
    
         
         

  

