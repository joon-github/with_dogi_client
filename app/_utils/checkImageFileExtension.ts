export default async function processImage(file: File | null): Promise<File | null> {
  if (!file) return null;

  const validExtensions = ['.jpg', '.jpeg', '.png'];
  const fileExtension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
  
  if (!validExtensions.includes(fileExtension)) {
    alert('지원하는 파일 형식은 .jpg, .jpeg, .png 입니다.');
    return null;
  }

  const maxSize = 1024; // 원하는 최대 이미지 크기 (가로 또는 세로의 최대 픽셀 수)

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // 이미지 비율 유지를 위해 크기 조정
      if (img.width > maxSize || img.height > maxSize) {
        if (img.width > img.height) {
          canvas.width = maxSize;
          canvas.height = (img.height / img.width) * maxSize;
        } else {
          canvas.height = maxSize;
          canvas.width = (img.width / img.height) * maxSize;
        }
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
          if (blob) {
            const newFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now()
            });
            resolve(newFile);
          } else {
            reject(new Error('이미지 처리 중 오류가 발생했습니다.'));
          }
        }, 'image/jpeg', 0.85); // JPEG 형식으로 품질 조정
      }
    };
    img.onerror = () => reject(new Error('이미지 로딩 실패'));
    img.src = URL.createObjectURL(file);
  });
}
