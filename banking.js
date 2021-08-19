// Function 
// function getInput(){

// }



document.getElementById('depo_btn').addEventListener('click',function(){

    // @@@@@@@@@@ Deposit @@@@@@@ 
    // get input 
    const depo_input = document.getElementById('depo_input');
    const new_value  = parseInt(depo_input.value);
    
    // get main deposit 
    const main_depo = document.getElementById('main_depo');
    const new_depo_int = parseInt(main_depo.innerText);
     // show newUpdate deposit 
    const total_depo = new_depo_int + new_value;


    main_depo.innerText = total_depo;
    // input field zero  
    depo_input.value = '';
     
     
    // balance
    const main_balance = document.getElementById('main_balance');
    // const main_balance_value = main_balance.innerText;
    const main_balance_int = parseInt(main_balance.innerText);
    // console.log(main_balance_int);
    const total_balance = main_balance_int + new_value ;

    //  console.log(total_balance);
    main_balance.innerText = total_balance;

})



        // @@@@@@@@@@ Withdraw @@@@@@@ 
        document.getElementById('withdrew_btn').addEventListener('click',function(){
            // get valur from input 
            const main_withdrew = document.getElementById('withd_input');
            const main_withdrew_amount = parseInt(main_withdrew.value);

            // show main withdrew 
            const withdrew_value = document.getElementById('withdrew_value');
            const new_withdrew_value = parseInt(withdrew_value.innerText); 
            const total_withdrew = new_withdrew_value + main_withdrew_amount;

            withdrew_value.innerText = total_withdrew;

            main_withdrew.value = '' ;

            // main balance 
           const main_balance = document.getElementById('main_balance');
           const main_balance_text = main_balance.innerText ;

           const main_balance_amount = parseInt(main_balance_text);

           

           const final_balance = main_balance_amount - main_withdrew_amount;
           main_balance.innerText = final_balance;
            
        })
