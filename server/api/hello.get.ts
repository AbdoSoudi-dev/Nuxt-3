export default defineEventHandler(async (event) => {
    let counter = 100;
    await new Promise((resolve) =>{
        setTimeout(() => {
            resolve(counter++);
        },3000);
    });
    event.headers.append('user','123');

    return {
        "data" : `hello from server ${counter}`,
        event
    };
})