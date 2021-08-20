// Function 
function getInput(inputField){
    const depo_input = document.getElementById(inputField);
    const new_value  = parseInt(depo_input.value);
    depo_input.value = '';

    return new_value;
}

// get & show  main deposit & widtdrew balance
function updateTotalField(input_field,total_field){
    const main_depo = document.getElementById(input_field);
    const new_depo_int = parseInt(main_depo.innerText);
    const total_depo = new_depo_int + total_field;
    main_depo.innerText = total_depo;
}

// Update Total Balance 
function UpdateTotalBalance(total_ammount,isAdd){
    const main_balance = document.getElementById('main_balance');  
    const main_balance_int = parseInt(main_balance.innerText);
    if(isAdd == true){
        const total_balance = main_balance_int + total_ammount ;
        main_balance.innerText = total_balance;
    }
    else{
        const total_balance = main_balance_int - total_ammount ;
        main_balance.innerText = total_balance;
    }
}
    



document.getElementById('depo_btn').addEventListener('click',function(){

    // @@@@@@@@@@ Deposit @@@@@@@ 
    // get input 
    const new_value =  getInput('depo_input'); 
    if(new_value > 0 ){
        // get main deposit 
        updateTotalField('main_depo', new_value);  
        // Totalbalance
        UpdateTotalBalance(new_value,true);
    }

})



        // @@@@@@@@@@ Withdraw @@@@@@@ 
      document.getElementById('withdrew_btn').addEventListener('click',function(){
            // get valur from input 
            const main_withdrew_amount = getInput('withd_input');
            // show main withdrew 
            updateTotalField('withdrew_value', main_withdrew_amount);
            // total Balance
            UpdateTotalBalance(main_withdrew_amount,false);
            
        })
