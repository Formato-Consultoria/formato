import {
  format,
  isToday,
  isYesterday,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
} from 'date-fns';

export default function formatDateTime(data: Date): string {
  const meses = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ];

  let resultado = '';
  if (isToday(data)) {
    resultado += 'Hoje · ';
  } else if (isYesterday(data)) {
    resultado += 'Ontem · ';
  }

  resultado += `${meses[data.getMonth()]} ${data.getDate()} ·`;

  let anos_diff = differenceInYears(new Date(), data);
  let meses_diff = differenceInMonths(new Date(), data);
  let dias_diff = differenceInDays(new Date(), data);
  let horas_diff = differenceInHours(new Date(), data);
  let minutos_diff = differenceInMinutes(new Date(), data);
  let segundos_diff = differenceInSeconds(new Date(), data);

  let time = '';

  if (segundos_diff >= 1) {
    time = segundos_diff + 's';
  }

  if(minutos_diff >= 1) {
    time = minutos_diff + 'min';
  }

  if(horas_diff >= 1) {
    time = horas_diff + 'h';
  }

  if (dias_diff >= 1) {
    time = dias_diff + ' dias';
  }

  if (meses_diff >= 1) {
    time = meses_diff + ' meses';
  }

  if (anos_diff >= 1) {
    time = anos_diff + ' anos';
  }

  return `${resultado} há ${time} atrás`;
}