
        let array = []

        const makeArray = () => { 
            let input = document.getElementById('input');
            array.push(input.value);
            const outputList = document.getElementById('outputList');
            outputList.innerHTML += '<li>' + input.value + '</li>';
            input.value = '';
            
            
            // console.log('Array oppdatert:')
            // array.forEach(doc => {
            //     console.log(doc)
            // })
        }



        const changecolor = () => {
            document.body.classList.add("bg-color");
            const r = math.floor(math.random() * 255);
            const g = math.floor(math.random() * 255);
            const b = math.floor(math.random() * 255);
            document.body.style.backgroundColor = 'rgb(${r},${g},${b})'
        }
