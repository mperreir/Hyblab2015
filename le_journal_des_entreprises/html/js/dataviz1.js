var hostays="https://hyblab2015-ayssti-3.c9.io";

function whichYear(year)
{
 console.log(year);
if(year === 2008)
    {
     $('.ca3').html('0')   
     $('.ca4').html('8');   
    }
    else if(year === 2009)
    {
     $('.ca3').html('0');   
     $('.ca4').html('9');   
    }
    else if(year === 2010)
    {
     $('.ca3').html('1');   
     $('.ca4').html('0');   
    }
    else if(year === 2011)
    {
     $('.ca3').html('1');   
     $('.ca4').html('1');   
    }
    else if(year === 2012)
    {
     $('.ca3').html('1');   
     $('.ca4').html('2');   
    }
    if(year === 2013)
    {
     $('.ca3').html('1');   
     $('.ca4').html('3');   
    }
}

function datasD1 (year)
{
 
    $.getJSON(hostays + '/dataviz1?annee=' + year, function(data) {
            var donnees = "";
            for(var i in data) {
                donnees += "<div>"+data[i]+"</div>";
            }
            $('#affichD1').html(
                donnees
                );      
        });
}

(function yearD1(){
    var year = 2013;
    whichYear(year);
    $('.yearplus').hide();
    
    $('.yearplus').on('click', function(e){
       year++;
       $('.yearless').show();
       whichYear(year);
            
       if(year > 2013 )
       {
           year--;
           $('.yearplus').hide();
       }
       
       datasD1(year);
    });
    
     $('.yearless').on('click', function(e){
       year--;
       $('.yearplus').show();
       whichYear(year);
        if(year < 2008 )
       {
           year++;
           $('.yearless').hide();   
       }
    });
    
    datasD1(year);
})();