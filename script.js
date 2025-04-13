const educationMenu = document.querySelectorAll(".education-section-menu-btn");
const educationMenuData = document.querySelectorAll(".education-section-elements");

educationMenu[0].style.backgroundColor = " rgba(245, 240, 240, 0.3)";
for(var i=1;i<educationMenu.length;i++){
    educationMenuData[i].style.display="none";
}
educationMenu.forEach((data,index)=>{

   data.addEventListener("click",()=>{
    
     educationMenuData[index].style.display = "flex";
     educationMenu[index].style.backgroundColor = " rgba(245, 240, 240, 0.3)";
    
     for(var i=0;i<educationMenu.length;i++){
        if(i==index){
            continue;
        }
        else{
            educationMenuData[i].style.display="none";
            educationMenu[i].style.backgroundColor="#24272C";
        }

     }
   });
});

   
const projectSectionMenu = document.querySelectorAll(".project-section-menu");
const projectSectionMenuBarBtn= document.querySelectorAll(".project-menu-bar-btn");

projectSectionMenuBarBtn[0].style.backgroundColor = " rgba(245, 240, 240, 0.3)";
for(var i=1;i<projectSectionMenu.length;i++){
    projectSectionMenu[i].style.display="none";
}
projectSectionMenuBarBtn.forEach((data,index)=>{

   data.addEventListener("click",()=>{
    
    projectSectionMenu[index].style.display = "flex";
     projectSectionMenuBarBtn[index].style.backgroundColor = " rgba(245, 240, 240, 0.3)";
    
     for(var i=0;i< projectSectionMenu.length;i++){
        if(i==index){
            continue;
        }
        else{
            projectSectionMenu[i].style.display="none";
            projectSectionMenuBarBtn[i].style.backgroundColor="#24272C";
        }

     }
   });
});

const projectSectionElements = document.querySelectorAll(".project-section-elements");
const projectSectionMenuBtn = document.querySelectorAll(".project-section-menu-btn");
console.log(projectSectionElements.length);

projectSectionMenuBtn[0].style.backgroundColor = "# rgba(245, 240, 240, 0.3)";
for(var i=1;i<projectSectionElements.length;i++){
    projectSectionElements[i].style.display="none";
}
projectSectionMenuBtn.forEach((data,index)=>{

   data.addEventListener("click",()=>{
    
    projectSectionElements[index].style.display = "flex";
    projectSectionMenuBtn[index].style.backgroundColor = " rgba(245, 240, 240, 0.3)";
    
     for(var i=0;i< projectSectionElements.length;i++){
        if(i==index){
            continue;
        }
        else{
            projectSectionElements[i].style.display="none";
            projectSectionMenuBtn[i].style.backgroundColor="#24272C";
        }

     }
   });
});

