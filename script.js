//Heart Icons 

document.getElementById('heart-icon-1').addEventListener('click',function(){
    
    let currentheartcount=parseInt(document.getElementById('Heart-count').innerText);
    currentheartcount+=1;
    document.getElementById("Heart-count").innerText=currentheartcount;
});
document.getElementById('heart-icon-2').addEventListener('click',function(){
    
    let currentheartcount=parseInt(document.getElementById('Heart-count').innerText);
    currentheartcount+=1;
    document.getElementById("Heart-count").innerText=currentheartcount;
});
document.getElementById('heart-icon-3').addEventListener('click',function(){
    
    let currentheartcount=parseInt(document.getElementById('Heart-count').innerText);
    currentheartcount+=1;
    document.getElementById("Heart-count").innerText=currentheartcount;
});
document.getElementById('heart-icon-4').addEventListener('click',function(){
    
    let currentheartcount=parseInt(document.getElementById('Heart-count').innerText);
    currentheartcount+=1;
    document.getElementById("Heart-count").innerText=currentheartcount;
});
document.getElementById('heart-icon-5').addEventListener('click',function(){
    
    let currentheartcount=parseInt(document.getElementById('Heart-count').innerText);
    currentheartcount+=1;
    document.getElementById("Heart-count").innerText=currentheartcount;
});
document.getElementById('heart-icon-6').addEventListener('click',function(){
    
    let currentheartcount=parseInt(document.getElementById('Heart-count').innerText);
    currentheartcount+=1;
    document.getElementById("Heart-count").innerText=currentheartcount;
});
document.getElementById('heart-icon-7').addEventListener('click',function(){
    
    let currentheartcount=parseInt(document.getElementById('Heart-count').innerText);
    currentheartcount+=1;
    document.getElementById("Heart-count").innerText=currentheartcount;
});
document.getElementById('heart-icon-8').addEventListener('click',function(){
    
    let currentheartcount=parseInt(document.getElementById('Heart-count').innerText);
    currentheartcount+=1;
    document.getElementById("Heart-count").innerText=currentheartcount;
});
document.getElementById('heart-icon-9').addEventListener('click',function(){
    
    let currentheartcount=parseInt(document.getElementById('Heart-count').innerText);
    currentheartcount+=1;
    document.getElementById("Heart-count").innerText=currentheartcount;
});

const callhistory=[];

//Emergency Call Button

