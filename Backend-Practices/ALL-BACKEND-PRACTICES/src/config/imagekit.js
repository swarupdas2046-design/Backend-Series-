import imagekit from 'imagekit'


const client = new imagekit({
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})


const upload = async(file,fileName)=>{
    const option = {
        file:file,
        fileName:fileName
    }
const res = await client.upload(option)
return res
}

export default upload