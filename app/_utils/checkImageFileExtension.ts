export default function checkFileExtension(file:File) { 
  if (file) {
    const validExtensions = ['.jpg', '.jpeg', '.png']
    const fileExtension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    if (!validExtensions.includes(fileExtension)) {
      alert('지원하는 파일 형식은 .jpg, .jpeg, .png 입니다.');
      return;
    }
  }
}