document.getElementById('Emergency-Call').addEventListener('click',function(e){
    e.preventDefault(); 
    const currentCoinCount=parseInt(document.getElementById('Coin-Count').innerText);
    if(currentCoinCount>=20){

        const newCoinCount=currentCoinCount-20;
        document.getElementById('Coin-Count').innerText=newCoinCount;
        alert("Calling Emergency Services at 999...");
    }
    else{
        alert("Not enough coins to make the call!");
    }

    const data={
        name:"National Emergency Number",
        number:"999",
        time:new Date().toLocaleString()
    }
    callhistory.push(data);
    const callHistory=document.getElementById('Call-history');
    callHistory.innerText='';
    for(const call of callhistory){
        const div=document.createElement('div');
        div.innerHTML=`
                <div class="space-y-3 max-h-[75vh] overflow-y-auto">
                    <div class="p-3 rounded-lg bg-slate-50">
                        <p class="font-semibold">${call.name}</p>
                        <p class="text-sm text-gray-500">${call.number} • ${call.time}</p>
                    </div>
                    
                   
                </div>`
        callHistory.appendChild(div);
    }
});
//Police Call Button
document.getElementById('Police-Call').addEventListener('click',function(e){
    e.preventDefault(); 
    const currentCoinCount=parseInt(document.getElementById('Coin-Count').innerText);
    if(currentCoinCount>=20){

        const newCoinCount=currentCoinCount-20;
        document.getElementById('Coin-Count').innerText=newCoinCount;
        alert("Calling Police Helpline Number at 999...");
    }
    else{
        alert("Not enough coins to make the call!");
    }

    const data={
        name:"Police Helpline Number",
        number:"999",
        time:new Date().toLocaleString()
    }
    callhistory.push(data);
     const callHistory=document.getElementById('Call-history');
        callHistory.innerText='';
    for(const call of callhistory){
        const div=document.createElement('div');
        div.innerHTML=`
                <div class="space-y-3 max-h-[75vh] overflow-y-auto">
                    <div class="p-3 rounded-lg bg-slate-50">
                        <p class="font-semibold">${call.name}</p>
                        <p class="text-sm text-gray-500">${call.number} • ${call.time}</p>
                    </div>
                    
                   
                </div>`
        callHistory.appendChild(div);
    }
});
//Fire Call Button
document.getElementById('Fire-Call').addEventListener('click',function(e){
    e.preventDefault(); 
    const currentCoinCount=parseInt(document.getElementById('Coin-Count').innerText);
    if(currentCoinCount>=20){

        const newCoinCount=currentCoinCount-20;
        document.getElementById('Coin-Count').innerText=newCoinCount;
        alert("Calling Fire Service at 999...");
    }
    else{
        alert("Not enough coins to make the call!");
    }

    const data={
        name:"Fire Service Number",
        number:"999",
        time:new Date().toLocaleString()
    }
    callhistory.push(data);
     const callHistory=document.getElementById('Call-history');
        callHistory.innerText='';
    for(const call of callhistory){
        const div=document.createElement('div');
        div.innerHTML=`
                <div class="space-y-3 max-h-[75vh] overflow-y-auto">
                    <div class="p-3 rounded-lg bg-slate-50">
                        <p class="font-semibold">${call.name}</p>
                        <p class="text-sm text-gray-500">${call.number} • ${call.time}</p>
                    </div>
                    
                   
                </div>`
        callHistory.appendChild(div);
    }
});
// Ambulance Call Button
document.getElementById('Ambulance-Call').addEventListener('click',function(e){
    e.preventDefault(); 
    const currentCoinCount=parseInt(document.getElementById('Coin-Count').innerText);
    if(currentCoinCount>=20){

        const newCoinCount=currentCoinCount-20;
        document.getElementById('Coin-Count').innerText=newCoinCount;
        alert("Calling Ambulance Services at 1994-999999...");
    }
    else{
        alert("Not enough coins to make the call!");
    }

    const data={
        name:"Ambulance Services",
        number:"1994-999999",
        time:new Date().toLocaleString()
    }
    callhistory.push(data);
     const callHistory=document.getElementById('Call-history');
        callHistory.innerText='';
    for(const call of callhistory){
        const div=document.createElement('div');
        div.innerHTML=`
                <div class="space-y-3 max-h-[75vh] overflow-y-auto">
                    <div class="p-3 rounded-lg bg-slate-50">
                        <p class="font-semibold">${call.name}</p>
                        <p class="text-sm text-gray-500">${call.number} • ${call.time}</p>
                    </div>
                    
                   
                </div>`
        callHistory.appendChild(div);
    }
});
// Women and Child Helpline Call Button
document.getElementById('Women-Call').addEventListener('click',function(e){
    e.preventDefault(); 
    const currentCoinCount=parseInt(document.getElementById('Coin-Count').innerText);
    if(currentCoinCount>=20){

        const newCoinCount=currentCoinCount-20;
        document.getElementById('Coin-Count').innerText=newCoinCount;
        alert("Calling Women and Child Helpline at 109...");
    }
    else{
        alert("Not enough coins to make the call!");
    }

    const data={
        name:"Women and Child Helpline",
        number:"109",
        time:new Date().toLocaleString()
    }
    callhistory.push(data);
     const callHistory=document.getElementById('Call-history');
        callHistory.innerText='';
    for(const call of callhistory){
        const div=document.createElement('div');
        div.innerHTML=`
                <div class="space-y-3 max-h-[75vh] overflow-y-auto">
                    <div class="p-3 rounded-lg bg-slate-50">
                        <p class="font-semibold">${call.name}</p>
                        <p class="text-sm text-gray-500">${call.number} • ${call.time}</p>
                    </div>
                    
                   
                </div>`
        callHistory.appendChild(div);
    }
});

