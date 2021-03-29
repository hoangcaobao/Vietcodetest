//define delete button
const trash=document.querySelectorAll("a.delete");

//add event for delete button
for(let i=0; i<trash.length; i++){

   
    trash[i].addEventListener("click",function(){
    
    //create a url
    const endpoint=`/delete/${trash[i].dataset.doc}`;
    
    //create api for delete method
    fetch(endpoint,{
        method:"DELETE",
    })
        .then((respone)=>respone.json())
        .then((data)=>window.location.href=data.redirect)
        .catch((err)=>console.log(err));})
}


//define edit button
const edit=document.querySelectorAll("a.edit")

//add event for edit button
for (let i=0; i<edit.length; i++){

    edit[i].addEventListener("click",function(){
        //get data from the input like Schema
        let data={
            job: document.getElementById("job").value,
            day: document.getElementById("day").value,
            time: document.getElementById("time").value                    
        };
        
        //check when some information missing
        count=0
        if (data.job==""){
            delete data.job;
            count+=1;
        };
        if (data.day==""){
            delete data.day;
            count+=1;
        };
        
        if (data.time==""){
            delete data.time;
            count+=1;
        };
        
        if (count==3){
            alert("YOU CREATE NOT THING");
        }
        //create a url
        else{
        const changepoint=`/edit/${edit[i].dataset.doc}`;
        
        // //create api for put method
        fetch(changepoint,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            
            },
            body: JSON.stringify(data), 
        })
            .then((respone)=>respone.json())
            .then((data)=>window.location.href=data.redirect)
            .catch((err)=>console.log(err));
        }
    })
}


