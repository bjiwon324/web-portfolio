export function timeAgo(time: string | number): string {
  const toDay: Date = new Date();
  const targetDate: Date = new Date(time);

  const diff: number = toDay.getTime() - targetDate.getTime();
  const seconds: number = Math.floor(diff / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);
  const months: number = Math.floor(days / 30);
  const years: number = Math.floor(months / 12);

  if (days >= 1) {
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, "0");
    const date = String(targetDate.getDate()).padStart(2, "0");
    const hours = String(targetDate.getHours()).padStart(2, "0");
    const minutes = String(targetDate.getMinutes()).padStart(2, "0");
    return `${year}.${month}.${date} ${hours}:${minutes}`;
  }

  if (seconds < 60) {
    return "1분 전";
  } else if (minutes < 60) {
    return `${minutes}분 전`;
  } else {
    return `${hours}시간 전`;
  }
}
