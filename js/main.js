const d = new Date();

var time = {
    second: {
        value: d.getSeconds(),
        record: d.getSeconds()*6,
        degree: function() {
            var result = 6 + this.record;
            this.record = result;
            return result;
        }
    },
    minuite: {
        value: d.getMinutes(),
        record: 0,
        degree: function() {
            var result = 0.1 + this.record;
            this.record = d.getMinutes()*6 + d.getSeconds();
            return result;
        }
    },
    hour: {
        value: d.getHours(),
        record: d.getHours()*30 + d.getMinutes(),
        degree: function() {
            var result = 2*360/43200 + this.record;
            this.record = result;
            return result;
        }
    }
}

const move = () => {
    if(time.second.value == 59){
        time.second.value = 0;

        if(time.minuite == 59){
            time.minuite.value = 0;

            if(time.hour == 11){
                time.hour = 0;
            }else{
                time.hour++;
            }

        }else{
            time.minuite.value++;
        }

    }else{
        time.second.value++;
    }

    updateUI();
}

const updateUI = () => {
    console.log(time.minuite.degree())
    document.getElementById('second').style.transform = 'rotate('+time.second.degree()+'deg)';
    document.getElementById('minuite').style.transform = 'rotate('+time.minuite.degree()+'deg)';
    document.getElementById('hour').style.transform = 'rotate('+time.hour.degree()+'deg)';
    document.getElementsByTagName('body')[0].style.opacity = 1;
}

setInterval(move, 1000);


const switchTheme = () => {
    document.getElementsByTagName('body')[0].classList.toggle("dark");
}