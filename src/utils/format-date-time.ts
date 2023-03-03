import {
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

  let resultado = '', time = '';

  if (isToday(data)) {
    resultado += 'Hoje ‧ ';
  } else if (isYesterday(data)) {
    resultado += 'Ontem ‧ ';
  }

  resultado += `${meses[data.getMonth()]} ${data.getDate()} ‧`;

  let segundos_diff = differenceInSeconds(new Date(), data);
  if (segundos_diff >= 1) {
    time = `${segundos_diff}s`;
  }
  
  let minutos_diff = differenceInMinutes(new Date(), data);
  if(minutos_diff >= 1) {
    time = `${minutos_diff}min`;
  }
  
  let horas_diff = differenceInHours(new Date(), data);
  if(horas_diff >= 1) {
    time = `${horas_diff} ${horas_diff != 1 ? 'hrs' : 'h'}`;
  }
  
  let dias_diff = differenceInDays(new Date(), data);
  if (dias_diff >= 1) {
    time = `${dias_diff} ${dias_diff != 1 ? 'dias' : 'dia'}`;
  }
  
  let meses_diff = differenceInMonths(new Date(), data);
  if (meses_diff >= 1) {
    time = `${meses_diff} ${meses_diff != 1 ? 'meses' : 'mês'}`;
  }
  
  let anos_diff = differenceInYears(new Date(), data);
  if (anos_diff >= 1) {
    time = `${anos_diff} ${anos_diff != 1 ? 'anos' : 'ano'}`;
  }

  return `${resultado} há ${time} atrás`;
}