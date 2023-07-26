let result=''

for(let i=0;i<8;i++)
{
    for(let j=0;j<8;j++)
    {
        if((i+j)%2 ==0){
           result = result + ' ' //in both odd or even positions we should put space
        }
        else{
            result = result + '#' //in one odd or even positions we should put #
        }   
    }
    result= result + '\n'
}
console.log(result)