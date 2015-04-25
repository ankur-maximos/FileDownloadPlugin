k = document.links
for(i = 0;i<k.length;i++) 
{
  if(k[i].text == "pdf") 
   {
     console.log(k[i].href)
   }
}
