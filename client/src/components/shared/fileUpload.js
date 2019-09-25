module.exports = (onUploadDone, maxFiles) => {
  const client = filestack.init("AAeuIzhyIShu0tJqzPFhuz");

  let options = {
    maxFiles,
    accept: ["image/jpeg", "image/jpg", "image/png", "image/bmp", "image/gif"],
    storeTo: {
      container: "devportal-customers-assets",
      path: "user-uploads/",
      region: "us-east-1"
    },
    fromSources: ["local_file_system"],
    uploadInBackground: false,
    onUploadDone: ({ filesUploaded, filesFailed }) => {
      onUploadDone(filesUploaded.map(file => file.url));
    }
  };

  picker = client.picker(options);
  picker.open();
};
