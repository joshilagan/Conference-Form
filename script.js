const form = document.querySelector('form');
const creditz = document.querySelector('#creditz');
const express = document.querySelector('#express');

//Create a form event listener to the form
const conference =[];
function onSubmit(e){
    e.preventDefault();
 
    //Turn the form into new FormData to capture all fields
    //Use entries method to loop thru all the name attribute to get the input values
    const forming = new FormData(form);
    const entries = forming.entries();

    //Using for of loop, loop thru the names one by one and push the names and values inside the array
    for(let item of entries){        
        conference.push({[item[0]]:item[1]});
    }
    console.log(conference);
    alert('Registration Complete, Please check your email for confirmation');
}
form.addEventListener('submit', onSubmit);


//Create an event listener for the express button
function thisFocus(){
    const creditInfo = document.querySelector('.credit-info');
    creditInfo.innerHTML = '';
    express.checked = true;
}
express.addEventListener('focus', thisFocus);

//Create an event listener for the credit radio button which will pops up the credit card input boxes when the credit radio button is clicked
function onFocus(){
    const creditInfo = document.querySelector('.credit-info');
    creditInfo.innerHTML = `<p class="font-medium">Credit Card</p>
    <div class="card-subcontainer ml-20">
        <input id="cFname" type="text"  class="mt-3 h-9 w-64 pl-2 border-solid border-slate-400 rounded-md"  name="cFName" placeholder="First Name">
        <input id="cMname" type="text"  class="sm:mt-3 lg:my-0 h-9 w-28 pl-1 border-solid border-slate-400 rounded-md"  name="cMInitial" placeholder="Middle Initial">
        <input id="cLname" type="text"  class="mt-3 h-9 w-64 pl-2 border-solid border-slate-400 rounded-md" name="cLName" placeholder="Last Name">
    </div>
    <div class="card-subcontainer ml-20">
        <input id="cNumber" type="text"  class="mt-3 h-9 w-64 pl-2 border-solid border-slate-400 rounded-md"  name="creditCardNumber" placeholder="Credit Card Number">
        <input id="sCode" type="text"  class="sm:mt-3 lg:mt-3 h-9 w-64 pl-2 border-solid border-slate-400 rounded-md"  name="securityCode" placeholder="Security Code">
    </div>    
    <div class="card-subcontainer ml-20">
        <input id="exp-month" type="text" class="mt-3 h-9 w-64 pl-2 border-solid border-slate-400 rounded-md" name="expMonth"  placeholder="Expiration Month">
        <input id="exp-yr" type="text" class="mt-3 h-9 w-64 pl-2 border-solid border-slate-400 rounded-md"  name="expYear" placeholder="Expiration Year">
    </div>
    <p class="font-medium">Billing Address</p>
    <div class="billing-address mb-10">
        <div class="billing-subcontainer ml-20">
            <input id="bhouse-num" type="text" class="mt-3  h-9 w-64 pl-2 border-solid border-slate-400 rounded-md" name="bhouseLotBlk"  placeholder="House Number/Block#/Lot#">
            <input id="bstreet" type="text" class="mt-3 h-9 w-64 pl-2 border-solid border-slate-400 rounded-md"  name="bstreet" placeholder="Street">
        </div>
        <div class="billing-subcontainer ml-20">
            <input id="bsubdivision" type="text" class="mt-3  h-9 w-64 pl-2 border-solid border-slate-400 rounded-md"  name="bsubdivision" placeholder="Subdivision/Village">
            <input id="bcity" type="text" class="mt-3 h-9 w-64 pl-2 border-solid border-slate-400 rounded-md"  name="bcity" placeholder="City">
        </div>
        <div class="billing-subcontainer mb-3 ml-20">
            <input id="bprovince" type="text" class="mt-3  h-9 w-64 pl-2 border-solid border-slate-400 rounded-md" name="bprovince" placeholder="State/Province">
            <input id="bcountry" type="text" class="mt-3 h-9 w-64 pl-2 border-solid border-slate-400 rounded-md" name="bcountry" placeholder="Country">
        </div>
        <input id="bzipcode" type="text" class="ml-20 h-9 w-64 pl-2 border-solid border-slate-400 rounded-md"  name="bzipcode" placeholder="Zipcode">
    </div>`
}
creditz.addEventListener('focus', onFocus);

//Create an event listener for the checkbox so that only one checkbox can be selected
const member = document.querySelector('#member');
const nonmember = document.querySelector('#nonmember');

member.addEventListener('click', () => {
    if(member.checked){
        nonmember.checked = false;
    }
})

nonmember.addEventListener('click', () => {
    if(nonmember.checked){
        member.checked = false;
    }
})
