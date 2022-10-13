export const format = precio =>{
    return precio?.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    })

}