//Anti Corruption Helpline Call Button
document.getElementById('Corruption-Call').addEventListener('click',function(e){
    e.preventDefault(); 
    const currentCoinCount=parseInt(document.getElementById('Coin-Count').innerText);
    if(currentCoinCount>=20){

        const newCoinCount=currentCoinCount-20;
        document.getElementById('Coin-Count').innerText=newCoinCount;
        alert("Calling Anti Corruption Helpline at 106...");
    }
    else{
        alert("Not enough coins to make the call!");
    }

    const data={
        name:"Anti Corruption Helpline",
        number:"106",
        time:new Date().toLocaleString()
    }
    callhistory.push(data);
     const callHistory=document.getElementById('Call-history');
        callHistory.innerText='';
    for(const call of callhistory){
        const div=document.createElement('div');
        div.innerHTML=`
                <div class="space-y-3 max-h-[75vh] overflow-y-auto">
                    <div class="p-3 rounded-lg bg-slate-50">
                        <p class="font-semibold">${call.name}</p>
                        <p class="text-sm text-gray-500">${call.number} • ${call.time}</p>
                    </div>
                    
                   
                </div>`
        callHistory.appendChild(div);
    }
});

//Electricity Emergency Helpline Call Button
document.getElementById('Electricity-Call').addEventListener('click',function(e){
    e.preventDefault(); 
    const currentCoinCount=parseInt(document.getElementById('Coin-Count').innerText);
    if(currentCoinCount>=20){

        const newCoinCount=currentCoinCount-20;
        document.getElementById('Coin-Count').innerText=newCoinCount;
        alert("Calling Electricity Emergency Helpline at 16216...");
    }
    else{
        alert("Not enough coins to make the call!");
    }

    const data={
        name:"Electricity Emergency Helpline",
        number:"16216",
        time:new Date().toLocaleString()
    }
    callhistory.push(data);
     const callHistory=document.getElementById('Call-history');
        callHistory.innerText='';
    for(const call of callhistory){
        const div=document.createElement('div');
        div.innerHTML=`
                <div class="space-y-3 max-h-[75vh] overflow-y-auto">
                    <div class="p-3 rounded-lg bg-slate-50">
                        <p class="font-semibold">${call.name}</p>
                        <p class="text-sm text-gray-500">${call.number} • ${call.time}</p>
                    </div>
                    
                   
                </div>`
        callHistory.appendChild(div);
    }
});

//Brac Helpline
document.getElementById('Brac-Call').addEventListener('click',function(e){
    e.preventDefault(); 
    const currentCoinCount=parseInt(document.getElementById('Coin-Count').innerText);
    if(currentCoinCount>=20){

        const newCoinCount=currentCoinCount-20;
        document.getElementById('Coin-Count').innerText=newCoinCount;
        alert("Calling Brac Helpline at 16445...");
    }
    else{
        alert("Not enough coins to make the call!");
    }

    const data={
        name:"Brac Helpline",
        number:"16445",
        time:new Date().toLocaleString()
    }
    callhistory.push(data);
     const callHistory=document.getElementById('Call-history');
        callHistory.innerText='';
    for(const call of callhistory){
        const div=document.createElement('div');
        div.innerHTML=`
                <div class="space-y-3 max-h-[75vh] overflow-y-auto">
                    <div class="p-3 rounded-lg bg-slate-50">
                        <p class="font-semibold">${call.name}</p>
                        <p class="text-sm text-gray-500">${call.number} • ${call.time}</p>
                    </div>
                    
                   
                </div>`
        callHistory.appendChild(div);
    }
});

