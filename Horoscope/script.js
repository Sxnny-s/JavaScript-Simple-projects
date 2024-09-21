let birthDate = document.getElementById('birthDate');
let result = document.getElementsByClassName('result')[0];


function checkDate(e){
    // Looked up how to stop the form from submitting. When it submits my result will disappear 
    e.preventDefault();                                
    let date = birthDate.value
    let yearMonthDay = date.split('-')
    let month = yearMonthDay[1]
    let day = yearMonthDay[2]

    function zodiac(month,day){

        if(month == '01' && day >= 20  || month == "02" && day <= 18){
            result.innerText = "Aquarius"
        }else if (month == '02' && day >= 19  || month == '03' && day <= 20){
            result.innerText = "Pisces"
        }else if(month == '03' && day >= 21 || month == '04' && day <= 19 ){
            result.innerText = "Aries"
        }else if (month == '04' && day >= 20 || month == '05' && day <= 20){
            result.innerText = "Taurus"
        }else if (month == '05' && day >= 21 || month == '06' && day <= 20){
            result.innerText = "Gemini"
        }else if (month == '06' && day >= 21 || month == '07' && day <= 22){
            result.innerText = "Cancer"
        }else if (month == '07' && day >= 23 || month == '08' && day <= 22){
            result.innerText = "Leo"
        }else if (month == '08' && day >= 23 || month == '09' && day <= 22){
            result.innerText = "Virgo"
        }else if(month == '09' && day >= 23 || month == '10' && day <= 22){
            result.innerText = "Libra"
        }else if(month == '10' && day >= 23 || month == '11' && day <= 21){
            result.innerHTML = "Scorpio"
        }else if(month == '11' && day >= 22 || month == '12' && day <= 21){
            result.innerHTML = "Sagittarius"
        }else {
            result.innerHTML = "Capricorn"
        }
    }
    zodiac(month,day)
}

// Aquarius (January 20 – February 18) done
// Pisces (February 19 – March 20) done
// Aries (March 21 – April 19) done
// Taurus (April 20 – May 20) done
// Gemini (May 21 – June 20) done
// Cancer (June 21 – July 22) done
// Leo (July 23 – August 22) done
// Virgo (August 23 – September 22) done
// Libra (September 23 – October 22) done
// Scorpio (October 23 – November 21) done
// Sagittarius (November 22 – December 21)done
// Capricorn (December 22 – January 19)Finished 
