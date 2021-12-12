let mDisplay = document.getElementById('mDisplay');

let mButtons = Array.from (document.getElementsByClassName('mButtons'));

mButtons.map(mButton => {
    mButton.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                mDisplay.innerText = ' ';
                break;
            case '←':
                if (mDisplay.innerText){
                    mDisplay.innerText = mDisplay.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    mDisplay.innerText = eval(mDisplay.innerText);
                } catch {
                    mDisplay.innerText = 'Error!';
                }

                break;
            default:
                mDisplay.innerText += e.target.innerText;
        }
    });
});
