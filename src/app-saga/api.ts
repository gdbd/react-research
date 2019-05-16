export async function Api_fetchMessage (id: number) {

    return new Promise<string>((resolve, reject) => {

     setTimeout(() => {
            resolve(`there is message ${id}`)
        }, 1000);
    });  
}