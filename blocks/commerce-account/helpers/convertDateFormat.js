function convertDateFormat(inputDate) {
  const dateObj = new Date(inputDate);

  // Format as "DD.MM.YYYY" (e.g., 31.01.2020)
  return dateObj.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export default convertDateFormat;
