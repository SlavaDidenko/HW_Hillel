import displayData from "../request.js";

async function init(){
    const data = await displayData();

    const amountInput = document.getElementById('amount-input');
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    const convertButton = document.getElementById('convert');
    const resultView = document.getElementById('result');
    const bankCCY = 'UAH';
    let selectOptions = [];

    function convert(amount, sale, buy, baseCcy){
        let result = Number();
        result = (amount * sale) / buy;

        if (baseCcy){
            if (baseCcy === bankCCY){
                result = amount / buy;  
            }
        }
        return result;
    }
    
    function getOption(val, select){
        let resultOption = '';
        resultOption = select.querySelector('option[value="'+val+'"');
        return resultOption;
    }

    function createSelect(arr, block){
        function generateOption(val, data){
            let option = document.createElement('option');
            option.value = val;
            option.innerHTML = val;
            option.dataset.baseCcy = data.base_ccy;
            option.dataset.buy = data.buy;
            option.dataset.sale = data.sale;
            option.dataset.value = val;  
            return option;   
        }

        let select = document.createElement('select');

        let baseOption = document.createElement('option');
        baseOption.value = bankCCY;
        baseOption.innerHTML = bankCCY;
        baseOption.dataset.baseCcy = bankCCY;
        baseOption.dataset.buy = 1;
        baseOption.dataset.sale = 1;
        baseOption.dataset.value = bankCCY;  
        select.appendChild(baseOption);

        for(let i = 0; i < arr.length; i++){
            select.appendChild(generateOption(arr[i], data[arr[i]]));
        }
        block.appendChild(select);
    }
    Object.keys(data).forEach((e) => {
        selectOptions.push(data[e].ccy);
    });
    createSelect(selectOptions, from);
    createSelect(selectOptions, to);

    change.addEventListener('click', function(){
        let fromSelect = from.querySelector('select');
        let toSelect = to.querySelector('select');

        from.appendChild(toSelect);
        to.appendChild(fromSelect);
    });

    convertButton.addEventListener('click', function(){
        let fromSelect = from.querySelector('select');
        let toSelect = to.querySelector('select');
        let fromSelectValue = fromSelect.value;
        let toSelectValue = toSelect.value;

        let fromOption = getOption(fromSelectValue, fromSelect);
        let toOption = getOption(toSelectValue, toSelect);
        let sale = fromOption.dataset.sale;
        let buy = toOption.dataset.buy;
        let fromCcy = fromOption.dataset.baseCcy;
        if (amountInput.value){
            let convertResult = '';
            if (fromSelectValue !== toSelectValue) {
                if (fromSelectValue === bankCCY) {
                    convertResult = convert(amountInput.value, sale, buy, bankCCY).toFixed(2);
                } else {
                    convertResult =  convert(amountInput.value, sale, buy).toFixed(2);
                }
            } else {
                convertResult = convert(amountInput.value, 1, 1).toFixed(2);
            }
            resultView.innerHTML = convertResult;
        }
    });

};
init();