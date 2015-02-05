function whichYear(year)
{
if(year === 2008)
    {
     $('.ca3').text('0')   
     $('.ca4').text('8');   
    }
    else if(year === 2009)
    {
     $('.ca3').text('0');   
     $('.ca4').text('9');   
    }
    else if(year === 2010)
    {
     $('.ca3').text('1');   
     $('.ca4').text('0');   
    }
    else if(year === 2011)
    {
     $('.ca3').text('1');   
     $('.ca4').text('1');   
    }
    else if(year === 2012)
    {
     $('.ca3').text('1');   
     $('.ca4').text('2');   
    }
    if(year === 2013)
    {
     $('.ca3').text('1');   
     $('.ca4').text('3');   
    }
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
    
    
})();