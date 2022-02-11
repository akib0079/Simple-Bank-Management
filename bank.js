// bank page page js

document.getElementById('depositBtn').addEventListener('click', function(){
    const depositField = document.getElementById('depositField');
    const depositFieldValue = Math.abs(depositField.value);
    const depositBalance = document.getElementById('depositBalance');
    
    const convertedPreviousDepoValue = parseInt(depositBalance.innerText);
    const convertedDepoFieldValue = parseInt(depositFieldValue);

    const totalDeposit = convertedPreviousDepoValue + convertedDepoFieldValue;

    depositBalance.innerText = totalDeposit;

    const totalBalance = document.getElementById('totalBalance');

    let convertedTotalBalance = parseInt(totalBalance.innerText);

    let newTotalBalance = convertedTotalBalance + depositFieldValue;

    totalBalance.innerText = newTotalBalance;

    depositField.value = '';
    
})


document.getElementById('withdrawBtn').addEventListener('click', function(){

    // get the input field & converting the input field to number.
    const withdrawField = document.getElementById('WithdrawField');
    const withdrawFieldText = Math.abs(withdrawField.value);
    const withdrawAmount = parseInt(withdrawFieldText);

    // get the tag's innerText & convert it to number.
    const withdrawTag = document.getElementById('withdrawBalance');
    const withdrawText = withdrawTag.innerText;
    const withdrawStatus = parseInt(withdrawText);

    // add the input amount & tag's innerText together.
    const totalWithdraw = withdrawAmount + withdrawStatus;

    // Update tag's innerText with totalWithdraw.
    withdrawTag.innerText = totalWithdraw;

    // Get the balance tag's InnerText & convert it to number.
    const balanceTag = document.getElementById('totalBalance');
    const balanceText = balanceTag.innerText;
    const balanceStatus = parseInt(balanceText);

    // get the current balance.
    const currentBalance = balanceStatus - withdrawAmount;

    // replace the innerText with current balance.
    balanceTag.innerText = currentBalance;

    
    // Empty the value.
    withdrawField.value = '';
    
})






