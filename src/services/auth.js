export function singIn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'jsyaudyou8u3gd2h93udby2839dh2n3b',
                user: {
                    name: 'Arthur Alaete',
                    email: 'arthur@gmail.com',                   
                }
            })
        }, 2000)
    })
}