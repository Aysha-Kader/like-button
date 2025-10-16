let liked=false;
let count=0;

function changelike(){
       let heart=document.getElementById("heart");
        let icon=document.getElementById("icon");
        let count=document.getElementById("count");
       let text=document.getElementById("text");
       liked=!liked;
       
      if(liked){
       
        heart.style.color="red";
        count.textContent++;
        text.textContent="Liked";
      }
      else{
        
        heart.style.color="white";
        count.textContent--;
        text.textContent="Like";
      }
}


