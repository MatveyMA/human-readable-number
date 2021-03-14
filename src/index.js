module.exports = function toReadable (number) {
  let hundreds,dozens,units;
  let units_array = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  let uniq_dozens_array= ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let dozens_array=['',[uniq_dozens_array],'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let hundreds_array=['','one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
  let str = String(number);
  let splited = str.split("");
  let len = splited.length;
  if(len==1)
  {
      splited.unshift('0','0');
  }
  if(len==2)
  {
      splited.unshift('0');
  }
  hundreds = Number(splited[0]);
  dozens = Number(splited[1]);
  units = Number(splited[2]);
  if(hundreds == 0 && dozens == 0)
  {
    result = units_array[units];
  }
  if(hundreds==0)
  {
      if(dozens==1)
      result=uniq_dozens_array[units];
      else if(dozens!==1 && units!==0 && dozens!==0)
      result = dozens_array[dozens]+' '+units_array[units];
      else if(dozens!==1 && units==0 && dozens!==0)
      result = dozens_array[dozens];
  }
  if (dozens==0 && units==0 && hundreds!==0)
  {
      result = hundreds_array[hundreds];
  }
  if(hundreds!==0)
  {
      if(dozens == 0 && units>0)
      result = hundreds_array[hundreds]+' '+units_array[units];
      else if(dozens == 0 && units == 0)
      result = hundreds_array[hundreds];
      else if(dozens==1)
      result = hundreds_array[hundreds]+' '+uniq_dozens_array[units];
      else if(dozens!==1 && units==0 && dozens!==0)
      result = hundreds_array[hundreds]+' '+dozens_array[dozens];
      else if(dozens!==1 && units!==0 && dozens!==0)
      result = hundreds_array[hundreds]+' '+dozens_array[dozens]+' '+units_array[units];

  }
  
  return String(result);
}
