export const getCurrentDateTime = () => {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0"); // Ngày
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Tháng
  const year = currentDate.getFullYear(); // Năm

  const hours = String(currentDate.getHours()).padStart(2, "0"); // Giờ
  const minutes = String(currentDate.getMinutes()).padStart(2, "0"); // Phút
  const seconds = String(currentDate.getSeconds()).padStart(2, "0"); // Giây

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
