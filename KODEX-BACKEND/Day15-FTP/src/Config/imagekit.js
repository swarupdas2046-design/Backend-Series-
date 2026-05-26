import imagekit from "imagekit";

const StorageInstance = new imagekit({
  urlEndpoint: "https://ik.imagekit.io/swarup2046",
  privateKey: "private_bbOYPthtG7Pp8vONp++C8bWEqlA=",
  publicKey: "public_Yr6k5LTCpnulmiaK2zl0IcWOOdo=",
});

const Upload_files = async (file, filename) => {
  const option = {
    file,
    fileName: filename,
  };
  return await StorageInstance.upload(option);
};

export default Upload_files;
