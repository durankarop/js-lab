var analisis = [
    {
        nombre: 'Hemograma',
        codigo: 475,
        hem: function() {
            document.getElementById('hg').innerHTML = `'HCT:' + <input type='text'></input>
                                                       'GR:' +  <input type='text'></input>
                                                       'GB:' + <input type='text'></input>
                                                       'Hb:' +  <input type='text'></input>     
                                                       'VCM:' + <input type='text'></input>
                                                       'HCM:' +  <input type='text'></input>
                                                       'CHCM:' + <input type='text'></input>
                                                       'PLT:' +  <input type='text'></input>

                                                       '<p>Formula Leucocitaria</p>
                                                       'GR:' +  <input type='text'></input>
                                                       `


                        
        }
    }
]

function main() {
    var depth = parseInt(prompt('Ingrese profundidad'));
    var dayLength = 7;
    var nigthLength = 2;
    var days = 0;
    var distance = 0;
    for (let i = 0; i < 10; i++) {
        distance += dayLength;
        days += 1;
        if (distance >= depth) {
            break;
        }
        distance -= nigthLength;
    } 
    console.log(days);
}

main();