//Railway Helpline Call Button
document.getElementById('Railway-Call').addEventListener('click',function(e){
    e.preventDefault(); 
    const currentCoinCount=parseInt(document.getElementById('Coin-Count').innerText);
    if(currentCoinCount>=20){

        const newCoinCount=currentCoinCount-20;
        document.getElementById('Coin-Count').innerText=newCoinCount;
        alert("Calling Bangladesh Railway Helpline at 163...");
    }
    else{
        alert("Not enough coins to make the call!");
    }

    const data={
        name:"Bangladesh Railway Helpline",
        number:"163",
        time:new Date().toLocaleString()
    }
    callhistory.push(data);
     const callHistory=document.getElementById('Call-history');
     callHistory.innerText='';
    for(const call of callhistory){
        const div=document.createElement('div');
        div.innerHTML=`
                <div class="space-y-3 max-h-[75vh] overflow-y-auto">
                    <div class="p-3 rounded-lg bg-slate-50">
                        <p class="font-semibold">${call.name}</p>
                        <p class="text-sm text-gray-500">${call.number} • ${call.time}</p>
                    </div>                                   
                </div>`
        callHistory.appendChild(div);
    }
});
// Clear Call History Button
document.getElementById('clear-btn').addEventListener('click',function(){
    callhistory.length=0;
    const callHistory=document.getElementById('Call-history');
    callHistory.innerText='';
});

//Copy Button

let count = 0;

document.getElementById("Emergency-copy").addEventListener("click", function () {
    count++;
    document.getElementById("Copy-count").innerText = count;
    const card = this.closest(".card-body");
    const headings = card.querySelectorAll("h1");
    const number = headings[1].innerText;
    navigator.clipboard.writeText(number);   
    alert("Copied successfully!");
});

document.getElementById("Police-copy").addEventListener("click", function () {

    count++;


    document.getElementById("Copy-count").innerText = count;
    const card = this.closest(".card-body");
    const headings = card.querySelectorAll("h1");
    const number = headings[1].innerText;
    navigator.clipboard.writeText(number); 

    
    alert("Copied successfully!");
});

document.getElementById("Fire-copy").addEventListener("click", function () {

    count++;


    document.getElementById("Copy-count").innerText = count;
    const card = this.closest(".card-body");
    const headings = card.querySelectorAll("h1");
    const number = headings[1].innerText;
    navigator.clipboard.writeText(number); 

    
    alert("Copied successfully!");
});

document.getElementById("Ambulance-copy").addEventListener("click", function () {

    count++;


    document.getElementById("Copy-count").innerText = count;
    const card = this.closest(".card-body");
    const headings = card.querySelectorAll("h1");
    const number = headings[1].innerText;
    navigator.clipboard.writeText(number); 

    
    alert("Copied successfully!");
});

document.getElementById("Women-copy").addEventListener("click", function () {

    count++;


    document.getElementById("Copy-count").innerText = count;
    const card = this.closest(".card-body");
    const headings = card.querySelectorAll("h1");
    const number = headings[1].innerText;
    navigator.clipboard.writeText(number); 

    
    alert("Copied successfully!");
});

document.getElementById("Corruption-copy").addEventListener("click", function () {

    count++;


    document.getElementById("Copy-count").innerText = count;
    const card = this.closest(".card-body");
    const headings = card.querySelectorAll("h1");
    const number = headings[1].innerText;
    navigator.clipboard.writeText(number); 

    
    alert("Copied successfully!");
});

document.getElementById("Electricity-copy").addEventListener("click", function () {

    count++;


    document.getElementById("Copy-count").innerText = count;
    const card = this.closest(".card-body");
    const headings = card.querySelectorAll("h1");
    const number = headings[1].innerText;
    navigator.clipboard.writeText(number); 

    
    alert("Copied successfully!");
});
document.getElementById("Brac-copy").addEventListener("click", function () {

    count++;


    document.getElementById("Copy-count").innerText = count;
    const card = this.closest(".card-body");
    const headings = card.querySelectorAll("h1");
    const number = headings[1].innerText;
    navigator.clipboard.writeText(number); 

    
    alert("Copied successfully!");
});

document.getElementById("Railway-copy").addEventListener("click", function () {

    count++;


    document.getElementById("Copy-count").innerText = count;
    const card = this.closest(".card-body");
    const headings = card.querySelectorAll("h1");
    const number = headings[1].innerText;
    navigator.clipboard.writeText(number); 

    
    alert("Copied successfully!");
});