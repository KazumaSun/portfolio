export function formatDateToJapanTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Asia/Tokyo'
  };

  return new Intl.DateTimeFormat('ja-JP', options).format(date);
}